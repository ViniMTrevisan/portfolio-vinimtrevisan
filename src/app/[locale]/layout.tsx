import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import ActiveSectionProvider from "@/contexts/ActiveSectionContext";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinicius Trevisan | Engenheiro de Back-End & DevOps",
  description: "Portfólio de Vinicius M. Trevisan, especialista em Java (Spring), Python, AWS, Docker e DevOps.",
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}> 
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <NextIntlClientProvider messages={messages}>
          <ActiveSectionProvider>
            <LenisProvider> 
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