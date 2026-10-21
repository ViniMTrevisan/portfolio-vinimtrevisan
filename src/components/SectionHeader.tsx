import React from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  id?: string;
};

export default function SectionHeader({ eyebrow, title, desc, id }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 md:mb-20">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary md:text-[11px]">
          {eyebrow}
        </span>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-4xl font-serif text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
          {title}
        </h2>
        {desc && (
          <p className="max-w-md font-mono text-xs leading-relaxed text-zinc-400 md:text-sm">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
