import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CrmView from '../crm/CrmView.jsx'
import { useConfig, findSecteur, findCategorie } from '../../lib/config'
import { isDemo } from '../../lib/dataClient'

export default function IndescaleCrm() {
  const { secteurId, categorie, ville } = useParams()
  const cat = decodeURIComponent(categorie)
  const villeName = decodeURIComponent(ville)
  const { config } = useConfig()
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null)

  const secteur = config ? findSecteur(config, secteurId) : null
  const catObj = secteur ? findCategorie(secteur, cat) : null

  const filter = { app: 'indescale', secteur_id: secteurId, categorie: cat, ville: villeName }
  const addBase = { ...filter }

  async function refresh() {
    setBusy(true); setMsg(null)
    try {
      const res = await fetch('/api/enrich-ville', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secteurId, categorie: cat, ville: villeName,
          requete_scraping: catObj?.requete_scraping || cat
        })
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const data = await res.json()
      setMsg(`✅ ${data.inserted ?? 0} entreprises enrichies (source officielle, mises en cache).`)
    } catch (e) {
      setMsg(isDemo
        ? "⚙️ Enrichissement indisponible en mode démo : branche Google Places + Supabase (clés API) pour activer « Rafraîchir cette ville »."
        : "Erreur enrichissement : " + e.message)
    } finally { setBusy(false) }
  }

  const headerExtra = (
    <div className="banner">
      Catégorie <b>{cat}</b> · requête : <b>{catObj?.requete_scraping || '—'}</b> + {villeName}.
      <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <button className="btn primary" onClick={refresh} disabled={busy}>
          {busy ? 'Enrichissement…' : '🔄 Rafraîchir cette ville'}
        </button>
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>
          N'appelle l'API que sur ce clic — sinon lecture du cache.
        </span>
      </div>
      {msg && <div style={{ marginTop: 8, fontSize: 13 }}>{msg}</div>}
    </div>
  )

  return (
    <CrmView
      title={`${cat} · ${villeName}`}
      subtitle={secteur?.nom}
      filter={filter}
      addBase={addBase}
      headerExtra={headerExtra}
    />
  )
}
