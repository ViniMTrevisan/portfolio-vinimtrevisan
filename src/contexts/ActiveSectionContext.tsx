"use client";

import React, { createContext, useContext, useState } from 'react';

export type SectionId =
  | "#home"
  | "#work"
  | "#experience"
  | "#stack"
  | "#about"
  | "#contact"
  | "";

type ActiveSectionContextType = {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSection deve ser usado dentro de um ActiveSectionProvider");
  }
  return context;
}
