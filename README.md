# Portfolio — Vinicius Meier Trevisan

Portfólio pessoal construído com Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion e next-intl.

![Next JS](https://img.shields.io/badge/Next-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## Estrutura

- **Hero** — nome, posicionamento, métricas de impacto e CTAs (CV, GitHub, LinkedIn).
- **Trabalhos** — 4 estudos de caso (Vanguarda, WOW Lavacar, Alyra, Kybernus) com problema, stack e evidência de engenharia, mais 6 projetos secundários.
- **Experiência** — WOW Lavacar, Vivo e Nex Solutions.
- **Stack** — grupos de tecnologias usadas em produção.
- **Sobre** — trajetória, princípios de trabalho e fatos rápidos.
- **Contato** — email com copiar-para-área-de-transferência e canais diretos.

Conteúdo em português e inglês (`messages/pt.json` e `messages/en.json`). Estrutura dos projetos, stack e experiência em `src/data/site.ts`.

## Rodando

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm start
```

## Deploy

Deploy na Vercel a partir da branch `main`. `src/app/robots.ts` e `src/app/sitemap.ts` são gerados no build; a URL canônica fica em `metadataBase` no layout do locale.

## Acessibilidade e performance

- Lighthouse (produção, mobile): 94 performance, 100 acessibilidade, 100 boas práticas, 100 SEO.
- Contraste mínimo AA em todo o texto, foco visível, navegação por teclado e `prefers-reduced-motion` respeitado.

## Contato

- LinkedIn: [Vinicius Meier Trevisan](https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/)
- Email: vinimtrevisan@gmail.com
- GitHub: [@ViniMTrevisan](https://github.com/ViniMTrevisan)

## Licença

MIT — veja [LICENSE](LICENSE).
