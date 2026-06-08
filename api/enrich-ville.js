// Fonction serverless Vercel — enrichissement d'une catégorie × ville.
// Déclenchée UNIQUEMENT par le bouton « Rafraîchir cette ville » (jamais à l'ouverture).
// Chaîne : Google Places (New) → API Recherche d'entreprises (dirigeant, gratuit) → connecteur B2B (option).
// Les clés API restent ICI (serveur), jamais exposées au navigateur.

import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { secteurId, categorie, ville, requete_scraping } = req.body || {}
  if (!categorie || !ville) return res.status(400).json({ error: 'categorie et ville requis' })

  const PLACES_KEY = process.env.GOOGLE_PLACES_API_KEY
  const SB_URL = process.env.SUPABASE_URL
  const SB_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!PLACES_KEY || !SB_URL || !SB_KEY) {
    return res.status(503).json({ error: 'Configuration manquante (GOOGLE_PLACES_API_KEY / SUPABASE_*).' })
  }
  const supabase = createClient(SB_URL, SB_KEY)
  const query = `${requete_scraping || categorie} ${ville}`

  try {
    // 1) Google Places Text Search (New) — 1 appel = jusqu'à 20 entreprises, champs via FieldMask.
    const places = await placesTextSearch(query, PLACES_KEY)

    // 2) Enrichissement dirigeant (gratuit) + connecteur B2B (option), pour chaque entreprise.
    const prospects = []
    for (const place of places) {
      const dir = await rechercheEntreprise(place.displayName?.text, ville)
      const base = {
        app: 'indescale', secteur_id: secteurId || null, categorie, ville,
        entreprise: place.displayName?.text || '',
        adresse: place.formattedAddress || '',
        telephone: place.nationalPhoneNumber || '',
        site_web: place.websiteUri || '',
        note_avis: place.rating ?? null,
        place_id: place.id || null,
        dirigeant_principal: dir?.dirigeant || '',
        siren: dir?.siren || null,
        siret: dir?.siret || null,
        forme_juridique: dir?.forme_juridique || null,
        portable_dirigeant: '', email: '', email_dirigeant: '', linkedin_dirigeant: '',
        source: 'google_places' + (dir ? '+recherche_entreprises' : '')
      }
      // 3) Contact du dirigeant — stack le moins cher :
      //    Pappers (option, données enrichies) → email du site officiel (gratuit) → connecteur B2B (option).
      const contact = await enrichContact(base)
      Object.assign(base, contact)
      prospects.push(base)
    }

    // 4) Upsert (cache) — dédup sur (app, categorie, ville, place_id).
    let inserted = 0
    if (prospects.length) {
      const { data, error } = await supabase
        .from('prospects')
        .upsert(prospects, { onConflict: 'app,categorie,ville,place_id', ignoreDuplicates: false })
        .select('id')
      if (error) throw error
      inserted = data?.length || 0
    }

    await supabase.from('enrichment_runs').insert({
      app: 'indescale', secteur_id: secteurId || null, categorie, ville,
      last_refreshed_at: new Date().toISOString(), nb_results: inserted, status: 'ok'
    })

    return res.status(200).json({ inserted, query })
  } catch (e) {
    console.error('enrich-ville error', e)
    try {
      const supabase = createClient(SB_URL, SB_KEY)
      await supabase.from('enrichment_runs').insert({
        app: 'indescale', secteur_id: secteurId || null, categorie, ville,
        status: 'error', nb_results: 0
      })
    } catch {}
    return res.status(500).json({ error: e.message })
  }
}

// ── Google Places API (New) — Text Search avec pagination (jusqu'à 60 résultats) ──
async function placesTextSearch(textQuery, key, maxPages = 3) {
  const out = []
  let pageToken = null
  for (let i = 0; i < maxPages; i++) {
    const body = { textQuery, languageCode: 'fr', regionCode: 'FR', pageSize: 20 }
    if (pageToken) body.pageToken = pageToken
    const r = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': key,
        // FieldMask = on ne paie que ce qu'on demande. Tél + site + avis = champs Enterprise.
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating,nextPageToken'
      },
      body: JSON.stringify(body)
    })
    if (!r.ok) throw new Error('Places ' + r.status + ' ' + (await r.text()).slice(0, 200))
    const j = await r.json()
    out.push(...(j.places || []))
    pageToken = j.nextPageToken
    if (!pageToken) break
    await sleep(2000) // le token de page suivante n'est valide qu'après un court délai
  }
  return out
}

