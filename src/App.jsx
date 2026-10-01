import Inicio from './components/Inicio.jsx'
import SobreMi from './components/SobreMi.jsx'
import Proyectos from './components/Proyectos.jsx'
import Contacto from './components/Contacto.jsx'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <main>
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>

      <footer>
        <span>© 2026 Thiago Riffo</span>
        <span>Hecho con código y buenas ideas.</span>
      </footer>
    </div>
  )
}

export default App
