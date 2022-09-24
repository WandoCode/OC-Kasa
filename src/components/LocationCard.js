import { Link } from 'react-router-dom'

function LocationCard(props) {
  const title = props.title
  const coverImg = props.coverImg

  const locationURL = `/location/${props.id}`

  return (
    <Link to={locationURL} className="locationCard">
      <img src={coverImg} alt="" />
      <h2>{title}</h2>
    </Link>
  )
}

export default LocationCard
