import React from 'react'
import Button from '../../components/button/Button'
import Navigation from '../../components/navigation/Navigation'

function Header () {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__list-item'>
          <Navigation
            url='/'
            target='_self'
            icon=''
            content='Accueil'
          />
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
          <Navigation
            url='/about'
            target='_self'
            icon=''
            content='À propos'
          />
        </li>
        <li className='navbar__list-item'>
          <Button
            url='mailto:luciemouille@hotmail.com'
            target='_blank'
            content='Contacter'
          />
        </li>
      </ul>
    </nav>
  )
}

export default Header
