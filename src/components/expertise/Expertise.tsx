import React from 'react'

interface ExpertiseProps {
  name: string
  desc: string
}

const Expertise: React.FC<ExpertiseProps> = ({ name, desc }) => {
  return (
    <li className='expertise'>
      <h3 className='expertise__name'>{name}</h3>
      <p className='expertise__desc'>{desc}</p>
    </li>
  )
}

export default Expertise
