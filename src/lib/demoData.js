// Données de DÉMO (mode sans clés) pour INDESCALE — volontairement fictives et signalées
// (source: 'démo'), pour montrer l'UI sans jamais faire passer de fausses données pour du réel.
// En production, ces lignes viennent de Google Places + API Recherche d'entreprises + connecteur B2B.
// PRODIGIO, lui, n'est PAS de la démo : ce sont les 71 prospects RÉELS du fichier maître
// (voir src/lib/prodigioData.js), affichés tels quels.

import { PRODIGIO_PROSPECTS } from './prodigioData'

let _id = 0
const id = () => 'demo-' + (++_id)

export const DEMO_PROSPECTS = [
  // ── INDESCALE : Piscines × Montpellier ─────────────────────────────────────
  {
    id: id(), app: 'indescale', secteur_id: 'habitat-exterieur', categorie: 'Piscines',
    ville: 'Montpellier', entreprise: '[DÉMO] Piscines du Lez',
    adresse: "12 av. de la Mer, 34000 Montpellier", telephone: '04 00 00 00 01',
    portable_dirigeant: '06 00 00 00 01', site_web: 'https://piscines-du-lez-demo.fr',
    email: 'contact@piscines-du-lez-demo.fr', email_dirigeant: '', dirigeant_principal: 'Jean Démo',
    linkedin_dirigeant: '', siren: '900000001', forme_juridique: 'SAS', note_avis: 4.7,
    note_priorite: 'Haute', statut: 'À contacter', source: 'démo'
  },
  {
    id: id(), app: 'indescale', secteur_id: 'habitat-exterieur', categorie: 'Piscines',
    ville: 'Montpellier', entreprise: '[DÉMO] Aqua Sud Construction',
    adresse: "5 rue des Pins, 34070 Montpellier", telephone: '04 00 00 00 02',
    portable_dirigeant: '', site_web: 'https://aquasud-demo.fr',
    email: '', email_dirigeant: '', dirigeant_principal: 'Sophie Exemple',
    linkedin_dirigeant: '', siren: '900000002', forme_juridique: 'SARL', note_avis: 4.2,
    note_priorite: 'Moyenne', statut: 'À rappeler', date_relance: todayPlus(0), source: 'démo'
  },
  {
    id: id(), app: 'indescale', secteur_id: 'habitat-exterieur', categorie: 'Piscines',
    ville: 'Montpellier', entreprise: '[DÉMO] Bleu Piscine Méditerranée',
    adresse: "88 route de Palavas, 34000 Montpellier", telephone: '04 00 00 00 03',
    portable_dirigeant: '06 00 00 00 03', site_web: '',
    email: '', email_dirigeant: '', dirigeant_principal: 'Karim Test',
    linkedin_dirigeant: '', siren: '900000003', forme_juridique: 'EURL', note_avis: 4.9,
    note_priorite: 'Haute', statut: 'RDV pris', source: 'démo'
  }
]

function todayPlus(days) {
  const d = new Date(); d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export function seedProspects() {
  // INDESCALE = démo fictive ; PRODIGIO = vraies données du fichier maître.
  // Copie profonde pour que le store mémoire soit mutable sans toucher la source.
  return [...DEMO_PROSPECTS, ...PRODIGIO_PROSPECTS].map(p => ({
    qualification: '', date_relance: null, ne_plus_contacter: false, data: {}, ...p
  }))
}
