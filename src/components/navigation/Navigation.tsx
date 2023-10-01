import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
  url: string
  target: '_self' | '_blank'
  icon: React.ReactNode
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
      {icon}
      {content}
    </Link>
  )
}

export default Navigation
