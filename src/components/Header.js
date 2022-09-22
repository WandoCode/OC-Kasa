import Navbar from './Navbar'
import Logo from '../assets/LOGO.svg'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <Navbar />
    </header>
  )
}

export default Header
