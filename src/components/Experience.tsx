"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import SectionHeader from './SectionHeader';
import { experiences } from '@/data/site';

export default function Experience() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Experience');

  return (
    <section
      id="experience"
      className="relative w-full border-y border-white/10 bg-surface px-5 py-20 md:px-10 md:py-28"
      onMouseEnter={() => setActiveSection('#experience')}
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={
            <>
              {t('title_1')}
              <br />
              <span className="text-primary">{t('title_2')}</span>
            </>
          }
        />

        <div>
          {experiences.map((job, index) => {
            const bullets = t.raw(`items.${job.id}.bullets`) as string[];

            return (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-12 md:gap-8 md:py-12"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      {job.company}
                    </h3>
                    {job.current && (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
                        {t('current')}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    {job.period} · {job.location}
                  </p>
                  <p className="mt-4 font-mono text-xs text-zinc-400">{job.role}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-8">
                  <p className="font-mono text-sm leading-relaxed text-zinc-300 md:text-[15px]">
                    {t(`items.${job.id}.summary` as 'items.wow.summary')}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-mono text-xs leading-relaxed text-zinc-400 md:text-[13px]">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
