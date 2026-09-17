import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#clinica', label: 'A Clínica' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#especialistas', label: 'Especialistas' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#inicio" className="logo" onClick={() => setMenuOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M16 9.4c-1.6 0-2.7.8-3.5.8-.8 0-1.8-.7-3-.7-1.5 0-3 1-3.7 2.5-.9 1.9-.2 4.9.9 6.9 1 1.8 2 3.7 3.5 3.7.9 0 1.3-.6 2.3-.6s1.4.6 2.3.6c1.5 0 2.7-2.1 3.6-3.9.6-1.2.8-1.8.8-1.9 0 0-1.9-.8-1.9-3 0-1.8 1.4-2.7 1.5-2.8-.8-1.2-2.1-1.3-2.5-1.3-.9-.1-1.7.7-2.3.7z"
              fill="var(--navy)"
            />
            <circle cx="16" cy="7.2" r="1.15" fill="var(--gold)" />
          </svg>
          <span>
            Aurora <em>Odontologia</em>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#agendamento" className="btn btn-primary header-cta">
            Agendar avaliação
          </a>
          <button
            className={`burger ${menuOpen ? 'burger-open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <nav aria-label="Navegação móvel">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#agendamento" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Agendar avaliação
        </a>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(248, 247, 242, 0.7);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .header-scrolled {
          background: rgba(248, 247, 242, 0.92);
          border-bottom-color: var(--line);
          box-shadow: 0 8px 24px rgba(9,43,58,0.05);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 78px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fraunces', serif;
          font-size: 1.28rem;
          color: var(--navy);
          font-weight: 500;
          flex-shrink: 0;
        }
        .logo em { font-style: italic; color: var(--gold); }
        .nav-desktop {
          display: flex;
          gap: 34px;
        }
        .nav-desktop a {
          font-size: 0.94rem;
          font-weight: 600;
          color: var(--ink);
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .nav-desktop a:hover { color: var(--navy); }
        .nav-desktop a::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-desktop a:hover::after { transform: scaleX(1); }
        .header-actions { display: flex; align-items: center; gap: 18px; }
        .header-cta { padding: 12px 24px; font-size: 0.88rem; }
        .burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 34px; height: 34px;
        }
        .burger span {
          display: block;
          height: 2px;
          background: var(--navy);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .burger-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .burger-open span:nth-child(2) { opacity: 0; }
        .burger-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 78px; left: 0; right: 0;
          background: var(--off-white);
          border-bottom: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding: 28px 24px 32px;
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .mobile-menu-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-menu nav { display: flex; flex-direction: column; gap: 18px; }
        .mobile-menu nav a { font-size: 1.05rem; font-weight: 600; color: var(--navy); }
        .mobile-menu .btn { align-self: flex-start; }

        @media (max-width: 900px) {
          .nav-desktop { display: none; }
          .burger { display: flex; }
          .header-cta { display: none; }
          .header-inner { height: 68px; }
          .mobile-menu { top: 68px; }
        }
      `}</style>
    </header>
  )
}
