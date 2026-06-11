// Charge la nomenclature INDESCALE depuis /config/indescale_categories.json.
// Source de vérité éditable à la main — rien n'est codé en dur (brief §3, §11).
import { useEffect, useState } from 'react'

let _cache = null

export function useConfig() {
  const [config, setConfig] = useState(_cache)
  const [error, setError] = useState(null)
  useEffect(() => {
    if (_cache) return
    fetch('/config/indescale_categories.json')
      .then(r => { if (!r.ok) throw new Error('Config introuvable'); return r.json() })
      .then(j => { _cache = j; setConfig(j) })
      .catch(e => setError(e.message))
  }, [])
  return { config, error }
}

// Villes par défaut (configurables via le JSON).
export function villesFromConfig(config) {
  return config?._meta?.villes_par_defaut || []
}

export function findSecteur(config, secteurId) {
  return config?.secteurs?.find(s => s.id === secteurId) || null
}

export function findCategorie(secteur, nom) {
  return secteur?.categories?.find(c => c.nom === nom) || null
}
