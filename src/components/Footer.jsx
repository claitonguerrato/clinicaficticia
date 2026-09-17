const COLUMNS = [
  {
    title: 'Links rápidos',
    links: [
      { href: '#inicio', label: 'Início' },
      { href: '#clinica', label: 'A Clínica' },
      { href: '#tratamentos', label: 'Tratamentos' },
      { href: '#especialistas', label: 'Especialistas' },
      { href: '#depoimentos', label: 'Depoimentos' },
      { href: '#contato', label: 'Contato' },
    ],
  },
  {
    title: 'Tratamentos',
    links: [
      { href: '#tratamentos', label: 'Implantes' },
      { href: '#tratamentos', label: 'Ortodontia' },
      { href: '#tratamentos', label: 'Lentes Dentais' },
      { href: '#tratamentos', label: 'Clareamento' },
      { href: '#tratamentos', label: 'Estética Dental' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { href: '#', label: 'Política de Privacidade' },
      { href: '#', label: 'Termos de Uso' },
      { href: '#contato', label: 'Contato' },
    ],
  },
]

const SOCIALS = [
  {
    label: 'Instagram',
    path: 'M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.8.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.63.42 1.36.47 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.8-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.63.25-1.36.42-2.43.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.07.22-1.8.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.45 2.53c.63-.25 1.36-.42 2.43-.47C8.95 2.01 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 110-2.34 1.17 1.17 0 010 2.34z',
  },
  {
    label: 'Facebook',
    path: 'M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.28C16.3 4.2 15.32 4.1 14.2 4.1c-2.3 0-3.9 1.4-3.9 4v2.3H7.7v3h2.6V21h3.2z',
  },
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM10 9h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.53 4.78 5.83V21h-4v-5.6c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.44-2.15 2.94V21h-4z',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                d="M16 9.4c-1.6 0-2.7.8-3.5.8-.8 0-1.8-.7-3-.7-1.5 0-3 1-3.7 2.5-.9 1.9-.2 4.9.9 6.9 1 1.8 2 3.7 3.5 3.7.9 0 1.3-.6 2.3-.6s1.4.6 2.3.6c1.5 0 2.7-2.1 3.6-3.9.6-1.2.8-1.8.8-1.9 0 0-1.9-.8-1.9-3 0-1.8 1.4-2.7 1.5-2.8-.8-1.2-2.1-1.3-2.5-1.3-.9-.1-1.7.7-2.3.7z"
                fill="var(--off-white)"
              />
              <circle cx="16" cy="7.2" r="1.15" fill="var(--gold)" />
            </svg>
            <span>
              Aurora <em>Odontologia</em>
            </span>
          </div>
          <p>Odontologia moderna, cuidado humano e atenção em cada detalhe.</p>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a href="#" key={s.label} aria-label={s.label}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container">© 2026 Aurora Odontologia. Todos os direitos reservados.</div>
      </div>

      <style>{`
        .footer { background: var(--navy); color: rgba(248,247,242,0.75); padding-top: 80px; }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(248,247,242,0.12);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fraunces', serif;
          font-size: 1.2rem;
          color: var(--off-white);
          margin-bottom: 16px;
        }
        .footer-logo em { font-style: italic; color: var(--gold); }
        .footer-brand p { font-size: 0.9rem; max-width: 280px; margin-bottom: 22px; }
        .footer-socials { display: flex; gap: 12px; }
        .footer-socials a {
          width: 36px; height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(248,247,242,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(248,247,242,0.85);
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .footer-socials a:hover { background: rgba(248,247,242,0.1); border-color: var(--gold); }
        .footer-col h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--off-white);
          margin-bottom: 18px;
        }
        .footer-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .footer-col a { font-size: 0.9rem; transition: color 0.2s ease; }
        .footer-col a:hover { color: var(--gold); }
        .footer-bottom {
          padding: 22px 0;
          font-size: 0.82rem;
          text-align: center;
          color: rgba(248,247,242,0.55);
        }

        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .footer-top { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
