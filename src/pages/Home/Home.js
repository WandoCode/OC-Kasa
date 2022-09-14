import Hero from '../../components/Hero/Hero'
import LocationCard from '../../components/LocationCard/LocationCard'
import './home.css'

function Home(props) {
  const locationsDatas = props.locationsDatas || []

  const locationCards = locationsDatas.map((location) => {
    return (
      <LocationCard
        coverImg={location.cover}
        title={location.title}
        id={location.id}
        key={location.id}
      />
    )
  })

  return (
    <main className="home">
      <Hero />
      <section className="locations">{locationCards}</section>
    </main>
  )
}

export default Home
