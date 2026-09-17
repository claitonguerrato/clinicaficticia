const TRUST_ITEMS = [
  'Atendimento humanizado',
  'Tecnologia moderna',
  'Profissionais especializados',
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Odontologia com propósito</span>
          <h1>
            Seu sorriso,
            <br />
            nossa dedicação
          </h1>
          <p className="hero-text">
            Odontologia moderna, atendimento humanizado e tratamentos personalizados
            para cuidar do seu sorriso em cada etapa.
          </p>
          <div className="hero-actions">
            <a href="#agendamento" className="btn btn-primary">
              Agendar avaliação
            </a>
            <a href="#clinica" className="btn btn-outline">
              Conheça a clínica
            </a>
          </div>
          <ul className="trust-list">
            {TRUST_ITEMS.map((item) => (
              <li key={item}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="var(--aqua)" />
                  <path d="M4.8 8.2l2 2 4.4-4.6" stroke="var(--navy)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
            alt="Paciente sorrindo em consultório odontológico moderno"
            loading="eager"
          />
          <div className="hero-card">
            <strong>10+ anos</strong>
            <span>de experiência dedicados ao seu sorriso</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 168px 0 100px;
          background: linear-gradient(180deg, var(--aqua) 0%, rgba(220,238,238,0) 55%);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--navy);
          background: var(--gold-soft);
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 22px;
        }
        .hero h1 {
          font-size: clamp(2.6rem, 5vw, 3.9rem);
          line-height: 1.08;
          margin-bottom: 22px;
        }
        .hero-text {
          font-size: 1.12rem;
          color: var(--ink-60);
          max-width: 480px;
          margin-bottom: 34px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .trust-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 22px 28px;
        }
        .trust-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ink);
        }
        .hero-media {
          position: relative;
        }
        .hero-media img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-soft);
        }
        .hero-card {
          position: absolute;
          left: -28px;
          bottom: 34px;
          background: var(--navy);
          color: var(--off-white);
          padding: 22px 26px;
          border-radius: var(--radius-md);
          box-shadow: 0 18px 34px rgba(9,43,58,0.3);
          max-width: 220px;
        }
        .hero-card strong {
          display: block;
          font-family: 'Fraunces', serif;
          font-size: 1.5rem;
          color: var(--gold);
          margin-bottom: 4px;
        }
        .hero-card span { font-size: 0.85rem; color: rgba(248,247,242,0.82); }

        @media (max-width: 980px) {
          .hero { padding: 132px 0 72px; }
          .hero-inner { grid-template-columns: 1fr; gap: 44px; }
          .hero-media img { height: 400px; }
          .hero-card { left: 16px; bottom: -24px; }
        }
        @media (max-width: 520px) {
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-actions .btn { width: 100%; }
        }
      `}</style>
    </section>
  )
}
