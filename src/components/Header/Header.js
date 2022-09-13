import Navbar from '../Navbar/Navbar'
import Logo from '../../assets/LOGO.svg'
import './header.css'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <Navbar />
    </header>
  )
}

export default Header
