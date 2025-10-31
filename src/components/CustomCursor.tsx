"use client"; 

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      // document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <motion.div
      // Este é o "spotlight"
      className="fixed z-[9999] pointer-events-none 
                 w-64 h-64 opacity-15" // Aumentamos o tamanho e mudamos a opacidade
      
      // Usamos um gradiente radial para o efeito de "luz"
      style={{
        background: 'radial-gradient(circle, rgba(0,220,255,0.3) 0%, rgba(0,220,255,0) 60%)',
      }}
      
      animate={{
        x: mousePosition.x - 128, // Ajusta para centralizar o spotlight (metade do w-64)
        y: mousePosition.y - 128, // Ajusta para centralizar o spotlight (metade do h-64)
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
}