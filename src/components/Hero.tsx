"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Download, ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-secondary/10 blur-[100px] rounded-full -z-10" />

      <motion.div
        className="flex flex-col items-center text-center max-w-5xl mx-auto px-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onViewportEnter={() => setActiveSection("")}
        viewport={{ amount: 0.5 }}
      >

        {/* Badge / Availability Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md flex items-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary-foreground tracking-wide">Available for new projects</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="block text-foreground drop-shadow-xl">Vinicius M. Trevisan</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-shimmer bg-[length:200%_100%]">
            Full Stack Engineer
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          {t("title")} | {t("subtitle")}
          <br />
          {t.rich("hero_description", {
            highlight: (chunks) => <span className="text-primary font-semibold">{chunks}</span>
          })}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center">
          <MagneticButton>
            <a
              href="/CV English - Vinicius Trevisan.pdf"
              download
              className="group relative px-8 py-4 rounded-xl bg-primary text-black font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] 
                           hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 overflow-hidden block"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                {t("button_cv")}
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out" />
            </a>
          </MagneticButton>

          <div className="flex gap-4">
            <MagneticButton strength={40}>
              <a
                href="https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-secondary block transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </MagneticButton>

            <MagneticButton strength={40}>
              <a
                href="https://github.com/ViniMTrevisan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 block transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
            </MagneticButton>
          </div>
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.div>

    </section>
  );
}