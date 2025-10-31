# Portfolio - Vinicius Meier Trevisan

Um portfólio moderno e responsivo construído com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

![Next JS](https://img.shields.io/badge/Next-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## 🌟 Features

- ⚡ **Performance Otimizada**: Construído com Next.js 14 e Server Components
- 🎨 **Design Responsivo**: Interface adaptativa para todos os dispositivos
- 🌓 **Tema Escuro**: Suporte nativo ao modo escuro
- 🌐 **Internacionalização**: Suporte completo para Português e Inglês
- 🎭 **Animações Suaves**: Implementadas com Framer Motion
- 📱 **Mobile First**: Design pensado primeiro para dispositivos móveis
- ♿ **Acessibilidade**: Seguindo as melhores práticas de a11y
- 🔒 **Segurança**: Implementação segura de formulários e proteção contra ataques comuns

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com foco em performance
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [next-intl](https://next-intl-docs.vercel.app/) - Internacionalização
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll
- [Formspree](https://formspree.io/) - Gerenciamento de formulários
## 📦 Estrutura do Projeto

```
src/
├── app/                   # App Router do Next.js
│   ├── [locale]/         # Rotas dinâmicas por idioma
│   └── globals.css       # Estilos globais
├── components/           # Componentes React
├── contexts/            # Contextos React
├── i18n/               # Configuração de internacionalização
└── messages/           # Arquivos de tradução
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portfolio-react.git
```

2. Instale as dependências:
```bash
cd portfolio-react
npm install
```

3. Crie um arquivo `.env.local` e configure as variáveis de ambiente:
```env
NEXT_PUBLIC_FORMSPREE_ID=seu-id-do-formspree
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🔒 Segurança

### Proteções Implementadas

- **Headers de Segurança**: CSP, HSTS e outros headers importantes configurados
- **Validação de Formulários**: Validação tanto no cliente quanto no servidor
- **Proteção CSRF**: Implementada automaticamente pelo Next.js
- **Rate Limiting**: Limitação de requisições no formulário de contato
- **Sanitização de Dados**: Limpeza de inputs para prevenir XSS
- **Links Seguros**: Configuração adequada de rel="noopener noreferrer"

### Boas Práticas

- Todas as dependências são regularmente atualizadas
- Não há dados sensíveis expostos no código-fonte
- Uso de HTTPS forçado em produção
- Implementação segura de internacionalização

## 🌐 Internacionalização

O projeto suporta dois idiomas:
- 🇧🇷 Português (Padrão)
- 🇺🇸 Inglês

A detecção do idioma é automática baseada nas preferências do navegador, mas pode ser alterada manualmente.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

- LinkedIn: [Vinicius Meier Trevisan](https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/)
- Email: vinimtrevisan@gmail.com
- GitHub: [@ViniMTrevisan](https://github.com/ViniMTrevisan)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) primeiro.

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
