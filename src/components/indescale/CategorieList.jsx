import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header.jsx'
import { useConfig, findSecteur } from '../../lib/config'
import { listProspects, subscribe, isDemo } from '../../lib/dataClient'

export default function CategorieList() {
  const { secteurId } = useParams()
  const { config } = useConfig()
  const [counts, setCounts] = useState({})

  useEffect(() => {
    let active = true
    const load = () => listProspects({ app: 'indescale', secteur_id: secteurId })
      .then(rows => {
        if (!active) return
        const c = {}
        rows.forEach(r => { c[r.categorie] = (c[r.categorie] || 0) + 1 })
        setCounts(c)
      })
    load()
    const unsub = isDemo ? subscribe(load) : () => {}
    return () => { active = false; unsub() }
  }, [secteurId])

  if (!config) return <><Header title="INDESCALE" /><div className="empty">Chargement…</div></>
  const secteur = findSecteur(config, secteurId)
  if (!secteur) return <><Header title="INDESCALE" /><div className="empty">Secteur introuvable</div></>

  return (
    <>
      <Header title={secteur.nom} subtitle="Choisis une catégorie" />
      <div className="grid">
        {secteur.categories.map(c => {
          const n = counts[c.nom] || 0
          return (
            <Link key={c.nom} to={`/indescale/${secteurId}/${encodeURIComponent(c.nom)}`} className="tile">
              <div className="t-title">{c.nom}</div>
              <div className="t-meta">
                {n > 0
                  ? <><b>{n}</b> entreprise{n > 1 ? 's' : ''} en base</>
                  : <span style={{ color: 'var(--muted)' }}>vide — à enrichir</span>}
              </div>
              <div className="t-meta">Ticket : <b>{c.ticket}</b></div>
              {c.public_cible && <div className="t-meta">{c.public_cible}</div>}
            </Link>
          )
        })}
      </div>
    </>
  )
}
