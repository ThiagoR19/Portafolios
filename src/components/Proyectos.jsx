import { Icon } from '../context/icon.jsx'
import { projects } from '../context/projects.js'

function Proyectos() {
  return (
    <section id="proyectos" className="projects-section section-wrap" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">PROYECTOS</p>
        <h2 id="projects-title" tabIndex={-1}>
          Ideas que se convierten
          <br />
          en <span>soluciones</span>
        </h2>
        <p>
          Cinco proyectos que se usaron para <strong>resolver necesidades reales</strong>
          en la educación, el comercio y la gestión.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div className="project-visual">
              <img src={project.screens[0].src} alt={project.screens[0].alt} loading="lazy" decoding="async" />
            </div>
            <div className="project-content">
              <p className="project-field">{project.field}</p>
              <h3>{project.title}</h3>
              {project.realWorldUse && (
                <p className="project-real-world">En uso actualmente</p>
              )}
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="small-button dark" href={`#proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.title}`}>
                <Icon name="link" size={16} light />
                Ver proyecto
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
