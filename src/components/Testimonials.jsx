import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    text: 'Fui muito bem atendida desde a primeira consulta. Toda a equipe foi atenciosa e explicou cada etapa do tratamento.',
    name: 'Mariana S.',
  },
  {
    text: 'Ambiente muito agradável e organizado. Me senti confortável durante todo o acompanhamento ortodôntico.',
    name: 'Eduardo L.',
  },
  {
    text: 'Gostei bastante da clareza nas explicações e da atenção da equipe em cada retorno. Recomendo a experiência.',
    name: 'Beatriz A.',
  },
]

function Stars() {
  return (
    <div className="stars" aria-label="Avaliação 5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="var(--gold)" aria-hidden="true">
          <path d="M10 1.6l2.5 5.3 5.7.7-4.2 4 1.1 5.8L10 14.7l-5.1 2.7 1.1-5.8-4.2-4 5.7-.7z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section id="depoimentos" className="section-pad testimonials" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <h2>O que nossos pacientes dizem</h2>
        </div>

        <div className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <blockquote className="test-card reveal" key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <Stars />
              <p>&ldquo;{t.text}&rdquo;</p>
              <cite>{t.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>

      <style>{`
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .test-card {
          margin: 0;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 30px;
          box-shadow: var(--shadow-card);
        }
        .stars { display: flex; gap: 3px; margin-bottom: 16px; }
        .test-card p {
          font-size: 0.98rem;
          color: var(--ink);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .test-card cite {
          font-style: normal;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--navy);
        }

        @media (max-width: 900px) {
          .test-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
