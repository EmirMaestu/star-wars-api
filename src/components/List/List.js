import { Link } from 'react-router-dom'

import './List.css'

export default function List ({ list, page }) {
  return (
    <ul className="list">
      {
        list && page === 'actors' && (
          list.map((actor, index) => {
            return <li key={index} className="list__item list__item--actor">
              <Link to={`/actors/${(actor.url).match(/[0-9]+/)}`}>
                <h3>{actor.name}</h3>
              </Link>
            </li>
          })
        )
      }
    </ul>
  )
}
