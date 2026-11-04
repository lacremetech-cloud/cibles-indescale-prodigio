// Import unique des prospects embarqués dans le code vers Supabase (schéma indescale).
// Usage : renseigner .env.local (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY), puis
//   npx -y esbuild@0.24.0 scripts/import-seed.mjs --bundle --platform=node --format=esm --outfile=/tmp/import.mjs && node /tmp/import.mjs
// Sans risque de doublon : s'arrête si la table contient déjà des prospects.
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
  for (const c of COLS) if (r[c] !== undefined && r[c] !== '') o[c] = r[c]
  for (const k of Object.keys(r)) if (!COLS.includes(k) && !['id','data','created_at','updated_at','date_relance','ne_plus_contacter'].includes(k)) o.data[k] = r[k]
  if (typeof o.note_avis !== 'number') delete o.note_avis
  if (!o.app) o.app = 'indescale'
  return o
})
// Dédoublonnage local (même app + catégorie + ville + entreprise).
const vus = new Set(); const uniques = rows.filter(r => { const k = [r.app, r.categorie, r.ville, (r.entreprise || '').toLowerCase()].join('|'); if (vus.has(k)) return false; vus.add(k); return true })

const { count, error: e0 } = await sb.from('prospects').select('id', { count: 'exact', head: true })
if (e0) { console.error('Connexion impossible :', e0.message); process.exit(1) }
if (count > 0) { console.log(`Déjà ${count} prospects en base : import annulé.`); process.exit(0) }

for (let i = 0; i < uniques.length; i += 200) {
  const { error } = await sb.from('prospects').insert(uniques.slice(i, i + 200))
  if (error) { console.error(`Erreur au lot ${i}:`, error.message); process.exit(1) }
  console.log(`${Math.min(i + 200, uniques.length)} / ${uniques.length}`)
}
console.log('✅ Import terminé.')
