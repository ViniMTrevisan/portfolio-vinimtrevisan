"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Contact');

  return (
    <section
      id="contact"
      className="w-full py-32 px-6 relative overflow-hidden"
      onMouseEnter={() => setActiveSection('#contact')}
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-xl mx-auto">
        {/* Section Header - Following Projects style */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
              {t("title")}<span className="text-primary">.</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </div>
          <p className="text-zinc-400 text-sm md:text-base">{t("subtitle")}</p>
        </motion.div>

        <motion.form
          action={process.env.NEXT_PUBLIC_FORMSPREE_ID}
          method="POST"
          className="space-y-6 bg-card backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-300 flex items-center gap-2">
              <User size={16} className="text-primary" /> {t("label_name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10
                         text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                         transition-all duration-300"
              placeholder={t("placeholder_name")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-300 flex items-center gap-2">
              <Mail size={16} className="text-primary" /> {t("label_email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10
                         text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                         transition-all duration-300"
              placeholder={t("placeholder_email")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-300 flex items-center gap-2">
              <MessageSquare size={16} className="text-primary" /> {t("label_message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              minLength={10}
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10
                         text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                         transition-all duration-300 resize-none"
              placeholder={t("placeholder_message")}
            ></textarea>
          </div>

          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl font-bold text-black
                       bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300
                       shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 group"
          >
            {t("button_submit")}
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}