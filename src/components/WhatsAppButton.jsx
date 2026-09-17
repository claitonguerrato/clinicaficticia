const PHONE = '5511900000000'
const MESSAGE = 'Olá! Gostaria de agendar uma avaliação na Aurora Odontologia.'

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Conversar no WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 1.8a8.2 8.2 0 016.9 12.6l-.2.3.9 3.2-3.3-.9-.3.2a8.2 8.2 0 11-4-15.4zm-3.3 4.3c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8 2.1.9 2.5.7 3 .7.4 0 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3-.3-.2-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4z" />
      </svg>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: 58px; height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 12px 28px rgba(0,0,0,0.22);
          z-index: 90;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .whatsapp-fab:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 16px 34px rgba(0,0,0,0.28);
        }
        @media (max-width: 560px) {
          .whatsapp-fab { right: 16px; bottom: 16px; width: 52px; height: 52px; }
        }
      `}</style>
    </a>
  )
}
