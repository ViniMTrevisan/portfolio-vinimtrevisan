"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import SectionHeader from './SectionHeader';

type Fact = { label: string; value: string };

export default function About() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('About');
  const facts = t.raw('facts') as Fact[];

  return (
    <section
      id="about"
      className="relative w-full px-5 py-20 md:px-10 md:py-28"
      onMouseEnter={() => setActiveSection('#about')}
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={
            <>
              {t('title_1')} <span className="text-primary">{t('title_2')}</span>
            </>
          }
        />

        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="group relative">
              <div className="absolute -left-3 -top-3 h-full w-full border border-primary/30" aria-hidden="true" />
              <div className="relative overflow-hidden">
                <Image
                  src="/foto_principal.jpeg"
                  alt={t('photo_alt')}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-[380px] w-full object-cover object-[center_35%] grayscale contrast-[1.08] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 sm:h-[480px] md:h-[560px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t('photo_caption')}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7 md:pt-2">
            <p className="max-w-2xl font-mono text-sm leading-relaxed text-zinc-300 md:text-base">
              {t('p1')}
            </p>

            <div className="mt-10">
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                {t('facts_title')}
              </h3>
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-background p-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-mono text-xs text-zinc-200">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
