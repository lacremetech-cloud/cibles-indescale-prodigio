import { useParams } from 'react-router-dom'
import CrmView from '../crm/CrmView.jsx'

const TITLES = {
  agence_luxe: 'Agences de luxe',
  marchand_biens: 'Marchands de biens'
}

export default function ProdigioCrm() {
  const { type } = useParams()
  const title = TITLES[type] || 'PRODIGIO'
  const filter = { app: 'prodigio', prodigio_type: type }
  const addBase = { app: 'prodigio', prodigio_type: type }

  return (
    <CrmView
      title={title}
      subtitle="PRODIGIO · regroupé par ville"
      filter={filter}
      addBase={addBase}
      groupByVille
    />
  )
}
