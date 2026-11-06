// Données de DÉMO (mode sans clés) pour INDESCALE — volontairement fictives et signalées
// (source: 'démo'), pour montrer l'UI sans jamais faire passer de fausses données pour du réel.
// En production, ces lignes viennent de Google Places + API Recherche d'entreprises + connecteur B2B.
// PRODIGIO, lui, n'est PAS de la démo : ce sont les 71 prospects RÉELS du fichier maître
// (voir src/lib/prodigioData.js), affichés tels quels.

import { PRODIGIO_PROSPECTS } from './prodigioData'
import { CINEMA_PROSPECTS } from './cinemaData'
import { SPA_HAMMAM_PISCINE_PROSPECTS } from './spaHammamPiscineData'
import { GOLF_SIMULATEUR_PROSPECTS } from './golfSimulateurData'
import { HOME_GYM_PROSPECTS } from './homeGymData'
import { DOMOTIQUE_LUXE_PROSPECTS } from './domotiqueLuxeData'
import { ASCENSEUR_PRIVATIF_PROSPECTS } from './ascenseurPrivatifData'
import { CRYOTHERAPIE_PROSPECTS } from './cryotherapieData'
import { WEDDING_PLANNERS_PROSPECTS } from './weddingPlannersData'
import { LIEUX_RECEPTION_PROSPECTS } from './lieuxReceptionData'
import { TRAITEURS_PREMIUM_PROSPECTS } from './traiteursPremiumData'
import { PHOTOGRAPHES_MARIAGE_PROSPECTS } from './photographesMariageData'
import { LOCATION_MATERIEL_PROSPECTS } from './locationMaterielData'
import { BATEAUX_JET_SKI_PROSPECTS } from './bateauxJetSkiData'
import { MEDECINE_ESTHETIQUE_PROSPECTS } from './medecineEsthetiqueData'
import { DENTAIRE_ESTHETIQUE_PROSPECTS } from './dentaireEsthetiqueData'
import { IMPLANTS_DENTAIRES_PROSPECTS } from './implantsDentairesData'
import { GREFFE_CHEVEUX_PROSPECTS } from './greffeCheveuxData'
import { MARBRERIE_PROSPECTS } from './marbrerieData'
import { DRESSING_PROSPECTS } from './dressingData'
import { ESCALIERS_DESIGN_PROSPECTS } from './escaliersDesignData'
import { MENUISERIE_EXCEPTION_PROSPECTS } from './menuiserieExceptionData'
import { PARQUET_HDG_PROSPECTS } from './parquetHdgData'
import { PEINTURE_DECORATIVE_PROSPECTS } from './peintureDecorativeData'
import { ECLAIRAGE_ARCHI_PROSPECTS } from './eclairageArchiData'
import { MOBILIER_SUR_MESURE_PROSPECTS } from './mobilierSurMesureData'
import { CHEMINEES_DESIGN_PROSPECTS } from './chemineesDesignData'
import { OPHTALMO_LASER_PROSPECTS } from './ophtalmoLaserData'
import { AVOCATS_SPECIALISES_PROSPECTS } from './avocatsSpecialisesData'
import { GESTION_PATRIMOINE_PROSPECTS } from './gestionPatrimoineData'
import { FORMATION_PRO_PROSPECTS } from './formationProData'
import { VANS_AMENAGES_PROSPECTS } from './vansAmenagesData'
import { CAMPING_CARS_PROSPECTS } from './campingCarsData'
import { MOTOS_CUSTOM_PROSPECTS } from './motosCustomData'
import { VELOS_PREMIUM_PROSPECTS } from './velosPremiumData'
import { GARAGE_COLLECTION_PROSPECTS } from './garageCollectionData'
import { CONCESSION_PREMIUM_PROSPECTS } from './concessionPremiumData'
import { VEHICULES_PRESTIGE_PROSPECTS } from './vehiculesPrestigeData'
import { MANDATAIRES_AUTO_PROSPECTS } from './mandatairesAutoData'
import { COVERING_AUTO_PROSPECTS } from './coveringAutoData'
import { DETAILING_AUTO_PROSPECTS } from './detailingAutoData'
import { ELEVAGES_CHIENS_CHATS_PROSPECTS } from './elevagesChiensChatsData'
import { CHEVAUX_PROSPECTS } from './chevauxData'
import { VETERINAIRES_PROSPECTS } from './veterinairesData'
import { ANIMAUX_PREMIUM_SERVICES_PROSPECTS } from './animauxPremiumServicesData'
import { BUSINESS_SCHOOLS_PROSPECTS } from './businessSchoolsData'
import { ECOLES_INGENIEURS_PROSPECTS } from './ecolesIngenieursData'
import { ECOLES_INFO_PROSPECTS } from './ecolesInfoData'
import { ECOLES_IA_DATA_PROSPECTS } from './ecolesIaDataData'
import { ECOLES_CINEMA_PROSPECTS } from './ecolesCinemaData'
import { ECOLES_JEUX_VIDEO_PROSPECTS } from './ecolesJeuxVideoData'
import { ECOLES_DESIGN_MODE_PROSPECTS } from './ecolesDesignModeData'
import { ECOLES_ARCHI_PROSPECTS } from './ecolesArchiData'
import { ECOLES_COM_PROSPECTS } from './ecolesComData'
import { MBA_EXECUTIVE_PROSPECTS } from './mbaExecutiveData'
import { CUISINES_HDG_PROSPECTS } from './cuisinesHdgData'
import { PERGOLAS_PROSPECTS } from './pergolasData'
import { PISCINES_PROSPECTS } from './piscinesData'
import { PISCINES_PREMIUM_PROSPECTS } from './piscinesPremiumData'
import { ABRIS_PISCINE_PROSPECTS } from './abrisPiscineData'
import { SPAS_JACUZZIS_PROSPECTS } from './spasJacuzzisData'
import { STUDIOS_JARDIN_PROSPECTS } from './studiosJardinData'
import { VERANDAS_PROSPECTS } from './verandasData'
import { STORES_PROSPECTS } from './storesData'
import { PORTAILS_CLOTURES_PROSPECTS } from './portailsCloturesData'
import { SAUNAS_PROSPECTS } from './saunasData'
import { CARPORTS_SOLAIRES_PROSPECTS } from './carportsSolairesData'
import { CUISINES_ETE_PROSPECTS } from './cuisinesEteData'
import { POOL_HOUSE_PROSPECTS } from './poolHouseData'
import { PAYSAGISTE_PROSPECTS } from './paysagisteData'
import { COURT_TENNIS_PADEL_PROSPECTS } from './courtTennisPadelData'
import { CONSTRUCTEURS_MAISONS_PROSPECTS } from './constructeursMaisonsData'
import { RENOVATION_GLOBALE_PROSPECTS } from './renovationGlobaleData'

