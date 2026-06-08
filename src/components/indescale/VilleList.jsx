import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header.jsx'
import { useConfig, findSecteur, villesFromConfig } from '../../lib/config'
import { listProspects, subscribe, isDemo } from '../../lib/dataClient'

export default function VilleList() {
  const { secteurId, categorie } = useParams()
  const cat = decodeURIComponent(categorie)
  const { config } = useConfig()
  const [counts, setCounts] = useState({})

  useEffect(() => {
    let active = true
    const load = () => listProspects({ app: 'indescale', secteur_id: secteurId, categorie: cat })
      .then(rows => {
        if (!active) return
        const c = {}
        rows.forEach(r => { c[r.ville] = (c[r.ville] || 0) + 1 })
        setCounts(c)
      })
    load()
    const unsub = isDemo ? subscribe(load) : () => {}
    return () => { active = false; unsub() }
  }, [secteurId, cat])

  if (!config) return <><Header title="INDESCALE" /><div className="empty">Chargement…</div></>
  const secteur = findSecteur(config, secteurId)
  const villes = villesFromConfig(config)

  return (
    <>
      <Header title={cat} subtitle={`${secteur?.nom || ''} · choisis une ville`} />
      <div className="grid">
        {villes.map(v => {
          const n = counts[v] || 0
          return (
            <Link key={v} to={`/indescale/${secteurId}/${encodeURIComponent(cat)}/${encodeURIComponent(v)}`} className="tile">
              <div className="t-title">{v}</div>
              <div className="t-meta">
                {n > 0 ? <><b>{n}</b> entreprises en base</> : <span style={{ color: 'var(--muted)' }}>vide — à enrichir</span>}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
