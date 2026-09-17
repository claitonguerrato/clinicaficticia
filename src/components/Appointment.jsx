import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const TREATMENT_OPTIONS = [
  'Avaliação geral',
  'Implantes',
  'Ortodontia',
  'Lentes dentais',
  'Clareamento',
  'Outro',
]

const EMPTY_FORM = {
  name: '',
  whatsapp: '',
  email: '',
  treatment: '',
  message: '',
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function Appointment() {
  const ref = useReveal()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  function handleChange(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
      setErrors((er) => ({ ...er, [field]: undefined }))
    }
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Informe seu nome completo.'
    if (!form.whatsapp.trim()) next.whatsapp = 'Informe um número de WhatsApp.'
    if (!form.email.trim() || !isValidEmail(form.email)) next.email = 'Informe um e-mail válido.'
    if (!form.treatment) next.treatment = 'Selecione um tratamento de interesse.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sent')
    setForm(EMPTY_FORM)
  }

  return (
    <section id="agendamento" className="section-pad appointment" ref={ref}>
      <div className="container appointment-inner">
        <div className="appointment-copy reveal">
          <h2>Pronto para cuidar do seu sorriso?</h2>
          <p>
            Agende uma avaliação e converse com nossa equipe sobre o melhor tratamento
            para você.
          </p>
        </div>

        <form className="appointment-form reveal" onSubmit={handleSubmit} noValidate style={{ transitionDelay: '90ms' }}>
          {status === 'sent' && (
            <div className="form-success" role="status">
              Solicitação enviada! Nossa equipe entrará em contato em breve.
            </div>
          )}

          <div className="field">
            <label htmlFor="name">Nome completo</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="(11) 90000-0000"
                value={form.whatsapp}
                onChange={handleChange('whatsapp')}
                aria-invalid={Boolean(errors.whatsapp)}
              />
              {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div className="field">
            <label htmlFor="treatment">Tratamento de interesse</label>
            <select
              id="treatment"
              value={form.treatment}
              onChange={handleChange('treatment')}
              aria-invalid={Boolean(errors.treatment)}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {TREATMENT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.treatment && <span className="field-error">{errors.treatment}</span>}
          </div>

          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
            />
          </div>

          <button type="submit" className="btn btn-gold form-submit">
            Solicitar agendamento
          </button>
        </form>
      </div>

      <style>{`
        .appointment { background: var(--aqua); }
        .appointment-inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: start;
        }
        .appointment-copy h2 {
          font-size: clamp(1.9rem, 3vw, 2.5rem);
          margin-bottom: 16px;
        }
        .appointment-copy p {
          color: var(--ink-60);
          font-size: 1.05rem;
          max-width: 380px;
        }
        .appointment-form {
          background: #fff;
          border-radius: var(--radius-lg);
          padding: 38px;
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .field { display: flex; flex-direction: column; gap: 7px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        label { font-size: 0.85rem; font-weight: 700; color: var(--navy); }
        input, select, textarea {
          font-family: inherit;
          font-size: 0.96rem;
          padding: 13px 16px;
          border-radius: var(--radius-sm);
          border: 1.4px solid var(--line);
          background: var(--off-white);
          color: var(--ink);
          transition: border-color 0.2s ease;
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--navy);
          outline: none;
        }
        input[aria-invalid="true"], select[aria-invalid="true"] {
          border-color: #c0564f;
        }
        textarea { resize: vertical; }
        .field-error {
          font-size: 0.78rem;
          color: #b0463f;
          font-weight: 600;
        }
        .form-submit { margin-top: 6px; width: 100%; }
        .form-success {
          background: var(--aqua);
          color: var(--navy);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 14px 16px;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 980px) {
          .appointment-inner { grid-template-columns: 1fr; }
          .appointment-form { padding: 28px 22px; }
        }
        @media (max-width: 560px) {
          .field-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
