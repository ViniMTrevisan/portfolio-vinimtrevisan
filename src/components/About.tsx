"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';

export default function About() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('About');

  return (
    <motion.section 
      className="w-full max-w-4xl mx-auto py-24 px-6"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }} 
      onViewportEnter={() => setActiveSection('#about')}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      <h2 className="text-4xl font-bold text-center mb-12">
        {t("title")}
      </h2>

      <div className="space-y-8">

        {/* Card 1: Filosofia e Foco */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">
            {t("card1_title")}
          </h3>
          <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <li>
              {t("card1_li1")}
            </li>
            <li>
              {t("card1_li2")}
            </li>
            <li>
              {t("card1_li3")}
            </li>
            <li>
              {t("card1_li4")}
            </li>
          </ul>
        </div>

        {/* Card 2: Resiliência e Adaptação */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">
            {t("card2_title")}
          </h3>
          <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <li>
              {t("card2_li1")}
            </li>
            <li>
              {t("card2_li2")}
            </li>
            <li>
              {t("card2_li3")}
            </li>
            <li>
              {t("card2_li4")}
            </li>
          </ul>
        </div>

        {/* Card 3: Objetivos */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-300">
            {t("card3_title")}
          </h3>
          <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <li>
              {t("card3_li1")}
            </li>
            <li>
              {t("card3_li2")}
            </li>
            <li>
              {t("card3_li3")}
            </li>
            <li>
              {t("card3_li4")}
            </li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}