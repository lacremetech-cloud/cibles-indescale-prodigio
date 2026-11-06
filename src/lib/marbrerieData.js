// Cibles RÉELLES « Marbrerie / pierre naturelle / sols nobles » (INDESCALE).
// Secteur maison-finitions. Tickets 30k-200k€/chantier, public propriétaires villa / promoteurs
// ultra-luxe / architectes d'intérieur. Marché ultra-niche : marbreries dépendent presque
// exclusivement de prescription archi/déco — opportunité = capter particuliers fortunés direct
// via Meta Ads + Pinterest (saving rooms inspirations luxe).
// EXCLUS : carrières, low-cost (Castorama/Lapeyre), pure poseurs sans atelier marbrerie,
// importateurs sans présence physique FR, marbreries 100% funéraire.

let _mb = 0
const mbid = () => 'marb-' + (++_mb)

export const MARBRERIE_PROSPECTS = [
  // ── Grandes marbreries nationales / réseaux (10 cibles) ──
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Les Marbreries de la Seine', adresse: '33 rue de Verneuil, 75007 Paris',
    telephone: '+33 1 48 48 10 00', portable_dirigeant: '', site_web: 'https://www.lesmarbreriesdelaseine.com',
    email: 'contact@lesmarbreriesdelaseine.com', email_dirigeant: '',
    dirigeant_principal: 'Jean Pascal Morvidoni (Dirigeant historique) — Marbre, granit, pierre / 600 références',
    linkedin_dirigeant: '',
    siren: '451654263', forme_juridique: 'SA', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + Pappers + Signatures Singulières',
    data: {
      specialites: 'Marbre, onyx, quartzite, granit, pierre — taillage haute précision pour palaces',
      actes_phares: 'Ritz Paris, Crillon, Cartier, Maison Cartier, restaurations château, plateaux table, salles de bain monumentales, sols villa',
      ticket_moyen: '50k-300k€ chantier prestige hôtel/villa',
      prescripteurs: "Architectes d'intérieur stars (Pierre Yovanovitch, Joseph Dirand), grandes maisons (Cartier, hôtels palaces)",
      signaux_stagnation: 'Showroom uniquement sur RDV, communication discrète (luxe), zéro acquisition Meta/Pinterest visible, dépendance 100% prescripteurs. Pinterest = réservoir énorme pour pièces signature villa'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Artefacts Paris', adresse: '17 passage Jean Nicot, 75007 Paris (Showroom) + Nérac (Atelier)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.artefacts-paris.com',
    email: 'contact@artefacts-paris.com', email_dirigeant: '',
    dirigeant_principal: "Jean-Baptiste Chavance (Président) — Marbrerie d'excellence pour design haut de gamme",
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + Signatures Singulières',
    data: {
      specialites: 'Pierre de taille fine, marbres rares, projets archi intérieur HDG',
      actes_phares: "20 ans d'accompagnement architectes d'intérieur, bureaux d'études techniques, projets de prestige",
      ticket_moyen: '40k-200k€ par chantier',
      prescripteurs: "Architectes d'intérieur, bureaux d'études techniques",
      signaux_stagnation: '2 sites (Showroom Paris + Atelier Nérac) = capacité importante mais 100% B2B prescripteurs, opportunité = Meta Ads particuliers CSP+++ 7e/8e/16e'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Versailles', entreprise: 'MDY - Marbrerie des Yvelines', adresse: '6 Place du 8 Mai 1945, 78000 Versailles',
    telephone: '+33 1 39 50 27 04', portable_dirigeant: '', site_web: 'https://www.mdy-france.com',
    email: 'contact@mdy-france.com', email_dirigeant: '',
    dirigeant_principal: 'Famille Ledrans (3 générations) — Karine Ledrans, Jeannine Ledrans, Gérard Ledrans + MY HOLDING',
    linkedin_dirigeant: '',
    siren: '775708415', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + societe.com + site officiel',
    data: {
      specialites: 'Marbre, granit, pierre naturelle, technologie numérique haute précision',
      actes_phares: 'Escaliers monumentaux, plans de travail villa, cuisines sur-mesure, dallages château, vasques de salle de bain',
      ticket_moyen: '20k-120k€ chantier villa Yvelines/Normandie',
      prescripteurs: 'Architectes Versailles, décorateurs, particuliers ultra-CSP+',
      signaux_stagnation: 'Famille 3e génération depuis 1968 = succession à anticiper, site fonctionnel mais peu inspirant, zéro Pinterest. Cible : femmes 40-65 résidences secondaires Normandie / Yvelines'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Livron-sur-Drôme', entreprise: 'Marbrerie Ravit', adresse: '19 Rue de Bompard, 26250 Livron-sur-Drôme',
    telephone: '+33 4 75 61 70 02', portable_dirigeant: '', site_web: 'https://marbrerie-ravit.com',
    email: 'contact@marbrerie-ravit.com', email_dirigeant: '',
    dirigeant_principal: 'Georges Jacques Marie Ravit (Président) — 9e génération depuis 1836',
    linkedin_dirigeant: '',
    siren: '437180060', forme_juridique: 'SARL', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + annuaire-entreprises + site officiel',
    data: {
      specialites: 'Marbre, granit, pierre naturelle, restauration patrimoine, sur-mesure exception',
      actes_phares: 'Restaurations églises, cheminées sur-mesure, sols villa, escaliers, projets patrimoine privé',
      ticket_moyen: '30k-150k€ chantier patrimoine ou villa',
      prescripteurs: 'Architectes patrimoine, Bâtiments de France, décorateurs HDG, châtelains',
      signaux_stagnation: 'Label EPV (Entreprise du Patrimoine Vivant) = atout inexploité, 9 générations = trust massif mais zéro story-telling moderne. Opportunité ÉNORME : capter villas Drôme provençale + Luberon'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'La Garde', entreprise: 'Marbrerie Frediani', adresse: '264 Montée Du Thouar, 83130 La Garde',
    telephone: '+33 4 94 75 78 55', portable_dirigeant: '', site_web: 'https://marbrerie-frediani.com',
    email: 'contact@ffrediani.fr', email_dirigeant: 'marbre.frediani@yahoo.fr',
    dirigeant_principal: "Emmanuel Frediani + Famille Frediani (4 générations) — Architecte d'intérieur intégré",
    linkedin_dirigeant: '',
    siren: '349415588', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + site officiel + Pages Jaunes',
    data: {
      specialites: 'Marbre, granit, quartz, quartzite — créations sur-mesure villa, salle de bain, cuisine',
      actes_phares: "Cuisines sur-mesure villas Côte d'Azur, salles de bain marbre, plans de travail, terrasses pierre",
      ticket_moyen: '15k-80k€ projet villa Côte Var',
      prescripteurs: 'Architectes Var, décorateurs, particuliers villa Saint-Tropez/Hyères/Bormes',
      signaux_stagnation: "Architecte d'intérieur intégré + pose France entière = grand potentiel, mais site daté, zéro Pinterest alors que Var = jackpot Pinterest"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Treillières', entreprise: 'Pierres & Design (Ets Poussin Arcouet)', adresse: '9 rue Descartes, 44119 Treillières',
    telephone: '+33 2 40 94 26 67', portable_dirigeant: '', site_web: 'https://www.pierresetdesign.fr',
    email: 'contact@pierresetdesign.fr', email_dirigeant: '',
    dirigeant_principal: 'Famille Poussin/Arcouet — Marbrier décorateur depuis 1934 (3 générations)',
    linkedin_dirigeant: '',
    siren: '870800117', forme_juridique: 'SARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + site officiel',
    data: {
      specialites: 'Marbre, granit, céramique, plans de travail naturels',
      actes_phares: 'Plans de travail villa La Baule/Pornic, cuisines pierre naturelle, salles de bain, escaliers',
      ticket_moyen: '10k-50k€ chantier résidentiel HDG',
      prescripteurs: 'Architectes Loire-Atlantique, particuliers La Baule, Pornic, Pornichet',
      signaux_stagnation: 'Heritage 90 ans = atout, site OK mais zéro Pinterest, IG peu actif. Clientèle La Baule (résidence secondaire CSP+++) = cible idéale Meta géolocalisée'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Bordeaux', entreprise: 'Marbrerie Duclos', adresse: '10 Place Gavinies, 33000 Bordeaux',
    telephone: '+33 5 56 91 18 65', portable_dirigeant: '', site_web: 'https://www.marbrerie-duclos.com',
    email: 'contact@marbrerie-duclos.com', email_dirigeant: '',
    dirigeant_principal: 'Martine Camy (Gérante) — Marbrerie 3 générations depuis 1920',
    linkedin_dirigeant: '',
    siren: '322926833', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'societe.com + manageo',
    data: {
      specialites: 'Marbre, granit, onyx, quartz, pierre naturelle et composite',
      actes_phares: "Aménagement intérieur/extérieur, façonnage pierre, projets villa Bassin d'Arcachon, cheminées",
      ticket_moyen: '15k-70k€ chantier villa Cap Ferret / Arcachon',
      prescripteurs: 'Architectes Bordeaux, particuliers Cap Ferret / Arcachon / Pyla',
      signaux_stagnation: 'Site web datant 2010, dépendance prescripteurs, zéro Meta, succession à structurer (dirigeante senior). Pinterest = réservoir énorme pour villa Pyla'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Saint-Priest', entreprise: 'UTPM - Union Travailleurs Pierre et Marbre', adresse: '9 rue de Lombardie, Parc Aktiland II, 69800 Saint-Priest',
    telephone: '+33 4 78 90 50 75', portable_dirigeant: '', site_web: 'https://www.utpm-marbrerie.fr',
    email: 'contact@utpm-marbrerie.fr', email_dirigeant: '',
    dirigeant_principal: 'Franck Vesco (Président) — Marbrerie depuis 1919 (4 tailleurs de pierre lyonnais)',
    linkedin_dirigeant: '',
    siren: '957520091', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + societe.com + site officiel',
    data: {
      specialites: 'Marbre, granit, pierre naturelle pour décoration HDG',
      actes_phares: 'Cheminées villa/chalet, salles de bain marbre, plans de travail cuisine, rénovation villa/chalet Annecy/Megève',
      ticket_moyen: '15k-80k€ chantier villa Auvergne-Rhône-Alpes',
      prescripteurs: 'Architectes Lyon/Annecy, décorateurs, particuliers chalets Alpes',
      signaux_stagnation: "100 ans d'histoire = trust massif, site daté, zéro Meta/Pinterest. Clientèle chalets Annecy/Megève/Courchevel = jackpot Meta géolocalisé"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Nomain', entreprise: 'Marbrerie Verier Mongin (MVM)', adresse: "34 Rue d'Auchy, 59310 Nomain",
    telephone: '+33 3 20 79 30 75', portable_dirigeant: '', site_web: 'https://www.marbrerie-verier.com',
    email: 'contact@marbrerie-verier.com', email_dirigeant: '',
    dirigeant_principal: 'Sébastien & Charlotte Mongin (4e génération, repris 2021) — Marbrerie 90 ans',
    linkedin_dirigeant: '',
    siren: '898355979', forme_juridique: 'SARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + societe.com + In Extenso',
    data: {
      specialites: 'Granit, marbre, dekton, pierre bleue, quartz, ardoise, céramique',
      actes_phares: 'Plans de travail cuisine villa Nord/Picardie, salles de bain, cheminées',
      ticket_moyen: '10k-60k€ chantier villa Nord/Touquet',
      prescripteurs: 'Architectes Lille, particuliers Touquet / Hardelot / Pas-de-Calais résidence luxe',
      signaux_stagnation: 'Dirigeants jeunes (repris en 2021 = mode acquisition) = cible IDÉALE INDESCALE, Facebook actif mais pas de Meta Ads, Pinterest absent. Le Touquet/Hardelot = grosses villas, gisement énorme'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Bordeaux', entreprise: 'Marbrerie Arnaud', adresse: 'Bordeaux (Gironde) — atelier régional',
    telephone: '+33 5 56 88 41 95', portable_dirigeant: '', site_web: 'https://www.marbrerie-arnaud.com',
    email: 'contact@marbrerie-arnaud.com', email_dirigeant: '',
    dirigeant_principal: "Famille Arnaud — Marbrerie 45 ans d'expérience",
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel + Pages Jaunes',
    data: {
      specialites: 'Marbre, granit, plans de travail, sols, murs sur-mesure',
      actes_phares: 'Conception sur-mesure murs et sols villa, plans de travail',
      ticket_moyen: '8k-50k€',
      prescripteurs: "Architectes Bordeaux, particuliers Bassin d'Arcachon",
      signaux_stagnation: "Site daté, branding peu valorisant 45 ans d'expérience, zéro acquisition Meta. Cibles : Bordeaux + Arcachon CSP+"
    }
  },

  // ── Marbreries indépendantes premium (12 cibles) ──
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Chelles', entreprise: 'Cristal Marbre', adresse: '16 Rue Henri Becquerel, 77500 Chelles + 26-28 Rue Danielle Casanova, 75002 Paris (showroom)',
    telephone: '+33 1 64 21 53 00', portable_dirigeant: '', site_web: 'https://www.cristalmarbre.com',
    email: 'contact@cristalmarbre.com', email_dirigeant: '',
    dirigeant_principal: 'Carlo Scavelli (Fondateur 2000) — Marbrerie familiale, projets retail luxe (Longchamp Champs-Élysées)',
    linkedin_dirigeant: 'https://linkedin.com/company/cristal-marbre',
    siren: '821006475', forme_juridique: 'SAS', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + Rubypayeur + LinkedIn',
    data: {
      specialites: 'Marbre, cristallisation, mosaïque, déco intérieure/extérieure haut de gamme',
      actes_phares: 'Longchamp Champs-Élysées, Cartier, projets retail/résidentiel luxe, sols boutiques',
      ticket_moyen: '30k-200k€ par chantier (retail + résidentiel)',
      prescripteurs: 'Architectes retail/luxe, maisons luxe, particuliers VIP',
      signaux_stagnation: "Showroom Paris 2e mais site peu vendeur, 100% B2B retail/archi = potentiel énorme sur particuliers Triangle d'Or. Pas de Pinterest visible"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Arthema Marbre', adresse: '34 Rue de Poitou, 75003 Paris',
    telephone: '+33 1 42 71 79 09', portable_dirigeant: '', site_web: 'https://arthema-marbre.com',
    email: 'contact@arthema-marbre.com', email_dirigeant: '',
    dirigeant_principal: 'Christine Vaux (Gérante) — 30 ans expérience Arthema + atelier 50+ ans héritage',
    linkedin_dirigeant: '',
    siren: '390944734', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'societe.com + site officiel',
    data: {
      specialites: 'Marbre, granit, pierre naturelle, mise en œuvre exception',
      actes_phares: "Décoration intérieure Marais/3e/Triangle d'Or, projets architectes & décorateurs",
      ticket_moyen: '15k-80k€ chantier appartement haussmannien / hôtel particulier',
      prescripteurs: "Architectes d'intérieur Marais/Saint-Germain, décorateurs",
      signaux_stagnation: 'Showroom Cœur du Marais = emplacement OR mais site daté, zéro Pinterest, IG quasi inexistant. Clientèle = appartements prestige 3e/4e/16e à capter directement'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Marbrier Paris', adresse: 'Paris (adresse non publiée — projets Courchevel, Ibiza, Miami, Monaco, Saint-Tropez)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.marbrierparis.fr',
    email: '', email_dirigeant: '',
    dirigeant_principal: "Héritier d'une tradition marbrière centenaire — labellisé État français (EPV)",
    linkedin_dirigeant: '',
    siren: '', forme_juridique: '', note_avis: 5.0, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + Annuaire Marbrier',
    data: {
      specialites: 'Marbres rares, granits, pierres naturelles, projets luxe internationaux',
      actes_phares: 'Villas privées, palaces, résidences contemporaines à Courchevel, Ibiza, Miami, Monaco, Saint-Tropez, Paris, Suisse',
      ticket_moyen: '80k-500k€ chantier ultra-prestige international',
      prescripteurs: 'Grandes signatures archi internationales (Yovanovitch, Dirand, Studio KO...)',
      signaux_stagnation: 'Site silencieux, communication ultra-discrète, 100% prescripteurs grands archis. Aucune capture particuliers fortunés. Potentiel Meta + Pinterest = ÉNORME via positionnement "centenaire"'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Grigny', entreprise: 'Athis Marbres', adresse: "ZAC des Radars, 4 Rue de l'Abbé Grégoire, 91350 Grigny",
    telephone: '+33 1 69 02 11 60', portable_dirigeant: '', site_web: 'https://athismarbres.com',
    email: 'contact@athismarbres.com', email_dirigeant: '',
    dirigeant_principal: 'Pascal Girard + Raymond Girard — Marbrerie famille depuis 1973',
    linkedin_dirigeant: '',
    siren: '777335415', forme_juridique: 'SAS', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + site officiel + Artisans du Patrimoine',
    data: {
      specialites: 'Marbre, granit, quartz, quartzite, céramique',
      actes_phares: 'Taille, façonnage, finissage pierre — espaces exceptionnels',
      ticket_moyen: '15k-80k€ chantier villa IDF',
      prescripteurs: 'Architectes IDF, décorateurs, particuliers résidentiel HDG sud IDF',
      signaux_stagnation: "Site fonctionnel mais sans Pinterest, zéro Meta. 50+ ans = trust. Clientèle particuliers à scaler"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Thiais', entreprise: 'La Marbrerie de Paris', adresse: '3 Esplanade Auguste Perret, 94320 Thiais',
    telephone: '+33 1 48 84 30 30', portable_dirigeant: '', site_web: '',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Amélie Bruni (Dirigeante) — Marbrerie depuis 1976',
    linkedin_dirigeant: '',
    siren: '305546079', forme_juridique: 'SARL', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'Pappers + societe.com',
    data: {
      specialites: 'Marbre, granit, pierre naturelle bâtiment et décoration',
      actes_phares: 'Plans de travail, sols, cheminées, escaliers villa sud IDF',
      ticket_moyen: '10k-50k€',
      prescripteurs: 'Architectes/décorateurs IDF',
      signaux_stagnation: 'Pas de site web visible, présence digitale quasi nulle, dirigeante femme = cible accessible. Opportunité de moderniser leur capture leads'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Mouans-Sartoux', entreprise: 'Marbrerie La Scala', adresse: '423 Route de Tiragon, 06370 Mouans-Sartoux',
    telephone: '+33 4 93 75 10 52', portable_dirigeant: '', site_web: 'https://www.marbrerie-lascala.fr',
    email: 'contact@marbrerielascala.com', email_dirigeant: '',
    dirigeant_principal: 'Jean-Nicolas Propato (Gérant) — Site 3000m², stock important slabs',
    linkedin_dirigeant: '',
    siren: '519517478', forme_juridique: 'SARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + Instagram (@marbrerielascala)',
    data: {
      specialites: 'Marbre, granit, pierre naturelle — site 3000m² + atelier marbriers qualifiés',
      actes_phares: 'Villa Cannes, Nice, Saint-Tropez, Monaco (1h max) — sols, plans de travail, salles de bain, escaliers',
      ticket_moyen: "20k-150k€ chantier villa Côte d'Azur",
      prescripteurs: "Architectes Côte d'Azur, décorateurs Cannes/Monaco, particuliers villa",
      signaux_stagnation: "Compte IG actif (rare !) mais zéro Meta Ads/Pinterest, site daté. Clientèle Côte d'Azur ultra-premium parfaite pour Meta géolocalisé"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'La Crau', entreprise: 'MDLC Select', adresse: 'La Crau, 83260 Var (entre Toulon et Hyères)',
    telephone: '+33 4 94 35 99 49', portable_dirigeant: '', site_web: 'https://www.mdlcselect.com',
    email: 'contact@mdlcselect.com', email_dirigeant: '',
    dirigeant_principal: 'Clément Mattout (Dirigeant) — Spécialiste marbre, onyx, pierres semi-précieuses pour luxe',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + Pages Jaunes',
    data: {
      specialites: 'Marbre, onyx, pierres semi-précieuses, agates (Wild Agate Black), travertin italien',
      actes_phares: 'Boutiques luxe (retail world-wide), hôtels prestige, villas Saint-Tropez/Ramatuelle, cuisines/SDB sur-mesure',
      ticket_moyen: '50k-300k€ projet boutique luxe / villa Saint-Tropez',
      prescripteurs: 'Marques de luxe (boutiques retail), architectes luxe',
      signaux_stagnation: 'Site bien fait, présence Pinterest possible mais Meta Ads absentes, capture clients particuliers villas Saint-Tropez/Cap Ferrat = manquant'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'La Ciotat', entreprise: 'Marbrerie Daubinet Litteri', adresse: '53 Avenue Ernest Subilia, 13600 La Ciotat',
    telephone: '+33 4 42 71 79 64', portable_dirigeant: '', site_web: 'https://www.marbrerie-daubinet.com',
    email: 'contact@marbrerie-daubinet.com', email_dirigeant: '',
    dirigeant_principal: 'Sandrine Bellardie + Julien Pelerin (Gérants) — Fusion Daubinet (1999) + Litteri (1961)',
    linkedin_dirigeant: '',
    siren: '492465570', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + Houzz',
    data: {
      specialites: 'Marbre, granit, pierre, quartzite, quartz, dekton',
      actes_phares: 'Cuisines/SDB marbre, escaliers, mobilier intérieur/extérieur — villas Cassis/Bandol/Marseille/Aix',
      ticket_moyen: '15k-80k€ chantier villa PACA',
      prescripteurs: 'Architectes Aix/Marseille, particuliers villa Cassis/Bandol/La Ciotat',
      signaux_stagnation: '60 ans héritage (fusion) = atout, Facebook actif (rare) mais zéro Meta Ads + Pinterest absent. Clientèle Aix-Marseille CSP+++ = parfaite'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Vidauban', entreprise: 'Father and Stone (ex-Marbrerie PAM)', adresse: 'RN 7 N° 2065 quartier le Jas de la Barre, 83550 Vidauban',
    telephone: '+33 4 94 99 94 50', portable_dirigeant: '', site_web: 'https://www.fatherandstone.com',
    email: 'contact@fatherandstone.com', email_dirigeant: '',
    dirigeant_principal: 'Eyüp Kaya (Fondateur, années 2000) — Atelier + showroom + site extraction',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + annuaire Var',
    data: {
      specialites: 'Pierre naturelle, marbre, pavés, dallage extérieur villa, margelles piscine',
      actes_phares: 'Villas Ramatuelle/Saint-Tropez/Sainte-Maxime — terrasses, sols extérieurs, dallage piscine',
      ticket_moyen: "20k-100k€ chantier extérieur villa Côte d'Azur",
      prescripteurs: 'Architectes paysagistes, architectes villa Var, particuliers villa Saint-Tropez',
      signaux_stagnation: "Catalogue PDF papier (2021-2022) = pas de funnel digital moderne, zéro Meta/Pinterest. Clientèle villa Saint-Tropez = parfaite pour campagnes inspirations terrasses pierre"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Grasse', entreprise: 'Azur Pierre Agencement', adresse: '124 Avenue Jean Maubert, 06130 Grasse',
    telephone: '+33 4 93 60 26 73', portable_dirigeant: '', site_web: 'https://www.azurpierre.com',
    email: 'contact@azurpierre.com', email_dirigeant: '',
    dirigeant_principal: 'Cyril Edelga (Président) — Spécialiste pierre naturelle + mosaïque Cannes-Mougins',
    linkedin_dirigeant: '',
    siren: '523551349', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + societe.com',
    data: {
      specialites: 'Pierre naturelle, marbre, mosaïque, plans de travail',
      actes_phares: 'Villas Mougins/Cannes/Valbonne — sols, salles de bain mosaïque, terrasses',
      ticket_moyen: '15k-70k€ chantier villa Riviera',
      prescripteurs: 'Architectes, carreleurs, paysagistes (tarifs pros)',
      signaux_stagnation: "Site daté, zéro Meta, dépendance prescripteurs. Pinterest = gros gisement sur mosaïque/pierre Côte d'Azur"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Denain', entreprise: 'Marbrerie Vincart (SARL Vincart Frères)', adresse: '146 bis rue du Maréchal Leclerc, 59220 Denain',
    telephone: '+33 3 27 44 30 09', portable_dirigeant: '', site_web: 'https://www.marbrerievincart.com',
    email: 'contact@marbrerievincart.com', email_dirigeant: '',
    dirigeant_principal: 'Mélanie Stéphanie Gauriot (Gérante) — Marbrerie depuis 1889 (5+ générations)',
    linkedin_dirigeant: '',
    siren: '668800360', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'Pappers + Pages Jaunes',
    data: {
      specialites: 'Marbre, granit, pierre — atelier modernisé sur héritage',
      actes_phares: 'Plans de travail, salles de bain, projets résidentiels Nord — décoration et funéraire',
      ticket_moyen: '8k-40k€',
      prescripteurs: 'Architectes Nord, décorateurs',
      signaux_stagnation: "Activité mixte décoration + funéraire (à clarifier offre), site léger, zéro Meta. 135 ans d'histoire = trust majeur sous-exploité"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Lille', entreprise: 'Marbrerie Cotro', adresse: 'Showrooms Lille + Hallennes-lez-Haubourdin (59)',
    telephone: '+33 3 20 50 90 90', portable_dirigeant: '', site_web: 'https://cotro.com',
    email: 'contact@cotro.com', email_dirigeant: '',
    dirigeant_principal: 'Famille Cotro — Marbrerie 60+ ans (3+ générations)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + Pages Jaunes',
    data: {
      specialites: 'Cheminées, poêles, inserts, plans de travail, décoration pierre',
      actes_phares: 'Cheminées sur-mesure villa Nord, Touquet, Bondues, La Madeleine',
      ticket_moyen: '8k-50k€',
      prescripteurs: 'Architectes Lille, particuliers villas chic Nord (Marcq-en-Baroeul, Bondues, Le Touquet)',
      signaux_stagnation: 'Marché captif Nord (villas/châteaux), 2 showrooms = bonne maille, mais zéro acquisition Meta/Pinterest. Cible idéale : capter cheminées villa Touquet via Meta'
    }
  },

  // ── Négociants pierre naturelle / sols nobles (10 cibles) ──
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Comblanchien', entreprise: 'Le Comptoir des Pierres', adresse: '42 Route Nationale 74, 21700 Comblanchien (atelier) + 79 bis Bd Picpus, 75012 Paris + La Crau (83260)',
    telephone: '+33 3 80 62 33 99', portable_dirigeant: '', site_web: 'https://www.lecomptoirdespierres.com',
    email: 'contact@lecomptoirdespierres.com', email_dirigeant: '',
    dirigeant_principal: 'Jérôme Deschamps (Production/Atelier) + Thibaut Remy (Commercial/Marketing) — Beaux-frères, entreprise familiale',
    linkedin_dirigeant: '',
    siren: '533147294', forme_juridique: 'SAS', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel + annuaire-entreprises',
    data: {
      specialites: 'Pierre de Bourgogne (Comblanchien, Pommard, Hauteville) — production atelier propre',
      actes_phares: 'Dallages villa, parements muraux, escaliers, vasques pierre — projets HDG France entière',
      ticket_moyen: '20k-100k€ chantier villa / hôtel particulier',
      prescripteurs: "Architectes d'intérieur, décorateurs, paysagistes, châtelains",
      signaux_stagnation: 'Showrooms Paris Ouest + Sud France = nouvelle stratégie (presse RP) mais zéro Meta Ads/Pinterest sur dallage Bourgogne. Pierre Bourgogne = jackpot Pinterest sur cuisine de campagne chic / châteaux'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Saint-Maximin', entreprise: 'Rocamat (Polycor France)', adresse: '818 Avenue de la Paix, 60740 Saint-Maximin (siège) + 36 rue de Bourgogne, 75007 Paris (FrancePierre)',
    telephone: '+33 3 44 61 16 16', portable_dirigeant: '', site_web: 'https://www.polycor.com/fr',
    email: 'contact@rocamat.fr', email_dirigeant: '',
    dirigeant_principal: 'Polycor France Holding (Président) — Groupe canadien Polycor (acquisition 2023)',
    linkedin_dirigeant: 'https://www.linkedin.com/company/polycor-france/',
    siren: '572086577', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'Pappers + societe.com + LinkedIn',
    data: {
      specialites: 'Pierre de Bourgogne, calcaire français (30 carrières), 50 variétés',
      actes_phares: 'Monuments historiques, châteaux, grands constructeurs, hôtels luxe, restauration patrimoine',
      ticket_moyen: '50k-1M€ chantier patrimoine / palace',
      prescripteurs: 'Bâtiments de France, grandes entreprises BTP, architectes patrimoine',
      signaux_stagnation: 'Groupe industriel (160 personnes) = besoin de structurer canal particuliers fortunés (séparé du B2B mass). Polycor cherche à faire évoluer Rocamat = ouverture à nouveaux canaux. Pas de Meta/Pinterest BtoC visible'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Marbre Import (Roudey International)', adresse: '118 av Jean Jaurès, 75019 Paris + Showroom Villejuif + agence Bordeaux',
    telephone: '+33 1 42 02 27 65', portable_dirigeant: '', site_web: 'https://www.marbre-import.fr',
    email: 'contact@marbre-import.fr', email_dirigeant: '',
    dirigeant_principal: "Dirigeant Roudey International — 10+ ans d'expérience import marbres",
    linkedin_dirigeant: 'https://linkedin.com/company/marbre-import',
    siren: '532254315', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + Pages Jaunes + LinkedIn',
    data: {
      specialites: 'Marbre Italie/Espagne/Portugal, pierres naturelles, granits — sourcing direct carrières',
      actes_phares: 'Villas + hôtels + restaurants + résidences contemporaines Provence Méditerranée',
      ticket_moyen: '20k-150k€ matériau livré',
      prescripteurs: "Architectes d'intérieur, décorateurs, paysagistes, particuliers villa",
      signaux_stagnation: 'Site bien fait avec blog (rare !) mais zéro Meta Ads. Page LinkedIn active = early adopter possible. Showroom Villejuif sous-vendu'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Nimex International', adresse: 'Paris 19e (cedex)',
    telephone: '+33 1 40 36 79 79', portable_dirigeant: '', site_web: 'https://www.nimexinternational.fr',
    email: 'contact@nimexinternational.fr', email_dirigeant: '',
    dirigeant_principal: 'Direction Nimex — Sourcing direct carrières Espagne, Italie, Portugal, Grèce, Turquie, Égypte, Inde',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.4, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel + Europages',
    data: {
      specialites: 'Marbre rouge Vérone, granits, travertins, ardoise, pierre naturelle — sourcing & consulting',
      actes_phares: 'Fourniture artisans/architectes/tailleurs France entière',
      ticket_moyen: '5k-50k€ matériaux par projet',
      prescripteurs: '100% B2B prescripteurs et marbriers',
      signaux_stagnation: "Pure B2B grossiste, site catalogue, zéro acquisition Meta. Pivot possible vers capture architectes d'intérieur direct = LinkedIn Ads"
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Francepierre (showroom rue de Bourgogne)', adresse: '36 rue de Bourgogne, 75007 Paris + Lyon (69)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.francepierre.net',
    email: 'contact@francepierre.net', email_dirigeant: '',
    dirigeant_principal: 'Direction Francepierre — Producteur & négociant pierre naturelle depuis 1985',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel',
    data: {
      specialites: 'Pierre de Bourgogne, Pierre de Semond, Travertin, pierres françaises et importées',
      actes_phares: 'Villas luxe, terrasses, piscines débordement, façades pierre, châteaux',
      ticket_moyen: '15k-100k€ chantier dallage villa',
      prescripteurs: 'Architectes, décorateurs, paysagistes, particuliers villa',
      signaux_stagnation: 'Site SEO bien fait (RDV) mais zéro Meta Ads, Pinterest absent. Cible Lyon + Périgord + Paris 7e = parfait Meta géolocalisé villas'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'La Parqueterie Parisienne', adresse: '84 Bd Richard Lenoir, 75011 Paris (showroom) + 57 Rue Charles Delescluze, 93170 Bagnolet (atelier)',
    telephone: '+33 1 43 38 80 80', portable_dirigeant: '', site_web: 'https://laparqueterieparisienne.com',
    email: 'contact@laparqueterieparisienne.com', email_dirigeant: '',
    dirigeant_principal: 'Mkadmini Hassen (Président) — Manufacture parquet artisanale',
    linkedin_dirigeant: 'https://fr.linkedin.com/company/laparqueterieparisienne',
    siren: '837820638', forme_juridique: 'SAS', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + LinkedIn + Archello',
    data: {
      specialites: 'Parquet massif chêne, point Hongrie, dalles Versailles, plinthes, marches escalier',
      actes_phares: 'Projets archi intérieur HDG appartements haussmanniens, hôtels particuliers, châteaux',
      ticket_moyen: '15k-80k€ chantier appartement / 30k-150k€ château',
      prescripteurs: "Architectes d'intérieur Paris, décorateurs, projets archi exigeants",
      signaux_stagnation: 'IG @la_parqueterieparisienne = présence mais pas de Meta Ads massives. Pinterest = vide alors que point Hongrie = top recherche'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'CarréSol Éditions (Parquet)', adresse: 'Showrooms Paris + Lyon — collection éditeur parquet HDG',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.carresol-parquet.com',
    email: 'contact@carresol-parquet.com', email_dirigeant: '',
    dirigeant_principal: 'Direction CarréSol Éditions — Maison artisanale parquets Versailles, point Hongrie, chevron',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel',
    data: {
      specialites: 'Parquet massif chêne, parquets Versailles, point Hongrie, chevron — forêts gérées',
      actes_phares: 'Projets prescripteurs archi intérieur, appartements HDG, hôtels boutique',
      ticket_moyen: '20k-100k€ chantier',
      prescripteurs: "Architectes d'intérieur, décorateurs, hôteliers boutique",
      signaux_stagnation: 'Branding "Éditions" premium = positionnement OR mais zéro Meta Ads + Pinterest sous-exploité. Catalogue inspirations = miel pour Pinterest'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Surface Parquet', adresse: '12 Place du Général Koenig, 75017 Paris + 87 Bd Sébastopol, 75002 Paris + Boulogne-Billancourt + Argenteuil',
    telephone: '+33 1 39 47 65 65', portable_dirigeant: '', site_web: 'https://www.surface-parquet.com',
    email: 'contact@surface-parquet.com', email_dirigeant: '',
    dirigeant_principal: 'Direction Surface Parquet — Parquets fabrication française et européenne',
    linkedin_dirigeant: '',
    siren: '894545003', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + annuaire-entreprises',
    data: {
      specialites: 'Parquet massif/contrecollé, point Hongrie, dalles Versailles, chevron, vieilli',
      actes_phares: 'Appartements Paris 16e, hôtels particuliers, projets archi intérieur',
      ticket_moyen: '10k-60k€ chantier',
      prescripteurs: "Architectes d'intérieur, décorateurs Paris, particuliers Paris CSP+++",
      signaux_stagnation: '4 showrooms IDF = forte couverture mais pas de stratégie Meta visible, Pinterest absent. Société récente (2021) = dirigeants en mode scaling'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Aubagne', entreprise: 'La Pierre et le Marbre', adresse: '870 Avenue des Paluds, 13400 Aubagne',
    telephone: '+33 4 42 70 12 44', portable_dirigeant: '', site_web: 'https://lapierreetlemarbre.com',
    email: 'contact@lapierreetlemarbre.com', email_dirigeant: '',
    dirigeant_principal: 'Bruno Lo Re (Gérant) — Négoce + marbrerie, 100+ pierres et marbres, sourcing Italie/Espagne/Portugal',
    linkedin_dirigeant: '',
    siren: '415123249', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'Pappers + Pages Jaunes + site officiel',
    data: {
      specialites: 'Marbre, pierre naturelle, quartz, Silestone — fournisseur + marbrier + pose',
      actes_phares: "Villas Ramatuelle/Saint-Tropez, cuisines, salles de bain, façades, escaliers — PACA + Côte d'Azur",
      ticket_moyen: '10k-80k€ chantier villa Provence/Côte d\'Azur',
      prescripteurs: 'Architectes Aubagne/Marseille/Aix, particuliers villa Provence',
      signaux_stagnation: 'Modèle complet (négoce + atelier + pose), 1998 = 28 ans, site bien fait mais Meta Ads absente. Cible particuliers villas Provence = jackpot Pinterest'
    }
  },
  {
    id: mbid(), app: 'indescale', secteur_id: 'maison-finitions', categorie: 'Marbrerie / pierre naturelle / sols nobles',
    ville: 'Paris', entreprise: 'Minéral Pierre Naturelle', adresse: 'Réseau showrooms (Paris, Lyon, Strasbourg, Bordeaux, Toulouse)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.mineral-pierre-naturelle.fr',
    email: 'contact@mineral-pierre-naturelle.fr', email_dirigeant: '',
    dirigeant_principal: 'Direction Minéral — Réseau national pierre naturelle (Bourgogne, travertin, pierre française)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel',
    data: {
      specialites: 'Pierre de Bourgogne, calcaires français, travertin — dallage intérieur/extérieur',
      actes_phares: 'Villas neuves, rénovations château, terrasses, piscines, façades',
      ticket_moyen: '10k-50k€ chantier dallage',
      prescripteurs: 'Architectes, paysagistes, particuliers villa',
      signaux_stagnation: 'Réseau 5+ villes = scale potentiel énorme mais funnel digital basique. Pinterest = absent alors que dallage Bourgogne = top recherche déco campagne chic'
    }
  },
]
