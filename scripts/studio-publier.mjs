// Publie un livrable dans l'onglet Studio, met à jour une demande ou un secteur, ou liste la file.
//   node scripts/studio-publier.mjs file
//   node scripts/studio-publier.mjs livrable --secteur X --etape 1 --type audit --titre "Audit du secteur" --fichier ~/QG/studio/secteurs/X/codes-secteur.md
//   node scripts/studio-publier.mjs livrable --secteur X --etape 2 --type template --titre "Direction A" --url https://... --image https://...
//   node scripts/studio-publier.mjs job --id <uuid> --statut en_cours|termine|erreur --resultat "..."
//   node scripts/studio-publier.mjs secteur --secteur X --etape 2
import fs from 'fs'
import { sb } from './studio-lib.mjs'

const [cmd, ...rest] = process.argv.slice(2)
const a = {}; for (let i = 0; i < rest.length; i += 2) a[rest[i].replace(/^--/, '')] = rest[i + 1]
const ok = ({ error }) => { if (error) { console.error(error.message); process.exit(1) } }

if (cmd === 'file') {
  const { data, error } = await sb.from('studio_jobs').select('id,secteur_id,type,params,statut,created_at').in('statut', ['en_attente', 'en_cours']).order('created_at')
  if (error) { console.error(error.message); process.exit(1) }
  console.log(JSON.stringify(data, null, 2))
} else if (cmd === 'livrable') {
  const contenu = a.fichier ? fs.readFileSync(a.fichier.replace(/^~/, process.env.HOME), 'utf8') : a.contenu
  ok(await sb.from('studio_livrables').insert({ secteur_id: a.secteur, etape: +a.etape, type: a.type, titre: a.titre, contenu, url: a.url, image_url: a.image }))
  console.log('ok')
} else if (cmd === 'job') {
  const p = { statut: a.statut }; if (a.resultat) p.resultat = a.resultat
  if (a.statut === 'en_cours') p.started_at = new Date().toISOString()
  if (a.statut === 'termine' || a.statut === 'erreur') p.finished_at = new Date().toISOString()
  ok(await sb.from('studio_jobs').update(p).eq('id', a.id)); console.log('ok')
} else if (cmd === 'secteur') {
  ok(await sb.from('studio_secteurs').update({ etape: +a.etape }).eq('id', a.secteur)); console.log('ok')
} else { console.error('Commande inconnue'); process.exit(1) }
