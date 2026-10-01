import { hobbies } from '../context/hobbies.js'
import { Icon } from '../context/icon.jsx'
import { strengths } from '../context/strengths.js'
import thiagoPhoto from '../assets/thiago.jpeg'

function SobreMi() {
  return (
    <section id="sobre-mi" className="about-section section-wrap">
      <div className="about-heading">
        <div className="about-heading-copy">
          <p className="eyebrow">SOBRE MÍ</p>
          <h2>
            Más que código,
            <br />
            <span>mejores soluciones</span>
          </h2>
          <div className="about-body">
            <p>
              Soy Thiago Riffo, un desarrollador web de Argentina apasionado por la
              tecnología, el diseño y la creación de soluciones que resuelvan problemas
              reales. Disfruto aprender constantemente, enfrentar nuevos desafíos y
              trabajar en proyectos que generen un impacto positivo.
            </p>
            <p>
              Actualmente me encuentro finalizando el secundario técnico, mientras
              desarrollo proyectos personales y profesionales que me permiten seguir
              creciendo en el mundo del desarrollo web y la programación.
            </p>

            <div className="strengths">
              {strengths.map(([icon, label]) => (
                <div className="strength" key={label}>
                  <span className="icon-circle">
                    <Icon name={icon} size={28} />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="portrait-wrap">
          <img src={thiagoPhoto} alt="Thiago Riffo" />
        </div>
        <div className="signature">
          Thiago
          <br />
          <span>Riffo</span>
        </div>
      </div>

      <div className="about-cards">
        <div className="hobby-card">
          <h3>
            <Icon name="bulb" size={26} /> En mi tiempo libre
          </h3>
          <div className="hobbies">
            {hobbies.map(([icon, label]) => (
              <div key={label}>
                <Icon name={icon} size={30} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <hr />
          <p>
            Todo esto también me enseña disciplina, creatividad y a pensar
            diferente.
          </p>
        </div>

        <div className="goal-card">
          <p className="card-label">OBJETIVO</p>
          <hr />
          <p>
            Seguir creciendo como <span>desarrollador</span> y formar parte de
            proyectos que generen un <span>impacto real.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
