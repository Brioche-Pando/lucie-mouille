import DataProjects from '../../data/projects'
import ProjectPreview from '../../components/project_preview/ProjectPreview'
import { useEffect } from 'react'

import useLanguageContext from '../../hooks/useLanguage'

function Projects () {
  const { userLanguage, translate } = useLanguageContext()

  useEffect(() => {
    document.title = 'Mes projets | Lucie Mouilé'
  })
  
  return (
    <section className='projects'>
      <h1>{translate('Projects', 'myProjects')}</h1>
      <h2 className='p'>{translate('Projects', 'myProjectsDesc')}</h2>
      <div className='projects__list'>
        {Object.values(DataProjects[userLanguage]).map((project, index) => (
          <ProjectPreview
            key={index}
            slug={project.slug}
            name={project.name}
            tag={project.tag}
            badge={project.badge}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
