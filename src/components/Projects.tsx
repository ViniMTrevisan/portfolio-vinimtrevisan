"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: string;
  titleKey: string;
  descKey: string;
  technologies: string[];
  githubUrl: string;
  year: string;
  featured: boolean;
};

const projectsData: Project[] = [
  {
    id: 'kybernus',
    titleKey: 'p8_title',
    descKey: 'p8_desc',
    technologies: ['TypeScript', 'Commander.js', 'Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Redis', 'Docker', 'Terraform', 'Gemini AI'],
    githubUrl: 'https://kybernus-cli.vercel.app/',
    year: '2026',
    featured: true
  },
  {
    id: 'dayride',
    titleKey: 'p7_title',
    descKey: 'p7_desc',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Redis',
      'Supabase', 'Google Maps API', 'OAuth'],
    githubUrl: 'https://dayride.vercel.app/',
    year: '2026',
    featured: true
  },
  {
    id: 'zaptrack',
    titleKey: 'p5_title',
    descKey: 'p5_desc',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Stripe', 'Redis', 'Supabase', 'Prisma ORM', 'JWT Auth', 'Docker'],
    githubUrl: 'https://zaptrack.app.br/',
    year: '2026',
    featured: true
  },
  {
    id: 'nex-solutions',
    titleKey: 'p4_title',
    descKey: 'p4_desc',
    technologies: ['React', 'Framer', 'StartUp'],
    githubUrl: 'https://www.solutionsbynex.com/',
    year: 'Ongoing',
    featured: true
  },
  {
    id: 'E-Commerce API',
    titleKey: 'p1_title',
    descKey: 'p1_desc',
    technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'JWT Auth', 'MySQL'],
    githubUrl: 'https://github.com/ViniMTrevisan/spring-e-commerce',
    year: '2025',
    featured: false
  },
  {
    id: 'finance-app',
    titleKey: 'p2_title',
    descKey: 'p2_desc',
    technologies: ['Java', 'React'],
    githubUrl: 'https://app-financas-vinidev.vercel.app/',
    year: '2025',
    featured: false
  },
  {
    id: 'fabrica-das-copias',
    titleKey: 'p6_title',
    descKey: 'p6_desc',
    technologies: ['Typescript', 'Next.js'],
    githubUrl: 'https://www.fabricadascopias.com.br/',
    year: '2025',
    featured: false
  }
];

const FeaturedProjectCard = ({ project, t, index }: { project: Project, t: (key: string) => string, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm overflow-hidden rounded-lg hover:border-primary/50 transition-all duration-500"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="relative p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px]">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary uppercase tracking-widest">
                  Featured
                </span>
                <span className="font-mono text-xs text-zinc-600">•</span>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  {project.year}
                </span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-white font-bold group-hover:text-primary transition-colors duration-300">
                {t(project.titleKey)}
              </h3>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 p-3 rounded-full bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300 group/btn"
              aria-label={`Visit ${t(project.titleKey)}`}
            >
              <ExternalLink size={20} className="text-zinc-400 group-hover/btn:text-black transition-colors" />
            </a>
          </div>

          <div className="h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>

        {/* Description */}
        <div className="space-y-6 flex-1 py-6">
          <p className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed">
            {t(project.descKey)}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 rounded-md hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer ID */}
        <div className="font-mono text-xs text-zinc-700 uppercase tracking-widest pt-4 border-t border-white/5">
          {project.id}
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/5 group-hover:border-primary/30 transition-colors duration-500 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/5 group-hover:border-primary/30 transition-colors duration-500 rounded-bl-lg" />
    </motion.div>
  );
};

const RegularProjectCard = ({ project, t, index }: { project: Project, t: (key: string) => string, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative border border-white/10 bg-zinc-900/30 backdrop-blur-sm overflow-hidden rounded-lg hover:border-primary/30 hover:bg-zinc-900/50 transition-all duration-500"
    >
      <div className="p-6 md:p-7 h-full flex flex-col justify-between min-h-[280px]">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
              {project.year}
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110 transition-all duration-300 group/btn"
              aria-label={`Visit ${t(project.titleKey)}`}
            >
              <ExternalLink size={16} className="text-zinc-400 group-hover/btn:text-black transition-colors" />
            </a>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold group-hover:text-primary transition-colors duration-300">
            {t(project.titleKey)}
          </h3>

          <div className="h-[1px] w-16 bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </div>

        {/* Description */}
        <p className="font-mono text-xs md:text-sm text-zinc-500 leading-relaxed line-clamp-3 my-4">
          {t(project.descKey)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 border border-zinc-800 rounded-sm group-hover:text-zinc-400 group-hover:border-zinc-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Projects');

  const featuredProjects = projectsData.filter(p => p.featured);
  const regularProjects = projectsData.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="w-full py-24 md:py-32 px-6 md:px-12 relative bg-background"
      onMouseEnter={() => setActiveSection('#projects')}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
              {t('header_title_1')}
              <br />
              {t('header_title_2')}
              <span className="text-primary">.</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <p className="font-mono text-sm md:text-base text-zinc-400 max-w-xl">
              {t('header_desc')}
            </p>
            <span className="font-mono text-sm text-primary">
              2025 — 2026
            </span>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 md:mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-primary" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Destaques
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard key={project.id} project={project} t={t} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-zinc-700" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Outros Projetos
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {regularProjects.map((project, index) => (
                <RegularProjectCard key={project.id} project={project} t={t} index={index + featuredProjects.length} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}