import React from 'react'
import Button from '../components/button/Button'

import DataTools from '../data/tools.json'
import Tool from '../components/tool/Tool'

function Home () {
  return (
    <>
      <section>
        <h1>Bonjour & bienvenue</h1>
        <p>
          Je suis Lucie, UX·UI Designer en recherche de nouvelles opportunités
          Design !
        </p>
        <div>
          <Button
            url={'https://www.linkedin.com/in/lucie-mouill%C3%A9-57593b1b7/'}
            target={'_blank'}
            content={'Mon LinkedIn'}
          />
          <Button url={'/'} target={'_blank'} content={'Télécharger mon CV'} />
        </div>
      </section>
      <section>
        <h2>Mon rôle</h2>
        <p>
          J'utilise les méthodes d'UX Design afin de concevoir des designs qui
          prennent en compte les humains qui interagissent avec.
        </p>
      </section>
      <section>
        <h2>Mes derniers projets</h2>
      </section>
      <section>
        <h2>Mes domaines d'expertises</h2>
      </section>
      <section>
        <h2>Mes outils</h2>
        <ul className='tools'>
          {DataTools.map(tool => (
            <Tool key={tool.id} name={tool.name} icon={tool.icon} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
