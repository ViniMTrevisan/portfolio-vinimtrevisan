import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import ActiveSectionProvider from "@/contexts/ActiveSectionContext";
import CustomCursor from "@/components/CustomCursor";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vinicius Trevisan | Full Stack Engineer",
  description: "Portfolio of Vinicius M. Trevisan, building high-performance scalable applications with modern tech.",
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
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-white`}>
        <NextIntlClientProvider messages={messages}>
          <ActiveSectionProvider>
            <LenisProvider>
              <ScrollProgress />
              <BackgroundCanvas />
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