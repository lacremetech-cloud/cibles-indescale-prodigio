import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header.jsx'
import { listSecteurs, ETAPES } from '../../lib/studioClient'

export default function StudioHome() {
  const [secteurs, setSecteurs] = useState(null)
  const [err, setErr] = useState('')
  useEffect(() => { listSecteurs().then(setSecteurs).catch(e => setErr(e.message)) }, [])

  return (
    <>
      <Header title="Studio" subtitle="Sites premium envoyés en prospection" showRelances={false} />
      {err && <div className="empty">Erreur : {err}</div>}
      {!secteurs && !err && <div className="empty">Chargement…</div>}
      <div className="grid">
        {secteurs?.map(s => (
          <Link key={s.id} to={`/studio/${s.id}`} className="tile">
            <div className="t-title">{s.nom}</div>
            <div className="progress-label" style={{ marginTop: 12 }}>Étape {s.etape}/7 · {ETAPES[s.etape].titre}</div>
            <div className="progress"><span style={{ width: `${(s.etape / 7) * 100}%` }} /></div>
            {s.notes && <div className="t-meta">{s.notes}</div>}
          </Link>
        ))}
      </div>
    </>
  )
}
