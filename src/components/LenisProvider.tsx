"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

// 1. Criamos o "Contexto"
const LenisContext = createContext<Lenis | null>(null);

// 2. Criamos o nosso Provedor
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const newLenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      newLenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    setLenis(newLenis);

    return () => {
      cancelAnimationFrame(rafId);
      newLenis.destroy();
      setLenis(null);
    };
  }, []);

  // Fornecemos o 'lenis' para todos os 'children'
  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

// 3. (Opcional, mas útil) Criamos um "Hook" para facilitar o uso
// Em vez de importar o Context, só chamamos useLenis()
export const useLenis = () => {
  return useContext(LenisContext);
};