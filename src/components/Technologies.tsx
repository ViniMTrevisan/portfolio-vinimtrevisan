"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import {
  FaJava, FaPython, FaNodeJs, FaReact, FaHtml5,
  FaCss3Alt, FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiSpringboot, SiFlask, SiNextdotjs, SiTailwindcss,
  SiTerraform, SiMysql, SiPostgresql, SiTypescript
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const allSkills = [
  { nome: 'Java', icone: <FaJava size={24} /> },
  { nome: 'Spring Boot', icone: <SiSpringboot size={24} /> },
  { nome: 'Python', icone: <FaPython size={24} /> },
  { nome: 'Flask', icone: <SiFlask size={24} /> },
  { nome: 'Node.js', icone: <FaNodeJs size={24} /> },
  { nome: 'REST APIs', icone: <TbApi size={24} /> },
  { nome: 'React', icone: <FaReact size={24} /> },
  { nome: 'Next.js', icone: <SiNextdotjs size={24} /> },
  { nome: 'TypeScript', icone: <SiTypescript size={24} /> },
  { nome: 'HTML5', icone: <FaHtml5 size={24} /> },
  { nome: 'CSS3', icone: <FaCss3Alt size={24} /> },
  { nome: 'Tailwind CSS', icone: <SiTailwindcss size={24} /> },
  { nome: 'AWS', icone: <FaAws size={24} /> },
  { nome: 'Docker', icone: <FaDocker size={24} /> },
  { nome: 'Terraform', icone: <SiTerraform size={24} /> },
  { nome: 'Git', icone: <FaGitAlt size={24} /> },
  { nome: 'MySQL', icone: <SiMysql size={24} /> },
  { nome: 'PostgreSQL', icone: <SiPostgresql size={24} /> },
];

const TechPill = ({ skill }: { skill: typeof allSkills[0] }) => (
  <div className="flex items-center gap-3 px-6 py-3 mx-4
                 bg-white/5 border border-white/10 rounded-full
                 backdrop-blur-md transition-all duration-300
                 hover:bg-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]
                 group cursor-default whitespace-nowrap">
    <span className="text-zinc-400 group-hover:text-primary transition-colors">{skill.icone}</span>
    <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">{skill.nome}</span>
  </div>
);

const MarqueeRow = ({ skills, direction = 'left', speed = 20 }: { skills: typeof allSkills, direction?: 'left' | 'right', speed?: number }) => {
  return (
    <div className="relative flex overflow-hidden py-4">
      <motion.div
        className="flex min-w-full flex-shrink-0"
        animate={{ x: direction === 'left' ? '-100%' : '100%' }}
        initial={{ x: 0 }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...skills, ...skills, ...skills].map((skill, i) => ( // Repeat 3 times for smoothness
          <TechPill key={`${skill.nome}-${i}`} skill={skill} />
        ))}
      </motion.div>

      {/* Absolute positioning trick to seamless loop without gap? 
          Actually simpler: Create two identical motion divs side by side.
      */}
      <motion.div
        className="flex min-w-full flex-shrink-0 absolute top-4 left-0" // Overlaying one
        animate={{ x: direction === 'left' ? ['0%', '-100%'] : ['0%', '100%'] }} // Wait, standard marquee needs 2 copies moving together
      // Let's use the standard "infinite track" approach instead of absolute.
      />
    </div>
  );
};

// Better Marquee Implementation
const InfiniteLoop = ({ children, direction = "left", speed = 25 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden w-full mask-linear-fade relative">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex flex-shrink-0 gap-0"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function Technologies() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Technologies');

  // Splitting skills into rows
  const row1 = allSkills.slice(0, 6);
  const row2 = allSkills.slice(6, 12);
  const row3 = allSkills.slice(12, 18);

  return (
    <section
      id="technologies"
      className="w-full py-32 overflow-hidden flex flex-col justify-center relative"
      onMouseEnter={() => setActiveSection('#technologies')}
    >
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500">
          {t("title")}
        </h2>
        <div className="mt-4 w-20 h-1 bg-primary rounded-full mx-auto shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
      </div>

      <div className="flex flex-col gap-8 w-full">
        <InfiniteLoop direction="left" speed={30}>
          <div className="flex">
            {allSkills.slice(0, 9).map((skill, i) => <TechPill key={i} skill={skill} />)}
          </div>
        </InfiniteLoop>

        <InfiniteLoop direction="right" speed={35}>
          <div className="flex">
            {allSkills.slice(9, 18).map((skill, i) => <TechPill key={i} skill={skill} />)}
          </div>
        </InfiniteLoop>

        <InfiniteLoop direction="left" speed={40}>
          <div className="flex">
            {allSkills.slice(0, 18).filter((_, i) => i % 2 === 0).map((skill, i) => <TechPill key={i} skill={skill} />)}
          </div>
        </InfiniteLoop>
      </div>

    </section>
  );
}