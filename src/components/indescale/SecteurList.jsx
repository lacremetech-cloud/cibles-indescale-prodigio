import { Link } from 'react-router-dom'
import Header from '../Header.jsx'
import { useConfig } from '../../lib/config'

export default function SecteurList() {
  const { config, error } = useConfig()
  if (error) return <><Header title="INDESCALE" /><div className="empty">Erreur config : {error}</div></>
  if (!config) return <><Header title="INDESCALE" /><div className="empty">Chargement…</div></>

  return (
    <>
      <Header title="INDESCALE" subtitle="Choisis un secteur" />
      <div className="grid">
        {config.secteurs.map(s => (
          <Link key={s.id} to={`/indescale/${s.id}`} className="tile">
            <div className="t-title">{s.nom}</div>
            <div className="t-meta"><b>{s.categories.length}</b> catégories</div>
          </Link>
        ))}
      </div>
    </>
  )
}
