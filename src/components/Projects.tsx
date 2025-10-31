"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';

const projectsData = [
    {
        id: 'ecommerce-api',
        titleKey: 'p1_title',
        descKey: 'p1_desc',
        technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'PostgreSQL', 'JWT'],
        githubUrl: 'https://github.com/ViniMTrevisan/ecommerce-api-spring',
    },
    {
        id: 'finance-app',
        titleKey: 'p2_title',
        descKey: 'p2_desc',
        technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Fullstack', 'JWT'],
        githubUrl: 'https://github.com/ViniMTrevisan/finance-app-fullstack',
    },
    {
        id: 'agendamento-praia',
        titleKey: 'p3_title',
        descKey: 'p3_desc',
        technologies: ['Node.js', 'Express', 'React', 'PostgreSQL', 'SOLID', 'JWT'],
        githubUrl: 'https://github.com/ViniMTrevisan/agendamento-praia-app',
    },
    {
        id: 'ollama-api',
        titleKey: 'p4_title',
        descKey: 'p4_desc',
        technologies: ['Python', 'FastAPI', 'Ollama', 'APIs REST', 'IA'],
        githubUrl: 'https://github.com/ViniMTrevisan/api-pergunta',
    },
    {
        id: 'mytube',
        titleKey: 'p5_title',
        descKey: 'p5_desc',
        technologies: ['Java', 'OOP', 'Dependency Injection', 'SOLID'],
        githubUrl: 'https://github.com/ViniMTrevisan/java-estudos/tree/main/projetos-java/src/mytube',
    },
    {
        id: 'kindact',
        titleKey: 'p6_title',
        descKey: 'p6_desc',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'SQL Views'],
        githubUrl: 'https://github.com/ViniMTrevisan/kindact',
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Seu 0.3s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};


export default function Projects() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Projects');

  return (
    <section className="w-full max-w-6xl mx-auto py-24 px-6">
      
      <h2 className="text-4xl font-bold text-center mb-12">
        {t("title")}
      </h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants} 
        initial="hidden"
        whileInView="visible"      
        viewport={{ amount: 0.2 }}
        onViewportEnter={() => setActiveSection('#projects')}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-cyan-500 dark:text-cyan-300">
                {t(project.titleKey)}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-4">
                {t(project.descKey)}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 border-t border-zinc-200 dark:border-zinc-700">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-200
                           flex items-center gap-2"
              >
                <FaGithub /> {t("github_button")}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}