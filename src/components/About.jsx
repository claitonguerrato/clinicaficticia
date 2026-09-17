import { useReveal } from '../hooks/useReveal'

const DIFFERENTIALS = [
  'Ambiente confortável',
  'Tecnologia odontológica moderna',
  'Atendimento individualizado',
  'Protocolos de segurança',
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="clinica" className="section-pad about" ref={ref}>
      <div className="container about-inner">
        <div className="about-media reveal">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1100&auto=format&fit=crop"
            alt="Recepção moderna e sofisticada da clínica"
            loading="lazy"
          />
        </div>

        <div className="about-copy reveal" style={{ transitionDelay: '90ms' }}>
          <span className="eyebrow">A clínica</span>
          <h2>Um espaço pensado para você</h2>
          <p className="about-text">
            A Aurora Odontologia foi criada para oferecer uma experiência odontológica
            moderna, acolhedora e personalizada. Unimos ambientes cuidadosamente projetados
            a uma equipe atenta, para que cada visita seja tranquila, do início ao fim do
            seu tratamento.
          </p>

          <ul className="diff-list">
            {DIFFERENTIALS.map((d) => (
              <li key={d}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="var(--gold-soft)" />
                  <path d="M4.8 8.2l2 2 4.4-4.6" stroke="var(--navy)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {d}
              </li>
            ))}
          </ul>

          <a href="#especialistas" className="btn btn-outline">
            Conheça nossa clínica
          </a>
        </div>
      </div>

      <style>{`
        .about { background: #fff; }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-media img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
        }
        .about-copy .eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--navy);
          background: var(--aqua);
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .about-copy h2 {
          font-size: clamp(1.9rem, 3vw, 2.4rem);
          margin-bottom: 18px;
        }
        .about-text {
          color: var(--ink-60);
          font-size: 1.02rem;
          margin-bottom: 28px;
          max-width: 480px;
        }
        .diff-list {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 20px;
        }
        .diff-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
        }

        @media (max-width: 980px) {
          .about-inner { grid-template-columns: 1fr; gap: 40px; }
          .about-media img { height: 340px; }
        }
        @media (max-width: 520px) {
          .diff-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
