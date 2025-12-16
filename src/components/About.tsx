"use client";

import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useActiveSection } from '@/contexts/ActiveSectionContext';
import { useTranslations } from 'next-intl';
import { Cpu, Target, Zap } from 'lucide-react';

const AboutCard = ({ title, items, icon: Icon, delay }: { title: string, items: React.ReactNode[], icon: any, delay: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md group hover:border-primary/50 transition-colors duration-500 h-full"
    >
      {/* Spotlight Effect */}
      <div className="pointer-events-none absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"
        style={style}
      />

      <div className="relative z-20 p-8 flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg shadow-primary/5">
          <Icon size={28} />
        </div>

        <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <ul className="space-y-4 flex-grow">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-purple-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function About() {
  const { setActiveSection } = useActiveSection();
  const t = useTranslations('About');

  const richTextConfig = {
    highlight: (chunks: React.ReactNode) => <span className="text-primary font-semibold">{chunks}</span>,
    strong: (chunks: React.ReactNode) => <strong className="text-white font-semibold">{chunks}</strong>
  };

  const card1Items = [
    t.rich("card1_li1", richTextConfig),
    t.rich("card1_li2", richTextConfig),
    t.rich("card1_li3", richTextConfig),
    t.rich("card1_li4", richTextConfig)
  ];

  const card2Items = [
    t.rich("card2_li1", richTextConfig),
    t.rich("card2_li2", richTextConfig),
    t.rich("card2_li3", richTextConfig),
    t.rich("card2_li4", richTextConfig)
  ];

  const card3Items = [
    t.rich("card3_li1", richTextConfig),
    t.rich("card3_li2", richTextConfig),
    t.rich("card3_li3", richTextConfig),
    t.rich("card3_li4", richTextConfig)
  ];

  return (
    <section
      id="about"
      className="w-full py-32 px-6 relative"
      onMouseEnter={() => setActiveSection('#about')}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            {t("title")}
          </h2>
          <div className="mt-4 w-1.5 h-10 bg-gradient-to-b from-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <AboutCard
            title={t("card1_title")}
            items={card1Items}
            icon={Zap}
            delay={0}
          />
          <AboutCard
            title={t("card2_title")}
            items={card2Items}
            icon={Target}
            delay={0.2}
          />
          <AboutCard
            title={t("card3_title")}
            items={card3Items}
            icon={Cpu}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}