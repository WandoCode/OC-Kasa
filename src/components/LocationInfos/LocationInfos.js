import Dropdown from '../Dropdown/Dropdown'
import Notation from '../Notation/Notation'
import Tag from '../Tag/Tag'

function LocationInfos(props) {
  const { title, description, host, rating, location, equipments, tags } =
    props.infos

  const tagsComp = tags.map((tag) => {
    return <Tag text={tag} key={tag} />
  })
  return (
    <article>
      <h2>{title}</h2>
      <h3>{location}</h3>
      <section className="tags">{tagsComp}</section>
      <div>
        <Notation rating={rating} />
        <section className="host-infos">
          <h4>{host.name}</h4>
          <img src={host.picture} alt="" />
        </section>
      </div>
      <section className="details">
        <Dropdown title="Description" datas={description} />
        <Dropdown title="Equipements" datas={equipments} />
      </section>
    </article>
  )
}

export default LocationInfos
