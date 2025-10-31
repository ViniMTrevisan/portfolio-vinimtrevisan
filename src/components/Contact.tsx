"use client"; 

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Contact');

  return (
    <motion.section 
      className="w-full max-w-2xl mx-auto py-24 px-6"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      
      // 3. Modifique/Adicione estas duas linhas
      viewport={{ amount: 0.5 }} // Removemos o 'once: true'
      onViewportEnter={() => setActiveSection('#contact')} // Define a seção
      
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-6">
        {t("title")}
      </h2>
      <p className="text-center text-zinc-600 dark:text-zinc-400 mb-10">
        {t("subtitle")}
      </p>

      <form 
        action="https://formspree.io/f/xeokvoqo" 
        method="POST"
        className="space-y-6"
        onSubmit={(e) => {
          const form = e.currentTarget;
          if (!form.checkValidity()) {
            e.preventDefault();
            return;
          }
        }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            {t("label_name")}
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            minLength={2}
            maxLength={100}
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700
                       text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder={t("placeholder_name")}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            {t("label_email")}
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            maxLength={254}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700
                       text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder={t("placeholder_email")}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            {t("label_message")}
          </label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={5}
            minLength={10}
            maxLength={1000}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700
                       text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder={t("placeholder_message")}
          ></textarea>
        </div>
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <div>
          <button 
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-semibold text-white
                       bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            {t("button_submit")}
          </button>
        </div>
      </form>
    </motion.section>
  );
}