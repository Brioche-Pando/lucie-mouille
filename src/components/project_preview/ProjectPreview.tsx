// ProjectPreview.tsx
import React from 'react'
import Badge from '../badge/Badge'
import Tag from '../tag/Tag'
interface ProjectPreviewProps {
  slug: string
  name: string
  tag: { name: string; icon: string }[]
  badge: string
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  slug,
  name,
  tag,
  badge
}) => {
  const mockupImagePath = `/images/projects/${slug}/mockup/${slug}.png`

  return (
    <div className='project-preview'>
      <figure className='project-preview__img-wrapper'>
        <img
          src={mockupImagePath}
          alt={name}
          className='project-preview__img'
        />
      </figure>
      <h3 className='project-preview__title'>{name}</h3>
      <div className='project-preview__tags'>
        <Badge text={badge} />
        {tag.map((tagItem, index) => (
          <Tag
            key={index}
            text={tagItem.name}
            has_icon={true}
            icon={tagItem.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectPreview
