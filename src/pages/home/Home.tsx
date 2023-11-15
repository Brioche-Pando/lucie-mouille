import Button from '../../components/button/Button'
import Tool from '../../components/tool/Tool'

import DataProjects from '../../data/projects'
import DataExpertises from '../../data/expertises'
import DataTools from '../../data/tools.json'

import CVpdf from '/cv/Lucie_Mouille_cv.pdf?url'
import PhotoLucie from '/images/photo-lucie.jpg?url'
import Expertise from '../../components/expertise/Expertise'
import ProjectPreview from '../../components/project_preview/ProjectPreview'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import useLanguageContext from '../../hooks/useLanguage'

type ExpertiseData = {
  id: number
  name: string
  desc: string
}

function Home () {
  const { userLanguage, translate } = useLanguageContext()

  useEffect(() => {
    document.title = 'UX UI designer - Product Designer | Lucie Mouillé'
  })

  const latestProjects = Object.values(DataProjects[userLanguage]).filter(
    project => project.id === 4 || project.id === 2
  )

  return (
    <div className='home'>
      <div className='home__two-cols'>
        <div>
          <section className='home__section home__section--small'>
            <h1>{translate('homePage', 'helloAndWelcome')}</h1>
            <p>{translate('homePage', 'presentation')}</p>
            <Button
              url={'https://www.linkedin.com/in/lucie-mouill%C3%A9-57593b1b7/'}
              target={'_blank'}
              content={translate('homePage', 'myLinkedin')}
              additionnal_class={''}
            />
            <Button
              url={CVpdf}
              target={'_blank'}
              content={translate('homePage', 'downloadResume')}
              additionnal_class={''}
            />
          </section>
          <section className='home__section home__section--small'>
            <h2>{translate('homePage', 'myJob')}</h2>
            <p>{translate('homePage', 'myJobDescription')}</p>
          </section>
          <div className='home__section home__project-preview '>
            <div className='home__project-preview__header'>
              <h2>{translate('homePage', 'myLastestProjects')}</h2>
              <Link to='/projects'>{translate('global', 'seeMore')}</Link>
            </div>
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
          </div>
        </div>
        <figure className='home__photo-container'>
          <img className='home__photo' src={PhotoLucie} alt='Lucie Mouillé' />
        </figure>
      </div>
      <section className='home__section'>
        <h2>{translate('homePage', 'myFieldsExpertise')}</h2>
        <ul className='expertises'>
          {Object.values(DataExpertises[userLanguage]).map(
            (expertise: ExpertiseData) => (
              <Expertise
                key={expertise.id}
                name={expertise.name}
                desc={expertise.desc}
              />
            )
          )}
        </ul>
      </section>
      <section className='home__section'>
        <h2>{translate('homePage', 'myTools')}</h2>
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
