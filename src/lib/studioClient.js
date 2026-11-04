// Accès aux données du Studio (schéma indescale, Supabase obligatoire).
import { supabase } from './supabaseClient'

export const ETAPES = [
  { n: 0, titre: 'Choisir le secteur', job: null, desc: 'Ticket moyen, part de sites faibles, peu démarché, métier visuel.' },
  { n: 1, titre: 'Audit du secteur', job: 'audit', bouton: "Lancer l'audit", desc: 'Codes du secteur, attentes des clients, réglementation, sites de référence, angle du message.' },
  { n: 2, titre: 'Templates', job: 'templates', bouton: 'Créer les 3 templates', desc: '3 directions de site + le questionnaire de données.', validation: true },
  { n: 3, titre: 'Collecte', job: 'lot', bouton: 'Lancer un lot', desc: 'Note du site actuel, contenu, contacts, 2 insights par prospect.' },
  { n: 4, titre: 'Génération', job: null, desc: 'Le template validé rempli avec le brief de chaque prospect.' },
  { n: 5, titre: 'Contrôle', job: null, desc: 'Rien d’inventé, règles du secteur, captures avant/après. Bloquant.' },
  { n: 6, titre: 'Diffusion', job: 'diffusion', bouton: 'Préparer la diffusion', desc: 'Lien privé, vidéo, email + WhatsApp prêts.', validation: true },
  { n: 7, titre: 'Closing & bilan', job: 'bilan', bouton: 'Faire le bilan', desc: 'Relances, devis, ce qu’on améliore.' },
]

const chk = ({ data, error }) => { if (error) throw error; return data }

export const listSecteurs = async () => chk(await supabase.from('studio_secteurs').select('*').order('created_at'))
export const getSecteur = async id => chk(await supabase.from('studio_secteurs').select('*').eq('id', id).single())
export const updateSecteur = async (id, patch) => chk(await supabase.from('studio_secteurs').update(patch).eq('id', id).select().single())
export const listJobs = async id => chk(await supabase.from('studio_jobs').select('*').eq('secteur_id', id).order('created_at', { ascending: false }))
export const createJob = async (secteur_id, type, params = {}) => chk(await supabase.from('studio_jobs').insert({ secteur_id, type, params }).select().single())
export const listLivrables = async id => chk(await supabase.from('studio_livrables').select('*').eq('secteur_id', id).order('created_at', { ascending: false }))
export const listSites = async secteur => chk(await supabase.from('studio_sites').select('*, prospects(entreprise, ville, dirigeant_principal, telephone, email, site_web)').eq('secteur', secteur).order('nb_vues', { ascending: false }))
export const updateSite = async (id, patch) => chk(await supabase.from('studio_sites').update(patch).eq('id', id).select().single())
export const createSecteur = async row => chk(await supabase.from('studio_secteurs').insert(row).select().single())
