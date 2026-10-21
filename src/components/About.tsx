"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import SectionHeader from './SectionHeader';

type Fact = { label: string; value: string };
type Principle = { title: string; desc: string };

export default function About() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('About');
  const facts = t.raw('facts') as Fact[];
  const principles = t.raw('principles') as Principle[];

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

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
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
                  className="h-full w-full object-cover grayscale contrast-[1.08] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t('photo_caption')}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <div className="space-y-5 font-mono text-sm leading-relaxed text-zinc-300 md:text-[15px]">
              <p>{t('p1')}</p>
              <p className="text-zinc-400">{t('p2')}</p>
              <p className="text-zinc-400">{t('p3')}</p>
            </div>

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

        <div className="mt-16 md:mt-24">
          <h3 className="mb-6 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
            {t('principles_title')}
          </h3>
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-background p-6 md:p-8"
              >
                <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
                <h4 className="mt-3 font-serif text-xl font-bold text-foreground">
                  {principle.title}
                </h4>
                <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-400">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
