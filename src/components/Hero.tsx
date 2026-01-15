"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Hero');
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-32"
      id="home"
    >
      {/* Decorative Grid Lines - Soft Brutalism */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute left-[10%] h-full w-[1px] bg-white"></div>
        <div className="absolute left-[35%] h-full w-[1px] bg-white"></div>
        <div className="absolute right-[10%] h-full w-[1px] bg-white"></div>
      </div>

      <motion.div
        className="w-full max-w-[1400px] mx-auto z-10"
        onViewportEnter={() => setActiveSection("#home")}
      >
        {/* Availability Badge - Top Rightish */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full flex justify-end mb-12 sm:mb-24"
        >
          <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-zinc-400 uppercase tracking-widest border-l border-primary/50 pl-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{t('available_for_freelance')}</span>
          </div>
        </motion.div>

        {/* Massive Typography - Broken Alignment */}
        <div className="relative">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-serif font-bold tracking-tighter mix-blend-difference text-foreground"
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            BACKEND
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-baseline gap-6 pl-2 md:pl-24"
            style={{ y: y2 }}
          >
            <div className="order-2 md:order-1 max-w-sm mt-8 md:mt-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-mono text-sm text-zinc-400 leading-relaxed text-left"
              >
                {t('details')}
              </motion.p>

              {/* Socials & CV */}
              <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <a
                  href="/CV English - Vinicius Trevisan.pdf"
                  download
                  className="px-6 py-2 bg-white text-black font-bold text-sm tracking-wide rounded-sm hover:bg-primary transition-colors flex items-center gap-2"
                >
                  {t('button_cv')}
                </a>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-sm hover:bg-white/10 hover:border-white transition-all text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://github.com/ViniMTrevisan" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-sm hover:bg-white/10 hover:border-white transition-all text-white">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.h1
              className="order-1 md:order-2 text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] font-serif font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-300 via-zinc-100 to-zinc-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              DEVELOPER<span className="text-primary text-6xl md:text-8xl">.</span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Scroll CTA */}
        <motion.div
          className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            SCROLL TO EXPLORE
          </span>
          <div className="h-16 w-[1px] bg-zinc-700 mt-2 mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}