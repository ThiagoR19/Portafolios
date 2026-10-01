import { useState } from 'react'
import { Icon } from '../context/icon.jsx'
import { projects } from '../context/projects.js'

function Proyectos() {
  const [filter, setFilter] = useState('Todos')
  const visibleProjects = filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="proyectos" className="projects-section section-wrap">
      <div className="section-heading">
        <p className="eyebrow">PROYECTOS</p>
        <h2>
          Ideas que se convierten
          <br />
          en <span>soluciones</span>
        </h2>
        <p>
          Una selección de proyectos en los que trabajé, aplicando mis
          conocimientos de desarrollo web, diseño y resolución de problemas
          reales.
        </p>
      </div>
      <div className="filters" role="group" aria-label="Filtrar proyectos">
        {['Todos', 'Solo', 'En equipo'].map((option) => (
          <button
            key={option}
            type="button"
            className={filter === option ? 'active' : ''}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className={`project-visual ${project.tone}`}>
              <Icon name="code" size={42} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="small-button dark" href="#contacto">
                  <Icon name="link" size={16} light />
                  Ver proyecto
                </a>
                <a className="small-button" href="https://github.com/ThiagoR19" target="_blank" rel="noreferrer">
                  <Icon name="github" size={17} />Código</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section >
  )
}

export default Proyectos
