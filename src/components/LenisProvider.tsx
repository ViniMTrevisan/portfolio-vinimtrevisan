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

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setLenis(newLenis); // Salvamos a instância do Lenis no estado

    return () => {
      newLenis.destroy(); // Limpamos ao sair
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