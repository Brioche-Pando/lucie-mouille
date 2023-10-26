import DataProjects from '../../data/projects.json'
import ProjectPreview from '../../components/project_preview/ProjectPreview'
import { useEffect } from 'react'

function Projects () {
  useEffect(() => {
    document.title = 'Mes projets | Lucie Mouilé'
  })
  
  return (
    <section className='projects'>
      <h1>Mes projets</h1>
      <h2 className='p'>
        Découvrez mes réalisations ainsi que l'approche que j'ai apportée à ces
        différents projets, qu'ils soient scolaires, personnels ou
        professionnels.
      </h2>
      <div className='projects__list'>
        {DataProjects.map((project, index) => (
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
