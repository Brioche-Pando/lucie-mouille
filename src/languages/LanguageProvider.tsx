import { createContext, useState } from 'react'
import { translatelanguage } from './language'
export const LanguageContext = createContext<any>({
  userLanguage: 'fr',
  dictionary: translatelanguage.dictionaryList.fr,
})

export function LanguageProvider({ children }: any) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang')
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'fr')
  const dictionary = translatelanguage.dictionaryList[userLanguage]
  const userLanguageChange = (selected: any) => {
    const newLanguage = translatelanguage.languageOptions[selected]
      ? selected
      : 'fr'
    setUserLanguage(newLanguage)
    window.localStorage.setItem('rcml-lang', newLanguage)
  }
  const translate = (categorie: string, tid: string) => {
    return dictionary[categorie][tid] || tid
  }

  return (
    <LanguageContext.Provider
      value={{ userLanguage, userLanguageChange, translate }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
