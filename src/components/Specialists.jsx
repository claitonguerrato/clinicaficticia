import { useReveal } from '../hooks/useReveal'

const TEAM = [
  {
    name: 'Dra. Mariana Almeida',
    role: 'Implantodontia',
    text: 'Dedicada a reabilitações orais seguras e naturais, com foco no conforto do paciente.',
    photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Dr. Rafael Martins',
    role: 'Ortodontia',
    text: 'Acompanha cada etapa do alinhamento dentário com atenção a detalhes e bem-estar.',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Dra. Camila Torres',
    role: 'Odontologia Estética',
    text: 'Une técnica e sensibilidade estética para sorrisos harmônicos e personalizados.',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop',
  },
]

const STATS = [
  { value: '4,9/5', label: 'Avaliação dos pacientes' },
  { value: '+2.500', label: 'Pacientes atendidos' },
  { value: '10+', label: 'Anos de experiência' },
]

export default function Specialists() {
  const ref = useReveal()

  return (
    <section id="especialistas" className="section-pad specialists" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <h2>Especialistas que cuidam de você</h2>
          <p>
            Uma equipe multidisciplinar preparada para oferecer atendimento personalizado
            em diferentes áreas da odontologia.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <article className="team-card reveal" key={m.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="team-photo">
                <img src={m.photo} alt={m.name} loading="lazy" />
              </div>
              <h3>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <p>{m.text}</p>
            </article>
          ))}
        </div>

        <div className="stats-bar reveal">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .specialists { background: #fff; }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 64px;
        }
        .team-card {
          text-align: center;
        }
        .team-photo {
          width: 100%;
          aspect-ratio: 4 / 4.4;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: var(--shadow-card);
        }
        .team-photo img { width: 100%; height: 100%; object-fit: cover; }
        .team-card h3 { font-size: 1.15rem; margin-bottom: 4px; }
        .team-role {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy);
          background: var(--gold-soft);
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .team-card p {
          color: var(--ink-60);
          font-size: 0.92rem;
          max-width: 300px;
          margin: 0 auto;
        }
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: var(--navy);
          border-radius: var(--radius-lg);
          padding: 42px 20px;
        }
        .stat {
          text-align: center;
          border-right: 1px solid rgba(248,247,242,0.15);
        }
        .stat:last-child { border-right: none; }
        .stat strong {
          display: block;
          font-family: 'Fraunces', serif;
          font-size: 2rem;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .stat span {
          font-size: 0.85rem;
          color: rgba(248,247,242,0.78);
        }

        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr; max-width: 380px; margin-left: auto; margin-right: auto; margin-bottom: 48px; }
        }
        @media (max-width: 620px) {
          .stats-bar { grid-template-columns: 1fr; gap: 24px; }
          .stat { border-right: none; border-bottom: 1px solid rgba(248,247,242,0.15); padding-bottom: 20px; }
          .stat:last-child { border-bottom: none; padding-bottom: 0; }
        }
      `}</style>
    </section>
  )
}
