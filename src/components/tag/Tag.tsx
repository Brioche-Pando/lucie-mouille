import React from 'react'

interface TagProps {
  text: string
  has_icon: boolean
  icon?: string
}

const Tag: React.FC<TagProps> = ({ text, has_icon, icon }) => {
  return (
    <span className={`tag small ${has_icon || 'classic'}`}>
      {has_icon && icon && (
        <figure dangerouslySetInnerHTML={{ __html: icon }}></figure>
      )}
      {text}
    </span>
  )
}

export default Tag
