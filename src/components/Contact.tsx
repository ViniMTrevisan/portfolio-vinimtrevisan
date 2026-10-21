"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import SectionHeader from './SectionHeader';
import { socials } from '@/data/site';

export default function Contact() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('Contact');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const channels = [
    {
      id: 'email',
      label: t('email_label'),
      value: socials.email,
      href: `mailto:${socials.email}`,
      icon: Mail,
      external: false,
    },
    {
      id: 'linkedin',
      label: t('linkedin_label'),
      value: 'in/vinicius-meier-trevisan',
      href: socials.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      id: 'github',
      label: t('github_label'),
      value: 'ViniMTrevisan',
      href: socials.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-white/10 bg-surface px-5 py-20 md:px-10 md:py-28"
      onMouseEnter={() => setActiveSection('#contact')}
    >
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={
            <>
              {t('title_1')} <span className="text-primary">{t('title_2')}</span>
            </>
          }
          desc={t('desc')}
        />

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <a
              href={`mailto:${socials.email}`}
              className="group inline-block max-w-full"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                {t('email_label')}
              </span>
              <span className="mt-2 block break-all font-serif text-[clamp(1.6rem,5.2vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-primary">
                {socials.email}
              </span>
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:border-primary hover:text-primary"
              >
                {copied ? <Check size={13} className="text-primary" /> : <Copy size={13} />}
                {copied ? t('copied') : t('copy')}
              </button>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t('availability')}
              </span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid gap-3">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <motion.a
                    key={channel.id}
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="group flex items-center justify-between rounded-lg border border-white/10 bg-background/60 px-5 py-4 transition-all duration-300 hover:border-primary/40 hover:bg-background"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} className="text-primary" />
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                          {channel.label}
                        </p>
                        <p className="font-mono text-xs text-zinc-300">{channel.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
