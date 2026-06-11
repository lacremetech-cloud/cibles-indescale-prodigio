import { useParams } from 'react-router-dom'
import Header from '../Header.jsx'
import CrmView from '../crm/CrmView.jsx'
import { useConfig, findSecteur, findCategorie } from '../../lib/config'

// Toutes les catégories INDESCALE rendent directement la liste consolidée (sans
// passer par un niveau "ville"). Le tri par ville se fait via le filtre intégré
// à CrmView — pas besoin de cliquer dans un sous-dossier ville pour drill down.
export default function VilleList() {
  const { secteurId, categorie } = useParams()
  const cat = decodeURIComponent(categorie)
  const { config } = useConfig()

  if (!config) return <><Header title="INDESCALE" /><div className="empty">Chargement…</div></>
  const secteur = findSecteur(config, secteurId)
  const catObj = secteur ? findCategorie(secteur, cat) : null

  const filter = { app: 'indescale', secteur_id: secteurId, categorie: cat }
  return (
    <CrmView
      title={cat}
      subtitle={`${secteur?.nom || ''}${catObj?.ticket ? ' · ' + catObj.ticket : ''}`}
      filter={filter}
      addBase={filter}
    />
  )
}
