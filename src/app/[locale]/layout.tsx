import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import ActiveSectionProvider from "@/contexts/ActiveSectionContext";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vinicius Trevisan | Backend Developer",
  description: "Portfolio of Vinicius M. Trevisan - Combining technical expertise with editorial design and security protocols.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${playfair.variable} ${jetbrains.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black`}>
        <NextIntlClientProvider messages={messages}>
          <ActiveSectionProvider>
            <LenisProvider>
              <ScrollProgress />
              <Navbar />
              <CustomCursor />
              {children}
            </LenisProvider>
          </ActiveSectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}