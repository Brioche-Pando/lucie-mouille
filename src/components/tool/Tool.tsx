import React from 'react'

interface ToolProps {
  name: string
  icon: string
}

const Tool: React.FC<ToolProps> = ({ name, icon }) => {
  return (
    <li className='tool'>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className='tool__name'>{name}</h3>
    </li>
  )
}

export default Tool
