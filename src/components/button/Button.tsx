import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  url: string
  target: '_self' | '_blank'
  content: string
}

const Button: React.FC<ButtonProps> = ({
  url = '/',
  target = '_self',
  content = 'Accueil'
}) => {
  return (
    <Link to={url} target={target} className='button'>
      {content}
    </Link>
  )
}

export default Button
