import { useState } from 'react'
import { Icon } from '../context/icon.jsx'
import ushuaiaPhoto from '../assets/ushuaia.jpg'

const MAX_MESSAGE_LENGTH = 500
const CONTACT_EMAIL = 'riffothiago19@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/thiago-riffo-835a0223b/'
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`

function Contacto() {
  const [message, setMessage] = useState('')

  const submitForm = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `Nombre: ${formData.get('name')}\r\nEmail: ${formData.get('email')}\r\n\r\n${formData.get('message')}`,
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="contact-section section-wrap">
      <div className="contact-intro">
        <p className="eyebrow">CONTACTO</p>
        <h2>
          Hablemos de
          <br />
          <span>tu próxima idea</span>
        </h2>
        <p>
          ¿Tenés un proyecto en mente, una propuesta o simplemente querés charlar?
          Me encantaría escuchar sobre tu idea y ver cómo puedo ayudarte.
        </p>
        <div className="contact-photo">
          <img src={ushuaiaPhoto} alt="Ushuaia, Argentina" />
        </div>
        <div className="place-label">
          Ushuaia
          <br />
          <span>Argentina</span>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={submitForm}>
          <div className="form-title">
            <span className="icon-circle">
              <Icon name="chat" />
            </span>
            <div>
              <h3>
                Enviame un mensaje <Icon name="talk" size={11} />
              </h3>
              <p>
                Completá el formulario para abrir tu aplicación de correo con el
                mensaje preparado y enviarlo desde allí.
              </p>
            </div>
          </div>

          <label>
            Nombre
            <input
              required
              name="name"
              autoComplete="name"
              placeholder="Tu nombre"
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="tu@email.com"
            />
          </label>
          <label>
            Asunto
            <input required name="subject" placeholder="Escribí un asunto" />
          </label>
          <label>
            Mensaje
            <textarea
              required
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder="Contame sobre tu idea..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-describedby="message-counter"
            />
            <span id="message-counter" className="counter">
              {message.length}/{MAX_MESSAGE_LENGTH}
            </span>
          </label>

          <button className="button button-dark" type="submit">
            <Icon name="send" size={20} light />
            Abrir correo
          </button>
        </form>

        <div className="contact-links">
          <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">
            <span className="icon-circle">
              <Icon name="mail" />
            </span>
            <span>
              <b>Email</b>
              {CONTACT_EMAIL}
            </span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-circle">
              <Icon name="linkedin" />
            </span>
            <span>
              <b>LinkedIn</b>
              linkedin.com/in/thiago-riffo-835a0223b
            </span>
          </a>
          <a
            href="https://github.com/ThiagoR19"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-circle">
              <Icon name="github" />
            </span>
            <span>
              <b>GitHub</b>
              github.com/ThiagoR19
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto
