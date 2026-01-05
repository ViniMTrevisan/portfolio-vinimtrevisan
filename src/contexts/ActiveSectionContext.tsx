"use client";

import React, { createContext, useContext, useState } from 'react';

// Este é o "tipo" de seção que podemos ter
export type SectionId = "#home" | "#about" | "#experience" | "#technologies" | "#projects" | "#contact" | "";

// Definimos o que o nosso Contexto vai "guardar"
type ActiveSectionContextType = {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
};

// Criamos o Contexto
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// Este é o "Provedor" que vai "envelopar" nosso site
export default function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Este é o "Hook" que nossos componentes vão usar para "ler" o cérebro
export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection deve ser usado dentro de um ActiveSectionProvider"
    );
  }
  return context;
}