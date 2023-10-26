import { useEffect } from 'react'

function NotFound () {
  useEffect(() => {
    document.title = 'Page non trouvée | Lucie Mouilé'
  })

  return <h1>NotFound</h1>
}

export default NotFound
