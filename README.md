# Aurora Odontologia — Site Institucional

Site institucional (SPA) fictício para a clínica "Aurora Odontologia", construído com React + Vite.

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Header.jsx        → menu fixo + hambúrguer mobile
    Hero.jsx           → seção inicial (headline + imagem)
    Treatments.jsx      → 4 cards de tratamentos
    About.jsx          → seção "A Clínica"
    Specialists.jsx     → equipe + métricas institucionais
    Testimonials.jsx    → depoimentos
    Appointment.jsx      → CTA + formulário de agendamento (com validação)
    Contact.jsx          → dados de contato + mapa ilustrativo
    Footer.jsx           → rodapé azul-marinho
    WhatsAppButton.jsx    → botão flutuante do WhatsApp
  hooks/
    useReveal.js         → animação discreta de entrada ao rolar (IntersectionObserver)
  App.jsx
  main.jsx
  index.css              → tokens de cor/tipografia e estilos globais
```

## Personalização rápida

- **Cores e tipografia**: editar as variáveis no topo de `src/index.css` (`:root`).
- **Textos e dados fictícios**: cada seção tem seus textos/arrays no topo do respectivo componente (ex.: `TREATMENTS`, `TEAM`, `TESTIMONIALS`).
- **Número de WhatsApp**: variável `PHONE` em `src/components/WhatsAppButton.jsx`.
- **Imagens**: atualmente usam imagens de banco de imagens (Unsplash) — troque as URLs pelos arquivos reais da clínica quando disponíveis.

## Observações

- O formulário de agendamento faz validação client-side e simula o envio (sem backend real).
- Todos os nomes, números, avaliações e depoimentos são fictícios, criados apenas para fins de demonstração.
