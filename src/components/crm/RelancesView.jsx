import { useEffect, useState } from 'react'
import Header from '../Header.jsx'
import ProspectCard from './ProspectCard.jsx'
import { listProspects, subscribe, isDemo } from '../../lib/dataClient'
import { relanceDue } from '../../lib/statuses'

// « Mes relances du jour » — tous secteurs confondus (brief §5).
export default function RelancesView() {
  const [rows, setRows] = useState(null)

  useEffect(() => {
    let active = true
    const load = () => listProspects({}).then(all => {
      if (!active) return
      const due = all
        .filter(p => relanceDue(p.date_relance) && !p.ne_plus_contacter)
        .sort((a, b) => (a.date_relance || '').localeCompare(b.date_relance || ''))
      setRows(due)
    })
    load()
    const unsub = isDemo ? subscribe(load) : () => {}
    return () => { active = false; unsub() }
  }, [])

  return (
    <>
      <Header title="Mes relances du jour" subtitle="Tous secteurs · échéance aujourd'hui ou passée" showRelances={false} />
      {rows === null && <div className="empty">Chargement…</div>}
      {rows && rows.length === 0 && <div className="empty">🎉 Aucune relance en retard. Tu es à jour.</div>}
      {rows && rows.length > 0 && <div className="cards">{rows.map(p => <ProspectCard key={p.id} prospect={p} />)}</div>}
    </>
  )
}
