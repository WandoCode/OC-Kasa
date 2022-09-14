import { useState, useEffect } from 'react'
import Home from './pages/Home/Home'
import Location from './pages/Location/Location'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import store from './store/location'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'

function App() {
  // TODO: passer à Home
  const [locationsDatas, setLocationsDatas] = useState()

  useEffect(() => {
    const getLocationsDatas = async () => {
      const locationsArr = await store.getLocationList()
      setLocationsDatas(locationsArr)
    }
    getLocationsDatas()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="home"
            element={<Home locationsDatas={locationsDatas} />}
          />
          <Route path="about" element={<About />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
