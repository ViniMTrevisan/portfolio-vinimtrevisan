"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLenis } from './LenisProvider';
import { useActiveSection, SectionId } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import { socials } from '@/data/site';

export default function Navbar() {
  const lenis = useLenis();
  const { activeSection } = useActiveSection();
  const t = useTranslations('Navbar');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: { id: SectionId; name: string }[] = [
    { id: "#work", name: t("work") },
    { id: "#experience", name: t("experience") },
    { id: "#stack", name: t("stack") },
    { id: "#about", name: t("about") },
    { id: "#contact", name: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  const scrollTo = (target: string) => {
    setOpen(false);
    if (lenis) lenis.scrollTo(target, { offset: -8 });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 md:h-20 w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-baseline gap-1 font-serif text-xl font-bold text-foreground"
            aria-label={`VT. — ${t('home')}`}
          >
            VT
            <span className="text-primary transition-transform duration-300 group-hover:translate-y-[-2px]">.</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive ? 'text-background' : 'text-zinc-400 hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href={socials.email ? `mailto:${socials.email}` : '#'}
              className="hidden items-center gap-1 rounded-full border border-primary/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-black md:inline-flex"
            >
              {t('contact')}
              <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground md:hidden"
              aria-label={open ? t('close') : t('menu')}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/97 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-6 pb-16 pt-24">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  onClick={() => scrollTo(link.id)}
                  className="flex items-baseline justify-between border-b border-white/10 py-5 text-left"
                >
                  <span className="font-serif text-4xl text-foreground">{link.name}</span>
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                </motion.button>
              ))}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400"
              >
                GitHub <ArrowUpRight size={14} className="text-primary" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
