import React from 'react'

interface ToolProps {
  name: string
  icon: string
}

const Tool: React.FC<ToolProps> = ({ name, icon }) => {
  return (
    <li className='tool'>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <h4 className='tool__name'>{name}</h4>
    </li>
  )
}

export default Tool
