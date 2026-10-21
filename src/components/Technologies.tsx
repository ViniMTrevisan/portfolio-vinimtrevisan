"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import SectionHeader from './SectionHeader';
import { stackGroups } from '@/data/site';

export default function Technologies() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Stack');

  return (
    <section
      id="stack"
      className="relative w-full px-5 py-20 md:px-10 md:py-28"
      onMouseEnter={() => setActiveSection('#stack')}
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={
            <>
              {t('title_1')}{' '}
              <span className="text-outline-lime">{t('title_2')}</span>
            </>
          }
          desc={t('desc')}
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-background p-6 transition-colors duration-300 hover:bg-surface md:p-7"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                  {t(`groups.${group.id}` as 'groups.backend')}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-zinc-400 transition-all duration-200 hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
