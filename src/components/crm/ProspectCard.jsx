import { useEffect, useState } from 'react'
import { statutMeta, STATUTS, relanceDue } from '../../lib/statuses'
import { telHref, mailtoHref, linkedinSearchHref, emailSuspect } from '../../lib/links'
import { updateProspect, listNotes, addNote } from '../../lib/dataClient'

export default function ProspectCard({ prospect }) {
  const [p, setP] = useState(prospect)
  const [notes, setNotes] = useState([])
  const [showNotes, setShowNotes] = useState(false)
  const [draft, setDraft] = useState('')

  useEffect(() => { setP(prospect) }, [prospect])

  const meta = statutMeta(p.statut)
  const cls = ['card']
  if (p.statut === 'Gagné') cls.push('won')
  if (p.statut === 'Perdu') cls.push('lost')
  if (p.ne_plus_contacter) cls.push('opp')

  const suspect = emailSuspect(p.email || p.email_dirigeant, p.site_web)
  const dirPhone = p.portable_dirigeant
  const stdPhone = p.telephone
  const linkedin = p.linkedin_dirigeant || linkedinSearchHref(p.dirigeant_principal, p.entreprise)

  // Pour les fiches INDESCALE en liste figée, ville=pays — on extrait la ville réelle
  // depuis « Siège : … » de data.note pour la rendre apparente sur la carte.
  function extractSiege(note) {
    if (!note) return null
    const m = note.match(/Si[èe]ge\s*:\s*([^.]+?)(?=\.\s|\.$|$)/i)
    return m ? m[1].trim().replace(/\s+/g, ' ') : null
  }
  const siegeFromNote = !p.adresse ? extractSiege(p.data?.note) : null
  const displayAddr = p.adresse || siegeFromNote
    || (p.ville && p.zone ? `${p.zone}, ${p.ville}` : p.ville)

  async function patch(fields) {
    setP(prev => ({ ...prev, ...fields }))
    try { await updateProspect(p.id, fields) } catch (e) { console.error(e) }
  }

  async function toggleNotes() {
    const next = !showNotes
    setShowNotes(next)
    if (next) setNotes(await listNotes(p.id))
  }

  async function saveNote() {
    if (!draft.trim()) return
    await addNote(p.id, draft.trim())
    setDraft('')
    setNotes(await listNotes(p.id))
  }

  return (
    <div className={cls.join(' ')} style={{ borderLeftColor: meta.accent }}>
      <div className="c-head">
        <div style={{ flex: 1 }}>
          <div className="c-name">{p.entreprise}</div>
          {p.dirigeant_principal && (
            <div className="c-dir">Dirigeant : <b>{p.dirigeant_principal}</b>{p.forme_juridique ? ` · ${p.forme_juridique}` : ''}</div>
          )}
          {displayAddr && <div className="c-addr">📍 {displayAddr}</div>}
        {p.data?.note && <div className="c-note">{p.data.note}</div>}
        </div>
        {p.note_avis != null && <div className="c-rating">★ {p.note_avis}</div>}
      </div>

      {/* Badges d'alerte */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
        {suspect && <span className="badge suspect" title="Domaine email ≠ domaine site web">⚠ email à vérifier</span>}
        {p.data?.dirigeant_incertain && <span className="badge suspect" title="Correspondance base entreprises incertaine">⚠ dirigeant à vérifier</span>}
        {relanceDue(p.date_relance) && !p.ne_plus_contacter && <span className="badge relance">📅 relance due</span>}
        {p.ne_plus_contacter && <span className="badge opp">🚫 ne plus contacter</span>}
        {p.note_priorite && <span className="pill">priorité : {p.note_priorite}</span>}
        {p.source && <span className="pill">{p.source}</span>}
      </div>

      {/* Qualification cible — PRODIGIO uniquement (revue manuelle des prospects) */}
      {p.app === 'prodigio' && (
        <div className="cible-row">
          <button
            type="button"
            className={'cible-btn cible-plus' + (p.qualification_cible === 'cible_plus' ? ' on' : '')}
            onClick={() => patch({ qualification_cible: p.qualification_cible === 'cible_plus' ? '' : 'cible_plus' })}
          >✅ CIBLE +</button>
          <button
            type="button"
            className={'cible-btn cible-moins' + (p.qualification_cible === 'cible_moins' ? ' on' : '')}
            onClick={() => patch({ qualification_cible: p.qualification_cible === 'cible_moins' ? '' : 'cible_moins' })}
          >🟡 CIBLE −</button>
          <button
            type="button"
            className={'cible-btn cible-pas' + (p.qualification_cible === 'pas_cible' ? ' on' : '')}
            onClick={() => patch({ qualification_cible: p.qualification_cible === 'pas_cible' ? '' : 'pas_cible' })}
          >❌ PAS CIBLE</button>
        </div>
      )}

      {/* Actions d'appel / contact — le portable du dirigeant est prioritaire (vert) */}
      <div className="actions">
        {dirPhone ? (
          <a className="act call-dir" href={telHref(dirPhone)}>📞 Dirigeant {dirPhone}</a>
        ) : stdPhone ? (
          <a className="act" href={telHref(stdPhone)}>📞 {stdPhone}</a>
        ) : (
          <span className="act disabled">📞 pas de numéro</span>
        )}
        {dirPhone && stdPhone && <a className="act" href={telHref(stdPhone)}>☎ Standard</a>}
        {(p.email_dirigeant || p.email)
          ? <a className="act" href={mailtoHref(p.email_dirigeant || p.email)}>✉ Email</a>
          : <span className="act disabled">✉ —</span>}
        {linkedin ? <a className="act" href={linkedin} target="_blank" rel="noreferrer">in LinkedIn</a> : null}
        {p.site_web && <a className="act" href={p.site_web.startsWith('http') ? p.site_web : 'https://' + p.site_web} target="_blank" rel="noreferrer">🌐 Site</a>}
      </div>

      {/* Champs CRM éditables */}
      <div className="meta-row">
        <div className="field">
          <label>Statut</label>
          <select value={p.statut} onChange={e => patch({ statut: e.target.value })}>
            {STATUTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Qualification</label>
          <input value={p.qualification || ''} placeholder="ex. décideur, budget…"
            onChange={e => setP({ ...p, qualification: e.target.value })}
            onBlur={e => patch({ qualification: e.target.value })} />
        </div>
        <div className="field">
          <label>Relance</label>
          <input type="date" value={p.date_relance || ''} onChange={e => patch({ date_relance: e.target.value || null })} />
        </div>
        <div className="field" style={{ justifyContent: 'flex-end' }}>
          <label>&nbsp;</label>
          <label style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 6, alignItems: 'center' }}>
            <input type="checkbox" checked={!!p.ne_plus_contacter}
              onChange={e => patch({ ne_plus_contacter: e.target.checked })} />
            Ne plus contacter
          </label>
        </div>
      </div>

      {/* Notes datées */}
      <div className="notes">
        <button className="btn ghost" style={{ fontSize: 13, padding: '6px 10px' }} onClick={toggleNotes}>
          {showNotes ? '▾ Notes' : '▸ Notes & historique'}
        </button>
        {showNotes && (
          <div style={{ marginTop: 8 }}>
            <div className="add">
              <textarea value={draft} placeholder="Ajouter une note (horodatée)…"
                onChange={e => setDraft(e.target.value)} />
              <button className="btn primary" onClick={saveNote}>+</button>
            </div>
            <div style={{ marginTop: 8 }}>
              {notes.length === 0 && <div style={{ color: 'var(--muted)', fontSize: 13 }}>Aucune note.</div>}
              {notes.map(n => (
                <div key={n.id} className="note-item">
                  <div className="when">{new Date(n.created_at).toLocaleString('fr-FR')}</div>
                  {n.contenu}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
