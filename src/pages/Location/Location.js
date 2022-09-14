import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import store from '../../store/location'
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
  return <section>{location && <>{location.title}</>}</section>
}

export default Location
