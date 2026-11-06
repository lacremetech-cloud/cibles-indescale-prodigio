import { useNavigate, Link } from 'react-router-dom'
import { isDemo } from '../lib/dataClient'

export default function Header({ title, subtitle, showRelances = true }) {
  const navigate = useNavigate()
  return (
    <div className="topbar">
      <button className="back" onClick={() => navigate(-1)} aria-label="Retour">←</button>
      <h1>
        {title}
        {subtitle && <span className="sub">{subtitle}</span>}
      </h1>
      {showRelances && <Link to="/relances" className="pill">📅 Relances</Link>}
      {isDemo && <span className="pill demo">Démo</span>}
    </div>
  )
}
