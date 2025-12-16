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

  const scrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: 10 });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                 flex items-center gap-1 p-2
                 bg-black/20 backdrop-blur-xl border border-white/10
                 rounded-full shadow-2xl shadow-primary/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.25 }}
    >
      {/* Navigation Links */}
      <div className="flex items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                           ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/10 border border-white/5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 mx-2" />

      {/* Language Toggle */}
      <div className="pr-2">
        <LanguageToggle />
      </div>
    </motion.nav>
  );
}