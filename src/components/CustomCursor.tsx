"use client";

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled || reduced) return;

    const onMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest('a, button')));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [enabled, reduced]);

  if (!enabled || reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9990] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(204,255,0,0.10) 0%, rgba(204,255,0,0) 68%)',
        width: 420,
        height: 420,
      }}
      animate={{
        x: position.x - 210,
        y: position.y - 210,
        scale: isHovering ? 1.15 : 1,
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.12 }}
    />
  );
}
