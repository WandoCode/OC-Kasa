import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Galery from '../components/Galery'
import LocationInfos from '../components/LocationInfos'
import store from '../store/location'

function Location() {
  const [location, setLocation] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadDetails = async () => {
      const details = await store.getLocationDetails(id)
      setLocation(details)
    }
    loadDetails()
  }, [])

  useEffect(() => {
    if (location === null) {
      navigate('/not-found')
    }
  }, [location])

  return (
    <main className="location">
      {location && (
        <>
          <Galery pictures={location.pictures} />
          <LocationInfos infos={location} />
        </>
      )}
    </main>
  )
}

export default Location
