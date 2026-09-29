import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'

import { Icon } from './context/icon'

import './App.css'


function App() {
  return <div className="site-shell">
    <header className="site-header"><nav aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a className="header-cta" href="#contacto">Hablemos <Icon name="talk" size={11} light /></a></nav></header>
    <main>
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </main>
    <footer><span>© 2026 Thiago Riffo</span><span>Hecho con código y buenas ideas.</span></footer>
  </div>
}

export default App
