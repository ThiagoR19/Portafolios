import { useState } from 'react'
import { Icon } from '../context/icon.jsx'

function ProyectoDetalle({ project }) {
  const [screenIndex, setScreenIndex] = useState(0)
  const screen = project.screens[screenIndex]

  return (
    <article className="project-detail section-wrap" aria-labelledby="project-title">
      <a className="project-back" href="#proyectos">
        <Icon name="downArrow" size={16} />
        Volver a proyectos
      </a>

      <div className="project-detail-hero">
        <header className="project-detail-heading">
          <p className="eyebrow">{project.field}</p>
          <h1 id="project-title" tabIndex={-1}>{project.title}</h1>
          {project.realWorldUse && <p className="project-real-world project-real-world-detail">{project.realWorldUse}</p>}
          <p className="project-detail-lede">{project.description}</p>
          {project.url && (
            <a className="small-button dark project-live-link" href={project.url} target="_blank" rel="noreferrer">
              <Icon name="link" size={16} light />
              Visitar sitio
            </a>
          )}
          {project.team !== false && (
            <p className="project-team">
              <Icon name="team" size={18} />
              Desarrollado en equipo
            </p>
          )}
          <div className="tags project-stack">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </header>

        <section className="project-gallery" aria-label="Capturas del proyecto">
          <figure>
            <div className="project-gallery-stage">
              <img src={screen.src} alt={screen.alt} />
            </div>
            <figcaption>
              <span aria-live="polite">{screen.label}</span>
              <a href={screen.src} target="_blank" rel="noreferrer" aria-label="Abrir captura en una pestaña nueva">
                Abrir captura
              </a>
            </figcaption>
          </figure>
          <div className="project-gallery-controls" role="group" aria-label="Elegir captura">
            {project.screens.map(({ label }, index) => (
              <button key={label} type="button" aria-pressed={index === screenIndex} onClick={() => setScreenIndex(index)}>
                {label}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="project-story">
        <section>
          <h2>El desafío</h2>
          <p>{project.challenge}</p>
        </section>
        <section>
          <h2>La solución</h2>
          <p>{project.solution}</p>
        </section>
      </div>

      <section className="project-features">
        <h2>Funciones destacadas</h2>
        <ul>
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>
    </article>
  )
}

export default ProyectoDetalle
