import { useState } from 'react'
import { updateSite } from '../../lib/studioClient'

// Les maquettes d'un secteur, rangées par lot (repliables), en grille ou en liste.
// Le lot vient de prospects.data.lot ; les maquettes sans lot sont celles du lot 1.
const STATUTS = ['Brouillon', 'Prêt', 'Validé', 'Envoyé', 'Ouvert', 'Répondu', 'RDV', 'Vendu', 'Perdu', 'Expiré']
const lotDe = s => Number(s.prospects?.data?.lot) || 1

export default function StudioSites({ sites, onChange }) {
  const [vue, setVue] = useState('grille')

  const wa = s => s.mobile_whatsapp
    ? `https://wa.me/33${s.mobile_whatsapp.replace(/\D/g, '').replace(/^0/, '')}?text=${encodeURIComponent(s.whatsapp_texte || '')}`
    : null

  async function patch(id, p) { await updateSite(id, p); onChange() }

  const lots = {}
  for (const s of sites) (lots[lotDe(s)] ||= []).push(s)
  const numeros = Object.keys(lots).map(Number).sort((a, b) => b - a)

  const resume = liste => {
    const n = {}
    for (const s of liste) n[s.statut] = (n[s.statut] || 0) + 1
    const ouverts = liste.filter(s => s.nb_vues > 0).length
    return [...STATUTS.filter(x => n[x]).map(x => `${n[x]} ${x.toLowerCase()}`), ouverts ? `${ouverts} ouvert${ouverts > 1 ? 's' : ''}` : null].filter(Boolean).join(' · ')
  }

  const Fiche = ({ s }) => (
    <div className="card" style={vue === 'grille' ? { margin: 0, display: 'flex', flexDirection: 'column', gap: 6 } : undefined}>
      <div className="c-head">
        <div className="c-name" style={vue === 'grille' ? { fontSize: 15, lineHeight: 1.25 } : undefined}>{s.prospects?.entreprise}</div>
        {s.nb_vues >= 2 && <span className="badge relance">🔥 {s.nb_vues}×</span>}
        <span className="badge opp">{s.statut}</span>
      </div>
      <div className="c-dir">{s.prospects?.ville}{s.score_site != null ? ` · site actuel ${s.score_site}/10` : ''}</div>
      {vue === 'liste' && (s.capture_avant || s.capture_apres) && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          {[
            { titre: 'Site actuel', img: s.capture_avant, url: s.prospects?.site_web },
            { titre: 'Maquette', img: s.capture_apres, url: s.url_maquette },
          ].map(v => (
            <a key={v.titre} href={v.url || undefined} target="_blank" rel="noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} title={`Ouvrir : ${v.titre}`}>
              <div className="c-addr" style={{ fontWeight: 600, marginBottom: 4 }}>{v.titre} ↗</div>
              {v.img
                ? <img src={v.img} alt={v.titre} style={{ width: '100%', height: 150, objectFit: 'cover', objectPosition: 'top', borderRadius: 8, border: '1px solid rgba(0,0,0,.12)' }} />
                : <div className="c-addr" style={{ height: 150, display: 'grid', placeItems: 'center', border: '1px dashed rgba(0,0,0,.2)', borderRadius: 8 }}>Pas de capture</div>}
            </a>
          ))}
        </div>
      )}
      {vue === 'liste'
        ? Array.isArray(s.insights) && s.insights.map((i, k) => <div key={k} className="c-note">💡 {i.texte}</div>)
        : Array.isArray(s.insights) && s.insights.length > 0 && (
          <details><summary className="c-addr">💡 {s.insights.length} constats</summary>
            {s.insights.map((i, k) => <div key={k} className="c-note">{i.texte}</div>)}
          </details>
        )}
      {s.email_corps && <details><summary className="c-addr">✉️ {s.prospects?.email || s.email_objet}</summary><p className="c-note" style={{ whiteSpace: 'pre-wrap' }}>{s.email_corps}</p></details>}
      <div className="actions" style={vue === 'grille' ? { marginTop: 'auto', flexWrap: 'wrap' } : undefined}>
        {s.prospects?.site_web && <a className="act" href={s.prospects.site_web} target="_blank" rel="noreferrer">Site actuel</a>}
        {s.url_maquette && <a className="act" href={s.url_maquette} target="_blank" rel="noreferrer">Maquette</a>}
        {s.statut === 'Prêt' && <button className="btn primary" onClick={() => patch(s.id, { statut: 'Validé', valide_at: new Date().toISOString() })}>Valider</button>}
        {wa(s) && <a className="act" href={wa(s)} target="_blank" rel="noreferrer" onClick={() => patch(s.id, { whatsapp_envoye_at: new Date().toISOString() })}>💬</a>}
        <select className="btn" value={s.statut} onChange={e => patch(s.id, { statut: e.target.value })}>
          {STATUTS.map(x => <option key={x}>{x}</option>)}
        </select>
      </div>
    </div>
  )

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div className="section-label">Maquettes ({sites.length})</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[['grille', '▦ Grille'], ['liste', '☰ Liste']].map(([v, l]) => (
            <button key={v} className={`btn${vue === v ? ' primary' : ''}`} onClick={() => setVue(v)}>{l}</button>
          ))}
        </div>
      </div>
      {numeros.map(n => (
        <details key={n} style={{ margin: '10px 0', border: '1px solid rgba(0,0,0,.08)', borderRadius: 14, background: 'rgba(255,255,255,.6)' }}>
          <summary style={{ cursor: 'pointer', padding: '14px 18px', display: 'flex', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
            <strong style={{ fontSize: 16 }}>Lot {n}</strong>
            <span className="c-addr">{lots[n].length} maquettes · {resume(lots[n])}</span>
          </summary>
          <div style={vue === 'grille'
            ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 12, padding: '0 14px 14px' }
            : { display: 'grid', gap: 14, padding: '0 14px 14px' }}>
            {lots[n].map(s => <Fiche key={s.id} s={s} />)}
          </div>
        </details>
      ))}
    </>
  )
}
