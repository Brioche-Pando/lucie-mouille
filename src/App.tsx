import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/projects/Projects'
import SingleProject from './pages/single-project/SingleProject'

import About from './pages/about/About'

import Layout from './layouts/layout/Layout'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/projects/:slug',
          element: <SingleProject />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
