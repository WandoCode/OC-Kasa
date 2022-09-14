import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import LocationCard from '../../components/LocationCard/LocationCard'
import Footer from '../../components/Footer/Footer'
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
    <>
      <Hero />
      <section className="locations">{locationCards}</section>
    </>
  )
}

export default Home
