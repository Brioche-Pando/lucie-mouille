import { Link, useLocation } from 'react-router-dom'
import Button from '../../components/button/Button'
import Navigation from '../../components/navigation/Navigation'

function Navbar () {
  const location = useLocation()

  // Déterminez si vous êtes sur une page de projet unique (par exemple, /projets/slug-du-projet)
  const isSingleProjectPage = location.pathname.startsWith('/projects/')

  return (
    <nav className='navbar'>
      {isSingleProjectPage && (
        <Link
          to='/projects'
          target='_self'
          className='navbar__back-to-projects'
        >
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path
              d='M18.5 12H6M6 12L12 6M6 12L12 18'
              stroke='#2C2C2C'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span>Retour aux projets</span>
        </Link>
      )}
      <ul className='navbar__list'>
        <li className='navbar__list-item'>
          <Navigation url='/' target='_self' icon='' content='Accueil' />
        </li>
        <li className='navbar__list-item'>
          <Navigation
            url='/projects'
            target='_self'
            icon=''
            content='Mes projets'
          />
        </li>
        <li className='navbar__list-item'>
          <Navigation url='/about' target='_self' icon='' content='À propos' />
        </li>
        <li className='navbar__list-item'>
          <Button
            url='mailto:luciemouille@hotmail.com'
            target='_blank'
            content='Contacter'
            additionnal_class=''
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
