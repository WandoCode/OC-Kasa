import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
