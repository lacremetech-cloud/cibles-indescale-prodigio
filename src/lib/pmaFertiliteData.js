// Cibles RÉELLES « PMA / cliniques de fertilité » (INDESCALE).
// Secteur services-sante. Tickets 5-15k€ FIV/ICSI / 3-5k€ préservation ovocytes / 1-2k€ IIU.
// Marché en croissance forte depuis loi bioéthique 2021 (ouverture PMA à toutes les femmes,
// autoconservation ovocytes élective autorisée). Concurrence tourisme PMA Espagne/Belgique.
//
// ATTENTION DÉONTOLOGIE : Pub santé France encadrée par décret 2020-1662 (info loyale OK,
// pas de comparaison commerciale ni témoignages garantis). PMA spécifique : loi bioéthique
// 2021 art. L.2141-1 interdit promotion commerciale don gamètes. Préservation élective OK
// en soft ads pédagogique / lead magnet. Pas de "garantie résultat".
//
// EXCLUS : CHU publics, mutualistes pures, cliniques étrangères (Eugin Espagne, IVI...).
// Données telles que trouvées en sources officielles (ARS, ABM, sites cliniques) ;
// jamais d'invention de portable / email.

let _p = 0
const pid = () => 'pma-' + (++_p)

export const PMA_FERTILITE_PROSPECTS = [
  // ── Cliniques privées PMA / fertilité autorisées ARS (13 cibles) ──
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'Clinique de la Muette (Ramsay Santé) — Centre de Fertilité', adresse: '46-48 rue Nicolo, 75016 Paris',
    telephone: '01 40 72 33 41', portable_dirigeant: '', site_web: 'https://clinique-de-la-muette-paris.ramsaysante.fr/centre-de-fertilite-de-la-muette',
    email: 'pma.lamuette@ramsaysante.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Claude Debache & Dr Charles Dray (Fertilia, médecins référents) — Médecine de la reproduction',
    linkedin_dirigeant: '',
    siren: '448937417', forme_juridique: 'SAS (Ramsay Santé)', note_avis: 4.1, note_priorite: 'Haute', statut: 'À contacter',
    source: 'ramsaysante.fr / procreation-medicale.fr / fertilia.fr',
    data: {
      specialites: "FIV / ICSI / IIU / DPI / vitrification ovocytes / préservation fertilité (partenariat Laboratoire Eylau)",
      actes_phares: "Plus de 30 ans d'expérience, seul centre PMA privé Paris intra-muros, >2000 cycles FIV/an, équipe gynéco + biologistes + psychologues",
      ticket_moyen: '5k-10k€ cycle FIV / 3-5k€ préservation ovocytes',
      autorisation_ars: 'Autorisé ARS Île-de-France clinique + biologique',
      signaux_stagnation: "Site Ramsay institutionnel, dépendance bouche-à-oreille + Doctolib, 0 ads Meta visible, opportunité = capter patientèle Paris/IDF qui hésite Espagne (IVI/Eugin) angle 'privé français + remboursement Sécu + qualité'"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Neuilly-sur-Seine', entreprise: 'American Hospital of Paris — Centre AMP / FIV', adresse: '63 Boulevard Victor Hugo, 92202 Neuilly-sur-Seine',
    telephone: '01 46 41 28 81', portable_dirigeant: '', site_web: 'https://www.american-hospital.org/nos-specialites/assistance-medicale-la-procreation',
    email: 'fivete_secretariat@ahparis.org', email_dirigeant: 'pascal.briot@ahparis.org',
    dirigeant_principal: 'Dr Charles Brami (responsable AMP) + Dr Fabien Krief + Dr Julien Lepage (gynécos PMA)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'Association (statut ESPIC)', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'american-hospital.org / fiv.fr',
    data: {
      specialites: 'FIV / ICSI / IMSI / vitrification embryons / préservation fertilité / hystéroscopie',
      actes_phares: "2337 transferts d'embryons frais + congelés 2024 = top 5 France, pôle hôpital privé international",
      ticket_moyen: '6k-15k€ FIV (dépassements honoraires secteur 2 + reste à charge important), 4-6k€ préservation',
      autorisation_ars: 'Autorisé ARS Île-de-France clinique + biologique',
      signaux_stagnation: 'Public bilingue CSP+ et international (expat), site institutionnel, faible Meta Ads, énorme opportunité lead-gen ciblée Paris Ouest / 92 / expat anglophones'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Suresnes', entreprise: 'Hôpital Foch — Institut Santé Femme & Fertilité', adresse: '40 rue Worth, 92151 Suresnes',
    telephone: '01 46 25 19 90', portable_dirigeant: '', site_web: 'https://www.gynfoch.com/parcours-de-soin-amp',
    email: 'rdv.amp@hopital-foch.com', email_dirigeant: '',
    dirigeant_principal: 'Pr Jean-Marc Ayoubi (Chef de service Gynéco-Obstétrique + PMA, UVSQ) — Médecine reproduction, figure médiatique',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/jean-marc-ayoubi',
    siren: '', forme_juridique: "ESPIC (Établissement privé d'intérêt collectif)", note_avis: 4.2, note_priorite: 'Haute', statut: 'À contacter',
    source: 'hopital-foch.com / uvsq.fr / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité oncologique + sociétale / 1er Institut Santé Femme & Fertilité de France (2024)',
      actes_phares: 'Centre inauguré 2016, Pr Ayoubi médiatique (sortie publique PMA + objection conscience), institut dédié femme/fertilité ouvert récemment',
      ticket_moyen: '5k-10k€ FIV / 4-5k€ préservation ovocytes',
      autorisation_ars: 'Autorisé ARS Île-de-France clinique + biologique',
      signaux_stagnation: "Notoriété médiatique forte mais pas convertie en lead-gen digital, site Foch institutionnel, opportunité = monter funnel 'Institut Santé Femme' Meta Ads IDF 30-45 ans"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Neuilly-sur-Seine', entreprise: 'Centre FIV Unilabs-Eylau Pierre Cherest — Clinique Ambroise Paré', adresse: '25-27 Boulevard Victor Hugo, 92200 Neuilly-sur-Seine',
    telephone: '01 73 06 02 00', portable_dirigeant: '', site_web: 'https://www.ambroisepare.fr/en/specialties/medically-assisted-reproduction-mar/',
    email: 'labo.cherest@unilabs.com', email_dirigeant: 'ampcherest@eylau.fr',
    dirigeant_principal: 'Équipe Unilabs Eylau (Centre fondé 1986) — Médecine + biologie de la reproduction',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (groupe Unilabs)', note_avis: 4.0, note_priorite: 'Haute', statut: 'À contacter',
    source: 'my-unilabs.fr / blefco.eu / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IMSI / vitrification / préservation fertilité — laboratoire biologique référence IDF',
      actes_phares: '+14 000 enfants nés depuis 1986, déménagé sept. 2024 nouveaux locaux Clinique Ambroise Paré (Hartmann)',
      ticket_moyen: '5k-10k€ FIV',
      autorisation_ars: 'Autorisé ARS Île-de-France biologique (laboratoire fertilité)',
      signaux_stagnation: 'Marque historique mais peu visible digital, opportunité = capitaliser sur transfert vers Ambroise Paré pour relancer lead-gen Meta + Google Ads Neuilly/Hauts-de-Seine'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Lyon', entreprise: 'Hôpital Privé Natecia — Centre AMP Fertily', adresse: '22 Avenue Rockefeller, 69008 Lyon',
    telephone: '04 78 00 33 34', portable_dirigeant: '', site_web: 'https://natecia.fr/pole-mere-enfant/specialites-du-pole-mere-enfant/fertilite/',
    email: 'fertily.natecia@noalys.com', email_dirigeant: '',
    dirigeant_principal: 'Équipe Fertilyon (Dr Bied-Damon, Dr Mirakian, Dr Donadieu, Dr Sibeud, Dr Briet-Daragon)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SA (groupe Noalys)', note_avis: 4.2, note_priorite: 'Haute', statut: 'À contacter',
    source: 'natecia.fr / fertilyon.com / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité — leader Lyon privé',
      actes_phares: '~900 cycles FIV/an, ~1000 IIU/an, ~2500 spermogrammes/an, partenariat fort Fertilyon (depuis 2007)',
      ticket_moyen: '5k-9k€ FIV / 3-5k€ préservation',
      autorisation_ars: 'Autorisé ARS Auvergne-Rhône-Alpes clinique + biologique',
      signaux_stagnation: 'Site Natecia institutionnel + sous-domaine docvitae, dépendance prescription gynécos, opportunité = scaler marque Fertilyon Meta Ads + landing lead magnet'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Lyon', entreprise: 'Clinique du Parc Lyon (Elsan) — Pôle Fertilité / Fertilyon', adresse: '155 Ter Boulevard de Stalingrad, 69006 Lyon',
    telephone: '04 72 44 88 88', portable_dirigeant: '', site_web: 'https://www.elsan.care/fr/clinique-parc-lyon/Fertilit%C3%A9',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Pascale Mirakian (cofondatrice Fertilyon) + Dr Marika Donadieu + Dr Véronique Bied-Damon',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (groupe Elsan)', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'cliniqueduparclyon.com / fertilyon.com / doctolib.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité / consultations infertilité couple',
      actes_phares: 'Pôle fertilité Elsan, équipe 5 médecins gynécos PMA, association Fertilyon depuis 2007',
      ticket_moyen: '5k-9k€ FIV (secteur 2)',
      autorisation_ars: 'Autorisé ARS Auvergne-Rhône-Alpes (clinique + biologie Eurofins)',
      signaux_stagnation: 'Site Elsan corporate, peu de différenciation entre Parc et Natecia (même équipe), opportunité = unifier marque Fertilyon en SaaS lead-gen Meta + landing conversion'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Villeurbanne', entreprise: 'Médipôle Lyon-Villeurbanne — Procreo / Procreo La Soie', adresse: '158 rue Léon Blum, 69100 Villeurbanne (+ 35 rue de la Soie)',
    telephone: '04 78 93 89 68', portable_dirigeant: '', site_web: 'https://www.procreo-lyon.fr/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Véronique Divry + Dr Godefroy + Dr Marcilly (fondateurs 2009, ex-chefs clinique HFME)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'procreo-lyon.fr / procreolasoie.com / medipolelyonvilleurbanne.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité / accompagnement pluridisciplinaire (sophro, naturopathe, diététicienne)',
      actes_phares: "Centre fondé 2009 Clinique du Tonkin, ouverture 2è site 'Procreo La Soie' — modèle pluridisciplinaire holistique privé",
      ticket_moyen: '5k-9k€ FIV / consultations complémentaires 60-120€/séance',
      autorisation_ars: 'Autorisé ARS Auvergne-Rhône-Alpes (via Médipôle, biologie Eurofins)',
      signaux_stagnation: "Site procreo-lyon.fr daté + procreolasoie.com séparé = funnel fragmenté, équipe complémentaires sous-exploitée, opportunité = positionnement holistique premium Meta Ads (vs CHU froid)"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Marseille', entreprise: 'Clinique Bouchard (Elsan) / IMR — Centre AMP', adresse: '77 Rue du Docteur Escat, 13006 Marseille',
    telephone: '04 91 15 90 21', portable_dirigeant: '', site_web: 'https://www.imrmarseille.com/',
    email: 'bouchard.marseille@elsan.care', email_dirigeant: '',
    dirigeant_principal: 'Équipe IMR (Institut de Médecine de la Reproduction) — partenariat Alphabio + Clinique Bouchard',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (groupe Elsan)', note_avis: 4.2, note_priorite: 'Haute', statut: 'À contacter',
    source: 'elsan.care / imrmarseille.com / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / endométriose / préservation fertilité — 1er centre AMP PACA',
      actes_phares: '~400 naissances/an, regroupement IMR + Alphabio + Bouchard Elsan = centre intégré 1er PACA',
      ticket_moyen: '5k-10k€ FIV',
      autorisation_ars: 'Autorisé ARS PACA clinique + biologique',
      signaux_stagnation: "Site IMR daté, sous-marque Elsan dilue marque, opportunité = positionner '1er centre PACA' + endométriose Meta Ads vs cliniques espagnoles (Eugin Barcelona à 4h Marseille)"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Marseille', entreprise: 'Hôpital Saint-Joseph — Centre Sainte-Colette (Préservation Fertilité)', adresse: '26 Boulevard de Louvain, 13008 Marseille',
    telephone: '04 91 80 69 61', portable_dirigeant: '', site_web: 'https://www.hopital-saint-joseph.fr/votre-hopital-votre-maternite-1/nos-services/centre-sainte-colette/',
    email: 'centresaintecolette@hopital-saint-joseph.fr', email_dirigeant: 'PMASec@hopital-saint-joseph.fr',
    dirigeant_principal: 'Dr Pierre Boyer (biologiste responsable) — Biologie de la reproduction',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'ESPIC (Fondation Saint-Joseph)', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'hopital-saint-joseph.fr / procreation-medicale.fr / blefco.eu',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité féminine + masculine / oncofertilité',
      actes_phares: '747 ponctions FIV 2021, taux 35.58% — podium régional avec Bouchard',
      ticket_moyen: '5k-9k€ FIV (privé non lucratif, dépassements modérés)',
      autorisation_ars: 'Autorisé ARS PACA + habilité préservation autoconservation gametes',
      signaux_stagnation: "Site ESPIC pédagogique mais non orienté conversion, faible Meta, opportunité = Meta Ads sur préservation ovocytes 'élective' (ticket 3-5k€ × volume 30-50 ans CSP+ Marseille)"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Bruges', entreprise: 'Polyclinique Jean Villar (Elsan) — Centre AMP / Centre GAIA', adresse: 'Avenue Maryse Bastié, 33523 Bruges',
    telephone: '05 56 28 66 28', portable_dirigeant: '', site_web: 'https://www.fivbordeaux.com/',
    email: 'centrefiv@aquitainesante.fr', email_dirigeant: '',
    dirigeant_principal: 'Équipe 5 médecins reproduction (Centre GAIA / Eurofins Fertilité) — Pionnier Aquitaine (1er bébé FIV 1983)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (groupe Elsan)', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'fivbordeaux.com / elsan.care / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / vitrification / préservation fertilité — plus gros centre Aquitaine',
      actes_phares: '~800 IIU/an, ~1000 ponctions FIV/an, ~700 TEC, ~500 bébés/an depuis 1982 (le plus ancien et plus gros)',
      ticket_moyen: '5k-9k€ FIV',
      autorisation_ars: 'Autorisé ARS Nouvelle-Aquitaine clinique + biologique',
      signaux_stagnation: 'Marque éclatée entre Centre Gaia, FIV Bordeaux, Polyclinique Jean Villar, peu de funnel Meta, opportunité = unifier marque + cibler Nouvelle-Aquitaine/Sud-Ouest qui hésite Paris ou Espagne'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Quint-Fonsegrives', entreprise: 'Clinique La Croix du Sud (Ramsay Santé) — Institut de Fertilité', adresse: '52 Chemin de Ribaute, 31130 Quint-Fonsegrives (Toulouse)',
    telephone: '05 34 24 51 51', portable_dirigeant: '', site_web: 'https://pma-toulouse.fr/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Équipe Institut de Fertilité La Croix du Sud — Médecine + biologie reproduction (top 6 France 2020)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (Ramsay Santé)', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'clinique-croix-du-sud-toulouse.ramsaysante.fr / pma-toulouse.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité — 1er centre Occitanie, classé 6e France 2020',
      actes_phares: 'Un des rares centres privés autorisés activité PMA complète, podium ABM, ranking national fort',
      ticket_moyen: '5k-9k€ FIV',
      autorisation_ars: 'Autorisé ARS Occitanie clinique + biologique',
      signaux_stagnation: 'Site Ramsay institutionnel + pma-toulouse.fr externe = duplication, opportunité = devenir marque dominante Sud-Ouest (vs Bordeaux) Meta + Google Toulouse/Montpellier/Pau'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Montpellier', entreprise: 'Polyclinique Saint-Roch (OC Santé) — Centre AMP St Roch / IVF France', adresse: '550 avenue du Colonel Pavelet, 34070 Montpellier',
    telephone: '04 67 61 88 13', portable_dirigeant: '', site_web: 'https://ivf-france.fr/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Équipe Centre AMP St Roch — Biologistes + gynécos + psychologues, certifiée ISO 9001 depuis 2010',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (OC Santé)', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'ivf-france.fr / oc-sante.fr / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IMSI / FIVETE / IIU — 1er centre Occitanie privé, top 10 France',
      actes_phares: '~1100 tentatives FIV/an, ~400 enfants nés/an, taux succès 30%/tentative, créé 1999',
      ticket_moyen: '5k-9k€ FIV',
      autorisation_ars: 'Autorisé ARS Occitanie clinique + biologique',
      signaux_stagnation: "Site déjà bilingue FR/EN ciblant patientes internationales (rare en France), positionnement 'tourisme PMA inversé' pertinent, opportunité = scaler ce funnel international + Meta Ads européennes"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Rouen', entreprise: 'Clinique Mathilde (Vivalto Santé) — Centre AMP', adresse: "7 Boulevard de l'Europe, 76100 Rouen",
    telephone: '02 76 64 10 88', portable_dirigeant: '', site_web: 'https://www.amp-mathilde76.fr/',
    email: 'laboratoire.pma@clinique-mathilde.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Véronika Grzegorczyk-Martin + Dr Catherine Avril + Dr Alice Fraissinet (gynécos) / Dr Julie Roset + Dr Pierre Di Pizio (biologistes)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/véronika-grzegorczyk-martin',
    siren: '', forme_juridique: 'SAS (Vivalto Santé)', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'amp-mathilde76.fr / vivalto-sante.fr / blefco.eu',
    data: {
      specialites: 'FIV / ICSI / IIU / DPI / biopsie testiculaire / préservation fertilité — pionnier Normandie',
      actes_phares: '+10 000 enfants conçus, 1ères naissances normandes FIV / TEC / ICSI / biopsie testiculaire (référent régional)',
      ticket_moyen: '5k-9k€ FIV',
      autorisation_ars: 'Autorisé ARS Normandie clinique + biologique',
      signaux_stagnation: 'Site amp-mathilde76.fr dédié = base saine mais peu de funnel paid, opportunité = devenir la marque PMA Normandie privée (Caen + Le Havre incluses) avec Meta Ads'
    }
  },

  // ── Cabinets gynécologues spécialisés infertilité (9 cibles) ──
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'La Maison de la Fertilité — Cabinet pluridisciplinaire', adresse: '7 avenue Gourgaud, 75017 Paris',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.lamaisondelafertilite.fr/',
    email: 'hello@lamaisondelafertilite.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Chloé Tran Huu Le Guay (cofondatrice, gynéco PMA) + Oriane Blanche (cofondatrice)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/chloe-tran-73076a339',
    siren: '', forme_juridique: 'SAS / SELAS', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'lamaisondelafertilite.fr / leslouves.com / airzen.fr',
    data: {
      specialites: 'Bilan fertilité, stimulation ovarienne, IIU, préparation FIV, urologie, endocrinologie, sophrologie, acupuncture, nutrition, ostéo (approche holistique)',
      actes_phares: "1ère 'Maison de la Fertilité' de France (concept retail médical), équipe pluridisciplinaire (gynéco + uro + endocrino + nutri + ostéo + psy + sexo + acupuncteur)",
      ticket_moyen: 'Bilan initial 200-500€ / parcours complet 2-5k€ hors FIV (FIV sous-traitée Bluets)',
      autorisation_ars: 'Activité gynéco médicale + IIU (FIV/ICSI sous-traitée Hôpital Bluets via Drouot)',
      signaux_stagnation: 'Branding fort (presse Les Louves, AirZen), IG actif, mais funnel lead-gen Meta sous-optimisé pour scaler, opportunité = devenir LE Marie-Stopes français de la PMA premium avec Meta + Google'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Neuilly-sur-Seine', entreprise: 'OVA Clinique de la Fertilité — Dr Fabien Krief', adresse: '75 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine',
    telephone: '01 85 13 23 12', portable_dirigeant: '', site_web: 'https://www.gynecologue-fiv.paris/',
    email: 'secretariat@ovaclinique.com', email_dirigeant: '',
    dirigeant_principal: "Dr Fabien Krief — Gynécologue obstétricien spécialiste infertilité (ex-chef clinique Jean Verdier APHP, exerce aussi à l'American Hospital)",
    linkedin_dirigeant: 'https://fr.linkedin.com/in/fabien-krief',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'gynecologue-fiv.paris / doctolib.fr',
    data: {
      specialites: 'Bilan infertilité / IIU / suivi PMA / préservation fertilité / endométriose / suivi grossesse PMA',
      actes_phares: "Cabinet OVA Neuilly + activité FIV à l'American Hospital, médecin star Doctolib (centaines d'avis), public CSP+ Paris Ouest",
      ticket_moyen: 'Consultations 70-150€ secteur 2 / parcours bilan complet 1-2k€',
      autorisation_ars: 'Cabinet libéral gynéco médicale (FIV/ICSI hôpital partenaire)',
      signaux_stagnation: "Site cabinet propre + DA pro, Doctolib saturée, opportunité = lancer Meta Ads médecin avatar + funnel landing 'bilan fertilité 360°' pour scaler patientèle IDF Ouest"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'Cabinet Dr Charles Brami — Infertilité Experts', adresse: '16 Avenue Paul Doumer, 75116 Paris',
    telephone: '01 45 53 16 16', portable_dirigeant: '', site_web: 'https://www.dr-charles-brami.com/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Charles Brami — Gynéco obstétricien, ex-directeur clinique service FIV American Hospital, membre CNGOF + ESHRE + GEFF',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'dr-charles-brami.com / american-hospital.org / infertilite-experts.com',
    data: {
      specialites: 'PMA / FIV / ICSI / cancers gynéco + sein / hyperspécialisation infertilité couple',
      actes_phares: "Ex-directeur clinique FIV American Hospital (2005-), figure d'autorité, double cabinet Paris 16 + AHP, expert légitime 'à l'ancienne'",
      ticket_moyen: 'Consultations 100-200€ secteur 2 / bilan complet 1-2k€',
      autorisation_ars: 'Cabinet libéral gynéco médicale + activité FIV AHP',
      signaux_stagnation: "Branding médecin 'à l'ancienne', site daté, aucune présence Meta Ads, opportunité = brand-rebuild + Google SEA 'expert FIV Paris' + Meta retargeting"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'Cabinet Dr Julien Lepage — Spécialiste PMA', adresse: '12 Avenue Pierre 1er de Serbie, 75116 Paris',
    telephone: '01 58 56 31 21', portable_dirigeant: '', site_web: 'https://drjulienlepage.fr/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Julien Lepage — Gynécologue obstétricien spécialiste infertilité couple + chirurgie fertilité, exerce aussi American Hospital + Neuilly',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'drjulienlepage.fr / doctolib.fr / pagesjaunes.fr',
    data: {
      specialites: 'PMA / FIV / chirurgie fertilité (myomectomie, endométriose) / infertilité masculine + féminine / grossesse PMA',
      actes_phares: 'Triple activité (cabinet Paris 16 + Neuilly + American Hospital), profil chirurgien-FIV rare, secteur 2',
      ticket_moyen: 'Consultations 100-200€ secteur 2',
      autorisation_ars: 'Cabinet libéral gynéco-chirurgie + FIV hôpital partenaire',
      signaux_stagnation: "Site correct mais peu de blog content, 0 Meta Ads, opportunité = positionnement 'le chirurgien-FIV' différenciant + Meta + Google Ads sur endométriose-fertilité"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'Cabinet Dr Anne Oppenheimer — Médecine Reproduction', adresse: '46 Rue Nicolo, 75116 Paris (+ Vanves + Clamart)',
    telephone: '07 56 89 49 09', portable_dirigeant: '', site_web: 'https://www.dranne-oppenheimer-fertilite.com/',
    email: 'dr.anne.oppenheimer@gmail.com', email_dirigeant: 'dr.anne.oppenheimer@gmail.com',
    dirigeant_principal: 'Dr Anne Oppenheimer — Gynéco-obstétricienne, ex-chef clinique APHP, PhD endométriose/sexualité (Paris Saclay), 8 ans Antoine Béclère',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'dranne-oppenheimer-fertilite.com / ramsaysante.fr / doctolib.fr',
    data: {
      specialites: "Médecine reproduction / PMA / endométriose / don d'ovocytes / sexualité-fertilité (PhD)",
      actes_phares: 'Profil académique + recherche (PhD endométriose + sexualité), triple consultation Paris 16 + Vanves + Clamart',
      ticket_moyen: 'Consultations 100-180€ secteur 2',
      autorisation_ars: 'Cabinet libéral gynéco médicale (FIV hôpital partenaire)',
      signaux_stagnation: "Site personnel + Ramsay + 3 cabinets = funnel éclaté, branding 'Dr expert PhD' sous-exploité, opportunité = monter marque 'Endométriose + Fertilité' forte Meta Ads 30-45 ans"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'Cabinet Dr Jérémy Calvo — Centre de Fertilité Étoile', adresse: '45 avenue de Wagram, 75017 Paris',
    telephone: '01 47 66 60 60', portable_dirigeant: '', site_web: 'https://dr-jeremy-calvo.fr/centre-pma-paris/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Jérémy Calvo — Gynécologue obstétricien spécialiste PMA + endométriose + chirurgie fertilité',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'dr-jeremy-calvo.fr / doctolib.fr',
    data: {
      specialites: 'PMA / FIV (en hôpital partenaire) / chirurgie endométriose / suivi grossesse PMA / échographie',
      actes_phares: 'Centre Étoile bien situé Paris 17 entre Étoile et Ternes, brand cabinet déjà digital (site SEO + landing PMA)',
      ticket_moyen: 'Consultations 80-150€ secteur 2',
      autorisation_ars: 'Cabinet libéral gynéco-chirurgical + FIV partenaire',
      signaux_stagnation: "Site déjà bien fait + landing PMA dédiée = base saine, mais Meta Ads quasi inexistante, opportunité = scaler Meta sur 'Centre Fertilité Étoile' + retargeting Paris Ouest CSP+"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Nogent-sur-Marne', entreprise: 'Centre de la Fertilité Paris Est', adresse: '13 Allée Jean Guy Labarbe, 94130 Nogent-sur-Marne',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.centre-de-la-fertilite.com/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Annina Lobersztajn + Dr Claire Villette (cofondatrices chirurgiennes gynécos) + Dr Inès Abdennebi (gynéco médicale PMA)',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/annina-lobersztajn-97126a195',
    siren: '', forme_juridique: 'SELARL (Lovi)', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'centre-de-la-fertilite.com / doctolib.fr / linkedin.com',
    data: {
      specialites: 'Stimulation ovarienne / IIU / FIV (partenariat hôpital) / hystéroscopie / hyfosy / hystérosonographie / endométriose / bilan pré-PMA 1 journée',
      actes_phares: "Cabinet pluridisciplinaire indépendant Paris Est (90/94), 3 femmes médecins fondatrices, modèle 'bilan complet en 1 jour' différenciant",
      ticket_moyen: 'Bilan pré-PMA journée 300-600€ / consultations 80-150€',
      autorisation_ars: 'Cabinet libéral gynéco-chirurgie (FIV hôpital partenaire — Clinique de la Muette via Lobersztajn)',
      signaux_stagnation: "Branding 'Paris Est' différencie de l'écosystème 16e/Neuilly, opportunité énorme = capter IDF Est (78/77/93/94) avec Meta Ads (concurrence faible vs Paris Ouest saturée)"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Lyon', entreprise: 'Cabinet Dr Pascale Mirakian — Pôle Fertilyon', adresse: '155 Ter Boulevard de Stalingrad, 69006 Lyon',
    telephone: '04 26 65 30 96', portable_dirigeant: '', site_web: 'https://pascalemirakian.docvitae.fr/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Pascale Mirakian — Gynécologue + endocrinologue spécialiste PMA, cofondatrice Fertilyon (2007), +20 ans expérience hospitalière + libérale',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'pascalemirakian.docvitae.fr / fertilyon.com / pma-lyon.fr',
    data: {
      specialites: 'Gynéco-endocrinologie / PMA / bilans hormonaux / FIV (Clinique du Parc) / endométriose',
      actes_phares: "Profil rare gynéco + endocrino (suit la patientèle SOPK + insuffisance ovarienne), cofondatrice Fertilyon, autorité Lyon",
      ticket_moyen: 'Consultations 80-150€ secteur 2',
      autorisation_ars: 'Cabinet libéral + FIV Clinique du Parc',
      signaux_stagnation: "Site docvitae basique = sous-utilisé pour son niveau d'expertise, opportunité = créer marque personnelle 'Dr Mirakian' + Meta Ads SOPK/endométriose Lyon"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Strasbourg', entreprise: 'Cabinet Agyl — Association Gynécologues PMA', adresse: '8 rue des Pontonniers, 67000 Strasbourg (+ Molsheim)',
    telephone: '03 88 35 47 47', portable_dirigeant: '', site_web: 'https://agyl-strasbourg.com/activites/infertilite-pma/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Victor Viviani + équipe 8 gynécos (ex-chefs clinique) — Gynéco médicale + chirurgie + PMA + endométriose',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SCP / SELARL', note_avis: 4.4, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'agyl-strasbourg.com / doctolib.fr',
    data: {
      specialites: 'Bilans infertilité / chirurgie endométriose (cœlio + hystéroscopie) / suivi PMA (FIV partenariat Clinique Sainte Anne)',
      actes_phares: "Association de 8 gynécos, 2 sites (Strasbourg + Molsheim), profil 'cabinet pluri' rare en province",
      ticket_moyen: 'Consultations 50-100€ + actes chirurgicaux',
      autorisation_ars: 'Cabinet libéral gynéco + chirurgie (FIV via Clinique Sainte Anne Strasbourg)',
      signaux_stagnation: "Site agyl-strasbourg.com correct mais funnel sous-exploité, marque 'Agyl' sous-monétisée en Alsace, opportunité = devenir LE cabinet gynéco/PMA d'Alsace avec Meta Ads"
    }
  },

  // ── Centres préservation fertilité + médecines complémentaires (6 cibles) ──
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Paris', entreprise: 'Laboratoire Drouot — Centre Référence Fertilité + Préservation', adresse: '21 rue Drouot, 75009 Paris',
    telephone: '01 45 23 10 45', portable_dirigeant: '', site_web: 'https://www.labodrouot.com/vitrification',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Équipe biologistes Drouot — dirige les labos FIV Bluets, Diaconesses, Delafontaine St-Denis (top 10 AMP France)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELAS (laboratoire biologie médicale)', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'labodrouot.com / aphp.fr / lamaisondelafertilite.fr',
    data: {
      specialites: "Biologie reproduction / vitrification ovocytes + embryons / cryoconservation sperme / autoconservation ovocytes (habilité depuis nov. 2024 avec Bluets + Diaconesses)",
      actes_phares: "Top 10 AMP France, autoconservation ovocytes 'élective' autorisée 2024, partenariat Maison de la Fertilité",
      ticket_moyen: '3-5k€ préservation ovocytes / 5-9k€ FIV via hôpitaux partenaires',
      autorisation_ars: 'Autorisé ARS Île-de-France biologie reproduction + autoconservation gamètes',
      signaux_stagnation: "Marché 'autoconservation élective' ouvert récemment loi 2021 + autorisation 2024 = boom de demande inexploitée, 0 Meta Ads B2C, opportunité ÉNORME = Meta Ads ciblage femmes 29-37 ans CSP+ IDF 'préservez votre fertilité avant 37 ans'"
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Rennes', entreprise: 'Clinique Mutualiste La Sagesse — Centre AMP / Préservation', adresse: '4 place Saint Guénolé, 35043 Rennes',
    telephone: '02 99 85 75 20', portable_dirigeant: '', site_web: 'https://clinique-rennes.fr/parcours-don-dovocytes-preservation-ovocytaire',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Équipe AMP Sagesse (gynécos + biologistes) — Centre approuvé don d\'ovocytes + préservation sociétale',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'Mutuelle / Association', note_avis: 4.2, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'clinique-rennes.fr / procreation-medicale.fr',
    data: {
      specialites: "FIV / ICSI / don d'ovocytes (rare en France) / préservation fertilité 'sociétale' (loi 2021)",
      actes_phares: '~1200 cycles FIV/an, ~700 IIU/an, ~500 nouveaux couples/an, plus gros centre France',
      ticket_moyen: '5k-9k€ FIV (mutualiste honoraires modérés) / 3-5k€ préservation',
      autorisation_ars: 'Autorisé ARS Bretagne clinique + biologique + don ovocytes + préservation sociétale',
      signaux_stagnation: 'Statut mutualiste = règles éthiques fortes (à valider Meta soft ads), mais marché breton sous-équipé privé pur, opportunité = capter Ouest (Bretagne + Pays Loire) sur préservation élective'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Bezannes', entreprise: 'Polyclinique Reims-Bezannes (Courlancy Santé / Bioxa) — Centre AMP + Préservation', adresse: '119 rue Louis Victor de Broglie, Bâtiment A, 51430 Bezannes',
    telephone: '03 52 15 11 16', portable_dirigeant: '', site_web: 'https://www.amp-reims-bezannes.com/',
    email: 'pma@groupe-courlancy.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Arnaud Boury + Dr Jean-Marc Dossot + Dr Paul Leulier (biologistes responsables) — Centre Courlancy',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (Courlancy Santé)', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'amp-reims-bezannes.com / courlancy-sante.com / bioxa.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / vitrification / préservation fertilité — ISO 9001 depuis 2011',
      actes_phares: '~1000 ponctions/an, ~250 enfants nés/an, équipe multidisciplinaire (gynécos + bios + uros + endocrinos + psy)',
      ticket_moyen: '5k-8k€ FIV / 3-4k€ préservation',
      autorisation_ars: 'Autorisé ARS Grand Est clinique + biologique + préservation fertilité',
      signaux_stagnation: 'Site dédié et bien fait, faible Meta Ads, opportunité = capter Grand Est + transfrontalier Belgique (Charleville, Sedan) avec Meta Ads'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Strasbourg', entreprise: 'Clinique Sainte-Anne (GHSV) — Centre AMP + Préservation', adresse: 'Rue Philippe Thys, 67000 Strasbourg',
    telephone: '03 88 45 83 80', portable_dirigeant: '', site_web: 'https://www.ghsv.org/loffre-de-soins/medecine/obstetrique-et-neonatalogie/assistance-medicale-a-la-procreation-amp/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Équipe AMP GHSV (gynécos + biologistes Biogroup) — Centre fondé Groupe Hospitalier Saint-Vincent',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'ESPIC', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'ghsv.org / maternite-sainte-anne.org / procreation-medicale.fr',
    data: {
      specialites: 'FIV / IIU / transfert embryons / conservation gamètes + embryons',
      actes_phares: 'Centre privé non-lucratif Alsace, partenariat fort avec Biogroup pour le labo biologie',
      ticket_moyen: '5k-8k€ FIV',
      autorisation_ars: 'Autorisé ARS Grand Est clinique + biologique',
      signaux_stagnation: 'Site GHSV institutionnel, marque éclatée (clinique + labo + groupe hospitalier), opportunité = unifier marque + Meta Ads ciblage Alsace (vs Allemagne / Suisse PMA)'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: 'Saint-Herblain', entreprise: "PMAtlantique — Polyclinique de l'Atlantique (Vivalto)", adresse: 'Avenue Claude Bernard, 44819 Saint-Herblain (Nantes)',
    telephone: '02 40 95 99 99', portable_dirigeant: '', site_web: 'https://pmatlantique.fr/',
    email: '', email_dirigeant: '',
    dirigeant_principal: 'Dr Olivier Besse (coordinateur centre) — Médecine reproduction, équipe gynécos + biologistes',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS (Vivalto Santé)', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'pmatlantique.fr / polyclinique-atlantique.fr / fiv.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / TEC / préservation fertilité — top 10 centres France',
      actes_phares: '+1000 tentatives FIV-ICSI/an, ~500 TEC/an, ~600 IIU/an, l\'un des plus actifs France',
      ticket_moyen: '5k-9k€ FIV',
      autorisation_ars: 'Autorisé ARS Pays de la Loire clinique + biologique',
      signaux_stagnation: 'Site pmatlantique.fr propre, branding distinct = base saine, opportunité = scaler Pays de la Loire + Bretagne Sud (vs Sagesse Rennes mutualiste) avec Meta Ads premium privé'
    }
  },
  {
    id: pid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'PMA / cliniques de fertilité',
    ville: "Saint-Martin-d'Hères", entreprise: 'Clinique Belledonne — Centre AMP Grenoble', adresse: "75 avenue Gabriel Péri, Bâtiment Axone, 2e étage, 38400 Saint-Martin-d'Hères",
    telephone: '04 51 43 91 34', portable_dirigeant: '', site_web: 'https://www.amp-belledonne.fr/',
    email: 'labo.pma@biogroup.fr', email_dirigeant: '',
    dirigeant_principal: 'Équipe 6 gynécos agréés + 2 biologistes agréés (Biogroup) — Médecine reproduction',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS / SELARL', note_avis: 4.3, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'amp-belledonne.fr / clinique-belledonne.fr / procreation-medicale.fr',
    data: {
      specialites: 'FIV / ICSI / IIU / préservation fertilité — agréé Ministère depuis 1990, créé 1984',
      actes_phares: '~700 IIU/an, ~760 FIV-ICSI/an, partenariat Biogroup pour labo',
      ticket_moyen: '5k-8k€ FIV / 3-4k€ préservation',
      autorisation_ars: 'Autorisé ARS Auvergne-Rhône-Alpes clinique + biologique',
      signaux_stagnation: 'Site propre, marque distincte, opportunité = devenir LE centre Alpes (Grenoble + Annecy + Chambéry + transfrontalier Genève suisse) avec Meta Ads + Google'
    }
  },
]
