import { useEffect } from 'react'
import image01 from '/images/life_gallery/01.jpg?url'
import image02 from '/images/life_gallery/02.jpg?url'
import image03 from '/images/life_gallery/03.jpg?url'
import image04 from '/images/life_gallery/04.jpg?url'
import image05 from '/images/life_gallery/05.jpg?url'
import image06 from '/images/life_gallery/06.jpg?url'
import vecto_lucie from '/images/vecto-lucie.jpg?url'

function About () {
  useEffect(() => {
    document.title = 'A propos | Lucie Mouilé'
  })

  // Créez une liste d'images
  const images = [image01, image02, image03, image04, image05, image06]

  return (
    <section className='about'>
      <h1>About</h1>
      <h2 className='p'>Mon parcours et mes compétences.</h2>
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
            <h2 className='margin--small'>Je suis :</h2>
            <ul className='about__iam'>
              <li className='about__iam-item'>Empathique & observatrice</li>
              <li className='about__iam-item'>Bonne communiquante</li>
              <li className='about__iam-item'>Vectrice de bonne humeur</li>
              <li className='about__iam-item'>Curieuse</li>
              <li className='about__iam-item'>Créative</li>
              <li className='about__iam-item'>À l'aise en équipe</li>
            </ul>
          </div>
        </div>
        <div className='about__experiences'>
          <h2>Mes expériences professionnelles</h2>
          <section className='about__exp'>
            <h3>UX·UI Designer</h3>
            <h4>Alternance · Logiroad · 2021-2023 </h4>
            <p>
              Création d'une plateforme web pour professionnels de la gestion
              des routes
            </p>
            <p>Tests et recherche utilisateur</p>
            <p>Création et maintien d'un Design System</p>
            <p>Travail en équipe Agile</p>
            <p>UX Research</p>
            <p>Animation d'ateliers d'idéation</p>
          </section>
          <section className='about__exp'>
            <h3>UI Designer</h3>
            <h4>Stage · Groupe Syd · 2021</h4>
            <p>Maquettage du site web de Factory Group</p>
            <p>Intégration WordPress & Elementor</p>
            <p>Création d'univers graphique</p>
          </section>
        </div>
        <div className='about__studies'>
          <h2>Mes études</h2>
          <section className='about__exp'>
            <h3>Mastère UX·UI Design</h3>
            <h4>ECV · Nantes · 2021-23</h4>
            <p>
              Méthodes UX, UI design, Sociologie des utilisateurs, ethnologie
              des usages, anthropologie, analyse des comportements
              utilisateurs...
            </p>
          </section>
          <section className='about__exp'>
            <h3>Bachelor Chef de Projet Digital</h3>
            <h4>ECV · Nantes · 2020-21</h4>
            <p>
              UX design, webdesign, HTML-CSS, communication & marketing digital,
              apprentissage des logiciels de PAO...
            </p>
          </section>
          <section className='about__exp'>
            <h3>Licence LLCER Anglais</h3>
            <h4>Université · Angers · 2016-19</h4>
            <p>
              Grammaire anglaise, communication orale, traduction (version et
              thème)...
            </p>
          </section>
        </div>
      </div>
      <section className='about__gallery'>
        <h2>Galerie de vie</h2>
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
