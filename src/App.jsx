import { useState } from 'react'
import bulbIcon from './assets/bulb_icon.svg'
import chessIcon from './assets/chess_icon.svg'
import devIcon from './assets/dev_icon.svg'
import gitIcon from './assets/git_icon.svg'
import linkIcon from './assets/link_icon.svg'
import linkedinIcon from './assets/linkedin_icon.svg'
import mailIcon from './assets/mail_icon.svg'
import mapsIcon from './assets/maps_icon.svg'
import messageIcon from './assets/message_icon.svg'
import mouseIcon from './assets/mouse_icon.svg'
import peopleIcon from './assets/people_icon.svg'
import rubikIcon from './assets/rubik_icon.svg'
import sendIcon from './assets/send_icon.svg'
import skateIcon from './assets/skate_icon.svg'
import statisticsIcon from './assets/statistics_icon.svg'
import tableTenisIcon from './assets/tableTenis_icon.svg'
import talkIcon from './assets/talk_icon.svg'
import trainIcon from './assets/train_icon.svg'
import downArrowIcon from './assets/downArrow_icon.svg'
import thiagoPhoto from './assets/thiago.jpeg'
import ushuaiaPhoto from './assets/ushuaia.jpg'
import laptopPhoto from './assets/laptop.webp'
import './App.css'

const iconAssets = {
  bulb: bulbIcon,
  chess: chessIcon,
  code: devIcon,
  github: gitIcon,
  link: linkIcon,
  linkedin: linkedinIcon,
  mail: mailIcon,
  location: mapsIcon,
  chat: messageIcon,
  mouse: mouseIcon,
  team: peopleIcon,
  rubik: rubikIcon,
  send: sendIcon,
  skate: skateIcon,
  chart: statisticsIcon,
  paddle: tableTenisIcon,
  talk: talkIcon,
  train: trainIcon,
  downArrow: downArrowIcon,
}

const Icon = ({ name, size = 24, light = false }) => {
  const className = `asset-icon${light ? ' asset-icon-light' : ''}`
  return <img className={className} src={iconAssets[name]} alt="" aria-hidden="true" style={{ width: size, height: size }} />
}

const strengths = [['code', 'Desarrollo web'], ['bulb', 'Aprendizaje continuo'], ['team', 'Trabajo en equipo'], ['chart', 'Orientado a resultados']]
const hobbies = [['skate', 'Skate'], ['rubik', 'Rubik'], ['chess', 'Ajedrez'], ['train', 'Calistenia'], ['paddle', 'Tenis de mesa']]
const projects = [
  { title: 'Gestora de votos', category: 'Solo', tone: 'navy', description: 'Plataforma web para la votación de proyectos escolares, con sistema de usuarios, rankings, estadísticas y panel de administración.', tags: ['PHP', 'MySQL', 'JavaScript', 'HTML y CSS'] },
  { title: 'Gestora de votos', category: 'En equipo', tone: 'ice', description: 'Plataforma web para la votación de proyectos escolares, con sistema de usuarios, rankings, estadísticas y panel de administración.', tags: ['PHP', 'MySQL', 'JavaScript', 'HTML y CSS'] },
  { title: 'Gestora de votos', category: 'Solo', tone: 'blue', description: 'Plataforma web para la votación de proyectos escolares, con sistema de usuarios, rankings, estadísticas y panel de administración.', tags: ['PHP', 'MySQL', 'JavaScript', 'HTML y CSS'] },
  { title: 'Gestora de votos', category: 'En equipo', tone: 'navy', description: 'Plataforma web para la votación de proyectos escolares, con sistema de usuarios, rankings, estadísticas y panel de administración.', tags: ['PHP', 'MySQL', 'JavaScript', 'HTML y CSS'] },
]

