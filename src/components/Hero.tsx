"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Hero');

  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-0">
      
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onViewportEnter={() => setActiveSection("")}
        viewport={{ amount: 0.5 }}
      >

        {/* Coluna de Texto (Esquerda) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">
            Vinicius Meier Trevisan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            {t("title")} | {t("subtitle")}
          </p>

          {/* Botões de Ação */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <a 
              href="/CV English - Vinicius Trevisan.pdf"
              download
              className="flex items-center justify-center gap-2 px-6 py-3 
                         font-semibold text-white bg-cyan-600 rounded-lg shadow-lg
                         hover:bg-cyan-700 transition-all duration-300"
            >
              <Download size={20} />
              {t("button_cv")}
            </a>

            <a 
              href="https://www.linkedin.com/in/vinicius-meier-trevisan-741b66329/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 
                         font-semibold text-zinc-800 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-700 rounded-lg shadow-lg
                         hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300"
            >
              <FaLinkedin size={20} />
              {t("button_linkedin")}
            </a>

            <a 
              href="https://github.com/ViniMTrevisan"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 
                         font-semibold text-zinc-800 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-700 rounded-lg shadow-lg
                         hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all duration-300"
            >
              <FaGithub size={20} />
              {t("button_github")}
            </a>

          </div>
        </div>

        {/* Coluna da Foto (Direita) */}
        <div className="flex-shrink-0">
          
          {/* Este 'motion.div' é o wrapper.
            Ele tem o gradiente e a animação "respirando"
          */}
          <motion.div
            className="relative rounded-full shadow-2xl
                       p-1.5 // Esta é a espessura da borda
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400"
                       
            // Animação de entrada E "respirando"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: [1, 1.02, 1], // A animação "respirando"
              opacity: 1 
            }}
            transition={{
              // A 'scale' respira em loop
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
              // A 'opacity' só na entrada
              opacity: { duration: 0.5, ease: "easeOut" }
            }}
            
            // O "crescimento" no hover (sobrescreve a respiração)
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/foto_principal.jpeg"
              alt="Foto de Vinicius Meier Trevisan"
              width={280}
              height={280}
              quality={95}
              priority
              // A Imagem agora fica "dentro" do padding do wrapper
              className="rounded-full object-cover w-56 h-56 md:w-72 md:h-72" 
            />
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}