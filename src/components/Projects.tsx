"use client";

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 'zap-track',
    titleKey: 'p5_title',
    descKey: 'p5_desc',
    technologies: ['Typescript', 'Next.js', 'React', 'Tailwind', 'PostgreSQL', 'JWT', 'Supabase'],
    githubUrl: 'https://github.com/ViniMTrevisan/zaptrack',
    featured: true,
  },
  {
    id: 'nex-solutions',
    titleKey: 'p4_title',
    descKey: 'p4_desc',
    technologies: ['Typescript', 'Next.js', 'React', 'Framer', 'Tailwind', 'StartUp'],
    githubUrl: 'https://solutions-nex.vercel.app/',
    featured: true,
  },
  {
    id: 'ecommerce-api',
    titleKey: 'p1_title',
    descKey: 'p1_desc',
    technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/ViniMTrevisan/spring-e-commerce',
    featured: false,
  },
  {
    id: 'finance-app',
    titleKey: 'p2_title',
    descKey: 'p2_desc',
    technologies: ['Java', 'Spring Boot', 'Nextjs', 'React', 'MySQL', 'JWT'],
    githubUrl: 'https://app-financas-vinidev.vercel.app/',
    featured: false,
  },
  {
    id: 'agendamento-praia',
    titleKey: 'p3_title',
    descKey: 'p3_desc',
    technologies: ['Typescript', 'Next.js', 'PostgreSQL', 'JWT', 'Supabase'],
    githubUrl: 'https://agendamento-casa-praia.vercel.app/login',
    featured: false,
  },
  {
    id: 'fabrica-das-copias',
    titleKey: 'p6_title',
    descKey: 'p6_desc',
    technologies: ['Typescript', 'Next.js', 'React', 'Tailwind'],
    githubUrl: 'https://github.com/ViniMTrevisan/fabrica-das-copias-freela',
    featured: false,
  }
];

const TiltCard = ({ project, t }: { project: any, t: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group
                  hover:border-primary/50 transition-colors duration-500
                  ${project.featured ? 'md:col-span-2' : 'col-span-1'}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"
        style={style}
      />

      <div className="relative z-20 p-8 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          {/* Icon Placeholder or Number */}
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg text-primary">
            {project.titleKey.charAt(1)}
          </div>

          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {t(project.titleKey)}
        </h3>

        <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
          {t(project.descKey)}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/5 text-zinc-300">
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

  return (
    <section
      id="projects"
      className="w-full py-32 px-6 relative"
      onMouseEnter={() => setActiveSection('#projects')}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            {t("title")}
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projectsData.map((project) => (
            <TiltCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}