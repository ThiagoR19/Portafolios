import { useLayoutEffect, useSyncExternalStore } from 'react'
import Inicio from './components/Inicio.jsx'
import SobreMi from './components/SobreMi.jsx'
import Proyectos from './components/Proyectos.jsx'
import ProyectoDetalle from './components/ProyectoDetalle.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import { projects } from './context/projects.js'

import './App.css'

const portfolioTitle = document.title

function subscribeToHash(onChange) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getHash() {
  return window.location.hash
}

function App() {
  const hash = useSyncExternalStore(subscribeToHash, getHash)
  const project = projects.find(({ slug }) => hash === `#proyectos/${slug}`)

  useLayoutEffect(() => {
    document.title = project ? `${project.title} · Thiago Riffo` : portfolioTitle

    if (project) {
      document.getElementById('project-title').focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else if (getHash() === '#proyectos') {
      document.getElementById('projects-title').focus({ preventScroll: true })
      document.getElementById('proyectos').scrollIntoView({ behavior: 'instant' })
    }
  }, [project])

  return (
    <div className="site-shell">
      <main>
        {project ? (
          <ProyectoDetalle key={project.slug} project={project} />
        ) : (
          <>
            <Inicio />
            <SobreMi />
            <Proyectos />
            <Contacto />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
