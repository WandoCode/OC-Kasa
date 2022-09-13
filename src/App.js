import { useState, useEffect } from 'react'
import Home from './pages/Home'
import store from './store/location'
import './App.css'

function App() {
  const [locationsDatas, setLocationsDatas] = useState()

  useEffect(() => {
    const getLocationsDatas = async () => {
      const locationsArr = await store.getLocationList()
      setLocationsDatas(locationsArr)
    }
    getLocationsDatas()
  }, [])

  return (
    <div className="App">
      <Home locationsDatas={locationsDatas} />
    </div>
  )
}

export default App
