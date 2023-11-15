import en from './translation/en.json'
import fr from './translation/fr.json'

type Language = {
  dictionaryList : any

  languageOptions : {[key: string] : string}
}

export const translatelanguage: Language = {
  dictionaryList : {en,fr},
  languageOptions : {
    en: 'English',
    fr : 'Français',
  }
}
