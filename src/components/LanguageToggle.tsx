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
          className={`flex items-center gap-1 bg-zinc-200 dark:bg-zinc-700 
                     text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full
                     hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors
                     ${isPending ? 'opacity-50 cursor-wait' : ''}`}
        >
          <IoLanguage className="w-4 h-4" />
          {isPortuguese ? "EN" : "PT"}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}