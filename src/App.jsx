import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home.jsx'
import SecteurList from './components/indescale/SecteurList.jsx'
import CategorieList from './components/indescale/CategorieList.jsx'
import VilleList from './components/indescale/VilleList.jsx'
import ProdigioHome from './components/prodigio/ProdigioHome.jsx'
import ProdigioCrm from './components/prodigio/ProdigioCrm.jsx'
import RelancesView from './components/crm/RelancesView.jsx'

// La marque pilote toute la direction artistique : INDESCALE (dark/violet tech)
// vs PRODIGIO (noir & blanc éditorial). On la déduit de l'URL et on la pose sur
// le conteneur racine `data-brand`, d'où cascadent toutes les variables CSS.
function brandFromPath(pathname) {
  if (pathname.startsWith('/prodigio')) return 'prodigio'
  if (pathname.startsWith('/indescale')) return 'indescale'
  return 'home'
}

export default function App() {
  const { pathname } = useLocation()
  const brand = brandFromPath(pathname)

  return (
    <div className="shell" data-brand={brand}>
      <div className="glow" aria-hidden="true" />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/relances" element={<RelancesView />} />
          <Route path="/indescale" element={<SecteurList />} />
          <Route path="/indescale/:secteurId" element={<CategorieList />} />
          <Route path="/indescale/:secteurId/:categorie" element={<VilleList />} />
          <Route path="/indescale/:secteurId/:categorie/:ville" element={<VilleList />} />
          <Route path="/prodigio" element={<ProdigioHome />} />
          <Route path="/prodigio/:type" element={<ProdigioCrm />} />
        </Routes>
      </div>
    </div>
  )
}
