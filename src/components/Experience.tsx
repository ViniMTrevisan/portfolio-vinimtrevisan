"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Experience');

  return (
    <motion.section 
      className="w-full max-w-4xl mx-auto py-24 px-6"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }} 
      onViewportEnter={() => setActiveSection('#experience')}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      <h2 className="text-4xl font-bold text-center mb-12">
        {t("title")}
      </h2>

      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg">
        
        {/* Cabeçalho do "Cargo" */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-300">
            {t("job_title")}
          </h3>
          <span className="text-zinc-600 dark:text-zinc-400">{t("date")}</span>
        </div>
        
        {/* Nome da Empresa */}
        <h4 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
          {t("company")}
        </h4>

        {/* Descrição e Responsabilidades */}
        <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <li>
            {t.rich('li1', {
              strong: (chunks) => <strong className="text-zinc-900 dark:text-white font-semibold">{chunks}</strong>
            })}
          </li>
          <li>
            {t.rich('li2', {
              strong: (chunks) => <strong className="text-zinc-900 dark:text-white font-semibold">{chunks}</strong>
            })}
          </li>
          <li>
            {t.rich('li3', {
              strong: (chunks) => <strong className="text-zinc-900 dark:text-white font-semibold">{chunks}</strong>
            })}
          </li>
          <li>
            {t.rich('li4', {
              strong: (chunks) => <strong className="text-zinc-900 dark:text-white font-semibold">{chunks}</strong>
            })}
          </li>
        </ul>

      </div>
    </motion.section>
  );
}