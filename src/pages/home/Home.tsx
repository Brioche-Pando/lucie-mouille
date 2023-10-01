import Button from '../../components/button/Button'
import Tool from '../../components/tool/Tool'

import DataExpertises from '../../data/expertises.json'
import DataTools from '../../data/tools.json'

import PhotoLucie from '/images/photo-lucie.jpg'
import Expertise from '../../components/expertise/Expertise'

function Home () {
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
              url={'/'}
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
