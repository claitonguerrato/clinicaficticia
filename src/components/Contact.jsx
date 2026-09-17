import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contato" className="section-pad contact" ref={ref}>
      <div className="container contact-inner">
        <div className="contact-info reveal">
          <span className="eyebrow">Contato</span>
          <h2>Entre em contato</h2>

          <dl>
            <div>
              <dt>Endereço</dt>
              <dd>
                Aurora Odontologia<br />
                Rua das Flores, 250<br />
                São Paulo - SP · CEP 00000-000
              </dd>
            </div>
            <div>
              <dt>Telefone</dt>
              <dd>(11) 0000-0000</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>(11) 90000-0000</dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>contato@auroraodontologia.com</dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>
                Segunda a sexta — 08h às 18h<br />
                Sábado — 08h às 12h
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact-map reveal" style={{ transitionDelay: '90ms' }} role="img" aria-label="Mapa ilustrativo da localização da clínica">
          <svg viewBox="0 0 400 320" width="100%" height="100%" preserveAspectRatio="none">
            <rect width="400" height="320" fill="var(--aqua)" />
            <path d="M0 60 H400 M0 140 H400 M0 220 H400 M60 0 V320 M180 0 V320 M300 0 V320" stroke="rgba(9,43,58,0.12)" strokeWidth="2" />
            <circle cx="200" cy="150" r="10" fill="var(--navy)" />
            <circle cx="200" cy="150" r="22" fill="var(--navy)" opacity="0.15" />
          </svg>
          <span className="map-label">Rua das Flores, 250 — São Paulo, SP</span>
        </div>
      </div>

      <style>{`
        .contact { background: #fff; }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }
        .contact-info .eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--navy);
          background: var(--gold-soft);
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .contact-info h2 { margin-bottom: 30px; }
        .contact-info dl { display: flex; flex-direction: column; gap: 22px; }
        .contact-info dt {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: none;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .contact-info dd {
          margin: 0;
          font-size: 0.98rem;
          color: var(--ink-60);
        }
        .contact-map {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          min-height: 320px;
        }
        .map-label {
          position: absolute;
          left: 18px; bottom: 18px;
          background: #fff;
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy);
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
