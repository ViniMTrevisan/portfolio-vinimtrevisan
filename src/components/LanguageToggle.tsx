"use client";

import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { IoLanguage } from "react-icons/io5";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const locale = params.locale as string;
  const isPortuguese = locale === "pt";

  // Remove o locale atual do pathname para construir o link
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const newLocale = isPortuguese ? "en" : "pt";

  const handleClick = () => {
    startTransition(() => {
      router.replace(`/${newLocale}${pathnameWithoutLocale}`);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="relative flex items-center gap-1 text-sm font-medium"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-white/5 border border-white/10 backdrop-blur-sm
                     text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300
                     shadow-sm ${isPending ? 'opacity-50 cursor-wait' : ''}`}
        >
          <IoLanguage className="w-4 h-4 text-primary" />
          <span className="font-mono text-xs font-bold tracking-wider">{isPortuguese ? "EN" : "PT"}</span>
        </motion.div>
      </AnimatePresence>
    </button >
  );
}