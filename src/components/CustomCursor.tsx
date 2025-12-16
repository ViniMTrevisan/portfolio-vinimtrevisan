"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };
    const handleLinkHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Global listener for hover (simpler than attaching to every link)
    window.addEventListener('mouseover', handleLinkHoverStart);
    window.addEventListener('mouseout', handleLinkHoverEnd);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleLinkHoverStart);
      window.removeEventListener('mouseout', handleLinkHoverEnd);
    };
  }, []);

  return (
    <>
      {/* Spotlight Glow */}
      <motion.div
        className="fixed z-[9990] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 70%)',
          width: 500,
          height: 500,
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

    </>
  );
}