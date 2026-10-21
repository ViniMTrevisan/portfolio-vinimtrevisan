export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  index: string;
  name: string;
  year: string;
  /** Translation namespace segment under `Work.items` */
  key: string;
  roleKey: string;
  stack: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "vanguarda",
    index: "01",
    name: "Vanguarda",
    year: "2026",
    key: "vanguarda",
    roleKey: "role_fintech",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "Terraform"],
    links: [
      { label: "GitHub", href: "https://github.com/ViniMTrevisan/vanguarda-core-banking" },
    ],
    featured: true,
  },
  {
    id: "alyra",
    index: "02",
    name: "Alyra",
    year: "2026",
    key: "alyra",
    roleKey: "role_ai",
    stack: ["React Native", "FastAPI", "PostgreSQL", "OpenAI", "Cloud Run"],
    links: [],
    featured: true,
  },
  {
    id: "kybernus",
    index: "03",
    name: "Kybernus CLI",
    year: "2026",
    key: "kybernus",
    roleKey: "role_oss",
    stack: ["TypeScript", "Node.js", "Commander", "Handlebars", "npm"],
    links: [
      { label: "Site", href: "https://www.getkybernus.com/" },
      { label: "GitHub", href: "https://github.com/ViniMTrevisan/Kybernus-CLI" },
    ],
    featured: true,
  },
  {
    id: "dayride",
    index: "04",
    name: "DayRide",
    year: "2026",
    key: "dayride",
    roleKey: "role_saas",
    stack: ["Next.js 16", "TypeScript", "Drizzle", "Stripe", "PWA"],
    links: [{ label: "Site", href: "https://dayride.vercel.app" }],
    featured: false,
  },
  {
    id: "trevi",
    index: "05",
    name: "Trevi Finanças",
    year: "2026",
    key: "trevi",
    roleKey: "role_ai",
    stack: ["Python", "FastAPI", "Gemini", "PostgreSQL", "React"],
    links: [{ label: "GitHub", href: "https://github.com/ViniMTrevisan/Trevi-Financas" }],
    featured: false,
  },
  {
    id: "ecommerce",
    index: "06",
    name: "Spring E-commerce API",
    year: "2025",
    key: "ecommerce",
    roleKey: "role_backend",
    stack: ["Java 21", "Spring Boot 3", "Stripe", "AWS", "MySQL"],
    links: [{ label: "GitHub", href: "https://github.com/ViniMTrevisan/spring-e-commerce" }],
    featured: false,
  },
  {
    id: "veterano",
    index: "07",
    name: "Veterano Cloud",
    year: "2026",
    key: "veterano",
    roleKey: "role_cloud",
    stack: ["React", "Azure Functions", "Kong", "Container Apps"],
    links: [
      {
        label: "Site",
        href: "https://white-rock-03ee36c10.7.azurestaticapps.net",
      },
    ],
    featured: false,
  },
];

export type ExperienceItem = {
  id: string;
  company: string;
  stack: string[];
  current?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    id: "wow",
    company: "WOW Lavacar",
    stack: ["NestJS", "Angular", "MongoDB", "BigQuery", "AWS", "NFS-e"],
    current: true,
  },
  {
    id: "vivo",
    company: "Vivo (Telefônica Brasil)",
    stack: ["Python", "FastAPI", "Next.js", "SQL Server", "Rust"],
  },
];

export type Stat = {
  value: string;
  key: string;
};

export const stats: Stat[] = [
  { value: "99%", key: "stat_speed" },
  { value: "800k+", key: "stat_volume" },
  { value: "46", key: "stat_stars" },
  { value: "247", key: "stat_deliveries" },
];

export type StackGroup = {
  id: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "backend",
    items: ["Java 21", "Spring Boot", "NestJS", "Node.js", "Python", "FastAPI", "TypeScript", "REST", "GraphQL"],
  },
  {
    id: "data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis", "RabbitMQ", "BigQuery", "Supabase"],
  },
  {
    id: "frontend",
    items: ["React 19", "Next.js", "Angular", "React Native", "Tailwind CSS", "Astro", "Vite"],
  },
  {
    id: "infra",
    items: ["Docker", "AWS", "Terraform", "GitHub Actions", "Cloud Run", "Azure", "Vercel", "Linux"],
  },
  {
    id: "ai",
    items: ["OpenAI tool calling", "Gemini", "RAG", "Embeddings", "LangChain"],
  },
  {
    id: "craft",
    items: ["Clean Architecture", "DDD", "Testes automatizados", "Observability", "CI/CD", "Code review"],
  },
];

export const socials = {
  email: "vinimtrevisan@gmail.com",
  github: "https://github.com/ViniMTrevisan",
  linkedin: "https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/",
  cv: "/cv/CV-Vinicius-Trevisan-EN.pdf",
};
