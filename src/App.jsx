import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import SecteurList from './components/indescale/SecteurList.jsx'
import CategorieList from './components/indescale/CategorieList.jsx'
import VilleList from './components/indescale/VilleList.jsx'
import IndescaleCrm from './components/indescale/IndescaleCrm.jsx'
import ProdigioHome from './components/prodigio/ProdigioHome.jsx'
import ProdigioCrm from './components/prodigio/ProdigioCrm.jsx'
import RelancesView from './components/crm/RelancesView.jsx'

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relances" element={<RelancesView />} />
        <Route path="/indescale" element={<SecteurList />} />
        <Route path="/indescale/:secteurId" element={<CategorieList />} />
        <Route path="/indescale/:secteurId/:categorie" element={<VilleList />} />
        <Route path="/indescale/:secteurId/:categorie/:ville" element={<IndescaleCrm />} />
        <Route path="/prodigio" element={<ProdigioHome />} />
        <Route path="/prodigio/:type" element={<ProdigioCrm />} />
      </Routes>
    </div>
  )
}
