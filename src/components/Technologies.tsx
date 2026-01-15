"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import {
  FaJava, FaPython, FaReact, FaHtml5,
  FaCss3Alt, FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiSpringboot, SiFlask, SiNextdotjs, SiTailwindcss,
  SiTerraform, SiMysql, SiPostgresql, SiTypescript, SiFastapi, SiRedis
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const techCategories = [
  {
    titleKey: 'cat1_title', // Back-end
    skills: [
      { nome: 'Java', icone: <FaJava size={32} /> },
      { nome: 'Spring Boot', icone: <SiSpringboot size={32} /> },
      { nome: 'TypeScript', icone: <SiTypescript size={32} /> },
      { nome: 'Python', icone: <FaPython size={32} /> },
      { nome: 'Flask', icone: <SiFlask size={32} /> },
      { nome: 'FastAPI', icone: <SiFastapi size={32} /> },
      { nome: 'REST APIs', icone: <TbApi size={32} /> },
    ]
  },
  {
    titleKey: 'cat2_title', // Front-end
    skills: [
      { nome: 'React', icone: <FaReact size={32} /> },
      { nome: 'Next.js', icone: <SiNextdotjs size={32} /> },
      { nome: 'HTML5', icone: <FaHtml5 size={32} /> },
      { nome: 'CSS3', icone: <FaCss3Alt size={32} /> },
      { nome: 'Tailwind CSS', icone: <SiTailwindcss size={32} /> },
    ]
  },
  {
    titleKey: 'cat3_title', // DevOps & Tools
    skills: [
      { nome: 'AWS', icone: <FaAws size={32} /> },
      { nome: 'Docker', icone: <FaDocker size={32} /> },
      { nome: 'Terraform', icone: <SiTerraform size={32} /> },
      { nome: 'Git', icone: <FaGitAlt size={32} /> },
      { nome: 'MySQL', icone: <SiMysql size={32} /> },
      { nome: 'PostgreSQL', icone: <SiPostgresql size={32} /> },
      { nome: 'Redis', icone: <SiRedis size={32} /> },
    ]
  }
];

const TechCard = ({ skill, index }: { skill: { nome: string, icone: React.ReactNode }, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true, margin: "-50px" }}
    className="group relative border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
  >
    {/* Hover gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

    <div className="relative flex flex-col items-center gap-3 text-center">
      <div className="text-zinc-400 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform">
        {skill.icone}
      </div>
      <span className="text-sm font-mono text-zinc-300 group-hover:text-white transition-colors duration-300">
        {skill.nome}
      </span>
    </div>
  </motion.div>
);

const CategorySection = ({ category, categoryIndex }: { category: typeof techCategories[0], categoryIndex: number }) => {
  const t = useTranslations('Technologies');

  return (
    <div className="space-y-6">
      {/* Category Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <div className="h-[1px] w-8 bg-zinc-700" />
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
          {t(category.titleKey)}
        </h3>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {category.skills.map((skill, index) => (
          <TechCard key={skill.nome} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default function Technologies() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Technologies');

  return (
    <section
      id="technologies"
      className="w-full py-24 md:py-32 px-6 md:px-12 relative bg-background"
      onMouseEnter={() => setActiveSection('#technologies')}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header - Following Projects style */}
        <motion.div
          className="mb-20 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
              {t("title")}<span className="text-primary">.</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <CategorySection key={category.titleKey} category={category} categoryIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}