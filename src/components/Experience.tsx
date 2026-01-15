"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ index, children }: { index: number, children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative pl-8 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}
    >
      <div className="bg-card backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-primary/10 transition-shadow duration-300 group">
        {children}

        {/* Connector Dot */}
        <div className={`absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 
                          ${index % 2 === 0 ? '-right-[58px] left-auto' : '-left-[58px]'}
                          hidden md:block group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_var(--color-primary)]`} />

        {/* Mobile Connector Dot */}
        <div className="absolute top-8 left-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-background z-20 md:hidden block shadow-[0_0_10px_var(--color-primary)]" />
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Experience');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full py-32 relative overflow-hidden"
      onMouseEnter={() => setActiveSection('#experience')}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header - Following Projects style */}
        <motion.div
          className="mb-20 space-y-6"
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
        </motion.div>

        <div className="relative">
          {/* Center Line (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-zinc-800 hidden md:block">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-primary via-secondary to-primary" />
          </div>

          {/* Left Line (Mobile) */}
          <div className="absolute left-0 w-0.5 h-full bg-zinc-800 md:hidden block">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-primary via-secondary to-primary" />
          </div>

          <div className="space-y-12">
            {/* Since we only have one dynamic job in translation currently, we map it manually 
                   In a real scenario we'd map an array, but here we construct the card directly from `t`
               */}

            <ExperienceCard index={0}>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-mono text-sm tracking-widest uppercase">{t("date")}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{t("job_title")}</h3>
                <h4 className="text-lg font-medium text-zinc-400 flex items-center gap-2 md:justify-end md:flex-row-reverse">
                  <Briefcase size={16} />
                  {t("company")}
                </h4>

                <ul className="mt-6 space-y-3 text-zinc-300 text-sm leading-relaxed text-left">
                  {[1, 2, 3, 4, 5].map(num => (
                    <li key={num} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>
                        {t.rich(`li${num}`, {
                          strong: (chunks) => <strong className="text-white font-semibold">{chunks}</strong>,
                          highlight: (chunks) => <span className="text-primary font-semibold">{chunks}</span>
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ExperienceCard>

          </div>
        </div>
      </div>
    </section>
  );
}