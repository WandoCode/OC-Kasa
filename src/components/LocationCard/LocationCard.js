import './locationCard.css'

function LocationCard(props) {
  const title = props.title
  const coverImg = props.coverImg

  return (
    <article className="locationCard">
      <img src={coverImg} alt="" />
      <h2>{title}</h2>
    </article>
  )
}

export default LocationCard
