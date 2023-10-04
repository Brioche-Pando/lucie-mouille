import React from 'react'

interface ButtonProps {
  text: string
}

const Badge: React.FC<ButtonProps> = ({ text }) => {
  return <span className='badge small'>{text}</span>
}

export default Badge
