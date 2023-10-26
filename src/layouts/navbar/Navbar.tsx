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
        <li
          className={`navbar__list-item ${
            location.pathname === '/' ? ' navbar__list-item--active' : ''
          }`}
        >
          <Navigation
            url='/'
            target='_self'
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            content='Accueil'
          />
        </li>
        <li
          className={`navbar__list-item ${
            location.pathname === '/projects'
              ? ' navbar__list-item--active'
              : ''
          }`}
        >
          <Navigation
            url='/projects'
            target='_self'
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.95242 9.62272L11.5109 6.31816C11.711 5.89395 12.289 5.89395 12.4891 6.31816L14.0476 9.62272L17.5329 10.1559C17.9801 10.2243 18.1583 10.7996 17.8346 11.1296L15.313 13.7001L15.9081 17.3314C15.9845 17.7978 15.5168 18.1534 15.1167 17.9331L12 16.2177L8.88328 17.9331C8.48316 18.1534 8.01545 17.7978 8.09187 17.3314L8.68695 13.7001L6.16545 11.1296C5.8417 10.7996 6.01993 10.2243 6.46711 10.1559L9.95242 9.62272Z" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12L23 12" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2V1" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 23V22" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 20L19 19" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4L19 5" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20L5 19" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 4L5 5" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 12L2 12" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            content='Mes projets'
          />
        </li>
        <li
          className={`navbar__list-item ${
            location.pathname === '/about' ? ' navbar__list-item--active' : ''
          }`}
        >
          <Navigation
            url='/about'
            target='_self'
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 11H14.5H17" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H14.5H17" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 15V3.6C8 3.26863 8.26863 3 8.6 3H20.4C20.7314 3 21 3.26863 21 3.6V17C21 19.2091 19.2091 21 17 21V21" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 15H8H12.4C12.7314 15 13.0031 15.2668 13.0298 15.5971C13.1526 17.1147 13.7812 21 17 21H8H6C4.34315 21 3 19.6569 3 18V17C3 15.8954 3.89543 15 5 15Z" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            content='À propos'
          />
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