// ── API Recherche d'entreprises (gouv) — dirigeant + SIREN, GRATUIT, 7 req/s ──
async function rechercheEntreprise(nom, ville) {
  if (!nom) return null
  await sleep(160) // throttle < 7 req/s
  const url = 'https://recherche-entreprises.api.gouv.fr/search?q='
    + encodeURIComponent(`${nom} ${ville}`) + '&page=1&per_page=1'
  const r = await fetch(url)
  if (!r.ok) return null
  const j = await r.json()
  const e = j.results?.[0]
  if (!e) return null
  const d = e.dirigeants?.[0]
  const dirigeant = d
    ? [d.prenoms, d.nom].filter(Boolean).join(' ').trim() || d.denomination || ''
    : ''
  return {
    dirigeant,
    siren: e.siren || null,
    siret: e.siege?.siret || null,
    forme_juridique: e.nature_juridique || null
  }
}

// ── Pipeline contact : du moins cher au plus cher. JAMAIS d'invention (brief §11). ──
async function enrichContact(p) {
  const patch = {}
  let src = []

  // a) Pappers (option) — données dirigeant enrichies + email/tél si publiés. 100 crédits gratuits.
  if (process.env.PAPPERS_API_KEY && p.siren) {
    const pap = await enrichPappers(p.siren)
    if (pap) {
      if (!p.dirigeant_principal && pap.dirigeant) patch.dirigeant_principal = pap.dirigeant
      if (pap.email) patch.email_dirigeant = pap.email
      if (pap.telephone && !p.telephone) patch.telephone = pap.telephone
      src.push('pappers')
    }
  }

  // b) Email du site officiel (GRATUIT) — page d'accueil / contact / mentions légales.
  if (!patch.email_dirigeant && !p.email && p.site_web) {
    const mail = await scrapeWebsiteEmail(p.site_web)
    if (mail) { patch.email = mail; src.push('site_officiel') }
  }

  // c) Connecteur B2B payant (OPTION) — uniquement le portable direct, que les sources gratuites
  //    ne donnent pas. Activé seulement si une clé est présente.
  const provider = process.env.B2B_CONNECTOR
  if (provider === 'kaspr' && process.env.KASPR_API_KEY) {
    // TODO (avec ta clé Kaspr) : portable direct du décideur → patch.portable_dirigeant.
  } else if (provider === 'dropcontact' && process.env.DROPCONTACT_API_KEY) {
    // TODO (avec ta clé Dropcontact) : email pro vérifié → patch.email_dirigeant.
  }

  if (src.length) patch.source = p.source + '+' + src.join('+')
  return patch
}

// Pappers v2 — fiche entreprise par SIREN (dirigeant, et email/tél s'ils sont publiés).
async function enrichPappers(siren) {
  try {
    const url = `https://api.pappers.fr/v2/entreprise?api_token=${process.env.PAPPERS_API_KEY}&siren=${siren}`
    const r = await fetch(url)
    if (!r.ok) return null
    const j = await r.json()
    const d = j.representants?.[0] || j.dirigeants?.[0]
    return {
      dirigeant: d ? [d.prenom, d.nom].filter(Boolean).join(' ').trim() || d.nom_complet || '' : '',
      email: j.email || '',
      telephone: j.telephone || ''
    }
  } catch { return null }
}

// Extraction d'un email depuis le site officiel — best-effort, jamais inventé.
async function scrapeWebsiteEmail(siteWeb) {
  const base = siteWeb.startsWith('http') ? siteWeb : 'https://' + siteWeb
  const pages = [base, base.replace(/\/$/, '') + '/contact', base.replace(/\/$/, '') + '/mentions-legales']
  for (const url of pages) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(6000), redirect: 'follow' })
      if (!r.ok) continue
      const html = await r.text()
      const found = (html.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) || [])
        .map(e => e.toLowerCase())
        .filter(e => !/(\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg)$/.test(e))
        .filter(e => !/(noreply|no-reply|sentry|wixpress|example|@2x)/.test(e))
      if (found.length) return found[0]
    } catch { /* page absente / timeout : on continue */ }
  }
  return ''
}

const sleep = ms => new Promise(r => setTimeout(r, ms))
