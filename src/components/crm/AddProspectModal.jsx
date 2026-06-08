import { useState } from 'react'
import { addProspect } from '../../lib/dataClient'

// Formulaire d'ajout manuel d'un prospect (brief §5 : indispensable).
export default function AddProspectModal({ base, onClose, onAdded }) {
  const [f, setF] = useState({
    entreprise: '', dirigeant_principal: '', ville: base.ville || '', zone: base.zone || '',
    telephone: '', portable_dirigeant: '', email: '', site_web: '', note_priorite: ''
  })
  const [saving, setSaving] = useState(false)
  const set = k => e => setF({ ...f, [k]: e.target.value })

  async function submit() {
    if (!f.entreprise.trim()) return
    setSaving(true)
    try {
      const row = await addProspect({ ...base, ...f, source: 'manuel' })
      onAdded?.(row)
      onClose()
    } finally { setSaving(false) }
  }

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>+ Ajouter un prospect</h3>
        <div className="field"><label>Entreprise *</label><input value={f.entreprise} onChange={set('entreprise')} autoFocus /></div>
        <div className="field"><label>Dirigeant</label><input value={f.dirigeant_principal} onChange={set('dirigeant_principal')} /></div>
        <div className="row2">
          <div className="field"><label>Ville</label><input value={f.ville} onChange={set('ville')} /></div>
          <div className="field"><label>Zone</label><input value={f.zone} onChange={set('zone')} /></div>
        </div>
        <div className="row2">
          <div className="field"><label>Téléphone standard</label><input value={f.telephone} onChange={set('telephone')} /></div>
          <div className="field"><label>Portable dirigeant</label><input value={f.portable_dirigeant} onChange={set('portable_dirigeant')} /></div>
        </div>
        <div className="field"><label>Email</label><input value={f.email} onChange={set('email')} /></div>
        <div className="row2">
          <div className="field"><label>Site web</label><input value={f.site_web} onChange={set('site_web')} /></div>
          <div className="field"><label>Priorité</label><input value={f.note_priorite} onChange={set('note_priorite')} placeholder="Haute / Moyenne…" /></div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <button className="btn ghost" onClick={onClose}>Annuler</button>
          <div className="spacer" style={{ flex: 1 }} />
          <button className="btn primary" onClick={submit} disabled={saving || !f.entreprise.trim()}>
            {saving ? 'Ajout…' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  )
}
