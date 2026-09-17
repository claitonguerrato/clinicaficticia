import { useReveal } from '../hooks/useReveal'

const TREATMENTS = [
  {
    title: 'Implantes Dentários',
    text: 'Segurança, funcionalidade e naturalidade para transformar seu sorriso.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    icon: (
      <path d="M12 3c-2.2 0-3 1.4-3 3 0 1.3.6 2 .6 3.2 0 1.6-1.1 2.9-1.1 5.4 0 2.6.9 5.4 2 5.4.7 0 .9-1 1.5-1s.8 1 1.5 1c1.1 0 2-2.8 2-5.4 0-2.5-1.1-3.8-1.1-5.4 0-1.2.6-1.9.6-3.2 0-1.6-.8-3-3-3z" />
    ),
  },
  {
    title: 'Ortodontia',
    text: 'Tratamentos modernos para alinhar seus dentes e melhorar sua saúde bucal.',
    image: 'https://images.unsplash.com/photo-1601590009855-16b0e0c9ba31?q=80&w=800&auto=format&fit=crop',
    icon: (
      <path d="M4 9c3-3 13-3 16 0M6 12c2.5-1.8 9.5-1.8 12 0M8 15c1.8-1 6.2-1 8 0" />
    ),
  },
  {
    title: 'Lentes Dentais',
    text: 'Estética e harmonia para um sorriso mais confiante.',
    image: 'https://images.unsplash.com/photo-1541604193435-422b5a72ba97?q=80&w=800&auto=format&fit=crop',
    icon: (
      <path d="M6 8c0-2.2 2.7-4 6-4s6 1.8 6 4c0 3.2-1.6 9-3.2 11-.9 1.1-1.8 1-2.8 1s-1.9.1-2.8-1C7.6 17 6 11.2 6 8z" />
    ),
  },
  {
    title: 'Clareamento Dental',
    text: 'Mais luminosidade e um sorriso renovado.',
    image: 'https://images.unsplash.com/photo-1581585504071-b7fce9403751?q=80&w=800&auto=format&fit=crop',
    icon: (
      <path d="M12 3v2.2M12 18.8V21M4.5 12h2.2M17.3 12h2.2M6.7 6.7l1.5 1.5M15.8 15.8l1.5 1.5M17.3 6.7l-1.5 1.5M8.2 15.8l-1.5 1.5M12 8.4a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2z" />
    ),
  },
]

export default function Treatments() {
  const ref = useReveal()

  return (
    <section id="tratamentos" className="section-pad treatments" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <h2>Tratamentos para cuidar do seu sorriso</h2>
          <p>Conheça nossas principais especialidades e encontre o cuidado ideal para você.</p>
        </div>

        <div className="treat-grid">
          {TREATMENTS.map((t, i) => (
            <article className="treat-card reveal" key={t.title} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="treat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  {t.icon}
                </svg>
              </div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <span className="treat-line" />
              <div className="treat-image">
                <img src={t.image} alt={t.title} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .treat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        .treat-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 32px 26px 0;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .treat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 40px rgba(9,43,58,0.13);
        }
        .treat-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: var(--aqua);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .treat-card h3 {
          font-size: 1.18rem;
          margin-bottom: 10px;
        }
        .treat-card p {
          color: var(--ink-60);
          font-size: 0.93rem;
          margin-bottom: 18px;
        }
        .treat-line {
          display: block;
          width: 36px;
          height: 3px;
          border-radius: 2px;
          background: var(--gold);
          margin-bottom: 20px;
        }
        .treat-image {
          margin: 0 -26px;
          height: 150px;
        }
        .treat-image img {
          width: 100%; height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1080px) {
          .treat-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 620px) {
          .treat-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
