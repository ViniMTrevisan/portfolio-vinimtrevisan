"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import SectionHeader from './SectionHeader';
import { projects, Project } from '@/data/site';

type Impact = { value: string; label: string };

function StackPills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function FeaturedRow({ project, index }: { project: Project; index: number }) {
  const t = useTranslations('Work');
  const impact = t.raw(`items.${project.key}.impact`) as Impact[];
  const primaryLink = project.links[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-white/10"
    >
      <div className="grid gap-6 py-9 md:grid-cols-12 md:gap-8 md:py-12">
        <div className="md:col-span-1">
          <span className="font-mono text-xs text-primary">{project.index}</span>
        </div>

        <div className="md:col-span-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              {t(`roles.${project.roleKey}` as 'roles.role_fintech')}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              {project.year}
            </span>
          </div>

          <h3 className="mt-3 font-serif text-4xl font-bold leading-[0.95] tracking-[-0.03em] transition-colors duration-300 group-hover:text-primary md:text-6xl">
            {project.name}
          </h3>

          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-zinc-300 md:text-[15px]">
            {t(`items.${project.key}.tagline` as 'items.vanguarda.tagline')}
          </p>

          <p className="mt-3 max-w-2xl font-mono text-xs leading-relaxed text-zinc-400 md:text-[13px]">
            {t(`items.${project.key}.summary` as 'items.vanguarda.summary')}
          </p>

          <div className="mt-6">
            <StackPills items={project.stack} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 md:col-span-4 md:items-end md:text-right">
          <div className="flex gap-8 md:flex-col md:gap-5">
            {impact.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-bold leading-none text-primary md:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-1 max-w-[18ch] font-mono text-[10px] leading-snug text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {primaryLink ? (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:border-primary hover:text-primary md:self-end"
            >
              {project.links.length > 1 ? project.links.map((l) => l.label).join(' · ') : primaryLink.label}
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 md:self-end">
              {t('private')}
            </span>
          )}
        </div>
      </div>

      <span className="pointer-events-none absolute inset-y-0 -left-4 hidden w-1 origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100 md:block" />
    </motion.article>
  );
}

function OtherCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations('Work');

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
          {project.name}
        </h3>
        <span className="mt-1 shrink-0 font-mono text-[10px] text-zinc-400">{project.index}</span>
      </div>
      <p className="mt-2 font-mono text-xs font-semibold text-zinc-300">
        {t(`items.${project.key}.tagline` as 'items.vanguarda.tagline')}
      </p>
      <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-400">
        {t(`items.${project.key}.summary` as 'items.vanguarda.summary')}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded border border-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative h-full rounded-xl border border-white/10 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface"
    >
      {project.links[0] ? (
        <a
          href={project.links[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col"
        >
          {content}
          <span className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 transition-colors group-hover:text-primary">
            {t('visit')} <ArrowUpRight size={12} />
          </span>
        </a>
      ) : (
        <div className="flex h-full flex-col">{content}</div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Work');

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative w-full px-5 py-20 md:px-10 md:py-28"
      onMouseEnter={() => setActiveSection('#work')}
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
          desc={t('desc')}
        />

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-6 bg-zinc-700" />
          <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
            {t('featured_label')}
          </h3>
        </div>

        <div className="mb-20 md:mb-28">
          {featured.map((project, index) => (
            <FeaturedRow key={project.id} project={project} index={index} />
          ))}
          <div className="border-t border-white/10" />
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-6 bg-zinc-700" />
          <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
            {t('other_label')}
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => (
            <OtherCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
