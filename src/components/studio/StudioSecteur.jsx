import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import Header from '../Header.jsx'
import { ETAPES, getSecteur, listJobs, listLivrables, createJob, updateSecteur, listSites } from '../../lib/studioClient'
import StudioSites from './StudioSites.jsx'

const STATUT = { en_attente: '⏳ En attente', en_cours: '⚙️ En cours', termine: '✅ Terminé', erreur: '⛔ Erreur', annule: 'Annulé' }

export default function StudioSecteur() {
  const { secteurId } = useParams()
  const [s, setS] = useState(null)
  const [jobs, setJobs] = useState([])
  const [livrables, setLivrables] = useState([])
  const [sites, setSites] = useState([])
  const [ouvert, setOuvert] = useState(null)
  const [err, setErr] = useState('')
  const [taille, setTaille] = useState(20)

  const charger = useCallback(async () => {
    try {
      const sec = await getSecteur(secteurId)
      setS(sec)
      const [j, l, si] = await Promise.all([listJobs(secteurId), listLivrables(secteurId), listSites(secteurId)])
      setJobs(j); setLivrables(l); setSites(si)
    } catch (e) { setErr(e.message) }
  }, [secteurId])

  useEffect(() => { charger(); const t = setInterval(charger, 30000); return () => clearInterval(t) }, [charger])

  if (err) return <><Header title="Studio" showRelances={false} /><div className="empty">Erreur : {err}</div></>
  if (!s) return <><Header title="Studio" showRelances={false} /><div className="empty">Chargement…</div></>

  const jobDe = type => jobs.find(j => j.type === type)
  const enCours = type => ['en_attente', 'en_cours'].includes(jobDe(type)?.statut)

  async function lancer(type, params = {}) {
    await createJob(secteurId, type, params)
    charger()
  }
  async function validerTemplate(direction) {
    if (!confirm(`Valider la direction ${direction} pour ${s.nom} ?`)) return
    await updateSecteur(secteurId, { template_valide: direction, etape: Math.max(s.etape, 3) })
    await createJob(secteurId, 'valider_template', { direction })
    charger()
  }

  return (
    <>
      <Header title={s.nom} subtitle={`Studio · étape ${s.etape}/7`} showRelances={false} />
      <div className="progress"><span style={{ width: `${(s.etape / 7) * 100}%` }} /></div>

      <div className="cards">
        {ETAPES.map(e => {
          const fait = e.n < s.etape
          const actuelle = e.n === s.etape
          const job = e.job ? jobDe(e.job) : null
          const docs = livrables.filter(l => l.etape === e.n)
          return (
            <div key={e.n} className="card" style={{ opacity: e.n > s.etape ? 0.55 : 1, borderLeftColor: fait ? '#5FD3A0' : actuelle ? undefined : 'var(--line)' }}>
              <div className="c-head">
                <div className="c-name">{fait ? '✓ ' : ''}{e.n}. {e.titre}</div>
                {job && <span className="badge opp">{STATUT[job.statut]}</span>}
              </div>
              <div className="c-dir">{e.desc}</div>
              {e.validation && actuelle && <div className="c-note">✋ Cette étape attend ta validation.</div>}
              {job?.resultat && <div className="c-note">{job.resultat}</div>}

              {docs.map(d => (
                <div key={d.id} style={{ marginTop: 12 }}>
                  {d.image_url && <img src={d.image_url} alt={d.titre} style={{ width: '100%', borderRadius: 10, border: '1px solid var(--line)' }} />}
                  <div className="actions">
                    {d.contenu && <button className="act" onClick={() => setOuvert(d)}>📄 {d.titre}</button>}
                    {d.url && <a className="act" href={d.url} target="_blank" rel="noreferrer">🔗 Ouvrir {d.contenu ? '' : d.titre}</a>}
                    {e.n === 2 && d.type === 'template' && actuelle && (
                      <button className="btn primary" onClick={() => validerTemplate(d.titre.replace(/^Direction\s*/i, '').trim())}>Valider {d.titre}</button>
                    )}
                  </div>
                </div>
              ))}

              {e.job && e.bouton && (actuelle || (e.n === 3 && s.etape >= 3)) && (
                <div className="actions">
                  {e.job === 'lot' && (
                    <select className="btn" value={taille} onChange={ev => setTaille(+ev.target.value)}>
                      {[10, 20, 50, 100].map(n => <option key={n} value={n}>{n} prospects</option>)}
                    </select>
                  )}
                  <button className="btn primary" disabled={enCours(e.job) || (e.job === 'lot' && !s.template_valide)}
                    onClick={() => lancer(e.job, e.job === 'lot' ? { taille } : {})}>
                    {enCours(e.job) ? 'Demande envoyée…' : e.bouton}
                  </button>
                  {e.job === 'lot' && !s.template_valide && <span className="c-note">Valide d'abord un template.</span>}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {sites.length > 0 && <StudioSites sites={sites} onChange={charger} />}

      {ouvert && (
        <div className="modal-bg" onClick={() => setOuvert(null)}>
          <div className="modal" onClick={ev => ev.stopPropagation()} style={{ maxHeight: '85vh', overflow: 'auto', maxWidth: 760 }}>
            <div className="c-head"><div className="c-name">{ouvert.titre}</div><button className="btn ghost" onClick={() => setOuvert(null)}>✕</button></div>
            <div className="md" dangerouslySetInnerHTML={{ __html: marked.parse(ouvert.contenu || '') }} />
          </div>
        </div>
      )}
    </>
  )
}
