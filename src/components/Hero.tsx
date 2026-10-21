"use client";

import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useLenis } from './LenisProvider';
import { socials } from '@/data/site';

export default function Hero() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Hero');
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  const yTitle = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 90]);
  const opacity = useTransform(scrollY, [0, 520], [1, reduced ? 1 : 0.25]);

  const go = (target: string) => lenis?.scrollTo(target, { offset: -8 });

  return (
    <section
      id="home"
      className="relative flex min-h-[88svh] w-full flex-col justify-start md:min-h-[100svh] overflow-hidden px-5 pb-12 pt-24 md:justify-center md:px-10 md:pb-16 md:pt-28"
    >
      {/* Editorial grid + glow */}
      <div className="pointer-events-none absolute inset-0 z-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 z-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[280px] w-[280px] rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400 md:text-[11px]">
            {t('eyebrow')}
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary md:text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {t('available')}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div style={{ y: yTitle }} className="pt-8 md:pt-12">
          <h1 className="font-serif text-[clamp(3.4rem,13.5vw,12rem)] font-bold leading-[0.84] tracking-[-0.045em]">
            <motion.span
              className="block overflow-hidden pb-[0.06em]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('title_top')}
            </motion.span>
            <motion.span
              className="text-outline block overflow-hidden pb-[0.08em]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('title_bottom')}
            </motion.span>
          </h1>
        </motion.div>

        {/* Role + tagline */}
        <motion.div
          style={{ opacity }}
          className="mt-8 grid gap-6 border-t border-white/10 pt-6 md:mt-10 md:grid-cols-12 md:gap-8"
        >
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary md:text-sm">
              {t('role')}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => go('#work')}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                {t('cta_work')}
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
              <a
                href={socials.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:border-primary hover:text-primary"
              >
                <Download size={14} />
                {t('cta_cv')}
              </a>
            </div>
          </div>

          <p className="font-mono text-sm leading-relaxed text-zinc-400 md:col-span-4 md:text-[15px]">
            {t('tagline')}
          </p>

          <div className="flex items-start gap-4 md:col-span-3 md:justify-end">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-foreground"
            >
              GitHub
              <ArrowUpRight size={14} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="text-white/15">/</span>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight size={14} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
