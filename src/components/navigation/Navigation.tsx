import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
  url: string
  target: '_self' | '_blank'
  icon: string
  content: string
}

const Navigation: React.FC<NavigationProps> = ({
  url = '/',
  target = '_self',
  icon,
  content = 'Accueil'
}) => {
  return (
    <Link to={url} target={target} className='navigation'>
      <figure
        className='navigation__icon'
        dangerouslySetInnerHTML={{ __html: icon }}
      ></figure>
      {content}
    </Link>
  )
}

export default Navigation
