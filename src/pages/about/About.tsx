import { useEffect } from 'react'
import image01 from '/images/life_gallery/01.jpg?url'
import image02 from '/images/life_gallery/02.jpg?url'
import image03 from '/images/life_gallery/03.jpg?url'
import image04 from '/images/life_gallery/04.jpg?url'
import image05 from '/images/life_gallery/05.jpg?url'
import image06 from '/images/life_gallery/06.jpg?url'
import vecto_lucie from '/images/vecto-lucie.jpg?url'


import useLanguageContext from '../../hooks/useLanguage'

function About () {
  const { translate } = useLanguageContext()

  useEffect(() => {
    document.title = 'A propos | Lucie Mouilé'
  })

  // Créez une liste d'images
  const images = [image01, image02, image03, image04, image05, image06]

  return (
    <section className='about'>
      <h1>{translate('Navigation', 'aboutMe')}</h1>
      <h2 className='p'>{translate('About', 'backgroundSkills')}</h2>
      <div className='about__details'>
        <div className='about__presentation'>
          <div className='about__portrait'>
            <img src={vecto_lucie} alt='' />
            <div className='about__portrait-content'>
              <h2 className='margin--small'>Lucie Mouillé</h2>
              <p>Nantes</p>
              <p>98'baby</p>
            </div>
          </div>
          <div className='about__iam-container'>
            <h2 className='margin--small'>{translate('About', 'IAm')}</h2>
            <ul className='about__iam'>
              <li className='about__iam-item'>{translate('About', 'empatheticAndObservant')}</li>
              <li className='about__iam-item'>{translate('About', 'greatCommunicator')}</li>
              <li className='about__iam-item'>{translate('About', 'goodVibes')}</li>
              <li className='about__iam-item'>{translate('About', 'curious')}</li>
              <li className='about__iam-item'>{translate('About', 'creative')}</li>
              <li className='about__iam-item'>{translate('About', 'teamPlayer')}</li>
            </ul>
          </div>
        </div>
        <div className='about__experiences'>
          <h2>{translate('Experiences', 'myProfessionalExperiences')}</h2>
          <section className='about__exp'>
            <h3>UX·UI Designer</h3>
            <h4>{translate('Experiences', 'logiroad')}</h4>
            <p>{translate('Experiences', 'logiroadTopic1')}</p>
            <p>{translate('Experiences', 'logiroadTopic2')}</p>
            <p>{translate('Experiences', 'logiroadTopic3')}</p>
            <p>{translate('Experiences', 'logiroadTopic4')}</p>
            <p>{translate('Experiences', 'logiroadTopic5')}</p>
            <p>{translate('Experiences', 'logiroadTopic6')}</p>
          </section>
          <section className='about__exp'>
            <h3>UI Designer</h3>
            <h4>{translate('Experiences', 'sid')}</h4>
            <p>{translate('Experiences', 'sidTopic1')}</p>
            <p>{translate('Experiences', 'sidTopic2')}</p>
            <p>{translate('Experiences', 'sidTopic3')}</p>
          </section>
        </div>
        <div className='about__studies'>
          <h2>{translate('Studies', 'myStudies')}</h2>
          <section className='about__exp'>
            <h3>{translate('Studies', 'master')}</h3>
            <h4>ECV · Nantes · 2021-23</h4>
            <p>{translate('Studies', 'masterDesc')}</p>
          </section>
          <section className='about__exp'>
            <h3>{translate('Studies', 'bachelorDigital')}</h3>
            <h4>ECV · Nantes · 2020-21</h4>
            <p>{translate('Studies', 'bachelorDigitalDesc')}</p>
          </section>
          <section className='about__exp'>
            <h3>{translate('Studies', 'bachelorEnglish')}</h3>
            <h4>{translate('Studies', 'bachelorEnglishLocation')}</h4>
            <p>{translate('Studies', 'bachelorEnglishDesc')}</p>
          </section>
        </div>
      </div>
      <section className='about__gallery'>
        <h2>{translate('About', 'lifeGallery')}</h2>
        <ul className='about__gallery__list'>
          {images.map((image, index) => (
            <li key={index} className='about__gallery__list-item'>
              <figure className='about__gallery-img-wrapper'>
                <img
                  src={image}
                  alt={`Description de l'image ${index + 1}`}
                  className='about__gallery-img'
                />
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default About
