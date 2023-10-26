import React from 'react'

interface TagProps {
  text: string
  has_icon: boolean
  icon?: string
  is_link: boolean
  link?: string
}

const Tag: React.FC<TagProps> = ({ text, has_icon, icon, is_link, link }) => {
  if (is_link) {
    return (
      <a
        href={link}
        className={'tag small tag--link'}
        target='_blank'
        rel='noopener noreferrer'
      >
        {has_icon && icon && (
          <figure
            className='tag__icon-wrapper'
            dangerouslySetInnerHTML={{ __html: icon }}
          ></figure>
        )}
        {text}
      </a>
    )
  } else {
    return (
      <span className={`tag small ${has_icon ? '' : 'classic'}`}>
        {has_icon && icon && (
          <figure
            className='tag__icon-wrapper'
            dangerouslySetInnerHTML={{ __html: icon }}
          ></figure>
        )}
        {text}
      </span>
    )
  }
}

export default Tag
