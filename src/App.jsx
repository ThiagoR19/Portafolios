import Inicio from './components/Inicio.jsx'
import SobreMi from './components/SobreMi.jsx'
import Proyectos from './components/Proyectos.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

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
      <Footer />
    </div>
  )
}

export default App