function App() {
  const [filter, setFilter] = useState('Todos')
  const [sent, setSent] = useState(false)
  const visibleProjects = filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)
  const submitForm = (event) => { event.preventDefault(); setSent(true) }

  return <div className="site-shell">
    <header className="site-header"><nav aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a className="header-cta" href="#contacto">Hablemos <Icon name="talk" size={11} light /></a></nav></header>
    <main>
      <section id="inicio" className="hero-section section-wrap"><div className="hero-copy"><p className="eyebrow">DESARROLLADOR WEB</p><h1>Hola, soy <span>Thiago Riffo</span></h1><p className="hero-lede">Desarrollo soluciones web modernas y funcionales. Me apasiona crear proyectos que generan un impacto real, combinando diseño, tecnología y buenas ideas.</p><div className="hero-actions"><a className="button button-dark" href="#proyectos"><Icon name="code" size={20} light />Ver mis proyectos</a><a className="button button-outline" href="#sobre-mi">Sobre mí</a></div><div className="scroll-cue"><Icon name="mouse" size={22} /><span>Scroll para explorar</span><span className="scroll-arrow"><Icon name="downArrow" size={16} /></span></div><div className="social-row" aria-label="Redes sociales"><a href="https://github.com/ThiagoR19" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a href="https://linkedin.com/in/thiagoriffo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href="mailto:rifftthiago19@gmail.com" aria-label="Email"><Icon name="mail" /></a></div></div><div className="hero-orbit orbit-left-top"><img src={ushuaiaPhoto} alt="Paisaje de Ushuaia" /></div><div className="hero-orbit orbit-right"><img src={laptopPhoto} alt="Laptop con código" /></div><div className="hero-disc disc-left"><span>REACT</span><span>NODE.JS</span><span>JAVASCRIPT</span><span>HTML &amp; CSS</span><span>SQL</span><span>Y MÁS</span></div><div className="hero-disc disc-right"><Icon name="code" size={46} light /><p>“Cada proyecto<br />es una oportunidad<br />para aprender algo nuevo.”</p></div><div className="hero-disc disc-quote">“Disciplina hoy,<br /> resultados mañana”</div><div className="hero-disc disc-location"><Icon name="location" size={16} /><small>BUENOS AIRES, ARGENTINA</small><hr /><p>Programando desde argentina,<br />para todo el mundo.</p></div><span className="float-dot dot-one" /><span className="float-dot dot-two" /><span className="float-dot dot-three" /><span className="float-dot dot-four" /></section>
      <section id="sobre-mi" className="about-section section-wrap"><div className="about-heading"><div className="about-heading-copy"><p className="eyebrow">SOBRE MI</p><h2>Más que código,<br /><span>mejores soluciones</span></h2></div><div className="portrait-wrap"><img src={thiagoPhoto} alt="Thiago Riffo" /></div><div className="signature">Thiago<br /><span>Riffo</span></div></div><div className="about-body"><p>Soy Thiago Riffo, un desarrollador web de Argentina apasionado por la tecnología, el diseño y la creación de soluciones que resuelvan problemas reales. Disfruto aprender constantemente, enfrentar nuevos desafíos y trabajar en proyectos que generen un impacto positivo.</p><p>Actualmente me encuentro finalizando el secundario técnico, mientras desarrollo proyectos personales y profesionales que me permiten seguir creciendo en el mundo del desarrollo web y la programación.</p><div className="strengths">{strengths.map(([icon, label]) => <div className="strength" key={label}><span className="icon-circle"><Icon name={icon} size={28} /></span><span>{label}</span></div>)}</div></div><div className="about-cards"><div className="hobby-card"><h3><Icon name="bulb" size={26} /> En mi tiempo libre</h3><div className="hobbies">{hobbies.map(([icon, label]) => <div key={label}><Icon name={icon} size={30} /><span>{label}</span></div>)}</div><hr /><p>Todo esto también me enseña disciplina, creatividad y a pensar diferente.</p></div><div className="goal-card"><p className="card-label">OBJETIVO</p><hr /><p>Seguir creciendo como <span>desarrollador</span> y formar parte de proyectos que generen un <span>impacto real.</span></p></div></div></section>
      <section id="proyectos" className="projects-section section-wrap"><div className="section-heading"><p className="eyebrow">PROYECTOS</p><h2>Ideas que se convierten<br /> en <span>soluciones</span></h2><p>Una selección de proyectos en los que trabajé, aplicando mis conocimientos de desarrollo web, diseño y resolución de problemas reales.</p></div><div className="filters" role="group" aria-label="Filtrar proyectos">{['Todos', 'Solo', 'En equipo'].map((option) => <button key={option} className={filter === option ? 'active' : ''} onClick={() => setFilter(option)}>{option}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className="project-card" key={`${project.category}-${index}`}><div className={`project-visual ${project.tone}`}><Icon name="code" size={42} /></div><div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a className="small-button dark" href="#contacto"><Icon name="link" size={16} />Ver proyecto</a><a className="small-button" href="https://github.com/ThiagoR19" target="_blank" rel="noreferrer"><Icon name="github" size={17} />Código</a></div></div></article>)}</div></section>
      <section id="contacto" className="contact-section section-wrap"><div className="contact-intro"><p className="eyebrow">CONTACTO</p><h2>Hablemos de<br /><span>tu próxima idea</span></h2><p>¿Tenés un proyecto en mente, una propuesta o simplemente querés charlar? Me encantaría escuchar sobre tu idea y ver cómo puedo ayudarte.</p><div className="contact-photo"><img src={ushuaiaPhoto} alt="Ushuaia, Argentina" /></div><div className="place-label">Ushuaia<br /><span>Argentina</span></div></div><div className="contact-right"><form className="contact-form" onSubmit={submitForm}><div className="form-title"><span className="icon-circle"><Icon name="chat" /></span><div><h3>Enviame un mensaje <Icon name="talk" size={11} light /></h3><p>Completá el formulario y te voy a responder lo antes posible</p></div></div><label>Nombre<input required placeholder="Tu nombre" /></label><label>Email<input required type="email" placeholder="tu@email.com" /></label><label>Asunto<input required placeholder="Seleccioná un asunto" /></label><label>Mensaje<textarea required maxLength="500" placeholder="Contame sobre tu idea..."></textarea><span className="counter">0/500</span></label><button className="button button-dark" type="submit"><Icon name="send" size={20} />{sent ? 'Mensaje enviado' : 'Enviar mensaje'}</button></form><div className="contact-links"><a href="mailto:rifftthiago19@gmail.com"><span className="icon-circle"><Icon name="mail" /></span><span><b>Email</b>rifftthiago19@gmail.com</span></a><a href="https://linkedin.com/in/thiagoriffo" target="_blank" rel="noreferrer"><span className="icon-circle"><Icon name="linkedin" /></span><span><b>LinkedIn</b>linkedin.com/thiagoriffo</span></a><a href="https://github.com/ThiagoR19" target="_blank" rel="noreferrer"><span className="icon-circle"><Icon name="github" /></span><span><b>GitHub</b>github.com/ThiagoR19</span></a></div></div></section>
    </main><footer><span>© 2026 Thiago Riffo</span><span>Hecho con código y buenas ideas.</span></footer>
  </div>
}

export default App
