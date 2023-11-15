type ExpertiseData = {
  id: number
  name: string
  desc: string
}

type LanguageData = {
  [key: string]: {
    [key: string]: ExpertiseData
  }
}

const DataExpertises: LanguageData = {
  fr: {
    '0': {
      id: 0,
      name: 'UI & webdesign',
      desc: "Création de wireframes, maquettes & prototypage. Création de charte graphique et d'identité visuelle digitale."
    },
    '1': {
      id: 1,
      name: 'UX Design',
      desc: 'Recherche et analyse des comportements des utilisateurs. Personas, user journey, interviews utilisateurs etc... '
    },
    '2': {
      id: 2,
      name: 'Design System',
      desc: "Mise en place avec les équipes concernées d'un Design System, maintien et amélioration des composants et processus."
    },
    '3': {
      id: 3,
      name: 'UX Writing',
      desc: "Amélioration de la qualité de la communication écrite et de l'expérience utilisateur véhiculée par les mots."
    }
  },
  en: {
    '0': {
      id: 0,
      name: 'UI & webdesign',
      desc: 'Creation of wireframes, mock-ups & prototyping. Creation of graphic guidelines and digital visual identity.'
    },
    '1': {
      id: 1,
      name: 'UX Design',
      desc: 'Research and analysis of user behavior. Personas, user journey, user interviews, etc.'
    },
    '2': {
      id: 2,
      name: 'Design System',
      desc: 'Set up a Design System with the relevant teams, maintain and improve components and processes.'
    },
    '3': {
      id: 3,
      name: 'UX Writing',
      desc: 'Improving the quality of written communication and the user experience conveyed by words.'
    }
  }
}

export default DataExpertises
