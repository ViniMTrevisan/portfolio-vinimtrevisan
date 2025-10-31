"use client"; // Obrigatório para animações

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <motion.footer 
      className="w-full max-w-6xl mx-auto py-12 px-6 border-t border-zinc-200 dark:border-zinc-700"
      
      // Animação de entrada
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} 
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Email */}
        <div className="text-zinc-600 dark:text-zinc-400 text-center md:text-left">
          <a 
            href="mailto:vinimtrevisan@gmail.com" 
            className="flex items-center gap-2 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <FaEnvelope />
            vinimtrevisan@gmail.com
          </a>
        </div>

        {/* Links Sociais (Ícones) */}
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://github.com/ViniMTrevisan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-zinc-500 text-sm mt-8">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>

    </motion.footer>
  );
}