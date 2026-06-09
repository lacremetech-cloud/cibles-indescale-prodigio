import { useEffect, useMemo, useState } from 'react'
import Header from '../Header.jsx'
import ProspectCard from './ProspectCard.jsx'
import KanbanBoard from './KanbanBoard.jsx'
import AddProspectModal from './AddProspectModal.jsx'
import { listProspects, subscribe, isDemo, updateProspect } from '../../lib/dataClient'
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
  const [vue, setVue] = useState('liste') // 'liste' | 'kanban'
  const [villeFilter, setVilleFilter] = useState('')
  const [reseauFilter, setReseauFilter] = useState('')
  const [withPortable, setWithPortable] = useState(false)

  useEffect(() => {
    let active = true
    const load = () => listProspects(filter).then(r => { if (active) setRows(r) })
    load()
    const unsub = isDemo ? subscribe(load) : () => {}
    return () => { active = false; unsub() }
  }, [JSON.stringify(filter)])

  // Déplacement Kanban : maj optimiste locale + persistance.
  async function moveProspect(id, nouveauStatut) {
    setRows(prev => prev ? prev.map(r => (r.id === id ? { ...r, statut: nouveauStatut } : r)) : prev)
    try { await updateProspect(id, { statut: nouveauStatut }) } catch (e) { console.error(e) }
  }

  const villeOptions = useMemo(
    () => [...new Set((rows || []).map(r => r.ville).filter(Boolean))].sort((a, b) => a.localeCompare(b)),
    [rows]
  )
  const reseauOptions = useMemo(
    () => [...new Set((rows || []).map(r => normaliseReseau(r.data?.reseau_franchise)).filter(Boolean))].sort((a, b) => a.localeCompare(b)),
    [rows]
  )

  const filtered = useMemo(() => {
    let r = rows || []
    if (statut) r = r.filter(x => x.statut === statut)
    if (villeFilter) r = r.filter(x => x.ville === villeFilter)
    if (reseauFilter) r = r.filter(x => normaliseReseau(x.data?.reseau_franchise) === reseauFilter)
    if (withPortable) r = r.filter(x => (x.portable_dirigeant || '').trim() !== '')
    if (hideOpp) r = r.filter(x => !x.ne_plus_contacter)
    if (q.trim()) {
      const s = q.toLowerCase()
      r = r.filter(x => [
        x.entreprise, x.dirigeant_principal, x.ville, x.zone, x.adresse,
        x.telephone, x.portable_dirigeant, x.email_dirigeant,
        x.data?.reseau_franchise, x.data?.specialisation_percue,
        x.data?.echantillon_mandats_1m_plus, x.data?.signaux_stagnation
      ].filter(Boolean).join(' ').toLowerCase().includes(s))
    }
    r = [...r].sort((a, b) => {
      if (tri === 'relance') return (a.date_relance || '9999').localeCompare(b.date_relance || '9999')
      if (tri === 'priorite') return prio(a.note_priorite) - prio(b.note_priorite)
      if (tri === 'ville') return (a.ville || '').localeCompare(b.ville || '')
      if (tri === 'statut') return (a.statut || '').localeCompare(b.statut || '')
      return (a.entreprise || '').localeCompare(b.entreprise || '')
    })
    return r
  }, [rows, statut, tri, q, hideOpp, villeFilter, reseauFilter, withPortable])

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
        <div className="seg">
          <button className={'seg-btn' + (vue === 'liste' ? ' on' : '')} onClick={() => setVue('liste')}>☰ Liste</button>
          <button className={'seg-btn' + (vue === 'kanban' ? ' on' : '')} onClick={() => { setStatut(''); setVue('kanban') }}>▦ Kanban</button>
        </div>
        <input placeholder="🔍 Rechercher…" value={q} onChange={e => setQ(e.target.value)} />
        {vue === 'liste' && (
          <select value={statut} onChange={e => setStatut(e.target.value)}>
            <option value="">Tous statuts</option>
            {STATUTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        )}
        {vue === 'liste' && (
          <select value={tri} onChange={e => setTri(e.target.value)}>
            <option value="entreprise">Tri : nom</option>
            <option value="statut">Tri : statut</option>
            <option value="relance">Tri : relance</option>
            <option value="priorite">Tri : priorité</option>
            <option value="ville">Tri : ville</option>
          </select>
        )}
        {vue === 'liste' && villeOptions.length > 1 && (
          <select value={villeFilter} onChange={e => setVilleFilter(e.target.value)}>
            <option value="">Toutes villes ({villeOptions.length})</option>
            {villeOptions.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        )}
        {vue === 'liste' && reseauOptions.length > 1 && (
          <select value={reseauFilter} onChange={e => setReseauFilter(e.target.value)}>
            <option value="">Tous réseaux ({reseauOptions.length})</option>
            {reseauOptions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        )}
        <label className="pill" style={{ cursor: 'pointer', display: 'flex', gap: 6, alignItems: 'center' }}>
          <input type="checkbox" checked={withPortable} onChange={e => setWithPortable(e.target.checked)} />
          📱 avec portable
        </label>
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

      {vue === 'kanban' ? (
        rows && <KanbanBoard rows={filtered} onMove={moveProspect} />
      ) : grouped ? (
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

// Réduit "BARNES master franchise Suisse" / "BARNES intégré, non franchise" / "BARNES (intégré)" → "BARNES"
// pour que le select Réseau affiche les vraies marques (15 lignes max) et pas 50 variantes.
const RESEAUX_CANONIQUES = [
  ['Sotheby', "Sotheby's"],
  ['Christie', "Christie's"],
  ["BARNES", 'BARNES'],
  ['Coldwell', 'Coldwell Banker'],
  ['John Taylor', 'John Taylor'],
  ['Daniel Féau', 'Daniel Féau'],
  ['Daniel Feau', 'Daniel Féau'],
  ['Junot', 'Junot'],
  ['Émile Garcin', 'Émile Garcin'],
  ['Emile Garcin', 'Émile Garcin'],
  ['Vaneau', 'Vaneau'],
  ['Marc Foujols', 'Marc Foujols'],
  ['Naef', 'Naef Prestige / Knight Frank'],
  ['Knight Frank', 'Naef Prestige / Knight Frank'],
  ['Patrice Besse', 'Patrice Besse'],
  ['Espaces Atypiques', 'Espaces Atypiques'],
  ['Steiger', "Steiger & Cie"],
  ['Carlton International', 'Carlton International'],
  ['Engel', 'Engel & Völkers'],
  ['Savills', 'Savills'],
  ['Capi', 'Capi'],
  ['Hyde Park', 'Hyde Park'],
  ['Vingt Paris', 'Vingt Paris'],
  ['Caroli', 'Caroli'],
]

function normaliseReseau(raw) {
  if (!raw) return ''
  const s = String(raw)
  for (const [pat, canon] of RESEAUX_CANONIQUES) {
    if (s.toLowerCase().includes(pat.toLowerCase())) return canon
  }
  if (/ind[ée]pendant|familial/i.test(s)) return 'Indépendant / Familial'
  return 'Autre'
}
