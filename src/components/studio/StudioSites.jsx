import { updateSite } from '../../lib/studioClient'

// Les maquettes d'un secteur : avant/après, insights, messages, validation, WhatsApp, vues.
export default function StudioSites({ sites, onChange }) {
  const wa = s => s.mobile_whatsapp
    ? `https://wa.me/33${s.mobile_whatsapp.replace(/\D/g, '').replace(/^0/, '')}?text=${encodeURIComponent(s.whatsapp_texte || '')}`
    : null

  async function patch(id, p) { await updateSite(id, p); onChange() }

  return (
    <>
      <div className="section-label">Maquettes ({sites.length})</div>
      <div className="cards">
        {sites.map(s => (
          <div key={s.id} className="card">
            <div className="c-head">
              <div className="c-name">{s.prospects?.entreprise}</div>
              {s.nb_vues >= 2 && <span className="badge relance">🔥 ouvert {s.nb_vues}×</span>}
              <span className="badge opp">{s.statut}</span>
            </div>
            <div className="c-dir">{s.prospects?.ville} · {s.prospects?.dirigeant_principal}</div>
            {(s.capture_avant || s.capture_apres) && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
                {s.capture_avant && <figure><img src={s.capture_avant} alt="avant" style={{ width: '100%', borderRadius: 8 }} /><figcaption className="c-addr">Avant</figcaption></figure>}
                {s.capture_apres && <figure><img src={s.capture_apres} alt="après" style={{ width: '100%', borderRadius: 8 }} /><figcaption className="c-addr">Après</figcaption></figure>}
              </div>
            )}
            {s.score_site != null && <div className="c-addr">Site actuel : {s.score_site}/10</div>}
            {Array.isArray(s.insights) && s.insights.map((i, k) => <div key={k} className="c-note">💡 {i.texte}{i.preuve ? ` (${i.preuve})` : ''}</div>)}
            {s.email_corps && <details style={{ marginTop: 8 }}><summary className="c-addr">✉️ {s.email_objet}</summary><p className="c-note" style={{ whiteSpace: 'pre-wrap' }}>{s.email_corps}</p></details>}
            <div className="actions">
              {s.url_maquette && <a className="act" href={s.url_maquette} target="_blank" rel="noreferrer">🔗 Maquette</a>}
              {s.statut === 'Prêt' && <button className="btn primary" onClick={() => patch(s.id, { statut: 'Validé', valide_at: new Date().toISOString() })}>Valider l'envoi</button>}
              {wa(s) && <a className="act" href={wa(s)} target="_blank" rel="noreferrer" onClick={() => patch(s.id, { whatsapp_envoye_at: new Date().toISOString() })}>💬 WhatsApp</a>}
              <select className="btn" value={s.statut} onChange={e => patch(s.id, { statut: e.target.value })}>
                {['Brouillon','Prêt','Validé','Envoyé','Ouvert','Répondu','RDV','Vendu','Perdu','Expiré'].map(x => <option key={x}>{x}</option>)}
              </select>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
