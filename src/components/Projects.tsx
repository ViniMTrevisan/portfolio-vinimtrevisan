"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';

const projectsData = [
  {
    id: 'zap-track',
    titleKey: 'p5_title',
    descKey: 'p5_desc',
    technologies: ['Next.js', 'Tailwind', 'PostgreSQL'],
    githubUrl: 'https://zaptrack.app.br/',
    year: '2026',
    size: 'wide' // Spans 2 cols
  },
  {
    id: 'nex-solutions',
    titleKey: 'p4_title',
    descKey: 'p4_desc',
    technologies: ['React', 'Framer', 'StartUp'],
    githubUrl: 'https://solutions-nex.vercel.app/',
    year: '2025',
    size: 'wide' // Tall vertical
  },
  {
    id: 'ecommerce-api',
    titleKey: 'p1_title',
    descKey: 'p1_desc',
    technologies: ['Java', 'Spring Boot', 'AWS'],
    githubUrl: 'https://github.com/ViniMTrevisan/spring-e-commerce',
    year: '2025',
    size: 'normal'
  },
  {
    id: 'finance-app',
    titleKey: 'p2_title',
    descKey: 'p2_desc',
    technologies: ['Java', 'React'],
    githubUrl: 'https://app-financas-vinidev.vercel.app/',
    year: '2025',
    size: 'wide'
  },
  {
    id: 'fabrica-das-copias',
    titleKey: 'p6_title',
    descKey: 'p6_desc',
    technologies: ['Typescript', 'Next.js'],
    githubUrl: 'https://www.fabricadascopias.com.br/',
    year: '2025',
    size: 'normal'
  }
];

const ProjectCard = ({ project, t, index }: { project: any, t: any, index: number }) => {

  // Determine grid span based on size prop
  let gridClass = "col-span-1 row-span-1";
  if (project.size === 'large') gridClass = "md:col-span-2 md:row-span-2";
  if (project.size === 'tall') gridClass = "md:col-span-1 md:row-span-2";
  if (project.size === 'wide') gridClass = "md:col-span-2 md:row-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative border border-white/10 bg-zinc-900/30 overflow-hidden ${gridClass} min-h-[300px] flex flex-col justify-between p-6 hover:bg-zinc-900/60 transition-colors duration-500`}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest group-hover:text-primary transition-colors">
            {project.year} // {project.id}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:italic transition-all">
            {t(project.titleKey)}
          </h3>
          <div className="h-[1px] w-12 bg-primary/50 mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          <p className="font-mono text-sm text-zinc-400 mb-4 leading-relaxed">
            {t(project.descKey)}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 rounded-tr-xl opacity-50 group-hover:opacity-100 group-hover:border-primary transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 rounded-bl-xl opacity-50 group-hover:opacity-100 group-hover:border-primary transition-colors duration-500" />
    </motion.div>
  );
};

export default function Projects() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Projects');

  return (
    <section
      id="projects"
      className="w-full py-32 px-6 md:px-12 relative bg-background"
      onMouseEnter={() => setActiveSection('#projects')}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">
            {t('header_title_1')}<br />{t('header_title_2')}<span className="text-primary text-6xl">.</span>
          </h2>
          <div className="mt-6 md:mt-0 font-mono text-sm text-zinc-400 max-w-sm text-right">
            <p>{t('header_desc')}</p>
            <p className="mt-2 text-primary">(2025 — 2026)</p>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} t={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}