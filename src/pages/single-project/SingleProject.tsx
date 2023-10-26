import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataProjects from '../../data/projects.json'
import Badge from '../../components/badge/Badge'
import Tag from '../../components/tag/Tag'

interface ProjectData {
  id: number
  slug: string
  name: string
  years: string
  link: string
  badge: string
  tag: {
    name: string
    icon: string
  }[]
  summary: string
  images: string[]
  context: string
  approach: string[]
  challenges: string[]
  skills_acquired: string[]
  skills_to_develop: string[]
}

const SingleProject: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  // Recherchez le projet correspondant au slug dans vos données
  const project: ProjectData | undefined = DataProjects.find(
    (project: { slug: string | undefined }) => project.slug === slug
  )

  useEffect(() => {
    document.title = `{${project ? project.name : 404} | Lucie Mouilé}`
  })

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  return (
    <article className='project'>
      <header className='project__header'>
        <h1>{project.name}</h1>
        <div className='project__tags'>
          <Badge text={project.badge} />
          {project.tag.map(tag => (
            <Tag
              text={tag.name}
              has_icon={true}
              icon={tag.icon}
              is_link={false}
            />
          ))}
          {project.link && (
            <Tag
              text={'Lien'}
              has_icon={true}
              icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
              is_link={true}
              link={project.link}
            />
          )}
          <Tag text={project.years} has_icon={false} is_link={false} />
        </div>
        <p>{project.summary}</p>
      </header>
      <div className='project__images'>
        {project.images.map(image => (
          <img src={image} alt='' />
        ))}
      </div>
      <div className='project__content'>
        <div>
          <h3>Contexte</h3>
          <p>{project.context}</p>
          <h3>Approche</h3>
          <ul>
            {project.approach.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='project__content-skills'>
          <h4>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M8 21L8 16M8 16V3.57709C8 3.10699 8.5161 2.81949 8.91581 3.06693L17.7061 8.50854C18.0775 8.73848 18.0866 9.2756 17.7231 9.51793L8 16Z'
                stroke='#2C2C2C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>{' '}
            Principaux défis
          </h4>
          <ul>
            {project.challenges.map(item => (
              <Tag text={item} has_icon={false} is_link={false} />
            ))}
          </ul>
          <h4>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M19.2 17L21 7L14.7 10L12 7L9.3 10L3 7L4.8 17H19.2Z'
                stroke='#2C2C2C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>{' '}
            Compétences acquises
          </h4>
          <ul>
            {project.skills_acquired.map(item => (
              <Tag text={item} has_icon={false} is_link={false} />
            ))}
          </ul>
          <h4>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                stroke='#2C2C2C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7 7L17 7'
                stroke='#2C2C2C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7 12L17 12'
                stroke='#2C2C2C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M7 17L13 17'
                stroke='#2C2C2C'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            Compétences à développer
          </h4>
          <ul>
            {project.skills_to_develop.map(item => (
              <Tag text={item} has_icon={false} is_link={false} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default SingleProject
