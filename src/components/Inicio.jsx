import { Icon } from '../context/icon.jsx'
import ushuaiaPhoto from '../assets/ushuaia.jpg'
import laptopPhoto from '../assets/laptop.webp'

function Inicio() {
  return (
    <section id="inicio" className="hero-section section-wrap">
      <div className="hero-copy">
        <p className="eyebrow">DESARROLLADOR WEB</p>
        <h1>
          Hola, soy <span>Thiago Riffo</span>
        </h1>
        <p className="hero-lede">
          Desarrollo soluciones web modernas y funcionales. Me apasiona crear
          proyectos que generan un impacto real, combinando diseño, tecnología y
          buenas ideas.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#proyectos">
            <Icon name="code" size={20} light />
            Ver mis proyectos
          </a>
          <a className="button button-outline" href="#sobre-mi">
            Sobre mí
          </a>
        </div>

        <div className="scroll-cue">
          <Icon name="mouse" size={22} />
          <span>Scroll para explorar</span>
          <span className="scroll-arrow">
            <Icon name="downArrow" size={16} />
          </span>
        </div>

        <div className="social-row" aria-label="Redes sociales">
          <a
            href="https://github.com/ThiagoR19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" />
          </a>
          <a
            href="https://linkedin.com/in/thiagoriffo"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" />
          </a>
          <a href="mailto:rifftthiago19@gmail.com" aria-label="Email">
            <Icon name="mail" />
          </a>
        </div>
      </div>

      <div className="hero-orbit orbit-left-top">
        <img src={ushuaiaPhoto} alt="Paisaje de Ushuaia" />
      </div>
      <div className="hero-orbit orbit-right">
        <img src={laptopPhoto} alt="Laptop con código" />
      </div>

      <div className="hero-disc disc-left">
        <span>REACT</span>
        <span>NODE.JS</span>
        <span>JAVASCRIPT</span>
        <span>HTML &amp; CSS</span>
        <span>SQL</span>
        <span>Y MÁS</span>
      </div>
      <div className="hero-disc disc-right">
        <Icon name="code" size={46} light />
        <p>
          “Cada proyecto
          <br />
          es una oportunidad
          <br />
          para aprender algo nuevo.”
        </p>
      </div>
      <div className="hero-disc disc-quote">
        “Disciplina hoy,
        <br />
        resultados mañana”
      </div>
      <div className="hero-disc disc-location">
        <Icon name="location" size={16} light />
        <small>BUENOS AIRES, ARGENTINA</small>
        <hr />
        <p>
          Programando desde Argentina,
          <br />
          para todo el mundo.
        </p>
      </div>

      <span className="float-dot dot-one" />
      <span className="float-dot dot-two" />
      <span className="float-dot dot-three" />
      <span className="float-dot dot-four" />
    </section>
  )
}

export default Inicio
