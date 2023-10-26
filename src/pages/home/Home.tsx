import Button from '../../components/button/Button'
import Tool from '../../components/tool/Tool'

import DataProjects from '../../data/projects.json'
import DataExpertises from '../../data/expertises.json'
import DataTools from '../../data/tools.json'

import CVpdf from '/cv/Lucie_Mouille_cv.pdf?url'
import PhotoLucie from '/images/photo-lucie.jpg?url'
import Expertise from '../../components/expertise/Expertise'
import ProjectPreview from '../../components/project_preview/ProjectPreview'
import { useEffect } from 'react'

function Home () {
  useEffect(() => {
    document.title = 'Bienvenue | Lucie Mouilé'
  })

  const latestProjects = DataProjects.filter(
    project => project.id === 4 || project.id === 2
  )

  return (
    <div className='home'>
      <div className='home__two-cols'>
        <div>
          <section className='home__section home__section--small'>
            <h1>Bonjour & bienvenue</h1>
            <p>
              Je suis Lucie, <b>UX·UI Designer</b> en recherche de nouvelles
              opportunités Design !
            </p>
            <Button
              url={'https://www.linkedin.com/in/lucie-mouill%C3%A9-57593b1b7/'}
              target={'_blank'}
              content={'Mon LinkedIn'}
              additionnal_class={''}
            />
            <Button
              url={CVpdf}
              target={'_blank'}
              content={'Télécharger mon CV'}
              additionnal_class={''}
            />
          </section>
          <section className='home__section home__section--small'>
            <h2>Mon rôle</h2>
            <p>
              J'utilise les méthodes d'UX Design afin de concevoir des designs
              qui prennent en compte les humains qui interagissent avec.
            </p>
          </section>
          <section className='home__section'>
            <h2>Mes derniers projets</h2>
            <div className='project-preview__container'>
              {latestProjects.map((project, index) => (
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
        </div>
        <figure className='home__photo-container'>
          <img className='home__photo' src={PhotoLucie} alt='Lucie Mouillé' />
        </figure>
      </div>
      <section className='home__section'>
        <h2>Mes domaines d'expertises</h2>
        <ul className='expertises'>
          {DataExpertises.map(expertise => (
            <Expertise
              key={expertise.id}
              name={expertise.name}
              desc={expertise.desc}
            />
          ))}
        </ul>
      </section>
      <section className='home__section'>
        <h2>Mes outils</h2>
        <ul className='tools'>
          {DataTools.map(tool => (
            <Tool key={tool.id} name={tool.name} icon={tool.icon} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