let _id = 0
const id = () => 'demo-' + (++_id)

// Plus de données de démo fictives : toutes les catégories INDESCALE sont peuplées
// de cibles réelles (listes figées). DEMO_PROSPECTS reste vide.
export const DEMO_PROSPECTS = []

export function seedProspects() {
  // INDESCALE = démo fictive ; PRODIGIO = vraies données du fichier maître.
  // Copie profonde pour que le store mémoire soit mutable sans toucher la source.
  return [
    ...DEMO_PROSPECTS,
    ...CINEMA_PROSPECTS,
    ...SPA_HAMMAM_PISCINE_PROSPECTS,
    ...GOLF_SIMULATEUR_PROSPECTS,
    ...HOME_GYM_PROSPECTS,
    ...DOMOTIQUE_LUXE_PROSPECTS,
    ...ASCENSEUR_PRIVATIF_PROSPECTS,
    ...CRYOTHERAPIE_PROSPECTS,
    ...WEDDING_PLANNERS_PROSPECTS,
    ...LIEUX_RECEPTION_PROSPECTS,
    ...TRAITEURS_PREMIUM_PROSPECTS,
    ...PHOTOGRAPHES_MARIAGE_PROSPECTS,
    ...LOCATION_MATERIEL_PROSPECTS,
    ...BATEAUX_JET_SKI_PROSPECTS,
    ...MEDECINE_ESTHETIQUE_PROSPECTS,
    ...DENTAIRE_ESTHETIQUE_PROSPECTS,
    ...IMPLANTS_DENTAIRES_PROSPECTS,
    ...GREFFE_CHEVEUX_PROSPECTS,
    ...MARBRERIE_PROSPECTS,
    ...DRESSING_PROSPECTS,
    ...ESCALIERS_DESIGN_PROSPECTS,
    ...MENUISERIE_EXCEPTION_PROSPECTS,
    ...PARQUET_HDG_PROSPECTS,
    ...PEINTURE_DECORATIVE_PROSPECTS,
    ...ECLAIRAGE_ARCHI_PROSPECTS,
    ...MOBILIER_SUR_MESURE_PROSPECTS,
    ...CHEMINEES_DESIGN_PROSPECTS,
    ...OPHTALMO_LASER_PROSPECTS,
    ...AVOCATS_SPECIALISES_PROSPECTS,
    ...GESTION_PATRIMOINE_PROSPECTS,
    ...FORMATION_PRO_PROSPECTS,
    ...VANS_AMENAGES_PROSPECTS,
    ...CAMPING_CARS_PROSPECTS,
    ...MOTOS_CUSTOM_PROSPECTS,
    ...VELOS_PREMIUM_PROSPECTS,
    ...GARAGE_COLLECTION_PROSPECTS,
    ...CONCESSION_PREMIUM_PROSPECTS,
    ...VEHICULES_PRESTIGE_PROSPECTS,
    ...MANDATAIRES_AUTO_PROSPECTS,
    ...COVERING_AUTO_PROSPECTS,
    ...DETAILING_AUTO_PROSPECTS,
    ...ELEVAGES_CHIENS_CHATS_PROSPECTS,
    ...CHEVAUX_PROSPECTS,
    ...VETERINAIRES_PROSPECTS,
    ...ANIMAUX_PREMIUM_SERVICES_PROSPECTS,
    ...BUSINESS_SCHOOLS_PROSPECTS,
    ...ECOLES_INGENIEURS_PROSPECTS,
    ...ECOLES_INFO_PROSPECTS,
    ...ECOLES_IA_DATA_PROSPECTS,
    ...ECOLES_CINEMA_PROSPECTS,
    ...ECOLES_JEUX_VIDEO_PROSPECTS,
    ...ECOLES_DESIGN_MODE_PROSPECTS,
    ...ECOLES_ARCHI_PROSPECTS,
    ...ECOLES_COM_PROSPECTS,
    ...MBA_EXECUTIVE_PROSPECTS,
    ...CUISINES_HDG_PROSPECTS,
    ...PERGOLAS_PROSPECTS,
    ...PISCINES_PROSPECTS,
    ...PISCINES_PREMIUM_PROSPECTS,
    ...ABRIS_PISCINE_PROSPECTS,
    ...SPAS_JACUZZIS_PROSPECTS,
    ...STUDIOS_JARDIN_PROSPECTS,
    ...VERANDAS_PROSPECTS,
    ...STORES_PROSPECTS,
    ...PORTAILS_CLOTURES_PROSPECTS,
    ...SAUNAS_PROSPECTS,
    ...CARPORTS_SOLAIRES_PROSPECTS,
    ...CUISINES_ETE_PROSPECTS,
    ...POOL_HOUSE_PROSPECTS,
    ...PAYSAGISTE_PROSPECTS,
    ...COURT_TENNIS_PADEL_PROSPECTS,
    ...CONSTRUCTEURS_MAISONS_PROSPECTS,
    ...RENOVATION_GLOBALE_PROSPECTS,
    ...PRODIGIO_PROSPECTS,
  ].map(p => ({
    qualification: '', date_relance: null, ne_plus_contacter: false, data: {}, ...p
  }))
}
