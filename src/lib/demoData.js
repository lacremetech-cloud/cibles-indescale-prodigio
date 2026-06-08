// Données de DÉMO (mode sans clés). Volontairement fictives et signalées (source: 'démo'),
// pour montrer l'UI sans jamais faire passer de fausses données pour du réel.
// En production, ces lignes viennent de Google Places + API Recherche d'entreprises + connecteur B2B.

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

export const DEMO_PRODIGIO = [
  // ── PRODIGIO : Agences de luxe ─────────────────────────────────────────────
  {
    id: id(), app: 'prodigio', prodigio_type: 'agence_luxe', ville: 'Montpellier', zone: 'Hérault',
    entreprise: '[DÉMO] Prestige Immobilier Montpellier', adresse: '1 place de la Comédie, 34000 Montpellier',
    telephone: '04 00 00 00 10', portable_dirigeant: '06 00 00 00 10',
    site_web: 'https://prestige-mtp-demo.fr', email: 'contact@prestige-mtp-demo.fr',
    email_dirigeant: 'dirigeant@prestige-mtp-demo.fr', dirigeant_principal: 'Claire Démo',
    linkedin_dirigeant: '', note_priorite: 'Haute', statut: 'Contacté – en attente', source: 'démo',
    data: { specialisation_percue: 'Villas vue mer', reseau_franchise: 'Indépendant', echantillon_mandats_1m_plus: '3 mandats > 1 M€' }
  },
  {
    // Email volontairement suspect (domaine ≠ site web) pour montrer l'alerte.
    id: id(), app: 'prodigio', prodigio_type: 'agence_luxe', ville: 'Aix-en-Provence', zone: 'Bouches-du-Rhône',
    entreprise: '[DÉMO] Riviera Luxury Estate', adresse: '10 cours Mirabeau, 13100 Aix-en-Provence',
    telephone: '04 00 00 00 11', portable_dirigeant: '',
    site_web: 'https://riviera-luxury-demo.fr', email: 'jean@autre-agence-demo.com',
    email_dirigeant: 'jean@autre-agence-demo.com', dirigeant_principal: 'Marc Exemple',
    linkedin_dirigeant: '', note_priorite: 'Moyenne', statut: 'À contacter', source: 'démo',
    data: { specialisation_percue: 'Appartements de prestige', reseau_franchise: 'Réseau X' }
  },
  // ── PRODIGIO : Marchands de biens ──────────────────────────────────────────
  {
    id: id(), app: 'prodigio', prodigio_type: 'marchand_biens', ville: 'Marseille', zone: 'Bouches-du-Rhône',
    entreprise: '[DÉMO] Sud Patrimoine Investissement', adresse: '20 rue Paradis, 13001 Marseille',
    telephone: '04 00 00 00 20', portable_dirigeant: '06 00 00 00 20',
    site_web: 'https://sud-patrimoine-demo.fr', email: 'contact@sud-patrimoine-demo.fr',
    email_dirigeant: '', dirigeant_principal: 'Inès Démo', linkedin_dirigeant: '',
    siren: '900000020', forme_juridique: 'SAS', note_priorite: 'Haute',
    statut: 'En négociation', source: 'démo',
    data: { specialisation_percue: 'Immeubles de rapport', operations_recentes_1m_plus: '2 opérations 2025' }
  }
]

function todayPlus(days) {
  const d = new Date(); d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export function seedProspects() {
  // Copie profonde pour que le store démo soit mutable sans toucher la source.
  return [...DEMO_PROSPECTS, ...DEMO_PRODIGIO].map(p => ({
    qualification: '', date_relance: null, ne_plus_contacter: false, data: {}, ...p
  }))
}
