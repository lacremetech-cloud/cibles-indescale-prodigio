// Cibles RÉELLES « Greffe de cheveux » (INDESCALE).
// Secteur services-sante. Tickets 3-12k€ FUE/DHI/Sapphire, public hommes 25-50 ans CSP+.
// Marché Meta Ads le plus mature de la santé esthétique en France — saturé sur la
// concurrence Turquie (low-cost). Angle clé pour INDESCALE : "qualité française anti-Turquie"
// + technologies premium (DHI / Sapphire / robot ARTAS / HST stem cell).
// EXCLUS : cliniques étrangères (TR/HU/TN/MA/ES) et leurs antennes commerciales FR.
// Données telles que trouvées en sources officielles ; jamais d'invention de portable / email.

let _g = 0
const gid = () => 'greffe-' + (++_g)

export const GREFFE_CHEVEUX_PROSPECTS = [
  // ── Chaînes nationales / Réseaux multi-villes (8 cibles) ──
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Clinique des Champs-Élysées (CRPCE) — Pôle Capillaire', adresse: '61 Avenue Franklin Delano Roosevelt, 75008 Paris',
    telephone: '01 47 23 02 02', portable_dirigeant: '', site_web: 'https://www.crpce.com/capillaire',
    email: 'contact@crpce.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Bennaim (expert FUE) / Dr Gabriel Ruiz Toulouse',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'crpce.com',
    data: {
      specialites: 'FUE / FUE Sapphire / FUT — cheveux, barbe, sourcils',
      actes_phares: 'Greffe FUE, micro-greffes, alopécie, 21 cliniques France',
      ticket_moyen: '4k-9k€ FUE classique',
      technologie: 'FUE, 3 blocs opératoires capillaires',
      instagram_strength: 'Moyen — réseau institutionnel',
      funnel_ads: 'Google Ads brand fort, Meta Ads faibles vs pure-players',
      signaux_stagnation: 'Marque vieillissante face aux pure-players (Maison Lutétia, Grand Paris), opportunité = faire monter chaque centre régional en lead-gen Meta par ville'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Maison Lutétia — DHI France', adresse: '6 Rue Ampère, 75017 Paris',
    telephone: '01 42 56 16 86', portable_dirigeant: '', site_web: 'https://greffedecheveux.maisonlutetia.com/',
    email: 'contact@maisonlutetia.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Sarah Fadli (Directrice médicale) — Médecine esthétique & greffe DHI, DIU calvitie Lyon',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/sarah-fadli',
    siren: '', forme_juridique: 'SAS', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel / Doctolib / LinkedIn',
    data: {
      specialites: 'DHI exclusive (Direct Hair Implantation Choi) — cheveux, barbe, sourcils',
      actes_phares: 'Greffe DHI Choï 1500-4000 greffons (exclusivité France depuis 2013), DHI sourcils/barbe, mésothérapie capillaire',
      ticket_moyen: '6k-12k€ DHI premium',
      technologie: 'DHI Choï implanter (méthode brevetée K.P. Giotis)',
      instagram_strength: 'Fort — @maisonlutetia, 775+ avis Google, médecin star féminine sur IG',
      funnel_ads: 'Meta Ads actives, Google Ads brand + génériques, lead gen Doctolib + WhatsApp',
      signaux_stagnation: 'Positionnement DHI exclusif déjà optimisé, dépendance forte au Dr Fadli (single point of failure), opportunité = scaler sur 2è médecin / extension géographique Lyon/Marseille'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Hair Science Clinic (HASCI) — France', adresse: '15 Rue Spontini, 75116 Paris',
    telephone: '04 93 33 03 30', portable_dirigeant: '', site_web: 'https://hasci.fr/',
    email: 'contact@hasci.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Aurélie Mercurelli Rebuffat — formée Dr Coen Gho (HSI)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'hasci.fr',
    data: {
      specialites: 'Méthode HST (Hair Stem Cell Transplantation) brevetée — exclusivité internationale',
      actes_phares: 'HST (technique semi-permanente avec préservation follicule), greffe cheveux/sourcils/cicatricielle',
      ticket_moyen: '7k-15k€ HST premium',
      technologie: 'HST Coen Gho, réseau intl Amsterdam/Düsseldorf/London/Paris/Antibes/Milan/Dubai',
      instagram_strength: 'Moyen — marque internationale, présence FR discrète',
      funnel_ads: 'Meta Ads FR faibles, Google Ads sur HST + brand',
      signaux_stagnation: "Méthode HST très différenciante mais peu connue grand public FR — opportunité énorme = éduquer marché FR via Meta angle 'régénération cellulaire' vs FUE classique"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'The Clinic Paris (IROSH founding member)', adresse: '15-17 Rue Spontini, 75116 Paris',
    telephone: '01 45 03 24 25', portable_dirigeant: '', site_web: 'https://the-clinic.fr/',
    email: 'contact@the-clinic.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Pierre Bouhanna + Dr Eric Bouhanna (fils) — IROSH founding member, ARTAS référence',
    linkedin_dirigeant: 'https://www.linkedin.com/in/eric-bouhanna',
    siren: '', forme_juridique: 'SELAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'site officiel / IROSH / Doctolib',
    data: {
      specialites: 'FUE / FUT longs cheveux / DHI Choï / ARTAS robot — centre référence ARTAS France',
      actes_phares: 'Greffe ARTAS robotisée 1500-3000 greffons, FUT longs cheveux sans rasage (technique propriétaire Bouhanna)',
      ticket_moyen: '5k-12k€ FUE / 8k-15k€ ARTAS',
      technologie: 'Robot ARTAS (rare France), DHI Choï pen, FUT longs cheveux brevetée',
      instagram_strength: 'Moyen-fort — branding scientifique, médecin-référent P. Bouhanna très connu profession',
      funnel_ads: 'Google Ads modérée, Meta Ads peu visible — clientèle par bouche-à-oreille',
      signaux_stagnation: 'Dépendance forte au nom Bouhanna (70+ ans), positionnement scientifique peu adapté grand public 30-50. Implantations Paris+Lille+Brussels+Catania mal exploitées. Opportunité = repositionner pour génération M-Y'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Marseille', entreprise: 'HairClinic — Nice/Cannes/Marseille', adresse: '258 Avenue du Prado, 13008 Marseille (+ 45 Promenade des Anglais Nice + 6 rue de la Pompe Cannes)',
    telephone: '04 91 37 13 33', portable_dirigeant: '', site_web: 'https://www.hairclinic.fr/',
    email: 'contact@hairclinic.fr', email_dirigeant: '',
    dirigeant_principal: "Équipe Hair Clinic — 25 ans d'expérience, 5000+ microgreffes",
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.3, note_priorite: 'Haute', statut: 'À contacter',
    source: 'hairclinic.fr',
    data: {
      specialites: 'FUE MAX / FUE Sapphire / FUT — cheveux, barbe, sourcils, PRP, mésothérapie',
      actes_phares: 'Microgreffes FUE 1500-4000, greffe barbe/sourcils, PRP',
      ticket_moyen: '3k-8k€ FUE Sud-Est',
      technologie: 'FUE Sapphire (pas de robot ARTAS)',
      instagram_strength: 'Moyen — branding triville cohérent',
      funnel_ads: 'Meta Ads actives Nice/Marseille/Cannes (ciblage géo), Google Ads brand, lead gen téléphone + consult gratuite',
      signaux_stagnation: "Site daté, branding 90s, pas de quiz/WhatsApp moderne. 3 villes premium = potentiel scaling Meta par centre avec offre 'française premium anti-Turquie' pour Côte d'Azur fortunée"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Cannes', entreprise: 'Centre MGC (Menu Greffe Cheveux)', adresse: '16 rue Buttura, 06400 Cannes (+ Nice Hôpital Archet)',
    telephone: '04 93 43 99 17', portable_dirigeant: '', site_web: 'https://www.centremgc.fr/',
    email: 'contact@centremgc.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Frédéric Menu (Fondateur Société Française Chirurgie Restauratrice Calvitie) — Chirurgien capillaire depuis 2005',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'centremgc.fr / Ubiclic',
    data: {
      specialites: 'FUE / DHI sans cicatrice / FUT — cheveux, barbe, sourcils. Cannes/Nice/Mougins/Monaco/Cannet',
      actes_phares: 'Greffe FUE/DHI/FUT dès 2500€, alopécie H/F',
      ticket_moyen: '2,5k-7k€ (positionnement accessible FR)',
      technologie: 'FUE + DHI Choï + FUT',
      instagram_strength: 'Faible-moyen — site fonctionnel',
      funnel_ads: 'Google Ads brand, Meta Ads quasi inexistantes — angle prix 2500€ inexploité',
      signaux_stagnation: "Positionnement low-cost local (2500€ = un des moins chers FR) + fondateur reconnu = combo très scalable Meta Ads. Opportunité = capter le client qui hésite Turquie avec prix FR aligné"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Levallois-Perret', entreprise: 'Racine² (Racine Carrée)', adresse: '99 Rue Anatole France, 92300 Levallois-Perret',
    telephone: '01 47 56 02 19', portable_dirigeant: '', site_web: 'https://centre-racine2.com/',
    email: 'contact@centre-racine2.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Nivard + équipe 8 médecins + 60 Hair-Tech',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'centre-racine2.com',
    data: {
      specialites: "FUE / FUE Sapphire — centre 900m² 100% cheveux (plus grand d'Europe)",
      actes_phares: 'Greffe FUE 1500-4000 greffons, FUE Saphir, PRP, parcours calvitie complet',
      ticket_moyen: '4k-9k€ FUE',
      technologie: 'FUE Saphir, plateau industriel 8 médecins + 60 techniciens',
      instagram_strength: 'Fort — branding moderne, refonte récente, contenu vidéo qualitatif',
      funnel_ads: 'Meta Ads actives, Google Ads forts, funnel quiz + WhatsApp + Doctolib (le plus mature du marché FR)',
      signaux_stagnation: 'Concurrent direct INDESCALE-ready : déjà mature en ads mais peut scaler vers 3M€+/mois si optimisation conversion + acquisition par segment (golfes / vertex / barbe / femmes)'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Strasbourg', entreprise: 'Adiantum International (Réseau Capillaire)', adresse: '22 rue de la 1ère Armée, 67000 Strasbourg (+ Metz + Nancy)',
    telephone: '03 88 25 73 00', portable_dirigeant: '', site_web: 'https://adiantum.com/',
    email: 'contact@adiantum.com', email_dirigeant: '',
    dirigeant_principal: 'Famille MULLER (C.G. Muller, fondateur) — Centre familial créé 1983 Metz, 1986 Strasbourg',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SARL', note_avis: 4.1, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'adiantum.com',
    data: {
      specialites: 'Greffe + perruques + extensions + soins capillaires — réseau Grand Est',
      actes_phares: 'Greffe FUE, packs pré-greffe, perruques, programme calvitie',
      ticket_moyen: '3k-7k€ FUE',
      technologie: 'FUE classique, conventionnement Sécurité Sociale (positionnement unique)',
      instagram_strength: 'Faible — site daté',
      funnel_ads: 'Quasi pas de présence Meta/Google — clientèle locale bouche-à-oreille',
      signaux_stagnation: 'Marque historique 1983 Grand Est, conventionnement SS = différenciateur unique mais site daté bottleneck. Opportunité = digitaliser totalement funnel ads 25-45 ans'
    }
  },

  // ── Cliniques spécialisées haute gamme (18 cibles) ──
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Clinique du Grand Paris — Centre Iéna (pôle Greffe)', adresse: "37 Avenue d'Iéna, 75116 Paris",
    telephone: '01 48 66 20 35', portable_dirigeant: '', site_web: 'https://www.cliniquedugrandparis.com/',
    email: 'contact@cliniquedugrandparis.com', email_dirigeant: '',
    dirigeant_principal: "David Benaim (Directeur) — Médecine esthétique & chirurgie capillaire, 12+ ans d'expérience",
    linkedin_dirigeant: 'https://www.linkedin.com/in/david-benaim',
    siren: '', forme_juridique: 'SAS', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'cliniquedugrandparis.com / Chillsilk',
    data: {
      specialites: 'Technique SAPHORÏ propriétaire (Saphir + Choï) — FUE Saphir + DHI',
      actes_phares: '4800+ greffes, 98% satisfaction. SAPHORÏ exclusive, FUE Sapphire, DHI',
      ticket_moyen: '6k-11k€ SAPHORÏ',
      technologie: 'SAPHORÏ (brevetée maison Saphir+Choï), DHI Choï, FUE Saphir',
      instagram_strength: 'Fort — @cliniquedugrandparis très actif, before/after qualité éditoriale',
      funnel_ads: 'Meta Ads actives Paris/IDF, Google Ads brand + génériques, lead gen formulaire + WhatsApp + landing dédiée',
      signaux_stagnation: 'Mature en paid mais Paris saturé — opportunité = expansion géo (Lyon/Marseille/Bordeaux franchise possible) + ads internationales clientèle CSP+ francophone Suisse/Bénélux'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'CMCC Paris — Centre Médico-Chirurgical du Cuir Chevelu', adresse: '23 Avenue Niel, 75017 Paris',
    telephone: '01 84 83 14 00', portable_dirigeant: '', site_web: 'https://cmccparis.com/',
    email: 'centrebouhanna@gmail.com', email_dirigeant: 'centrebouhanna@gmail.com',
    dirigeant_principal: 'Dr Pierre Bouhanna (Légende capillaire FR) + Dr Eric Bouhanna (cofondateur 2019)',
    linkedin_dirigeant: 'https://www.linkedin.com/in/eric-bouhanna',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'cmccparis.com / Doctolib',
    data: {
      specialites: 'FUE (avec/sans rasage), FUT longs cheveux sans rasage (spé Bouhanna), dermatologie capillaire',
      actes_phares: 'Greffe FUE 1500-3500, FUT longs cheveux (technique unique mondiale), trichopigmentation',
      ticket_moyen: '5k-12k€',
      technologie: 'FUT longs cheveux brevetée Bouhanna, FUE',
      instagram_strength: 'Moyen — @cmcc_paris, branding scientifique',
      funnel_ads: 'Google Ads brand fort (nom Bouhanna = SEO en or), Meta Ads peu présent',
      signaux_stagnation: "Notoriété énorme mais site convertit mal — opportunité = repositionner funnel sur 'FUT longs cheveux sans rasage' (USP mondiale) en Meta angle 'pas besoin de cacher 6 mois'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Centre NOVA Capillaire', adresse: '108 Bd du Montparnasse, 75014 Paris',
    telephone: '01 41 50 00 07', portable_dirigeant: '', site_web: 'https://www.novacapillaire.fr/',
    email: 'contact@novacapillaire.fr', email_dirigeant: '',
    dirigeant_principal: 'Eva Aleks (Équipe technique) + équipe chirurgiens + dermato',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'novacapillaire.fr / perfactive.fr',
    data: {
      specialites: 'FUE Sapphire (spé maison) — cheveux afro, sourcils, mega-session',
      actes_phares: 'Greffe FUE Saphir jusqu\'à 6500 greffons sur 2 jours (mega-session), cheveux afro (niche premium)',
      ticket_moyen: '4k-12k€',
      technologie: 'FUE Saphir, spé cheveux afro (peu de concurrents FR)',
      instagram_strength: 'Fort — branding moderne, Linktree actif, before/after consumer',
      funnel_ads: 'Meta Ads actives, landing dédiée + WhatsApp + Doctolib (Perfactive), funnel mature',
      signaux_stagnation: 'Pure-player moderne, déjà mature ads — opportunité = scaler vertical cheveux afro (segment sous-servi ticket élevé) + extension géo Lyon/Marseille'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'CGC Paris Étoile (Centre Greffe Cheveux Étoile)', adresse: '17 Rue de la Pompe, 75116 Paris (+ CGC Lamartine Trocadéro)',
    telephone: '01 80 80 44 08', portable_dirigeant: '+33 7 67 81 46 67', site_web: 'https://www.lagreffedecheveux.fr/',
    email: 'contact@lagreffedecheveux.fr', email_dirigeant: '',
    dirigeant_principal: "Fondateur anonymisé (25+ ans expérience FR/Suisse/EAU)",
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'lagreffedecheveux.fr / Doctolib',
    data: {
      specialites: 'FUE / DHI / FUT — cheveux, barbe, sourcils, 100% dédié capillaire',
      actes_phares: 'Greffes 1500-4000 greffons, 2 centres Paris',
      ticket_moyen: '5k-10k€',
      technologie: 'FUE Saphir, DHI Choï',
      instagram_strength: 'Moyen — branding pro',
      funnel_ads: 'Google Ads brand fort (greffedecheveux.fr = SEO en or), Meta Ads modérés, WhatsApp lead gen',
      signaux_stagnation: 'Très bonne SEO mais funnel ads pas optimisé pour 1M€+/mois — opportunité = passer de 200k€/mois revenus à 800k€ via ads ROAS systématique'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Clinique de Restauration Capillaire', adresse: '51 Avenue Bugeaud, 75116 Paris',
    telephone: '01 45 53 02 22', portable_dirigeant: '', site_web: 'https://cliniquederestaurationcapillaire.fr/',
    email: 'contact@cliniquederestaurationcapillaire.fr', email_dirigeant: '',
    dirigeant_principal: 'Équipe médicale historique — 25+ ans expérience',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'cliniquederestaurationcapillaire.fr / Doctolib',
    data: {
      specialites: 'FUE — restauration capillaire 100% dédié',
      actes_phares: 'Greffe FUE, diagnostic en ligne, 25 ans expérience',
      ticket_moyen: '5k-10k€',
      technologie: 'FUE classique',
      instagram_strength: 'Faible — branding institutionnel daté',
      funnel_ads: 'Google Ads brand modeste, Meta Ads quasi inexistants',
      signaux_stagnation: 'Marque 25 ans + adresse premium 16e mais site/funnel à refaire entièrement. Opportunité = relifting digital complet, ads Meta 80k€/mois testables'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Clinique Spontini Paris 16e (pôle Greffe ARTAS)', adresse: '76 Rue Spontini, 75016 Paris',
    telephone: '01 84 74 95 27', portable_dirigeant: '', site_web: 'https://clinique-spontini.fr/',
    email: 'contact@clinique-spontini.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Daniel Alimi (référence greffe capillaire France) + Dr Nathanel Edery',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'clinique-spontini.fr / Doctolib',
    data: {
      specialites: 'FUE Hybrid Punch® (brevetée) + ARTAS robot — cheveux, barbe, sourcils',
      actes_phares: 'Greffe ARTAS robotisée, FUE Hybrid Punch (brevet Dr Alimi), restauration calvitie sévère',
      ticket_moyen: '7k-14k€ ARTAS',
      technologie: 'Robot ARTAS + FUE Hybrid Punch® combo rare France',
      instagram_strength: 'Moyen — branding luxe 16e',
      funnel_ads: 'Google Ads brand, Meta Ads modérés — positionnement ultra premium sous-exploité',
      signaux_stagnation: "Combo ARTAS + brevet = USP forte mais clientèle limitée Paris. Opportunité = funnel haut de gamme 'robot ARTAS précision américaine' pour 50+ qui ne va pas en Turquie"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Dr Paul Benet — Centre Greffe Cheveux 16e', adresse: '78 Rue de la Faisanderie, 75116 Paris',
    telephone: '01 42 04 25 25', portable_dirigeant: '', site_web: 'https://docteurpaulbenet.fr/',
    email: 'contact@docteurpaulbenet.fr', email_dirigeant: '',
    dirigeant_principal: "Dr Paul Benet — Chirurgien capillaire 25 ans d'expérience, expert cheveux afro/crépus",
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'docteurpaulbenet.fr / Doctolib',
    data: {
      specialites: 'FUE — cheveux, cheveux afro/crépus (niche premium), barbe, sourcils',
      actes_phares: 'Greffe FUE 1500-3500, expertise afro/crépus (cabinetcheveuxafro.fr)',
      ticket_moyen: '5k-9k€',
      technologie: 'FUE classique, expertise afro = sous-segment haute valeur',
      instagram_strength: 'Moyen — branding cabinet médecin solo',
      funnel_ads: 'Google Ads brand + cheveux afro (niche peu concurrentielle), Meta Ads sous-exploités',
      signaux_stagnation: 'Niche cheveux afro/crépus = segment INDESCALE rêvé (peu de cliniques FR savent faire, ticket élevé, communauté très active IG). Opportunité = scaler ads dédiées afro + Maghreb'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Paris', entreprise: 'Capillo Paris (Centre Capillaire Marais)', adresse: 'Marais, Paris (3e-4e)',
    telephone: '', portable_dirigeant: '', site_web: 'https://capillo-paris.com/',
    email: 'contact@capillo-paris.com', email_dirigeant: '',
    dirigeant_principal: 'Équipe Capillo Paris — médecins + chirurgiens dédiés',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'capillo-paris.com / Doctolib',
    data: {
      specialites: 'FUE, greffe cheveux/barbe/sourcils, trichopigmentation, mésothérapie/PRP/LED',
      actes_phares: 'FUE classique, consult 100€, MésoLED, REYU (PRP régénération)',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE + traitements médicaux multimodaux',
      instagram_strength: 'Fort — @capillo.paris très actif, branding millennial moderne',
      funnel_ads: 'Meta Ads visible — branding social-first cohérent 25-40 ans, lead gen Doctolib',
      signaux_stagnation: "Cible Y/Z bien positionnée Marais (créatifs/tech/freelances) mais ticket moyen plus bas que 16e — opportunité = scaling Meta sur 28-38 ans tech/marketing avec angle 'greffe c'est cool maintenant'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Lyon', entreprise: 'Clinique Crillon — Centre Capillaire', adresse: '84 Boulevard des Belges, 69006 Lyon',
    telephone: '04 72 44 35 35', portable_dirigeant: '', site_web: 'https://cheveux.cliniquecrillon.com/',
    email: 'contact@cliniquecrillon.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Deygat (maxillo-facial / chirurgie capillaire) — 25+ ans expérience',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'cliniquecrillon.com',
    data: {
      specialites: 'FUE + FUT — cheveux, barbe, cils, sourcils',
      actes_phares: 'Greffe FUE injection vitamines/nutriments, FUT, greffe cils (niche)',
      ticket_moyen: '4k-9k€',
      technologie: 'FUE + FUT + injection nutritive propriétaire',
      instagram_strength: 'Moyen — clinique multispé, branding éclaté',
      funnel_ads: "Google Ads brand modéré, Meta Ads quasi nuls — multispé qui n'optimise pas le capillaire",
      signaux_stagnation: 'Adresse premium Lyon 6e (rue de référence cosmétique) mais ads non spécialisés. Opportunité = sortir marque dédiée greffe avec funnel ads dédié'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Lyon', entreprise: 'My Hair Medical Lyon', adresse: '25 Quai Antoine Riboud, 69002 Lyon',
    telephone: '04 72 41 65 02', portable_dirigeant: '', site_web: 'https://www.myhairmedical.com/',
    email: 'contact@myhairmedical.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Meyer (chirurgien capillaire) — équipe médicale Lyon Confluence',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'myhairmedical.com',
    data: {
      specialites: 'FUE Sapphire / DHI — 100% dédié capillaire Lyon',
      actes_phares: 'Greffe FUE 1500-3500, consultation perte cheveux gratuite, guide patient',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE Sapphire + DHI',
      instagram_strength: 'Moyen — branding pure-player propre',
      funnel_ads: 'Google Ads brand, Meta Ads présents — funnel "are you a good candidate" + consult = bien construit',
      signaux_stagnation: "Pure-player Lyon Confluence avec funnel mature mais Lyon compétitif (Crillon, CELEST, Sainte-Rose, Van Der Stegen). Opportunité = scaler Meta avec différenciation 'qualité française Lyon vs Turquie'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Lyon', entreprise: "Dr Gilles Sainte-Rose — Unité Microgreffe Capillaire (Clinique Esthétique Tête d'Or)", adresse: '88 Boulevard des Belges, 69006 Lyon',
    telephone: '04 72 44 92 13', portable_dirigeant: '', site_web: 'https://www.lyon-esthetique.net/',
    email: 'contact@lyon-esthetique.net', email_dirigeant: '',
    dirigeant_principal: 'Dr Gilles Sainte-Rose — Chirurgien plasticien diplômé Collège Français de Chirurgie Plastique Reconstructrice et Esthétique',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'lyon-esthetique.net / Doctolib',
    data: {
      specialites: 'FUE microgreffe — exclusivement chirurgien plastique',
      actes_phares: 'Greffe FUE microgreffe, expertise chirurgie plastique reconstructrice',
      ticket_moyen: '5k-9k€',
      technologie: 'FUE classique',
      instagram_strength: 'Faible — site cabinet médecin seul',
      funnel_ads: "Google Ads brand, Meta Ads quasi-inexistants — chirurgien solo, pas d'investissement marketing",
      signaux_stagnation: "Chirurgien plastique de référence Lyon 6e mais pas optimisé ads. Opportunité = test mid-budget Meta avec angle 'chirurgien plasticien certifié SoFCEP'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Villeurbanne', entreprise: 'CELEST Médipôle Lyon (pôle Greffe)', adresse: '171 Rue Léon Blum, 69100 Villeurbanne',
    telephone: '04 28 87 00 38', portable_dirigeant: '', site_web: 'https://www.celest-lyon.com/',
    email: 'contact@celest-lyon.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Christophe Reinbold (Fondateur CELEST, chirurgien plasticien) + Dr Lasserre',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'celest-lyon.com',
    data: {
      specialites: 'FUE / FUT — centre premium Médipôle, chirurgie + médecine esthétique',
      actes_phares: 'Greffe FUE/FUT, laser, injections, PRP',
      ticket_moyen: '4k-9k€',
      technologie: 'FUE classique + plateau Médipôle',
      instagram_strength: 'Faible-moyen — branding clinique multi-spé',
      funnel_ads: 'Google Ads brand, Meta Ads modérés — pas focus capillaire spécifiquement',
      signaux_stagnation: "Centre récent positionnement premium 'across Médipôle' mais ads capillaires sous-exploités. Opportunité = sous-funnel dédié greffe 'chirurgien plastique + plateau hospitalier'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Marseille', entreprise: 'Néo-Clinique Marseille (NEOCLINIQUE)', adresse: '24 Rue Fortia, 13001 Marseille',
    telephone: '04 91 33 04 04', portable_dirigeant: '', site_web: 'https://neo-clinique.com/',
    email: 'contact@neo-clinique.com', email_dirigeant: '',
    dirigeant_principal: 'Équipe Néo-Clinique (10+ spécialistes : chirurgiens, médecins, infirmières hair-tech)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'neo-clinique.com / Doctolib',
    data: {
      specialites: 'DHI Choï (spé maison) — plus grand centre Sud France 100% capillaire',
      actes_phares: 'Greffe DHI Choï, protocole régénération capillaire, mésothérapie, LED, trichopigmentation',
      ticket_moyen: '5k-10k€',
      technologie: 'DHI Choï + plateau capillaire dédié',
      instagram_strength: 'Fort — branding "100% Française" très consumer-friendly',
      funnel_ads: 'Meta Ads très actives (angle anti-Turquie "Greffe 100% Française"), Google Ads brand fort, lead gen Doctolib',
      signaux_stagnation: 'Marché Marseille mature mais opportunité énorme = expansion régionale (Aix, Toulon, Avignon, Nice). Déjà mature en ads = partner pour scaling +200%'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Marseille', entreprise: "Cap'Clinic Marseille", adresse: '18 Rue Negresko, 13008 Marseille',
    telephone: '04 84 89 46 50', portable_dirigeant: '', site_web: 'https://www.capclinic.fr/',
    email: 'contact@capclinic.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Alain Brun — Médecin esthétique 15+ ans greffe, DIU calvitie, membre Société Française Greffe Cheveux',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'capclinic.fr / Doctolib',
    data: {
      specialites: 'FUE / DHI Choï — cheveux, barbe, sourcils, 280m² dédié',
      actes_phares: 'Greffe FUE/DHI 1500-3500 (Dr Brun opère lui-même), PRP, mésothérapie',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE + DHI Choï + plateau 280m²',
      instagram_strength: 'Moyen — branding pro local',
      funnel_ads: 'Google Ads brand bon (Prado/Marseille SEO local), Meta Ads modérés',
      signaux_stagnation: "Pure-player Marseille Prado avec médecin titulaire qui opère lui-même = USP forte. Opportunité = angle 'votre chirurgien fait la greffe lui-même' Meta vs Turquie/Néo-Clinique"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Nice', entreprise: 'Clinique Cheveux Mozart Nice', adresse: '17 Avenue Auber, 06000 Nice',
    telephone: '04 93 27 75 65', portable_dirigeant: '', site_web: 'https://cliniquecheveuxmozart.fr/',
    email: 'contact@cliniquecheveuxmozart.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Denis Boucq — Chirurgien plasticien 35+ ans, qualifié 1983',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'cliniquecheveuxmozart.fr',
    data: {
      specialites: 'FUE / DHI — clinique capillaire 100% dédiée Nice',
      actes_phares: 'Greffe FUE + DHI quand indiqué, PRP, LED, mésothérapie, trichopigmentation',
      ticket_moyen: '4k-9k€',
      technologie: 'FUE classique + DHI Choï',
      instagram_strength: 'Moyen — Facebook Clinique Mozart Nice actif',
      funnel_ads: 'Google Ads brand modéré, Meta Ads visibles localement',
      signaux_stagnation: "Chirurgien 35 ans + clinique dédiée Nice = combo scalable mais ads sous-exploités. Opportunité = test Meta 30-50k€/mois angle '35 ans d'expertise Nice vs Turquie' Côte d'Azur"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: "Villeneuve-d'Ascq", entreprise: 'La Microgreffe — Centre Capillaire Nord', adresse: "7 Avenue de Flandres, 59491 Villeneuve-d'Ascq",
    telephone: '03 20 83 80 58', portable_dirigeant: '', site_web: 'https://la-microgreffe.com/',
    email: 'drpacheco@lamicrogreffe.com', email_dirigeant: 'drpacheco@lamicrogreffe.com',
    dirigeant_principal: 'Dr François Pacheco — Expert greffe 23+ ans, 300+ greffes/an, référence Nord',
    linkedin_dirigeant: 'https://fr.linkedin.com/in/francois-pacheco-5731a136',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.8, note_priorite: 'Haute', statut: 'À contacter',
    source: 'la-microgreffe.com / LinkedIn',
    data: {
      specialites: 'FUE personnalisée — 100% dédié greffe Nord',
      actes_phares: 'Greffe FUE personnalisée 300+/an, expertise reconnue France entière',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE FUE2 Safe System',
      instagram_strength: 'Faible — site daté mais Trustindex.io 5/5',
      funnel_ads: 'Google Ads brand fort sur "microgreffe", Meta Ads sous-exploités',
      signaux_stagnation: 'Médecin de référence Nord 23 ans expé + email perso direct = facile à approcher. Opportunité = passer de 300 greffes/an à 600 en scalant ads Meta + relift site'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Avignon', entreprise: 'NHT Europe — Natural Hair Transplant', adresse: 'Avignon (84)',
    telephone: '04 90 82 00 01', portable_dirigeant: '', site_web: 'https://www.nht-europe.com/',
    email: 'contact@nht-europe.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Philippe Ginouves — Ex-enseignant DIU microchirurgie Univ. Montpellier, chirurgie cuir chevelu depuis 1985',
    linkedin_dirigeant: 'https://www.linkedin.com/company/nht-europe',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.4, note_priorite: 'Haute', statut: 'À contacter',
    source: 'nht-europe.com / LinkedIn / Trustpilot',
    data: {
      specialites: 'FUE robotisée ARTAS — centre référence Sud, cheveux/barbe/sourcils, longs cheveux sans rasage',
      actes_phares: 'Greffe ARTAS robotisée, FUE classique, FUT longs cheveux, alopécies sévères',
      ticket_moyen: '6k-13k€ ARTAS',
      technologie: 'Robot ARTAS (rare France)',
      instagram_strength: 'Faible — branding scientifique',
      funnel_ads: 'Google Ads brand, Meta Ads peu visibles — médecin enseignant académique vs consumer',
      signaux_stagnation: "Robot ARTAS dans Sud-Est = USP rare (Avignon couvre Marseille/Aix/Nîmes/Montpellier), médecin star Montpellier. Opportunité = créer marque consumer 'ARTAS Sud' et exploiter Meta sur 40-55 ans CSP+ Provence/Languedoc"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Bordeaux', entreprise: 'CLEO Hair Clinic (Bordeaux Esthétique)', adresse: 'Bordeaux centre',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.cleo-bordeaux.fr/',
    email: 'contact@cleo-bordeaux.fr', email_dirigeant: '',
    dirigeant_principal: 'Équipe CLEO Hair Clinic — chirurgiens capillaires Bordeaux',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'cleo-bordeaux.fr',
    data: {
      specialites: 'FUE — greffe capillaire Bordeaux',
      actes_phares: 'Greffe FUE classique, traitements capillaires',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE classique',
      instagram_strength: 'Moyen — branding moderne',
      funnel_ads: 'Google Ads brand modéré, Meta Ads présents',
      signaux_stagnation: 'Marché Bordeaux moins saturé. Opportunité = devenir #1 ads Bordeaux + Nouvelle-Aquitaine (Toulouse/Biarritz/Bayonne en bonus)'
    }
  },

  // ── Cabinets dermato / médecine esthétique avec greffe (12 cibles) ──
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Mougins', entreprise: 'Cabinet Dr Jonathan Bouhassira — Clinique Esthétique Mougins (pôle Greffe)', adresse: 'Mougins (06250) — Antibes/Cannes/Monaco',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.drjonathan.fr/',
    email: 'contact@drjonathan.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Jonathan Bouhassira — Chirurgien esthétique & dermatologue chirurgical Antibes-Cannes-Mougins-Monaco',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'drjonathan.fr / dermatologie-chirurgicale-antibes.fr',
    data: {
      specialites: 'Greffe capillaire + chirurgie esthétique + dermatologie chirurgicale',
      actes_phares: "Greffe FUE, greffe sourcils, médecine esthétique premium Côte d'Azur",
      ticket_moyen: '5k-11k€',
      technologie: 'FUE + plateau Mougins',
      instagram_strength: "Moyen-fort — chirurgien Côte d'Azur avec clientèle fortunée",
      funnel_ads: 'Google Ads brand, Meta Ads modérés — opportunité car Mougins/Cannes/Monaco ticket élevé',
      signaux_stagnation: "Médecin dermato+chirurgien rare combo, plateau Mougins, clientèle ultra-CSP Riviera. Opportunité = ads ultra-premium 'discrétion + Côte d'Azur' pour fortunés FR + Russie/MO/UK"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Nice', entreprise: 'Cabinet Dr Farès Belhassen + Clinique Le Verdun', adresse: '8 Avenue de Verdun, 06000 Nice (+ 11 Rue Jean de Riouffe Cannes)',
    telephone: '04 22 53 50 65', portable_dirigeant: '', site_web: 'https://www.dr-belhassen-chirurgien-esthetique.fr/',
    email: 'contact@dr-belhassen-chirurgien-esthetique.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Farès Belhassen — Chirurgien plasticien & esthétique 10+ ans, Nice/Cannes/Monaco',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Haute', statut: 'À contacter',
    source: 'dr-belhassen-chirurgien-esthetique.fr / Doctolib',
    data: {
      specialites: 'Greffe FUE (Clinique Le Verdun) + chirurgie esthétique complète',
      actes_phares: 'Greffe FUE 1-2 jours, chirurgie visage, médecine esthétique',
      ticket_moyen: '4k-9k€',
      technologie: 'FUE classique',
      instagram_strength: "Moyen — chirurgien Côte d'Azur",
      funnel_ads: "Google Ads brand, Meta Ads présents Côte d'Azur",
      signaux_stagnation: 'Chirurgien Côte d\'Azur 2 cabinets Nice+Cannes — opportunité = renforcer ads dédiées greffe (actuellement noyée dans chirurgie esthétique globale)'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Toulouse', entreprise: 'Cabinet Dr Martial Bodnar — Laz & Hair', adresse: "25 Rue d'Alsace Lorraine, 31000 Toulouse",
    telephone: '05 62 27 92 36', portable_dirigeant: '+33 6 07 83 07 11', site_web: 'https://greffe-capillaire.fr/',
    email: 'contact@greffe-capillaire.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Martial Bodnar — Chirurgien plasticien Paul Sabatier Toulouse, exclusivement greffe 25+ ans, expert FUE',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'greffe-capillaire.fr / Pages Jaunes',
    data: {
      specialites: 'FUE exclusive — chirurgien plasticien 100% greffe',
      actes_phares: 'Greffe FUE 25 ans expé, consultations Toulouse + Montpellier',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE classique',
      instagram_strength: 'Moyen — branding cabinet médecin solo',
      funnel_ads: 'Google Ads brand fort sur "greffe-capillaire.fr" (SEO en or), Meta Ads présents Toulouse/Montpellier/Bordeaux',
      signaux_stagnation: 'Médecin 25 ans 100% FUE + domaine SEO premium + portable trouvable = cible facile. Opportunité = scaler Meta sur Sud-Ouest élargi'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Toulouse', entreprise: 'Cabinet Dr Matthieu Adam — ADAM Esthétique & Capillaire', adresse: '4 Rue Cécile Brunschvicg, 31200 Toulouse',
    telephone: '05 61 47 74 48', portable_dirigeant: '', site_web: 'https://adam-esthetique-toulouse.fr/',
    email: 'contact@adam-esthetique-toulouse.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Matthieu Adam — Médecin morphologue anti-âge + DIU alopécie Lyon, 10+ ans expertise chute',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'adam-esthetique-toulouse.fr',
    data: {
      specialites: 'Greffe FUE + médecine esthétique anti-âge + traitement alopécie médical',
      actes_phares: 'Greffe cheveux/barbe, trichogramme, traitement chute, laser, AH',
      ticket_moyen: '3k-7k€',
      technologie: 'FUE + plateau médecine esthétique',
      instagram_strength: 'Moyen',
      funnel_ads: 'Google Ads modeste, Meta Ads sous-exploités',
      signaux_stagnation: "Médecin solo Toulouse avec spé alopécie reconnue. Opportunité = test 20-40k€/mois Meta angle 'diagnostic trichogramme + greffe = parcours médical complet'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Le Bouscat', entreprise: "Cabinet Dr Romain Lavocat — L'Écrin Bordeaux", adresse: 'Le Bouscat (33), Bordeaux Métropole',
    telephone: '', portable_dirigeant: '', site_web: 'https://chirurgieesthetiquelavocat.com/',
    email: 'contact@chirurgieesthetiquelavocat.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Romain Lavocat — Chirurgien plasticien, créateur cabinet Anthèse, seul ARTAS Nouvelle-Aquitaine',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'chirurgieesthetiquelavocat.com',
    data: {
      specialites: 'FUE robotisée ARTAS 9X — seul centre ARTAS Nouvelle-Aquitaine',
      actes_phares: "Greffe ARTAS 9X jusqu'à 3000 greffons/session, FUE, FUT, restauration calvitie",
      ticket_moyen: '4,6k-8k€ ARTAS',
      technologie: 'Robot ARTAS 9X (génération la plus récente)',
      instagram_strength: 'Moyen — branding clinique premium "L\'Écrin"',
      funnel_ads: 'Google Ads brand "robot ARTAS Bordeaux", Meta Ads sous-exploités',
      signaux_stagnation: 'Monopole ARTAS Nouvelle-Aquitaine = USP énorme totalement sous-exploitée. Opportunité = marque "ARTAS Sud-Ouest" et capter toute la région'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Bordeaux', entreprise: 'Cabinet Dr Emma Lavocat — La Confidentielle Esthétique', adresse: 'Bordeaux centre',
    telephone: '', portable_dirigeant: '', site_web: 'https://la-confidentielle-esthetique.fr/',
    email: 'contact@la-confidentielle-esthetique.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Emma Lavocat — Cabinet Anthèse + La Confidentielle, robot ARTAS Bordeaux',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'la-confidentielle-esthetique.fr / dr-emma-lavocat.com',
    data: {
      specialites: 'FUE robotisée ARTAS — médecine esthétique cabinet féminin',
      actes_phares: 'Greffe ARTAS, FUE robotisée, médecine esthétique',
      ticket_moyen: '4,5k-8k€',
      technologie: 'Robot ARTAS',
      instagram_strength: 'Moyen — branding premium féminin',
      funnel_ads: 'Google Ads brand, Meta Ads présents',
      signaux_stagnation: "Femme médecin + ARTAS = combo rare et marketable (clientèle féminine pour greffe = segment sous-servi). Opportunité = funnel Meta dédié 'greffe femmes' + médecin femme à Bordeaux"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Nantes', entreprise: 'Centre Dr Berkovits — Greffe Cheveux & Médecine Esthétique Nantes Beaujoire', adresse: '49 Rue Jules Grandjouan, 44300 Nantes-Carquefou-Beaujoire',
    telephone: '02 40 18 32 32', portable_dirigeant: '', site_web: 'https://greffe-cheveux-medecine-esthetique-nantes.fr/',
    email: 'contact@greffe-cheveux-medecine-esthetique-nantes.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Alain Berkovits — Médecin morphologue & anti-âge, centre dédié greffe Nantes',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Haute', statut: 'À contacter',
    source: 'greffe-cheveux-medecine-esthetique-nantes.fr',
    data: {
      specialites: 'Micro-greffe FUE + médecine régénérative cheveu + médecine esthétique + cryolipolyse',
      actes_phares: 'Greffe FUE, mésothérapie cuir chevelu, cryolipolyse, traitements anti-âge homme',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE classique + plateau médical complet',
      instagram_strength: 'Moyen — @jvesthetique actif',
      funnel_ads: 'Google Ads brand fort (SEO Nantes ++), Meta Ads présents',
      signaux_stagnation: "Référence greffe Nantes/Grand-Ouest, médecin établi. Opportunité = exploitation Meta Grand-Ouest (Nantes/Rennes/Angers/Brest/La Rochelle) angle 'Nantes pas besoin de Paris'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Rennes', entreprise: 'CMVH — Centre Médical du Cheveu (ARTAS Rennes)', adresse: 'Rennes (35)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.cmvh-france.com/',
    email: 'contact@cmvh-france.com', email_dirigeant: '',
    dirigeant_principal: 'Équipe médicale CMVH — médecins DIU calvitie',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SAS', note_avis: 4.5, note_priorite: 'Haute', statut: 'À contacter',
    source: 'cmvh-france.com',
    data: {
      specialites: 'FUE robotisée ARTAS 9X exclusivement — 100% dédié capillaire Rennes',
      actes_phares: 'Greffe ARTAS 9X 500-2500 greffons, traitements alopécie',
      ticket_moyen: '4k-8k€',
      technologie: 'Robot ARTAS 9X exclusif',
      instagram_strength: 'Faible-moyen',
      funnel_ads: 'Google Ads brand "ARTAS Rennes", Meta Ads sous-exploités',
      signaux_stagnation: 'Robot ARTAS unique Grand-Ouest = USP énorme. Opportunité = capter Bretagne + Pays de la Loire + Normandie (zone sans concurrence ARTAS sauf Bordeaux/Rennes/Avignon/Paris)'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Montpellier', entreprise: 'Cabinet Dr Jaafar Meziane (pôle Greffe)', adresse: '2 Boulevard Ledru Rollin, 34000 Montpellier',
    telephone: '04 67 20 42 42', portable_dirigeant: '', site_web: 'https://www.chirurgien-esthetique-montpellier.fr/',
    email: 'contact@chirurgien-esthetique-montpellier.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Jaafar Meziane — Chirurgien plasticien & esthétique, chirurgien capillaire (Ordre n°34/12648)',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'chirurgien-esthetique-montpellier.fr / Doctolib',
    data: {
      specialites: 'Greffe capillaire + Keralase + chirurgie plastique complète',
      actes_phares: 'Greffe FUE, Keralase (laser cheveux), traitement chute',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE + Keralase (laser nouvelle gen)',
      instagram_strength: 'Moyen',
      funnel_ads: 'Google Ads brand, Meta Ads modérés',
      signaux_stagnation: 'Chirurgien plastique Montpellier + Keralase USP = bonne base. Opportunité = ads premium ciblage Hérault/Gard/Aude/PO'
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Lyon', entreprise: 'Cabinet Dr Nicolas Costa — Médecine Esthétique', adresse: '51 Rue de la Bourse, 69002 Lyon',
    telephone: '04 82 53 35 04', portable_dirigeant: '', site_web: 'https://www.medecine-esthetique-costa.com/',
    email: 'contact@medecine-esthetique-costa.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Nicolas Costa — Médecin morphologue & anti-âge, micro-greffe + nutrition + greffe',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.8, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'medecine-esthetique-costa.com / docteurcheveux.fr',
    data: {
      specialites: 'Micro-greffe FUE + mésothérapie + PRP + lasers dermato',
      actes_phares: 'Micro-greffe FUE, PRP médical, mésothérapie capillaire, nutrition anti-chute',
      ticket_moyen: '3k-7k€',
      technologie: 'FUE classique + plateau laser',
      instagram_strength: 'Moyen — 4.8/5 Google',
      funnel_ads: 'Google Ads brand, Meta Ads sous-exploités',
      signaux_stagnation: "Médecin Lyon 2e Bourse (quartier business) avec 4.8/5 et approche morpho + nutrition = combo différenciant. Opportunité = ads angle 'approche médicale complète chute = avant greffe, on traite la cause'"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Lyon', entreprise: 'Cabinet Dr Damien Van Der Stegen', adresse: '77 Rue de la République, 69002 Lyon (+ Saint-Étienne)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.damienvanderstegen.com/',
    email: 'contact@damienvanderstegen.com', email_dirigeant: '',
    dirigeant_principal: 'Dr Damien Van Der Stegen — Chirurgien plasticien & esthétique Lyon/Saint-Étienne, membre SoFCEP',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.6, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'damienvanderstegen.com / Doctolib',
    data: {
      specialites: 'Greffe FUE micro-greffe + chirurgie plastique complète',
      actes_phares: 'Greffe FUE micro-greffe, pré-consultation gratuite, chirurgie esthétique',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE classique',
      instagram_strength: 'Faible',
      funnel_ads: 'Google Ads brand, Meta Ads quasi nuls',
      signaux_stagnation: "Chirurgien plasticien SoFCEP Lyon République + 2 sites (Lyon + St-Étienne) = potentiel scaling régional. Opportunité = ads dédiées 'membre SoFCEP officiel' pour rassurance"
    }
  },
  {
    id: gid(), app: 'indescale', secteur_id: 'services-sante', categorie: 'Greffe de cheveux',
    ville: 'Annecy', entreprise: 'Hair Clinic Annecy (Cabinet Dr Pinatel)', adresse: 'Annecy (74)',
    telephone: '', portable_dirigeant: '', site_web: 'https://www.hairclinicannecy.fr/',
    email: 'contact@hairclinicannecy.fr', email_dirigeant: '',
    dirigeant_principal: 'Dr Pinatel — Diplôme calvitie Lyon (2010), FUE Saphir Annecy/Rhône-Alpes/Suisse',
    linkedin_dirigeant: '',
    siren: '', forme_juridique: 'SELARL', note_avis: 4.7, note_priorite: 'Moyenne', statut: 'À contacter',
    source: 'hairclinicannecy.fr / docteurpinatel.com',
    data: {
      specialites: 'FUE / FUE Saphir / DHI / FUT — 100% capillaire',
      actes_phares: 'FUE Saphir Annecy, DHI, FUT, PRP, mésothérapie',
      ticket_moyen: '4k-8k€',
      technologie: 'FUE Saphir + DHI Choï + FUT',
      instagram_strength: 'Moyen',
      funnel_ads: 'Google Ads brand, Meta Ads sous-exploités',
      signaux_stagnation: "Position géo parfaite Annecy = capte Genève/Suisse/Lyon/Chambéry/Aix. Opportunité = ads bilingue FR/CH angle 'qualité française à 30min Genève vs Suisse cher / Turquie risquée'"
    }
  },
]
