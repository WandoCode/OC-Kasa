import './locationCard.css'

function LocationCard(props) {
  const title = props.title
  const coverImg = props.coverImg

  return (
    <a href="#" className="locationCard">
      <img src={coverImg} alt="" />
      <h2>{title}</h2>
    </a>
  )
}

export default LocationCard
