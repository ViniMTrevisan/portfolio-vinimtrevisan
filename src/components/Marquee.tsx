import React from 'react';

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: 'normal' | 'slow';
};

export default function Marquee({ items, className = '', speed = 'normal' }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-5 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 md:px-7 md:text-xs">
            {item}
          </span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-primary/50" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/10 py-4 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max ${
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
        } hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
