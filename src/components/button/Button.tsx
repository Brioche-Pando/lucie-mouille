import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  url: string
  target: '_self' | '_blank'
  content: string
  additionnal_class: string
}

const Button: React.FC<ButtonProps> = ({
  url = '/',
  target = '_self',
  content = 'Accueil',
  additionnal_class = ''
}) => {
  return (
    <Link
      to={url}
      target={target}
      className={`button ${additionnal_class}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></Link>
  )
}

export default Button
