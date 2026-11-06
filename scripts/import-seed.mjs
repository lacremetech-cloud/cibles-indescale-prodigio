// Import unique des prospects embarqués dans le code vers Supabase (schéma indescale).
// Usage : renseigner .env.local (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY), puis
//   npx -y esbuild@0.24.0 scripts/import-seed.mjs --bundle --platform=node --format=esm --outfile=/tmp/import.mjs && node /tmp/import.mjs
// Sans risque de doublon : relançable, saute ce qui est déjà en base.
import fs from 'fs'
import { createClient } from '@supabase/supabase-js'
import { seedProspects } from '../src/lib/demoData.js'

const env = Object.fromEntries(fs.readFileSync('.env.local', 'utf8').split('\n')
  .filter(l => l.includes('=') && !l.trim().startsWith('#'))
  .map(l => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()]))
const sb = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { db: { schema: 'indescale' }, auth: { persistSession: false } })

const COLS = ['app','prodigio_type','secteur_id','categorie','ville','zone','entreprise','adresse','telephone','portable_dirigeant','site_web','email','email_dirigeant','dirigeant_principal','linkedin_dirigeant','siren','siret','forme_juridique','note_avis','place_id','note_priorite','statut','qualification','source']
const rows = seedProspects().filter(r => r.source !== 'démo').map(r => {
  const o = { data: { ...(r.data || {}) } }
  for (const c of COLS) if (r[c] !== undefined && r[c] !== null && r[c] !== '') o[c] = r[c]
  for (const k of Object.keys(r)) if (!COLS.includes(k) && !['id','data','created_at','updated_at','date_relance','ne_plus_contacter'].includes(k)) o.data[k] = r[k]
  if (typeof o.note_avis !== 'number') delete o.note_avis
  if (!o.app) o.app = 'indescale'
  if (!o.statut) o.statut = 'À contacter'
  return o
})
// Dédoublonnage local (même app + catégorie + ville + entreprise).
const vus = new Set(); const uniques = rows.filter(r => { const k = [r.app, r.categorie, r.ville, (r.entreprise || '').toLowerCase()].join('|'); if (vus.has(k)) return false; vus.add(k); return true })

// Reprise possible : on saute les prospects déjà présents (même clé).
const existants = new Set()
for (let from = 0; ; from += 1000) {
  const { data, error } = await sb.from('prospects').select('app,categorie,ville,entreprise').range(from, from + 999)
  if (error) { console.error('Connexion impossible :', error.message); process.exit(1) }
  data.forEach(r => existants.add([r.app, r.categorie, r.ville, (r.entreprise || '').toLowerCase()].join('|')))
  if (data.length < 1000) break
}
const aImporter = uniques.filter(r => !existants.has([r.app, r.categorie, r.ville, (r.entreprise || '').toLowerCase()].join('|')))
console.log(`${existants.size} déjà en base, ${aImporter.length} à importer.`)
for (let i = 0; i < aImporter.length; i += 200) {
  const { error } = await sb.from('prospects').insert(aImporter.slice(i, i + 200), { defaultToNull: false })
  if (error) { console.error(`Erreur au lot ${i}:`, error.message); process.exit(1) }
  console.log(`${Math.min(i + 200, aImporter.length)} / ${aImporter.length}`)
}
console.log('✅ Import terminé.')
