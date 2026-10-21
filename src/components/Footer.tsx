"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLenis } from './LenisProvider';

export default function Footer() {
  const t = useTranslations('Footer');
  const lenis = useLenis();

  return (
    <footer className="w-full border-t border-white/10 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-bold text-foreground">
            Vinicius Trevisan<span className="text-primary">.</span>
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            {t('tagline')}
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 md:justify-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
            {t('rights', { year: new Date().getFullYear() })}
          </p>
          <button
            onClick={() => lenis?.scrollTo('#home', { offset: -8 })}
            aria-label={t('back_top')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp size={13} />
            <span className="hidden sm:inline">{t('back_top')}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
