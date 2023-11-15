import { useContext } from 'react'
import { translatelanguage } from './language'
import { LanguageContext } from './LanguageProvider'

export default function LanguageSelector () {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    userLanguageChange(e.target.value)
  return (
    <select className='languageSelect' value={userLanguage} onChange={handleLanguageChange}>
      {Object.entries(translatelanguage.languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  )
}
