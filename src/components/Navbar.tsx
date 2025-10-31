"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from './LenisProvider';
import { useActiveSection, SectionId } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';

interface NavLink {
  id: SectionId;
  name: string;
}

export default function Navbar() {
  const lenis = useLenis(); 
  const { activeSection } = useActiveSection();
  const t = useTranslations('Navbar');

  const navLinks: NavLink[] = [
    { id: "#about", name: t("about") },
    { id: "#experience", name: t("experience") },
    { id: "#technologies", name: t("technologies") },
    { id: "#projects", name: t("projects") },
    { id: "#contact", name: t("contact") },
  ];

  const renderLanguageToggle = () => {
    return (
      <div className="flex items-center gap-2">
        <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-600" />
        <LanguageToggle />
      </div>
    );
  };

  const scrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 }); 
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                 flex justify-center items-center py-3 px-8
                 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md 
                 border border-zinc-300/50 dark:border-zinc-700/50
                 rounded-full shadow-lg"
      
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 md:gap-6">
        
        {/* Mapeia os links de navegação */}
        {navLinks.map((link) => (
          <button 
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`relative font-medium transition-colors py-1 px-3
                       ${activeSection === link.id
                         ? 'text-cyan-500 dark:text-cyan-300' 
                         : 'text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-300'}
                    `}
          >
            {activeSection === link.id && (
              <motion.div
                className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 rounded-full -z-10"
                layoutId="activePill"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {link.name}
          </button>
        ))}
        {renderLanguageToggle()}
      </div>
    </motion.nav>
  );
}