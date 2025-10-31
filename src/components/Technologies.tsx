"use client"; 

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';

// ===================================================================
// 1. IMPORTAR TODOS OS ÍCONES
// ===================================================================
import { 
  FaJava, FaPython, FaNodeJs, FaReact, FaHtml5, 
  FaCss3Alt, FaGitAlt, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiFlask, SiNextdotjs, SiTailwindcss, 
  SiTerraform, SiMysql, SiPostgresql, SiTypescript
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb'; // <-- 1. IMPORTADO AQUI

// ===================================================================
// 2. CRIAR AS LISTAS DE SKILLS COM ÍCONES
// ===================================================================

const backendSkills = [
  { nome: 'Java', icone: <FaJava size={20} /> },
  { nome: 'Spring Boot', icone: <SiSpringboot size={20} /> },
  { nome: 'Python', icone: <FaPython size={20} /> },
  { nome: 'Flask', icone: <SiFlask size={20} /> },
  { nome: 'Node.js', icone: <FaNodeJs size={20} /> },
  { nome: 'REST APIs', icone: <TbApi size={20} /> }, // <-- 2. ATUALIZADO AQUI
];

const frontendSkills = [
  { nome: 'React', icone: <FaReact size={20} /> },
  { nome: 'Next.js', icone: <SiNextdotjs size={20} /> },
  { nome: 'TypeScript', icone: <SiTypescript size={20} /> },
  { nome: 'HTML5', icone: <FaHtml5 size={20} /> },
  { nome: 'CSS3', icone: <FaCss3Alt size={20} /> },
  { nome: 'Tailwind CSS', icone: <SiTailwindcss size={20} /> },
];

const devopsAndToolsSkills = [
  { nome: 'AWS', icone: <FaAws size={20} /> },
  { nome: 'Docker', icone: <FaDocker size={20} /> },
  { nome: 'Terraform', icone: <SiTerraform size={20} /> },
  { nome: 'Git', icone: <FaGitAlt size={20} /> },
  { nome: 'MySQL', icone: <SiMysql size={20} /> },
  { nome: 'PostgreSQL', icone: <SiPostgresql size={20} /> },
];

// ===================================================================
// 3. COMPONENTE REUTILIZÁVEL PARA OS CARDS (como na imagem)
// ===================================================================
interface Skill {
  nome: string;
  icone: React.ReactNode;
}

interface CategoryCardProps {
  title: string;
  skills: Skill[];
}

const CategoryCard = ({ title, skills }: CategoryCardProps) => (
  <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg h-full">
    <h3 className="text-xl font-semibold mb-6 text-cyan-500 dark:text-cyan-300">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.nome} className="flex items-center gap-3">
          <span className="text-cyan-600 dark:text-cyan-400">{skill.icone}</span>
          <span className="text-zinc-700 dark:text-zinc-300">{skill.nome}</span>
        </div>
      ))}
    </div>
  </div>
);

// ===================================================================
// 4. O COMPONENTE PRINCIPAL
// ===================================================================
export default function Technologies() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Technologies');

  return (
    <motion.section 
      className="w-full max-w-6xl mx-auto py-24 px-6"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      onViewportEnter={() => setActiveSection('#technologies')}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      
      <h2 className="text-4xl font-bold text-center mb-16">
        {t("title")}
      </h2>

      {/* Layout de 3 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <CategoryCard title={t("cat1_title")} skills={backendSkills} />
        <CategoryCard title={t("cat2_title")} skills={frontendSkills} />
        <CategoryCard title={t("cat3_title")} skills={devopsAndToolsSkills} />
        
      </div>
    </motion.section>
  );
}