import Button from '../../components/button/Button'
import Tool from '../../components/tool/Tool'

import DataExpertises from '../../data/expertises.json'
import DataTools from '../../data/tools.json'

import PhotoLucie from '/images/photo-lucie.jpg'
import Expertise from '../../components/expertise/Expertise'
import Tag from '../../components/tag/Tag'
import Badge from '../../components/badge/Badge'

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
            <Tag text={'test'} has_icon={false} />
            <Tag
              text={'kiwi'}
              has_icon={true}
              icon={
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.9984 2H2V4.9984H4.9984V2Z" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.99854 3.50049H18.9987" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 4.99805V19" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.4978 4.99951V19.0015" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.99854 20.5005H18.9987" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.9984 19H2V21.9984H4.9984V19Z" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.9974 2.00098H18.999V4.99938H21.9974V2.00098Z" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.9974 19.001H18.999V21.9994H21.9974V19.001Z" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
              }
            />
            <Badge text={'pro'} />
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
