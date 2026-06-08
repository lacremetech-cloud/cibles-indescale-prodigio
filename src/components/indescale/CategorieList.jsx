import { Link, useParams } from 'react-router-dom'
import Header from '../Header.jsx'
import { useConfig, findSecteur } from '../../lib/config'

export default function CategorieList() {
  const { secteurId } = useParams()
  const { config } = useConfig()
  if (!config) return <><Header title="INDESCALE" /><div className="empty">Chargement…</div></>
  const secteur = findSecteur(config, secteurId)
  if (!secteur) return <><Header title="INDESCALE" /><div className="empty">Secteur introuvable</div></>

  return (
    <>
      <Header title={secteur.nom} subtitle="Choisis une catégorie" />
      <div className="grid">
        {secteur.categories.map(c => (
          <Link key={c.nom} to={`/indescale/${secteurId}/${encodeURIComponent(c.nom)}`} className="tile">
            <div className="t-title">{c.nom}</div>
            <div className="t-meta">Ticket : <b>{c.ticket}</b></div>
            {c.public_cible && <div className="t-meta">{c.public_cible}</div>}
          </Link>
        ))}
      </div>
    </>
  )
}
