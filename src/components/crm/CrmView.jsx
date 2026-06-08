import { useEffect, useMemo, useState } from 'react'
import Header from '../Header.jsx'
import ProspectCard from './ProspectCard.jsx'
import AddProspectModal from './AddProspectModal.jsx'
import { listProspects, subscribe, isDemo } from '../../lib/dataClient'
import { STATUTS, estContacte } from '../../lib/statuses'
import { exportCsv } from '../../lib/exportCsv'

// Vue CRM réutilisable (INDESCALE et PRODIGIO partagent le même moteur).
export default function CrmView({ title, subtitle, filter, addBase, groupByVille = false, headerExtra = null }) {
  const [rows, setRows] = useState(null)
  const [statut, setStatut] = useState('')
  const [tri, setTri] = useState('entreprise')
  const [q, setQ] = useState('')
  const [hideOpp, setHideOpp] = useState(true)
  const [showAdd, setShowAdd] = useState(false)

  useEffect(() => {
    let active = true
    const load = () => listProspects(filter).then(r => { if (active) setRows(r) })
    load()
    const unsub = isDemo ? subscribe(load) : () => {}
    return () => { active = false; unsub() }
  }, [JSON.stringify(filter)])

  const filtered = useMemo(() => {
    let r = rows || []
    if (statut) r = r.filter(x => x.statut === statut)
    if (hideOpp) r = r.filter(x => !x.ne_plus_contacter)
    if (q.trim()) {
      const s = q.toLowerCase()
      r = r.filter(x => [x.entreprise, x.dirigeant_principal, x.ville].filter(Boolean).join(' ').toLowerCase().includes(s))
    }
    r = [...r].sort((a, b) => {
      if (tri === 'relance') return (a.date_relance || '9999').localeCompare(b.date_relance || '9999')
      if (tri === 'priorite') return prio(a.note_priorite) - prio(b.note_priorite)
      if (tri === 'ville') return (a.ville || '').localeCompare(b.ville || '')
      if (tri === 'statut') return (a.statut || '').localeCompare(b.statut || '')
      return (a.entreprise || '').localeCompare(b.entreprise || '')
    })
    return r
  }, [rows, statut, tri, q, hideOpp])

  const total = (rows || []).length
  const contactes = (rows || []).filter(x => estContacte(x.statut)).length
  const pct = total ? Math.round((contactes / total) * 100) : 0

  const grouped = useMemo(() => {
    if (!groupByVille) return null
    const g = {}
    filtered.forEach(r => { (g[r.ville || '—'] ||= []).push(r) })
    return Object.entries(g).sort((a, b) => a[0].localeCompare(b[0]))
  }, [filtered, groupByVille])

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      {headerExtra}

      <div className="progress-label">{contactes} contactés / {total} total · {pct}%</div>
      <div className="progress"><span style={{ width: pct + '%' }} /></div>

      <div className="toolbar">
        <input placeholder="🔍 Rechercher…" value={q} onChange={e => setQ(e.target.value)} />
        <select value={statut} onChange={e => setStatut(e.target.value)}>
          <option value="">Tous statuts</option>
          {STATUTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <select value={tri} onChange={e => setTri(e.target.value)}>
          <option value="entreprise">Tri : nom</option>
          <option value="statut">Tri : statut</option>
          <option value="relance">Tri : relance</option>
          <option value="priorite">Tri : priorité</option>
          <option value="ville">Tri : ville</option>
        </select>
        <label className="pill" style={{ cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center' }}>
          <input type="checkbox" checked={hideOpp} onChange={e => setHideOpp(e.target.checked)} />
          masquer opposition
        </label>
        <div className="spacer" />
        <button className="btn" onClick={() => exportCsv(filtered, (title || 'prospects') + '.csv')}>⬇ Export CSV</button>
      </div>

      {rows === null && <div className="empty">Chargement…</div>}
      {rows && filtered.length === 0 && (
        <div className="empty">Aucun prospect ici. Utilise « + Ajouter » {filter.app === 'indescale' ? 'ou « Rafraîchir cette ville »' : ''}.</div>
      )}

      {grouped ? (
        grouped.map(([ville, items]) => (
          <div key={ville}>
            <div className="section-label">{ville} · {items.length}</div>
            <div className="cards">{items.map(p => <ProspectCard key={p.id} prospect={p} />)}</div>
          </div>
        ))
      ) : (
        <div className="cards">{filtered.map(p => <ProspectCard key={p.id} prospect={p} />)}</div>
      )}

      <div className="fab">
        <button className="btn primary" onClick={() => setShowAdd(true)}>+ Ajouter</button>
      </div>
      {showAdd && <AddProspectModal base={addBase} onClose={() => setShowAdd(false)} />}
    </>
  )
}

function prio(p) {
  const m = { haute: 0, moyenne: 1, basse: 2 }
  return m[(p || '').toLowerCase()] ?? 1.5
}
