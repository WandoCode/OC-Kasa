import { Link } from 'react-router-dom'
import './pageNotFound.css'
function PageNotFound() {
  return (
    <main className="page-not-found">
      <div className="container">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default PageNotFound
