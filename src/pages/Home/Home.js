import { useState, useEffect } from 'react'
import store from '../../store/location'
import Hero from '../../components/Hero/Hero'
import LocationCard from '../../components/LocationCard/LocationCard'

function Home(props) {
  const [locationsDatas, setLocationsDatas] = useState([])

  useEffect(() => {
    const getLocationsDatas = async () => {
      const locationsArr = await store.getLocationList()
      setLocationsDatas(locationsArr)
    }
    getLocationsDatas()
  }, [])

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
