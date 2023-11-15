type ProjectTag = {
  name: string
  icon: string
}

type ProjectData = {
  id: number
  slug: string
  name: string
  years: string
  link: string
  badge: string
  tag: ProjectTag[]
  summary: string
  images: string[]
  context: string
  approach: string[]
  challenges: string[]
  skills_acquired: string[]
  skills_to_develop: string[]
}

type LanguageDataProjects = {
  [key: string]: {
    [key: string]: ProjectData
  }
}

const DataProjects: LanguageDataProjects = {
  fr: {
    'factory-group': {
      id: 0,
      slug: 'factory-group',
      name: 'Factory Group',
      years: '2021',
      link: 'https://xd.adobe.com/view/21807bac-9853-452a-95fb-fc93d67d3459-74d3/',
      badge: 'Pro',
      tag: [
        {
          name: 'WordPress - CSS',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M13 7L15 9.5L13 12' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M5 7L3 9.5L5 12' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M10 6L8 13' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        "Création de maquettes pour le site web et intégration dans Wordpress avec Elementor. Travail en amont sur la charte graphique et sur l'univers de la marque.",
      images: [
        '/images/projects/factory-group/factory-group-1.png',
        '/images/projects/factory-group/factory-group-2.png',
        '/images/projects/factory-group/factory-group-3.png',
        '/images/projects/factory-group/factory-group-4.png'
      ],
      context:
        "Je suis arrivée en stage chez Syd, alors qu'ils avaient fait l'acquisition de Factory Group. L'entreprise s'occupe principalement de vendre des ERP et des CRM à des PME et des TPE. Je disposais d'un site web existant, mais ancien et avec des mauvaises informations . De plus, les couleurs utilisées et les façons de voir le sites sont des anciens codes plus à jour et le site n'est pas responsive, ce qui constitue un enjeu supplémentaire.",
      approach: [
        "La partie complexe a été de gérer l'absence de contenu pour le site web jusqu'à la presque fin du projet.",
        "J'ai utilisé ces mois pour être formée, et pour comprendre les enjeux entre la création et la réalité d'un projet développé. Cela m'a aussi permis pouvoir donner une véritable identité visuelle à un site web en toute liberté.",
        "J'ai pu aussi faire des présentations de mes avancées avec des réunions etc. Cela a été un véritable défi pour moi mais j'ai pu avancer et apprendre énormément avec cette refonte. Cela m'a permis de prendre confiance en mon travail et en mes capacités.",
        "J'ai aussi pu découvrir à l'utilisation WordPress ainsi qu'Elementor Pro, ce qui m'a permis de voir par moi-même la réalité entre une maquette design et la faisabilité technique sur un CMS."
      ],
      challenges: ['Identité visuelle', 'WordPress', 'CSS'],
      skills_acquired: [
        'Adobe Xd',
        'WordPress',
        'Elementor',
        'Architecture info'
      ],
      skills_to_develop: ['Présentations', 'CSS', 'Wordpress']
    },
    'plein-epices': {
      id: 1,
      slug: 'plein-epices',
      name: "Le plein d'épices",
      years: '2020',
      link: 'https://xd.adobe.com/view/d2544ea5-84ef-4e58-9ecc-0599fef390b6-8707/',
      badge: 'Scolaire',
      tag: [
        {
          name: 'Duo en distanciel',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M15 12V16.4C15 16.7314 14.7314 17 14.4 17H3.6C3.26863 17 3 16.7314 3 16.4V7.6C3 7.26863 3.26863 7 3.6 7H14.4C14.7314 7 15 7.26863 15 7.6V12ZM15 12L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.719C21 16.2277 20.4067 16.5056 20.0159 16.1799L15 12Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        "Création de maquettes et renouvellement de l'identité visuelle et du logo du site web.",
      images: [
        '/images/projects/plein-epices/plein-epices-1.png',
        '/images/projects/plein-epices/plein-epices-2.png',
        '/images/projects/plein-epices/plein-epices-3.png',
        '/images/projects/plein-epices/plein-epices-4.png'
      ],
      context:
        "Ce travail de cours portait sur la refonte d'un site d'épicerie et sur la création d'une nouvelle identité visuelle ainsi que d'un logo pour ce site web. Il y avait un travail important à faire sur l'architecture du site qui comportait de nombreux menus qui renvoyaient aux mêmes pages.",
      approach: [
        "Le travail en duo en distanciel a été un véritable défi. De plus, le site du Plein d'épices était particulièrement complexe à traiter, avec une organisation et une architecture déstructurée et conséquente.",
        "L'audit de ce site m'a permis de comprendre l'enjeu d'une bonne architecture de l'information et d'un bon parcours d'achat pour permettre une bonne expérience utilisateur. J'ai pu aussi prendre en compte les enjeux du travail en duo et apprendre de mon binôme."
      ],
      challenges: ['Architecture info', 'Distanciel', 'E-commerce'],
      skills_acquired: ['Architecture info', 'Adobe Xd', 'Mega Menu'],
      skills_to_develop: ['Logo', 'Contenu SEO']
    },
    logiroad: {
      id: 2,
      slug: 'logiroad',
      name: 'Logiroad',
      years: '2022-23',
      link: '',
      badge: 'Pro',
      tag: [
        {
          name: 'Tout à faire',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M3.2959 20.6016L9.65986 14.2377' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49644 16.4515 2.49644 15.6704 3.27749L12.842 6.10592' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        'Mon alternance pendant 2 ans afin de créer un logiciel métier sous forme de plateforme adaptée desktop et mobile.',
      images: [
        '/images/projects/logiroad/logiroad-1.png',
        '/images/projects/logiroad/logiroad-2.png',
        '/images/projects/logiroad/logiroad-3.png',
        '/images/projects/logiroad/logiroad-4.png'
      ],
      context:
        "Suite à mon arrivée chez Logiroad, j'ai pu intégrer l'équipe de développement d'une plateforme de visualisation de données routières. Les besoins utilisateurs de la plateforme n'avait pas réellement été définis, seules des datas récupérées et des bribes de besoins d'anciens utilisateurs. Cependant le projet avait déjà démarré, il m'a donc fallut m'intégrer à cette équipe qui n'avait pas d'UX-UI designer.",
      approach: [
        "Le projet fut long et complexe, mais en travaillant petit à petit sur les fonctionnalités importantes tout d'abord puis ensuite sur les améliorations et les nouvelles briques à apporter au logiciel, le travail a été efficace. Le besoin de communiquer au mieux les besoins entre l'équipe de développeurs et moi a été de créer un design system efficace et de se créer des processus efficaces et qui nous permettaient une bonne cohésion.",
        "C'est un projet que j'ai vu grandir et que j'ai pu faire évoluer jusqu'à aujourd'hui avec le PO, les développeurs et les clients (futurs ou actuels de l'ancien logiciel) afin de pouvoir comprendre au mieux les besoins, les choix à faire et de pouvoir réaliser au mieux un logiciel métier complexe. Il a fallu que je m'impose en tant qu'UX·UI au sein d'une équipe de développeurs en apportant mon expertise UX à l'aide d'atelier, de discussions et autres méthodologie de design."
      ],
      challenges: ['Sujet complexe', "Travail d'équipe", 'À partir de peu'],
      skills_acquired: [
        'Figma',
        'User Interviews',
        'Recherches UX',
        'Ateliers',
        'Autonomie'
      ],
      skills_to_develop: ['Interviews', 'Organisation DS']
    },
    hos: {
      id: 3,
      slug: 'hos',
      name: 'HOS',
      years: '2022',
      link: 'https://assets.adobe.com/id/urn:aaid:sc:EU:164b387d-7951-48c8-b3a4-18b00828af6f?view=published',
      badge: 'Scolaire',
      tag: [
        {
          name: 'Création',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M3 21L13 11M18 6L15.5 8.5' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M9.5 2L10.4453 4.55468L13 5.5L10.4453 6.44532L9.5 9L8.55468 6.44532L6 5.5L8.55468 4.55468L9.5 2Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linejoin='round'/><path d='M19 10L19.5402 11.4598L21 12L19.5402 12.5402L19 14L18.4598 12.5402L17 12L18.4598 11.4598L19 10Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linejoin='round'/></svg>"
        }
      ],
      summary: "Création d'un logo pour une équipe d'e-sport.",
      images: [
        '/images/projects/hos/hos-1.png',
        '/images/projects/hos/hos-2.png',
        '/images/projects/hos/hos-3.jpeg'
      ],
      context:
        "Une équipe e-sport amateur avait besoin d'un nouveau logo pour ensuite floquer les t-shirts de leur équipe pour une compétition. Ils voulaient absolument conserver les 3 lettres de leur équipe assez lisible car il s'agit des lettres qui permettent de les reconnaître dans l'interface du jeu.",
      approach: [
        "J'ai décidé de partir sur quelque chose de simple, visuel, et coloré. J'ai apporté un côté coréen à ces lettres calligraphiées par mes soins. J'ai pu me renseigner sur le jeu ainsi que sur les tendances actuelles et c'est ainsi que je leur ai proposé ce logo qui a été adopté par l'équipe."
      ],
      challenges: ['Création visuelle', 'Rapidité', 'Lettrage'],
      skills_acquired: ['Créativité', 'Typo vectorielle', 'Illustrator'],
      skills_to_develop: ['Illustrator', 'Équilibrage']
    },
    'citron-presse': {
      id: 4,
      slug: 'citron-presse',
      name: 'Citron Pressé',
      years: '2023',
      link: 'https://www.figma.com/file/KZxMeUwEvLzWz815Ilsdvp/🌶-PFE?type=design&node-id=108%3A477&mode=design&t=uaaRvqZCwJmH5XdI-1',
      badge: 'Scolaire',
      tag: [
        {
          name: 'Design System',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M4.9984 2H2V4.9984H4.9984V2Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M4.99854 3.50049H18.9987' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M3.5 4.99805V19' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M20.4978 4.99951V19.0015' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M4.99854 20.5005H18.9987' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M4.9984 19H2V21.9984H4.9984V19Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M21.9974 2.00098H18.999V4.99938H21.9974V2.00098Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M21.9974 19.001H18.999V21.9994H21.9974V19.001Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M9 12H12M15 12H12M12 12V9M12 12V15' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        "Imagination d'un projet complet et mise en œuvre de maquettes et d'un Design System.",
      images: [
        '/images/projects/citron-presse/citron-presse-1.png',
        '/images/projects/citron-presse/citron-presse-2.png',
        '/images/projects/citron-presse/citron-presse-3.png',
        '/images/projects/citron-presse/citron-presse-4.png'
      ],
      context:
        "Mon projet de fin d'étude afin de valider mon M2 était de créer le Design System d'une marque et d'un projet fictif. Nous avons donc pu imaginer en binôme ce projet du début à la fin. Nous devions rendre à la fin du Mastère lors d'une présentation oral, une explication écrite de notre réflexion (format Notion) ainsi qu'un DS sous Zeroheight, de maquettes et d'un prototypage adapté.",
      approach: [
        "La création de ce DS a été un véritable défi, de temps d'abord, car ma binôme et moi, avions cours et nos alternances en parallèle. Nous avons du d'abord trouver une idée, puis nous avons avancé petit à petit sur ce projet. Nous avons souhaité trouver un sujet et un style qui nous représentait et qui nous correspondait afin de rendre la tâche plus agréable pour nous. Malgré la complexité de ce projet, les bénéfices en terme de compréhension et de création d'un DS ont été réels. J'ai en effet pu apprendre à utiliser Zeroheight et j'ai été plus en profondeur dans la création de composants et de variants dans Figma."
      ],
      challenges: ['Création visuelle', 'Beaucoup à faire', 'Travail complet'],
      skills_acquired: [
        'Figma',
        'Zeroheight',
        'UX Process',
        'Notion',
        'Illustrator',
        'User Test'
      ],
      skills_to_develop: ['Zeroheight', 'Content design']
    },
    comi: {
      id: 5,
      slug: 'comi',
      name: 'Comi',
      years: '2023',
      link: 'https://www.figma.com/file/IBH48if4Zntf4yaGFIFIfV/🥝-Design?type=design&node-id=333%3A13294&mode=design&t=S6rUMeENLAmbODc7-1',
      badge: 'Scolaire',
      tag: [
        {
          name: 'Compétition',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M10.5 15L12.5 13.5V18.5' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        "Création d'une solution digitale à un problème sur le handicap en un temps réduit.",
      images: [
        '/images/projects/comi/comi-1.png',
        '/images/projects/comi/comi-2.png',
        '/images/projects/comi/comi-3.png'
      ],
      context:
        "Ce projet a vu le jour lors de la compétition de 2 semaines en team de 8 personnes (format agence) organisé par l'école. Il était donc important qu'avec des personnes d'univers divers nous puissions nous entendre et être efficace sur un projet à créer de A à Z avec comme problématique : “Une solution à un presqu'handicap”. L'équipe était composée de 4 étudiants UX·UI, 1 développeur et de 3 étudiants en marketing & communication.",
      approach: [
        "L'entraide et la communication nous ont permis d'être très efficace sur ce projet. Cela nous a demandé de la réflexion, de nombreuses étapes à la fois UX et UI faites rapidement afin de rentrer dans le délai imparti. Nous avons cependant pu fournir un produit viable et avec un rendu qui nous plaisait particulièrement. Le travail en équipe m'a aussi permis de travailler mes capacités d'adaptation aux autres univers du digital et de créer aussi un projet complet avec une contrainte de temps assez serrée. "
      ],
      challenges: [
        'Rapidité',
        'Sujet complexe',
        "Travail d'équipe",
        'Tout à faire'
      ],
      skills_acquired: ['Figma', 'User Interviews', 'Team work', 'Notion'],
      skills_to_develop: ['Management', 'Travail rapide']
    },
    'la-faille': {
      id: 6,
      slug: 'la-faille',
      name: 'La Faille',
      years: '2023',
      link: 'https://www.figma.com/file/IBH48if4Zntf4yaGFIFIfV/🥝-Design?type=design&node-id=333%3A13294&mode=design&t=S6rUMeENLAmbODc7-1',
      badge: 'Perso',
      tag: [
        {
          name: 'Rapidité',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M9 2L15 2' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M12 10L12 14' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary: "Création d'un logo pour le projet d'un étudiant.",
      images: [
        '/images/projects/la-faille/la-faille-1.png',
        '/images/projects/la-faille/la-faille-2.png',
        '/images/projects/la-faille/la-faille-3.png',
        '/images/projects/la-faille/la-faille-4.jpg'
      ],
      context:
        "Ce projet a été créé pour le projet de fin d'étude d'un étudiant développeur à l'école. Son sujet était un application web liée au jeu League of Legends et à destination des équipes amateurs afin de faciliter leur jeu et la communication entre les joueurs.",
      approach: [
        "J'ai choisi de représenter l'élément central d'une partie de LoL. La faille correspond au terrain de jeu (forme du logo). On y retrouve différents éléments comme des flèches qui se rejoignent pour conserver l'aspect communication. On peut aussi y voir la lettre F, la première lettre du nom de l'app. Ce logo était un moyen de combiner des éléments que je ne connaissaient pas forcément tout en y apportant ma touche, avec des éléments extérieurs compréhensibles même pour des personnes qui ne connaissent pas le jeu."
      ],
      challenges: ['Veille importante', 'Sujet complexe', 'Temps réduit'],
      skills_acquired: ['Procreate', 'Illustrator', 'Rapidité'],
      skills_to_develop: ['Illustrator', 'Procreate']
    }
  },
  en: {
    factory_group: {
      id: 0,
      slug: 'factory-group',
      name: 'Factory Group',
      years: '2021',
      link: 'https://xd.adobe.com/view/21807bac-9853-452a-95fb-fc93d67d3459-74d3/',
      badge: 'Pro',
      tag: [
        {
          name: 'WordPress - CSS',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M13 7L15 9.5L13 12' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M5 7L3 9.5L5 12' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M10 6L8 13' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        'Creation of mock-ups for the website and integration into Wordpress using Elementor. Upstream work on the graphic charter and brand universe.',
      images: [
        '/images/projects/factory-group/factory-group-1.png',
        '/images/projects/factory-group/factory-group-2.png',
        '/images/projects/factory-group/factory-group-3.png',
        '/images/projects/factory-group/factory-group-4.png'
      ],
      context:
        "I joined Syd as an intern when they acquired Factory Group. The company mainly sells ERP and CRM solutions to small and medium-sized businesses. They had an existing website, but it was old and had wrong information. Moreover, the colors used and the ways of viewing the site were old codes that were no longer up to date, and the site wasn't responsive, which constituted an additional challenge.",
      approach: [
        'The complex part was to manage the absence of content for the website until almost the end of the project.',
        'I used these months to be trained, and to understand the stakes between creation and the reality of a developed project. It also gave me the freedom to give a website a real visual identity.',
        'I was also able to present my progress at meetings and so on. It was a real challenge for me, but I was able to progress and learn a lot from this redesign. It gave me confidence in my work and my abilities.',
        'I was also able to discover how to use WordPress and Elementor Pro, which enabled me to see for myself the reality between a design mock-up and the technical feasibility of a CMS.'
      ],
      challenges: ['Visual identity', 'WordPress', 'CSS'],
      skills_acquired: [
        'Adobe Xd',
        'WordPress',
        'Elementor',
        'Architecture info'
      ],
      skills_to_develop: ['Presentation', 'CSS', 'Wordpress']
    },
    plein_epices: {
      id: 1,
      slug: 'plein-epices',
      name: "Le plein d'épices",
      years: '2020',
      link: 'https://xd.adobe.com/view/d2544ea5-84ef-4e58-9ecc-0599fef390b6-8707/',
      badge: 'School',
      tag: [
        {
          name: 'Remote duo',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M15 12V16.4C15 16.7314 14.7314 17 14.4 17H3.6C3.26863 17 3 16.7314 3 16.4V7.6C3 7.26863 3.26863 7 3.6 7H14.4C14.7314 7 15 7.26863 15 7.6V12ZM15 12L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.719C21 16.2277 20.4067 16.5056 20.0159 16.1799L15 12Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        "Creation of mock-ups and renewal of the website's visual identity and logo.",
      images: [
        '/images/projects/plein-epices/plein-epices-1.png',
        '/images/projects/plein-epices/plein-epices-2.png',
        '/images/projects/plein-epices/plein-epices-3.png',
        '/images/projects/plein-epices/plein-epices-4.png'
      ],
      context:
        'This school project involved redesigning a grocery store website and creating a new visual identity and logo for the site. There was a lot of work to be done on the architecture of the site, which featured numerous menus linking to the same pages.',
      approach: [
        "Working together remotely was a real challenge. Moreover, Le Plein d'épices' site was particularly complex to deal with, with its unstructured and consequent organization and architecture.",
        'The audit of this site enabled me to understand the importance of good information architecture and a good shopping experience. I was also able to take into account the challenges of working as a duo and learn from my teammate.'
      ],
      challenges: ['Architecture info', 'Remote', 'E-commerce'],
      skills_acquired: ['Architecture info', 'Adobe Xd', 'Mega Menu'],
      skills_to_develop: ['Logo', 'SEO Content']
    },
    logiroad: {
      id: 2,
      slug: 'logiroad',
      name: 'Logiroad',
      years: '2022-23',
      link: '',
      badge: 'Pro',
      tag: [
        {
          name: 'Lot to do',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M3.2959 20.6016L9.65986 14.2377' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49644 16.4515 2.49644 15.6704 3.27749L12.842 6.10592' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        'My 2-year work-study program to create a business software platform for desktop and mobile devices.',
      images: [
        '/images/projects/logiroad/logiroad-1.png',
        '/images/projects/logiroad/logiroad-2.png',
        '/images/projects/logiroad/logiroad-3.png',
        '/images/projects/logiroad/logiroad-4.png'
      ],
      context:
        "Following my arrival at Logiroad, I was able to join the development team for a road data visualization platform. The platform's user requirements hadn't really been defined, only data collected and snippets of needs from former users. However, the project had already started, so I had to join a team that didn't have a UX-UI designer.",
      approach: [
        'The project was long and complex, but by working step by step on the important functionalities first and then on the improvements and new bricks to bring to the software, the work was efficient. The need to communicate needs as effectively as possible between the team of developers and myself led to the creation of an effective design system and efficient processes that enabled us to work well together.',
        "It's a project that I've seen grow and that I've been able to help evolve right up to the present day, with the PO, the developers and the customers (future or current customers of the old software), so as to be able to best understand the needs, the choices to be made and to best realize a complex business software. I had to establish myself as a UX-UI within a team of developers, contributing my UX expertise through workshops, discussions and other design methodologies."
      ],
      challenges: ['Complex theme', 'Teamwork', 'From scratch'],
      skills_acquired: [
        'Figma',
        'User Interviews',
        'UX Research',
        'Workshops',
        'Autonomy'
      ],
      skills_to_develop: ['Interviews', 'DS organization']
    },
    hos: {
      id: 3,
      slug: 'hos',
      name: 'HOS',
      years: '2022',
      link: 'https://assets.adobe.com/id/urn:aaid:sc:EU:164b387d-7951-48c8-b3a4-18b00828af6f?view=published',
      badge: 'School',
      tag: [
        {
          name: 'Creation',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M3 21L13 11M18 6L15.5 8.5' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M9.5 2L10.4453 4.55468L13 5.5L10.4453 6.44532L9.5 9L8.55468 6.44532L6 5.5L8.55468 4.55468L9.5 2Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linejoin='round'/><path d='M19 10L19.5402 11.4598L21 12L19.5402 12.5402L19 14L18.4598 12.5402L17 12L18.4598 11.4598L19 10Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linejoin='round'/></svg>"
        }
      ],
      summary: 'Logo design for an e-sport team.',
      images: [
        '/images/projects/hos/hos-1.png',
        '/images/projects/hos/hos-2.png',
        '/images/projects/hos/hos-3.jpeg'
      ],
      context:
        "An amateur e-sport team needed a new logo to flock their team t-shirts for a competition. They were determined to keep their team's 3 letters legible, as these are the letters that make them recognizable in the game interface.",
      approach: [
        'I decided to go for something simple, visual and colorful. I gave the calligraphic letters a Korean twist. I was able to learn about the game and current trends, and came up with this logo, which was adopted by the team.'
      ],
      challenges: ['Visual design', 'Short time', 'Lettering'],
      skills_acquired: ['Creativity', 'Vector Typography', 'Illustrator'],
      skills_to_develop: ['Illustrator', 'Balance']
    },
    citron_presse: {
      id: 4,
      slug: 'citron-presse',
      name: 'Citron Pressé',
      years: '2023',
      link: 'https://www.figma.com/file/KZxMeUwEvLzWz815Ilsdvp/🌶-PFE?type=design&node-id=108%3A477&mode=design&t=uaaRvqZCwJmH5XdI-1',
      badge: 'School',
      tag: [
        {
          name: 'Design System',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M4.9984 2H2V4.9984H4.9984V2Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M4.99854 3.50049H18.9987' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M3.5 4.99805V19' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M20.4978 4.99951V19.0015' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M4.99854 20.5005H18.9987' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M4.9984 19H2V21.9984H4.9984V19Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M21.9974 2.00098H18.999V4.99938H21.9974V2.00098Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M21.9974 19.001H18.999V21.9994H21.9974V19.001Z' stroke='#2C2C2C' stroke-width='1.5' stroke-miterlimit='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M9 12H12M15 12H12M12 12V9M12 12V15' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        'Imagination of a complete project and implementation of mock-ups and a Design System.',
      images: [
        '/images/projects/citron-presse/citron-presse-1.png',
        '/images/projects/citron-presse/citron-presse-2.png',
        '/images/projects/citron-presse/citron-presse-3.png',
        '/images/projects/citron-presse/citron-presse-4.png'
      ],
      context:
        "My end-of-study project to validate my Masters’ degree was to create the Design System for a brand and a fictitious project. We were able to work in pairs on this project from start to finish. At the end of the Master's program, we had to give an oral presentation, a written explanation of our ideas (in a Notion format) as well as a DS in Zeroheight, models and adapted prototypes.",
      approach: [
        'The creation of this DS was a real challenge, firstly in terms of time, as my partner and I had to take classes and work placements at the same time. First, we had to come up with an idea, and then we progressed gradually with the project. We wanted to find a subject and a style that represented and matched us, to make the task more enjoyable for us. Despite the complexity of the project, the benefits in terms of understanding and creating a DS were real. I was able to learn how to use Zeroheight, and went deeper into the creation of components and variants in Figma.'
      ],
      challenges: ['Visual design', 'Lot to do', 'Complete work'],
      skills_acquired: [
        'Figma',
        'Zeroheight',
        'UX Process',
        'Notion',
        'Illustrator',
        'User Test'
      ],
      skills_to_develop: ['Zeroheight', 'Content design']
    },
    comi: {
      id: 5,
      slug: 'comi',
      name: 'Comi',
      years: '2023',
      link: 'https://www.figma.com/file/IBH48if4Zntf4yaGFIFIfV/🥝-Design?type=design&node-id=333%3A13294&mode=design&t=S6rUMeENLAmbODc7-1',
      badge: 'School',
      tag: [
        {
          name: 'Competition',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M10.5 15L12.5 13.5V18.5' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary:
        'Creating a digital solution to a disability problem in a short space of time.',
      images: [
        '/images/projects/comi/comi-1.png',
        '/images/projects/comi/comi-2.png',
        '/images/projects/comi/comi-3.png'
      ],
      context:
        'This project was born out of a 2-week competition organized by the school in a team of 8 people (agency format). It was therefore important that people from different backgrounds could get along well together and work efficiently on a project to be created from A to Z, with the problematic: "A solution to a near-disability". The team was made up of 4 UX-UI students, 1 developer and 3 marketing & communication students.',
      approach: [
        'Mutual support and communication enabled us to be very efficient on this project. It required a lot of thought, and many UX and UI steps done quickly to meet the deadline. However, we were able to deliver a viable product with a look and feel that we particularly liked. Working in a team also enabled me to work on my ability to adapt to other digital universes, and to create a complete project within a fairly tight time constraint.'
      ],
      challenges: ['Short time', 'Complex theme', 'Teamwork', 'Lot to do'],
      skills_acquired: ['Figma', 'User Interviews', 'Team work', 'Notion'],
      skills_to_develop: ['Management', 'Short notice']
    },
    la_faille: {
      id: 6,
      slug: 'la-faille',
      name: 'La Faille',
      years: '2023',
      link: 'https://www.figma.com/file/IBH48if4Zntf4yaGFIFIfV/🥝-Design?type=design&node-id=333%3A13294&mode=design&t=S6rUMeENLAmbODc7-1',
      badge: 'Perso',
      tag: [
        {
          name: 'Short time',
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M9 2L15 2' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M12 10L12 14' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z' stroke='#2C2C2C' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"
        }
      ],
      summary: 'Logo design for a student project.',
      images: [
        '/images/projects/la-faille/la-faille-1.png',
        '/images/projects/la-faille/la-faille-2.png',
        '/images/projects/la-faille/la-faille-3.png',
        '/images/projects/la-faille/la-faille-4.jpg'
      ],
      context:
        'This project was created for the end-of-study project of a student developer at the school. His subject was a web application linked to the League of Legends game and aimed at amateur teams to facilitate their play and communication between players.',
      approach: [
        "I've chosen to represent the central element of a LoL game. The rift corresponds to the playing field (the shape of the logo). It features various elements such as arrows that come together to maintain the communication aspect. You can also see the letter F, the first letter of the app's name. This logo was a way of combining elements that I wasn't necessarily familiar with, while at the same time adding my own touch, with external elements that could be understood even by people unfamiliar with the game."
      ],
      challenges: ['Lot of Monitoring', 'Complex theme', 'Short Notice'],
      skills_acquired: ['Procreate', 'Illustrator', 'Short time'],
      skills_to_develop: ['Illustrator', 'Procreate']
    }
  }
}

export default DataProjects
