// Cibles RÉELLES « Bateaux / semi-rigides / jet-skis » (INDESCALE).
// Mapping national VENTE (concessionnaires premium + concessionnaires moteur/voile loisir
// + concessionnaires jet-skis + yacht brokers VENTE). Les pures sociétés de location/charter
// (Click&Boat, SamBoat, Boatify, MGD Charter, Jet Ski Pass, etc.) sont EXCLUES — la pub
// Meta cible la VENTE (location pas assez rentable pour justifier l'acquisition payante).
// Les mixtes vente+loc sont INCLUS dès lors que la vente est présente (data.services le précise).
// Données telles que trouvées en sources officielles ; n'invente jamais un 06 / email.

let _b = 0
const bid = () => 'boat-' + (++_b)

export const BATEAUX_JET_SKI_PROSPECTS = [
  // ── Concessionnaires bateaux PREMIUM (Princess, Sunseeker, Riva, Pershing, Azimut, Galeon, Sea Ray premium) ──
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'Princess Yachts France / DLB Yacht Broker', adresse: 'Port de La Napoule, 06210 Mandelieu-la-Napoule', telephone: '04 93 49 99 66',
    portable_dirigeant: '', site_web: 'https://www.princess.fr',
    email: 'info@princess.fr', email_dirigeant: '',
    dirigeant_principal: 'Didier Le Brun (Associate Director) & Marc Deltenre (Associate Director)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/didier-le-brun-princess/',
    siren: '', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel princess.fr / dlb-yachting.com',
    data: {
      marques_distribuees: 'Princess Yachts (V Class Sport, F Class Flybridge, S Class, M Class, X Class) — distributeur exclusif Méditerranée française',
      gamme_prix: '500k€ - 15M€+',
      services: 'VENTE neuf + brokerage occasion + service après-vente + charter ponctuel — dominante VENTE',
      signaux_stagnation: 'Concentré sur 1 marque, site éditorial peu orienté conversion, dépendance fort des salons (Cannes/Düsseldorf), pas de funnel ads visible, marché 2025-2026 sous pression sur les segments 50-80 pieds'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Princess Yachts Monaco', adresse: 'Port Hercule, Quai Antoine 1er, 98000 Monaco', telephone: '+377 99 99 97 97',
    portable_dirigeant: '', site_web: 'https://princessyachtsmonaco.com',
    email: 'info@princessyachtsmonaco.com', email_dirigeant: '',
    dirigeant_principal: '',
    linkedin_dirigeant: 'https://www.linkedin.com/company/princess-yachts-monaco/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel princessyachtsmonaco.com',
    data: {
      marques_distribuees: 'Princess Yachts — distributeur exclusif Monaco',
      gamme_prix: '500k€ - 15M€+',
      services: 'VENTE neuf + brokerage Princess occasion + service Port Hercule — dominante VENTE pure',
      signaux_stagnation: 'Marché Monaco saturé en physique, dépendance fort au flux pied de quai, aucun ads visible Meta/Google, site informatif sans qualification leads'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'Sunseeker France (Sunseeker Sales France Group)', adresse: 'Port de Plaisance, 06210 Mandelieu-la-Napoule', telephone: '04 93 93 67 67',
    portable_dirigeant: '', site_web: 'https://www.sunseekerfrance.com',
    email: 'sfg@sunseeker.fr', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: '',
    siren: '419157078', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel sunseekerfrance.com / Pappers',
    data: {
      marques_distribuees: 'Sunseeker (gamme complète Predator, Manhattan, Yacht, 116) — distributeur exclusif Sud France',
      gamme_prix: '600k€ - 25M€',
      services: 'VENTE neuf + brokerage Sunseeker occasion + atelier + charter ponctuel — dominante VENTE',
      signaux_stagnation: "Marque britannique en repli sur certains segments 2024-2026, dépendance ultra-premium, peu d'acquisition digital active visible, site daté pour le segment"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Cannes', entreprise: 'Riva France / Cannes Boat Service', adresse: 'Port Pierre Canto, Boulevard de la Croisette, 06400 Cannes', telephone: '04 93 45 04 51',
    portable_dirigeant: '+33 6 03 56 77 60', site_web: 'https://rivafrance.com',
    email: 'cannes@riva-cbs.com', email_dirigeant: 'sam@riva-cbs.com',
    dirigeant_principal: 'Sam Buheiry (Sales Director)',
    linkedin_dirigeant: 'https://www.linkedin.com/company/cannes-boat-service',
    siren: '', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel rivafrance.com',
    data: {
      marques_distribuees: 'Riva Yacht (Ferretti Group) — dealer exclusif France',
      gamme_prix: '800k€ - 25M€',
      services: 'VENTE neuf Riva + brokerage occasion + Saint-Tropez agence + maintenance — dominante VENTE',
      signaux_stagnation: 'Marque iconique mais clientèle vieillissante, peu d\'effort digital pour rajeunir, site type "musée" plutôt que conversion'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Monaco Boat Service (Riva exclusive dealer)', adresse: 'Port Hercule, 98000 Monaco', telephone: '+377 93 50 16 95',
    portable_dirigeant: '', site_web: 'https://riva-mbs.com',
    email: 'info@riva-mbs.com', email_dirigeant: '',
    dirigeant_principal: 'Lia Riva (CEO / Présidente)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/lia-riva/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel riva-mbs.com / Luxury London interview',
    data: {
      marques_distribuees: 'Riva Yacht — dealer exclusif Monaco',
      gamme_prix: '800k€ - 25M€',
      services: 'VENTE neuf + brokerage Riva pre-owned + refit/atelier Port Hercule — dominante VENTE',
      signaux_stagnation: "Site très éditorial / brand, pas d'acquisition lead digital, repose sur 60 ans de notoriété et flux Monaco — pourrait scaler digital"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Cannes', entreprise: 'Abys Yachting (Ferretti / Pershing / Custom Line)', adresse: '17 Boulevard du Midi Louise Moreau, 06150 Cannes', telephone: '04 93 47 70 22',
    portable_dirigeant: '', site_web: 'https://www.abys-yachting.com',
    email: 'info@abys-yachting.com', email_dirigeant: '',
    dirigeant_principal: 'Victor Sobral (CEO) / Angélique Ciurléo (Directrice)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/victor-sobral-abys/',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel abys-yachting.com',
    data: {
      marques_distribuees: 'Ferretti Yachts, Pershing, Custom Line, Mochi Craft — distributeur exclusif France',
      gamme_prix: '500k€ - 30M€',
      services: 'VENTE neuf + brokerage + charter + management + maintenance — dominante VENTE neuf',
      signaux_stagnation: "26 ans d'historique, site assez dense mais peu de funnel ads, dépendance Salon de Cannes/Monaco, marché italian-yachts ralenti 2024-2026"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Cannes', entreprise: 'RC Marine Yachts (Azimut Yachts France)', adresse: '18 Rue Médecin Lieutenant Bertrand Lepine, 06400 Cannes', telephone: '04 93 99 25 86',
    portable_dirigeant: '', site_web: 'https://www.rcmarineyachts.com',
    email: 'info@azimutyachts.fr', email_dirigeant: '',
    dirigeant_principal: 'Vincenzo Soria (Président) / Ronan Chabot (Fondateur Groupe RCM)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/vincenzo-soria/',
    siren: '833607294', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel rcmarineyachts.com / Pappers / ActuNautique',
    data: {
      marques_distribuees: 'Azimut Yachts (42-143 pieds) — distributeur exclusif France depuis sept. 2022',
      gamme_prix: '400k€ - 20M€',
      services: 'VENTE neuf Azimut + brokerage occasion + financement + after-sales + formation marine — VENTE pure',
      signaux_stagnation: "Distribution récente (2022), groupe RCM massif (3000 employés) qui pilote davantage l'auto que le yachting, opportunité de structurer digital nautique"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'CSB Marine (Regal / Galeon / Joker)', adresse: 'Port de Mandelieu-la-Napoule, 06210 Mandelieu-la-Napoule', telephone: '04 93 47 73 68',
    portable_dirigeant: '', site_web: 'https://www.csbmarine.com',
    email: 'contact@csbmarine.fr', email_dirigeant: '',
    dirigeant_principal: 'Vincent Grenet & Thomas Grenet & Michel Dallemagne (Co-gérants associés)',
    linkedin_dirigeant: 'https://fr.linkedin.com/company/csbmarine',
    siren: '489270876', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel csbmarine.com / Pappers',
    data: {
      marques_distribuees: 'Regal (exclu France), Galeon (exclu 06), Joker Boat semi-rigide',
      gamme_prix: '80k€ - 2M€',
      services: 'VENTE neuf + brokerage occasion 06 + maintenance — dominante VENTE',
      signaux_stagnation: 'Reprise familiale 2e génération, site web fonctionnel mais peu agressif sur acquisition, 0 ads visible, opportunité scaling Galeon en pleine percée'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'Lucker Yachts (Sea Ray / Pardo Yachts)', adresse: 'Port La Napoule, 06210 Mandelieu-la-Napoule', telephone: '04 93 47 46 80',
    portable_dirigeant: '', site_web: 'https://www.pardo-yachts.fr',
    email: 'info@searaycannes.com', email_dirigeant: '',
    dirigeant_principal: 'Thierry Lucker (Dirigeant)',
    linkedin_dirigeant: 'https://fr.linkedin.com/company/lucker-yachts',
    siren: '', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel pardo-yachts.fr / searaycannes.com',
    data: {
      marques_distribuees: 'Pardo Yachts (exclu 06) + Sea Ray',
      gamme_prix: '200k€ - 3M€',
      services: 'VENTE neuf + brokerage + conciergerie + management berth — dominante VENTE',
      signaux_stagnation: 'Pardo en hyper-croissance Med, site Pardo dédié récent mais funnel léger, opportunité scaling ads très claire sur Pardo 38/43/50'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'Jet7 Yacht (Invictus / Capoforte / Pirelli / Austin Parker)', adresse: 'Port La Napoule, Avenue Henry Clews, 06210 Mandelieu-la-Napoule', telephone: '04 93 49 87 50',
    portable_dirigeant: '', site_web: 'https://jet7yacht.com',
    email: 'info@jet7yacht.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: 'https://www.linkedin.com/company/jet-7-yacht/',
    siren: '', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel jet7yacht.com / Jet7 Group',
    data: {
      marques_distribuees: 'Invictus Yacht (exclu Sud France), Capoforte, Pirelli RIB, Austin Parker',
      gamme_prix: '60k€ - 2M€',
      services: 'VENTE neuf + brokerage occasion 06 + places de port — dominante VENTE',
      signaux_stagnation: 'Distribution multi-marques italiennes émergentes, marché Invictus en croissance MAIS site très daté, identité graphique faible, énorme potentiel ads'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Cannes', entreprise: 'PB Yachting (Sunseeker Cannes)', adresse: '1 Rue Henry Ruhl, 06400 Cannes', telephone: '04 93 93 13 69',
    portable_dirigeant: '', site_web: 'https://www.sunseekerfrance.com',
    email: 'info@pbyfrance.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel sunseekerfrance.com',
    data: {
      marques_distribuees: 'Sunseeker (sub-dealer Cannes)',
      gamme_prix: '600k€ - 20M€',
      services: 'VENTE neuf Sunseeker + occasion + brokerage Cannes — VENTE',
      signaux_stagnation: "Sub-dealer dépendant de Sunseeker France, peu d'autonomie marketing, opportunité acquisition locale sur niche owner premium 50-65 pieds"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Canet-en-Roussillon', entreprise: 'Canet Boat Plaisance (Galeon / Fountaine Pajot / Bayliner)', adresse: '1 rue Hermione, 66140 Canet-en-Roussillon', telephone: '04 68 51 21 90',
    portable_dirigeant: '+33 6 71 79 69 45', site_web: 'https://canetboatplaisance.com',
    email: 'contact@canetboatplaisance.com', email_dirigeant: 'nicolas.rivas@canetboatplaisance.com',
    dirigeant_principal: 'Nicolas Rivas (Directeur Général)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/nicolas-rivas-canet/',
    siren: '510187412', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel canetboatplaisance.com / Pappers / annuaire-entreprises.data.gouv.fr',
    data: {
      marques_distribuees: 'Galeon (Med), Fountaine Pajot catamarans, Bayliner, Zar Formenti, Brig semi-rigides, Gala',
      gamme_prix: '40k€ - 3M€',
      services: 'VENTE neuf + brokerage occasion + maintenance + place de port — dominante VENTE',
      signaux_stagnation: 'Entreprise familiale 15 ans, beaucoup de marques mais site basique, zone PO peu compétitive en digital, opportunité énorme ads ciblées Galeon/Fountaine Pajot'
    }
  },

  // ── Concessionnaires bateaux MOTEUR / VOILE loisir (Beneteau, Jeanneau, Quicksilver, Lagoon, Bavaria, Boston Whaler...) ──
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Hendaye', entreprise: 'Côte Aquitaine Plaisance (Beneteau / Lagoon / CNB)', adresse: 'Chai N°28, Port de Pêche, 64700 Hendaye', telephone: '05 59 48 09 73',
    portable_dirigeant: '+33 6 10 10 73 74', site_web: 'https://www.coteaquitaineplaisance.fr',
    email: 'contact@coteaquitaineplaisance.fr', email_dirigeant: 'matthieu.lopez@coteaquitaineplaisance.fr',
    dirigeant_principal: 'Matthieu Lopez (Dirigeant Hendaye)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/matthieu-lopez-cap/',
    siren: '481367068', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel coteaquitaineplaisance.fr / Pappers',
    data: {
      marques_distribuees: 'Beneteau (exclu Aquitaine), Lagoon catamarans, CNB, Suzuki, Volvo Penta, Honda, Yamaha moteurs',
      gamme_prix: '30k€ - 1,5M€',
      services: 'VENTE neuf + brokerage occasion 4 agences (Hendaye, Capbreton, Cap-Ferret, Arcachon) + maintenance — dominante VENTE',
      signaux_stagnation: 'Multi-agences mais site éditorial sans funnel, 0 visibilité ads payantes, marché Bassin Arcachon ultra-porteur sous-exploité digital'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Lège-Cap-Ferret', entreprise: 'Côte Aquitaine Plaisance Cap-Ferret', adresse: '40 Avenue de la Mer, 33950 Lège-Cap-Ferret', telephone: '05 56 60 92 27',
    portable_dirigeant: '+33 6 20 87 61 76', site_web: 'https://www.coteaquitaineplaisance.fr',
    email: 'capferret@coteaquitaineplaisance.fr', email_dirigeant: 'emmanuel.lafosse@coteaquitaineplaisance.fr',
    dirigeant_principal: 'Emmanuel Lafosse (Dirigeant agence Cap-Ferret)',
    linkedin_dirigeant: '',
    siren: '481367068', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel / appel téléphonique direct',
    data: {
      marques_distribuees: 'Beneteau Antarès / Flyer / GT / Antares / Lagoon catamarans',
      gamme_prix: '40k€ - 800k€',
      services: 'VENTE neuf + brokerage occasion Bassin Arcachon — dominante VENTE',
      signaux_stagnation: 'Ports saturés Bassin, demande explosive (ticket moyen post-covid x2), zéro acquisition payante digitale visible'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Arcachon', entreprise: 'Côte Aquitaine Plaisance Arcachon', adresse: 'Port de Plaisance, 33120 Arcachon', telephone: '05 56 83 36 50',
    portable_dirigeant: '+33 6 25 14 05 47', site_web: 'https://www.coteaquitaineplaisance.fr',
    email: 'arcachon@coteaquitaineplaisance.fr', email_dirigeant: 'christophe.cuffaut@coteaquitaineplaisance.fr',
    dirigeant_principal: 'Christophe Cuffaut (Dirigeant agence Arcachon)',
    linkedin_dirigeant: '',
    siren: '481367068', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel coteaquitaineplaisance.fr',
    data: {
      marques_distribuees: 'Beneteau gamme moteur, Lagoon catamarans',
      gamme_prix: '40k€ - 800k€',
      services: 'VENTE neuf + brokerage Bassin — VENTE pure',
      signaux_stagnation: 'Marché bassin Arcachon ultra qualifié (CSP+ Bordeaux/Paris), pas de stratégie ads B2C visible'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'La Rochelle', entreprise: 'West Yacht Broker (Jeanneau / Prestige / Excess)', adresse: 'Port des Minimes, 17000 La Rochelle', telephone: '05 46 44 26 91',
    portable_dirigeant: '', site_web: 'https://wyb.fr',
    email: 'contact@wyb.fr', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel wyb.fr / Jeanneau dealer locator',
    data: {
      marques_distribuees: 'Jeanneau (Cap Camarat, Merry Fisher, Leader, Velasco), Prestige Yachts, Excess catamarans, Zodiac',
      gamme_prix: '20k€ - 1M€',
      services: 'VENTE neuf + brokerage occasion + maintenance — dominante VENTE',
      signaux_stagnation: "Port des Minimes 1er port plaisance Europe, gros volume mais site moyen, peu d'acquisition active"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Saint-Raphaël', entreprise: 'HD Marine (Jeanneau / Prestige / Lagoon)', adresse: 'Port Santa Lucia, 83700 Saint-Raphaël', telephone: '04 94 95 11 33',
    portable_dirigeant: '', site_web: 'https://www.hdmarine.com',
    email: 'contact@hdmarine.com', email_dirigeant: 'leopold@hdmarine.com',
    dirigeant_principal: 'Léopold Mandier (DG / Associé) / Bastien Infante (Président)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/infante-bastien-6462861a',
    siren: '948791124', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel hdmarine.com / Pappers / LinkedIn',
    data: {
      marques_distribuees: 'Jeanneau (gamme complète), Prestige Yachts, Lagoon catamarans, Yamaha hors-bord',
      gamme_prix: '30k€ - 2M€',
      services: 'VENTE neuf + brokerage occasion + atelier + parking 5000m² couvert — dominante VENTE',
      signaux_stagnation: 'Élu Best Dealer Jeanneau hors-bord 2020/2021, groupe Euro-Voiles structuré MAIS site multi-sites peu funnel, 0 ads Meta visibles'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Hyères', entreprise: 'Euro-Voiles (Jeanneau / Prestige / Lagoon / Zodiac)', adresse: "2315 Avenue de l'Aéroport, 83400 Hyères", telephone: '04 94 12 52 48',
    portable_dirigeant: '', site_web: 'https://www.euro-voiles.com',
    email: 'contact@euro-voiles.com', email_dirigeant: 'christophe.equi@euro-voiles.com',
    dirigeant_principal: 'Bastien Infante (DG Groupe) / Christophe Equi (Directeur Commercial)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/infante-bastien-6462861a',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel euro-voiles.com / LinkedIn',
    data: {
      marques_distribuees: 'Jeanneau, Jeanneau Yachts, Prestige Yachts, Lagoon catamarans + motor, CNB Yacht, Zodiac, Suzuki',
      gamme_prix: '25k€ - 3M€',
      services: 'VENTE neuf + brokerage + 100+ occasions en stock + chantier + management — dominante VENTE',
      signaux_stagnation: 'Groupe 70 employés 50 ans expérience, site qui couvre tout mais sans funnel acquisition lead serré, opportunité Lagoon catamaran ads colossale'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Antibes', entreprise: 'Riviera Plaisance (Jeanneau / Prestige / Lagoon)', adresse: 'Port Vauban, 06600 Antibes', telephone: '04 93 34 31 76',
    portable_dirigeant: '', site_web: 'https://www.riviera-plaisance.com',
    email: 'contact@riviera-plaisance.com', email_dirigeant: '',
    dirigeant_principal: 'Vianney Guézénec (DG) / Guillaume & Adrien Letellier (Actionnaires)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/vianney-guezenec/',
    siren: '534022108', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel riviera-plaisance.com / ActuNautique fév 2026',
    data: {
      marques_distribuees: 'Jeanneau, Prestige Yachts, Fountaine Pajot, CNB, Wellcraft, Glastron, Lagoon',
      gamme_prix: '30k€ - 1,5M€',
      services: 'VENTE neuf + brokerage 3 sites (Antibes/Golfe-Juan/Beaulieu) — dominante VENTE',
      signaux_stagnation: "Rachat janvier 2026 par frères Letellier (Exclusive Yacht Riviera), phase de restructuration = besoin d'acquisition leads pour relancer pipeline"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Marseille', entreprise: 'Sud Plaisance (Quicksilver / Candela)', adresse: 'Port de la Pointe Rouge, 13008 Marseille', telephone: '04 91 72 66 75',
    portable_dirigeant: '', site_web: 'https://www.sudplaisance.com',
    email: 'contact@sudplaisance.com', email_dirigeant: '',
    dirigeant_principal: 'Bruno Delahaye (Gérant)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/bruno-delahaye-sud-plaisance/',
    siren: '', forme_juridique: 'SARL', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel sudplaisance.com',
    data: {
      marques_distribuees: 'Quicksilver (1er distributeur France), Candela électrique, Mercury Marine',
      gamme_prix: '25k€ - 250k€',
      services: 'VENTE neuf + occasion + maintenance 2 sites (Marseille + Mandelieu/Golfe-Juan) — dominante VENTE',
      signaux_stagnation: 'Site très orienté SEO local mais peu de funnel lead, marché Quicksilver entry-segment ultra concurrentiel sur ads = grosse opportunité'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'Sud Plaisance Mandelieu', adresse: 'Avenue Henry Clews, 06210 Mandelieu-la-Napoule', telephone: '04 83 65 17 53',
    portable_dirigeant: '', site_web: 'https://www.sudplaisance.com',
    email: 'mandelieu@sudplaisance.com', email_dirigeant: '',
    dirigeant_principal: 'Christophe (Commercial Mandelieu) — Bruno Delahaye gérant',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel sudplaisance.com',
    data: {
      marques_distribuees: 'Quicksilver, Candela',
      gamme_prix: '25k€ - 250k€',
      services: 'VENTE neuf Quicksilver + occasion + entretien — VENTE',
      signaux_stagnation: 'Sub-site identique à Marseille, peu de différenciation locale digitale'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Arzon', entreprise: 'West Yachting (Jeanneau / Prestige / White Shark)', adresse: 'Port du Crouesty, 56640 Arzon', telephone: '02 97 53 87 30',
    portable_dirigeant: '', site_web: 'https://www.west-yachting.com',
    email: 'contact@west-yachting.com', email_dirigeant: '',
    dirigeant_principal: 'Frédéric Bauchet (Président Groupe)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/frédéric-bauchet-west-yachting/',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel west-yachting.com',
    data: {
      marques_distribuees: 'Jeanneau (gamme moteur + voile), Prestige Yachts, White Shark RIB',
      gamme_prix: '40k€ - 1,2M€',
      services: 'VENTE neuf + brokerage 3 ports Bretagne (Arzon, La Trinité, Quiberon) + entretien — dominante VENTE',
      signaux_stagnation: "Fusion Chantier Naval Le Pennec + AMC + rachat No Limit Yacht = expansion mais site lent, peu d'identité ads, marché Bretagne CSP+ Paris sous-exploité"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Ouistreham', entreprise: 'SNIP Yachting (Bavaria / Targa)', adresse: 'Quai Georges Thierry, 14150 Ouistreham', telephone: '02 31 97 34 47',
    portable_dirigeant: '', site_web: 'https://www.snip-yachting.com',
    email: 'targa@snip-yachting.com', email_dirigeant: 'francois.blossier@snip-yachting.com',
    dirigeant_principal: 'François Gilbert Blossier (DG) / SEBI (Président)',
    linkedin_dirigeant: '',
    siren: '300054137', forme_juridique: 'SA', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel snip-yachting.com / Pappers',
    data: {
      marques_distribuees: 'Targa (importateur France), Bavaria Yachts (1 des 4 importateurs France)',
      gamme_prix: '40k€ - 700k€',
      services: 'VENTE neuf + brokerage occasion 3 sites (Ouistreham, Arzal, Caen) — dominante VENTE',
      signaux_stagnation: 'Site daté, 0 acquisition ads payantes, marque Targa norvégienne en perte vitesse, marché Manche/Atlantique haut de gamme à structurer digital'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Golfe-Juan', entreprise: 'Star Yachting (Bavaria / Nautitech)', adresse: 'Chemin de la Petite Vitesse, 06220 Golfe-Juan', telephone: '04 93 63 18 64',
    portable_dirigeant: '', site_web: 'https://www.star-yachting.fr',
    email: 'info@star-yachting.fr', email_dirigeant: '',
    dirigeant_principal: 'Léa Anne-Sophie Delcoigne (Gérante)',
    linkedin_dirigeant: 'https://fr.linkedin.com/company/staryachting',
    siren: '421487612', forme_juridique: 'SARL', note_avis: 4.4, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel star-yachting.fr / Pappers',
    data: {
      marques_distribuees: "Bavaria Yachts (exclu Côte d'Azur), Nautitech catamarans",
      gamme_prix: '80k€ - 700k€',
      services: 'VENTE neuf + brokerage occasion + place de port + charter — dominante VENTE',
      signaux_stagnation: 'Site léger, 0 funnel agressif, marché Bavaria en France perd parts, opportunité ads cible voile/cata premium'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Lège-Cap-Ferret', entreprise: 'Sensey Nautic (Boston Whaler / Monterey / Joker Boat)', adresse: '2 rue Jacques Cassard, 33950 Lège-Cap-Ferret', telephone: '05 56 60 49 90',
    portable_dirigeant: '', site_web: 'https://www.sensey-nautic.com',
    email: 'contact@sensey-nautic.com', email_dirigeant: '',
    dirigeant_principal: 'Simon Sensey & Elodie Sensey (Co-gérants)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/simon-sensey/',
    siren: '485134142', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel sensey-nautic.com / Pappers',
    data: {
      marques_distribuees: 'Boston Whaler (exclu SW France), Monterey Boats (exclu SW), Joker Boat semi-rigide italien, Mercury, Volvo Penta',
      gamme_prix: '50k€ - 700k€',
      services: 'VENTE neuf + brokerage + chantier + maintenance Mercury/Volvo — dominante VENTE',
      signaux_stagnation: 'Marché Bassin Arcachon ultra-qualifié pour ce ticket (CSP+ Bordeaux + Pyla), site sympa MAIS pas de pipe ads. Opportunité énorme Boston Whaler 250/280 Outrage'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Le Barcarès', entreprise: 'Barcarès Yachting (Absolute / Boston Whaler / Pardo / Capelli / Sacs)', adresse: 'Port de Barcarès, 66420 Le Barcarès', telephone: '04 68 86 44 88',
    portable_dirigeant: '', site_web: 'https://barcares-yachting.fr',
    email: 'contact@barcares-yachting.fr', email_dirigeant: 'pierre.ferrer@barcares-yachting.fr',
    dirigeant_principal: 'Pierre Ferrer (Président Fondateur) / Ludovic Houdart (DAF)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/pierre-ferrer-44a6a079/',
    siren: '379111669', forme_juridique: 'SARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel barcares-yachting.fr / Pappers / LinkedIn',
    data: {
      marques_distribuees: 'Absolute Yachts (Best Growing Dealer 2023), Boston Whaler, Pardo Yachts, Capelli Tempest, Sacs Marine',
      gamme_prix: '60k€ - 4M€',
      services: 'VENTE neuf + brokerage occasion + atelier + grue privée 1200m² showroom — dominante VENTE',
      signaux_stagnation: '22 employés, hall 1200m², bon réseau marques MAIS site peu vendeur, 0 publicité Meta visible, énorme opportunité Absolute 50-60 pieds sur clientèle Bordelais/Toulousain'
    }
  },

  // ── Concessionnaires JET-SKIS (Yamaha, Sea-Doo, Kawasaki — souvent multimarques + day-boats) ──
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Hyères', entreprise: 'Audemar (Yamaha / Sea-Doo / Kawasaki jet ski)', adresse: '2736 Boulevard de la Marine, 83400 Hyères', telephone: '04 94 05 30 30',
    portable_dirigeant: '', site_web: 'https://www.ventejetski.audemar.com',
    email: 'jet@audemar.com', email_dirigeant: '',
    dirigeant_principal: 'Famille Audemar (Gérants)',
    linkedin_dirigeant: 'https://www.linkedin.com/company/audemar/',
    siren: '', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel audemar.com / ventejetski.audemar.com',
    data: {
      marques_distribuees: 'Yamaha WaveRunner, Sea-Doo BRP, Kawasaki, CF Moto, Suzuki, TGB, Adly + Bombard semi-rigides',
      gamme_prix: '12k€ - 35k€',
      services: 'VENTE neuf jet-ski + occasion + accessoires + atelier + base loisirs (loc ponctuelle) — dominante VENTE depuis 1987',
      signaux_stagnation: 'Concessionnaire historique 1987, multi-marques fortes, MAIS site daté style early-2010s, énorme opportunité Meta Ads (jet-ski ultra-impulsif), funnel actuel = 0'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Marseille', entreprise: 'Protec Mer (Yamaha WaveRunner / Bombard)', adresse: '27 Boulevard Gay Lussac, 13014 Marseille', telephone: '04 91 02 53 83',
    portable_dirigeant: '', site_web: 'https://www.protecmer.com',
    email: 'contact@protecmer.com', email_dirigeant: '',
    dirigeant_principal: 'Bernard Ranzieri (Gérant)',
    linkedin_dirigeant: '',
    siren: '333867299', forme_juridique: 'SARL', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel protecmer.com / Pappers',
    data: {
      marques_distribuees: 'Yamaha WaveRunner (exclu Bouches-du-Rhône depuis 2025) + Bombard semi-rigides + moteurs Yamaha',
      gamme_prix: '12k€ - 60k€',
      services: 'VENTE neuf + occasion + maintenance + atelier — dominante VENTE, jet ski nouvelle activité 2025',
      signaux_stagnation: 'Distribution exclusive Yamaha 13 = territoire vierge à scaler, site très technique mais 0 funnel B2C, exemple de cible parfaite Meta ads Marseille/PACA'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Urrugne', entreprise: 'Cobra Watercraft (Yamaha WaveRunner / Kawasaki)', adresse: 'ZA Martin Zaharenia, 64122 Urrugne', telephone: '05 59 54 64 92',
    portable_dirigeant: '', site_web: 'https://www.cobrawatercraft.com',
    email: 'contact@cobrawatercraft.com', email_dirigeant: '',
    dirigeant_principal: 'Alain Lay (Gérant fondateur)',
    linkedin_dirigeant: '',
    siren: '325901619', forme_juridique: 'EI', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel cobrawatercraft.com / Pappers',
    data: {
      marques_distribuees: 'Yamaha WaveRunner, Kawasaki jet-ski',
      gamme_prix: '12k€ - 30k€',
      services: 'VENTE neuf jet-ski + occasion + atelier + accessoires + SAV — dominante VENTE (pas de loc plage)',
      signaux_stagnation: '24 ans expérience Pays Basque, marché CSP+ Biarritz/Saint-Jean-de-Luz ultra qualifié pour jet-ski, site basique, 0 acquisition digitale active'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Mandelieu-la-Napoule', entreprise: 'Dolphy Services (Axopar / Nimbus / Paragon)', adresse: 'Port de La Rague, CS 90015, 06213 Mandelieu-la-Napoule', telephone: '04 93 45 40 18',
    portable_dirigeant: '+33 6 09 52 77 66', site_web: 'https://dolphyservices.fr',
    email: 'sales@dolphyservices.fr', email_dirigeant: 'dolphy.services@wanadoo.fr',
    dirigeant_principal: 'Stéphane Delfino (Fondateur Gérant)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/stephane-delfino-dolphy/',
    siren: '449852367', forme_juridique: 'EURL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel dolphyservices.fr / axopar.com dealer / Pappers',
    data: {
      marques_distribuees: "Axopar (exclu 06), Nimbus Boats (exclu France+Monaco), Paragon Yachts (exclu France+Monaco) — n'est PAS jet-ski mais inclus pour day-boat haut de gamme",
      gamme_prix: '80k€ - 1,5M€',
      services: 'VENTE neuf + brokerage + maintenance + livraison — dominante VENTE',
      signaux_stagnation: 'Importateur exclusif puissant Axopar (marque hype) MAIS sites multiples (nimbus-france / axopar-france / paragonyachts-france / dolphyservices) éclatés et tous datés, opportunité massive de centraliser et ads'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Six-Fours-les-Plages', entreprise: 'Six Fours Plaisance (Quicksilver / Zodiac / Mercury)', adresse: 'Avenue de la Mer, 83140 Six-Fours-les-Plages', telephone: '04 94 25 25 30',
    portable_dirigeant: '', site_web: 'https://www.sixfoursplaisance.com',
    email: 'contact@sixfoursplaisance.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.2, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel sixfoursplaisance.com',
    data: {
      marques_distribuees: 'Quicksilver, Zodiac semi-rigides, Mercury moteurs hors-bord',
      gamme_prix: '20k€ - 150k€',
      services: 'VENTE neuf bateau + moteur Mercury + semi-rigide Zodiac — dominante VENTE',
      signaux_stagnation: 'Marché Var ultra-saisonnier, site très daté, opportunité acquisition Meta nettement sous-exploitée'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Martigues', entreprise: 'Nautic 2000 (Quicksilver / Bayliner / Zeppelin)', adresse: 'Route de la Mer, 13500 Martigues', telephone: '04 42 80 89 90',
    portable_dirigeant: '', site_web: 'https://www.nautic2000.com',
    email: 'contact@nautic2000.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel nautic2000.com',
    data: {
      marques_distribuees: 'Quicksilver, Bayliner, Zeppelin semi-rigides 100% français + Mercury moteurs',
      gamme_prix: '25k€ - 200k€',
      services: 'VENTE neuf + brokerage occasion + maintenance — VENTE pure',
      signaux_stagnation: 'Côte Bleue marché plein potentiel (proximité Marseille/Aix), site moyen, 0 ads visible'
    }
  },

  // ── Yacht brokers VENTE premium Côte d'Azur / Monaco (brokerage dominant VENTE, charter en complément) ──
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Fraser Yachts Monaco', adresse: '2 Quai Antoine 1er, 98000 Monaco', telephone: '+377 93 10 04 50',
    portable_dirigeant: '', site_web: 'https://www.fraseryachts.com',
    email: 'monaco@fraseryachts.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: 'https://www.linkedin.com/company/fraser-yachts/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel fraseryachts.com',
    data: {
      marques_distribuees: 'Brokerage multi-marques superyachts > 30m (Benetti, Lürssen, Feadship, Heesen, Sanlorenzo, etc)',
      gamme_prix: '3M€ - 200M€',
      services: 'VENTE/ACHAT brokerage (50%+) + charter + management + construction — VENTE dominante',
      signaux_stagnation: 'Leader mondial, site corporate dense MAIS très peu d\'acquisition ads sur ticket VENTE (ils misent réseau + bouche-à-oreille HNWI), opportunité ads ultra-niche Sentiment/Family Office Europe'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Burgess Yachts Monaco', adresse: 'Le Panorama Bloc A, 7a, 57 Rue Grimaldi, 98000 Monaco', telephone: '+377 97 97 81 21',
    portable_dirigeant: '', site_web: 'https://www.burgessyachts.com',
    email: 'monaco@burgessyachts.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: 'https://www.linkedin.com/company/burgess/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel burgessyachts.com',
    data: {
      marques_distribuees: 'Brokerage indépendant superyachts > 30m',
      gamme_prix: '3M€ - 250M€',
      services: 'VENTE brokerage + charter + management + crew — VENTE 50%+',
      signaux_stagnation: 'Top 3 mondial brokerage superyacht, 0 funnel ads digital (clientèle UHNWI réseau pur), opportunité scaling Mid-Atlantic family office sur ticket 20-40M€'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Camper & Nicholsons International Monaco', adresse: 'Le Gildo Pastor Center, 7 rue du Gabian, 98000 Monaco', telephone: '+377 97 97 77 00',
    portable_dirigeant: '', site_web: 'https://camperandnicholsons.com',
    email: 'monaco@camperandnicholsons.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: 'https://www.linkedin.com/company/camper-and-nicholsons-international/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel camperandnicholsons.com',
    data: {
      marques_distribuees: 'Brokerage superyachts multi-marques (Benetti, Sanlorenzo, Mangusta, Princess, Sunseeker, etc)',
      gamme_prix: '2M€ - 200M€',
      services: 'VENTE brokerage + charter + management + new build — VENTE dominante',
      signaux_stagnation: "Marque historique (1782), perception très traditionnelle, peu d'innovation digitale, opportunité ads sur next-gen UHNWI Tech/Crypto"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Edmiston Monaco', adresse: 'Le Roccabella, 24 Avenue Princesse Grace, 98000 Monaco', telephone: '+377 93 30 54 44',
    portable_dirigeant: '', site_web: 'https://www.edmiston.com',
    email: 'monaco@edmiston.com', email_dirigeant: '',
    dirigeant_principal: 'Jamie Edmiston (CEO Groupe) / Nicholas Edmiston (Chairman Fondateur)',
    linkedin_dirigeant: 'https://www.linkedin.com/company/edmiston-and-company',
    siren: '', forme_juridique: 'SAM', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel edmiston.com / RocketReach',
    data: {
      marques_distribuees: 'Brokerage superyachts ultra-premium > 30m',
      gamme_prix: '5M€ - 300M€',
      services: 'VENTE brokerage + charter + management + new build — VENTE dominante',
      signaux_stagnation: 'Très lifestyle/éditorial, ZÉRO acquisition lead funnel, dépendance Salon Monaco/Cannes + référencement personnel'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Northrop & Johnson Monaco', adresse: 'Le Panorama 7th floor, 57 Rue Grimaldi, 98000 Monaco', telephone: '+377 97 77 27 20',
    portable_dirigeant: '+33 6 73 38 25 43', site_web: 'https://www.northropandjohnson.com',
    email: 'monaco@northropandjohnson.com', email_dirigeant: 'slegall@northropandjohnson.com',
    dirigeant_principal: 'Samuel Le Gall (Charter & Sales Broker Monaco)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/samuel-le-gall-yacht/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel northropandjohnson.com',
    data: {
      marques_distribuees: 'Brokerage superyacht multi-marques',
      gamme_prix: '3M€ - 200M€',
      services: 'VENTE brokerage + charter + management — VENTE dominante',
      signaux_stagnation: 'Site dense, partenariat MarineMax (USA) qui pourrait booster digital France, opportunité ads UHNWI Suisse/Allemagne via Monaco'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'IYC International Yacht Company Monaco', adresse: 'Les Caravelles, 25 Bd Albert 1er, 98000 Monaco', telephone: '+377 97 98 24 24',
    portable_dirigeant: '', site_web: 'https://iyc.com',
    email: 'monaco@iyc.com', email_dirigeant: '',
    dirigeant_principal: 'Mathilde de Roffignac (Corporate Representative Monaco)',
    linkedin_dirigeant: 'https://www.linkedin.com/company/iyc-yachts/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel iyc.com',
    data: {
      marques_distribuees: 'Brokerage multi-marques superyachts',
      gamme_prix: '2M€ - 200M€',
      services: 'VENTE brokerage + charter + management — VENTE',
      signaux_stagnation: 'Site international correct mais peu de signal France actif, opportunité géographique forte sur clientèle francophone Genève/Bruxelles'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Monaco', entreprise: 'Y.CO Monaco', adresse: 'Le Roccabella, 24 Avenue Princesse Grace, 98000 Monaco', telephone: '+377 93 50 12 12',
    portable_dirigeant: '', site_web: 'https://y.co',
    email: 'monaco@y.co', email_dirigeant: '',
    dirigeant_principal: 'Charlie Birkett (Co-Founder CEO Groupe)',
    linkedin_dirigeant: 'https://www.linkedin.com/company/y.co/',
    siren: '', forme_juridique: 'SAM', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel y.co',
    data: {
      marques_distribuees: 'Brokerage superyachts > 35m',
      gamme_prix: '5M€ - 250M€',
      services: 'VENTE brokerage + charter + management + crew — VENTE',
      signaux_stagnation: 'Site moderne (un des meilleurs de la catégorie) mais funnel B2C inexistant, pari brand-led, opportunité performance marketing dormante'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Golfe-Juan', entreprise: 'Ocean Drive Marine', adresse: 'Port Camille Rayon, 06220 Golfe-Juan', telephone: '04 93 63 66 50',
    portable_dirigeant: '', site_web: 'https://www.oceandrive.fr',
    email: 'info@oceandrive.fr', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: 'https://www.linkedin.com/company/ocean-drive-marine/',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel oceandrive.fr',
    data: {
      marques_distribuees: 'Brokerage multi-marques yachts 15-50m (Princess, Sunseeker, Ferretti, Azimut occasion etc) + new builds',
      gamme_prix: '500k€ - 15M€',
      services: 'VENTE brokerage occasion + new sales + charter + management + refit — VENTE dominante',
      signaux_stagnation: "25 ans (1999), site éditorial OK mais funnel léger, terrain de chasse Côte d'Azur sur yacht 20-30m parfait pour Meta ads ciblées CSP++ France/Suisse"
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Cannes', entreprise: 'Allied Yachting', adresse: 'Boulevard de La Croisette, Port Canto, 06400 Cannes', telephone: '04 93 43 82 83',
    portable_dirigeant: '', site_web: 'https://alliedyachting.com',
    email: 'info@alliedyachting.com', email_dirigeant: '',
    dirigeant_principal: '', linkedin_dirigeant: 'https://www.linkedin.com/company/allied-yachting/',
    siren: '', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel alliedyachting.com / PagesJaunes',
    data: {
      marques_distribuees: 'Brokerage multi-marques 15-60m (Princess, Sunseeker, Riva, Pershing, Ferretti)',
      gamme_prix: '500k€ - 30M€',
      services: 'VENTE brokerage occasion + charter + new sales + management — VENTE dominante',
      signaux_stagnation: 'Site SEO basique mais bien référencé, opportunité paid social ciblée par yacht spécifique (catalogue de 200+ yachts)'
    }
  },
  {
    id: bid(), app: 'indescale', secteur_id: 'mobilite', categorie: 'Bateaux / semi-rigides / jet-skis',
    ville: 'Montpellier', entreprise: 'Bernard Gallay Yacht Brokerage (BGYB)', adresse: '1 rue Barthez, 34000 Montpellier', telephone: '04 67 66 39 93',
    portable_dirigeant: '', site_web: 'https://www.bernard-gallay.com',
    email: 'info@bernard-gallay.com', email_dirigeant: 'bernard@bernard-gallay.com',
    dirigeant_principal: 'Bernard Gallay (Fondateur Gérant)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/bernard-gallay/',
    siren: '', forme_juridique: 'SARL', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'site officiel bernard-gallay.com / MYBA Association',
    data: {
      marques_distribuees: 'Brokerage voilier/cata haut de gamme + yachts moteur 15-40m',
      gamme_prix: '300k€ - 15M€',
      services: 'VENTE brokerage + charter + management — VENTE',
      signaux_stagnation: 'Bureau Montpellier base solide + offices Paris/Palma/Monaco, niche voile cruising premium (Vendée Globe Bernard), 0 acquisition active, opportunité Meta ads niche bluewater'
    }
  },
]
