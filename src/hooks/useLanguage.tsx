import { useContext } from 'react'
import { LanguageContext } from '../languages/LanguageProvider'

const useLanguageContext = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw Error('useLanguageContext must be used inside LanguageProvider')
  }
  return context
}

export default useLanguageContext
