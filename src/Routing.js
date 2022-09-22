import Home from './pages/Home'
import Location from './pages/Location'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Layout from './components/Layout'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="location/:id" element={<Location />} />
          <Route path="not-found" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
