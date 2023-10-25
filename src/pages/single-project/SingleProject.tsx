import React from 'react'
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
  context: string
  approach: string[]
  challenges: string[]
  skills_acquired: string[]
  skills_to_develop: string[]
}

const SingleProjet: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  // Recherchez le projet correspondant au slug dans vos données
  const project: ProjectData | undefined = DataProjects.find(
    (project: { slug: string | undefined }) => project.slug === slug
  )

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <Badge text={project.badge} />
      {project.tag.map(tag => (
        <Tag text={tag.name} has_icon={true} icon={tag.icon} />
      ))}
      <Tag text={project.years} has_icon={false} />
      <p>
        Lien :{' '}
        <a href={project.link} target='_blank' rel='noopener noreferrer'>
          {project.link}
        </a>
      </p>
      <h3>Tags :</h3>
      <ul>
        {project.tag.map((tag, index) => (
          <li key={index}>
            {tag.name}
            {tag.icon && <div dangerouslySetInnerHTML={{ __html: tag.icon }} />}
          </li>
        ))}
      </ul>
      <h3>Résumé :</h3>
      <p>{project.summary}</p>
      <h3>Contexte :</h3>
      <p>{project.context}</p>
      <h3>Approche :</h3>
      <ul>
        {project.approach.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Défis :</h3>
      <ul>
        {project.challenges.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Compétences acquises :</h3>
      <ul>
        {project.skills_acquired.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Compétences à développer :</h3>
      <ul>
        {project.skills_to_develop.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SingleProjet
