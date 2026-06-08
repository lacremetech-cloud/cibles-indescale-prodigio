import { Link } from 'react-router-dom'
import Header from '../Header.jsx'

export default function ProdigioHome() {
  return (
    <>
      <Header title="PRODIGIO" subtitle="Immobilier de luxe · choisis une vue" />
      <div className="grid">
        <Link to="/prodigio/agence_luxe" className="tile">
          <div className="t-title">Agences de luxe</div>
          <div className="t-meta">Agences immobilières de prestige, regroupées par ville</div>
        </Link>
        <Link to="/prodigio/marchand_biens" className="tile">
          <div className="t-title">Marchands de biens</div>
          <div className="t-meta">Marchands de biens, regroupés par ville</div>
        </Link>
      </div>
      <div className="banner" style={{ marginTop: 16 }}>
        Données importées de <b>PRODIGIO-prospection-master.xlsx</b>. Les lignes dont le domaine de
        l'email diffère du site web sont signalées <span className="badge suspect">⚠ email à vérifier</span> (jamais corrigées automatiquement).
      </div>
    </>
  )
}
