import { useRef, useState } from 'react'
import { STATUTS } from '../../lib/statuses'
import { telHref } from '../../lib/links'

// Vue Kanban : une colonne par statut, cartes déplaçables (drag&drop desktop)
// + sélecteur de statut sur chaque carte (fiable au tactile/mobile).
export default function KanbanBoard({ rows, onMove }) {
  const dragId = useRef(null)
  const [over, setOver] = useState(null)

  const byStatut = {}
  STATUTS.forEach(s => { byStatut[s.value] = [] })
  rows.forEach(r => { (byStatut[r.statut] || (byStatut[r.statut] = [])).push(r) })

  return (
    <div className="kanban">
      {STATUTS.map(s => {
        const items = byStatut[s.value] || []
        return (
          <div
            key={s.value}
            className={'kcol' + (over === s.value ? ' over' : '')}
            onDragOver={e => { e.preventDefault(); setOver(s.value) }}
            onDragLeave={() => setOver(o => (o === s.value ? null : o))}
            onDrop={() => {
              setOver(null)
              if (dragId.current) onMove(dragId.current, s.value)
              dragId.current = null
            }}
          >
            <div className="kcol-head" style={{ borderTopColor: s.accent }}>
              <span className="kcol-dot" style={{ background: s.accent }} />
              <span className="kcol-name">{s.label}</span>
              <span className="kcol-count">{items.length}</span>
            </div>
            <div className="kcol-body">
              {items.length === 0 && <div className="kcol-empty">—</div>}
              {items.map(p => (
                <KanbanCard key={p.id} p={p} accent={s.accent}
                  onDragStart={() => { dragId.current = p.id }}
                  onMove={onMove} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function KanbanCard({ p, accent, onDragStart, onMove }) {
  const phone = p.portable_dirigeant || p.telephone
  return (
    <div className="kcard" draggable onDragStart={onDragStart} style={{ borderLeftColor: accent }}>
      <div className="kc-name">{p.entreprise}</div>
      {p.dirigeant_principal && <div className="kc-dir">{p.dirigeant_principal}</div>}
      {(p.ville || p.adresse) && <div className="kc-meta">{p.ville || p.adresse}</div>}
      <div className="kc-foot">
        {p.note_priorite && <span className="pill sm">{p.note_priorite}</span>}
        {phone
          ? <a className="kc-call" href={telHref(phone)} onClick={e => e.stopPropagation()}>📞 {phone}</a>
          : <span className="kc-call disabled">📞 —</span>}
      </div>
      {/* Fallback tactile : changer de statut sans drag&drop */}
      <select className="kc-status" value={p.statut} onChange={e => onMove(p.id, e.target.value)}>
        {STATUTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>
    </div>
  )
}
