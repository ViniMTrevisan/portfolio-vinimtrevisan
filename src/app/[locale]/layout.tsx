import type { Metadata, Viewport } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import ActiveSectionProvider from "@/contexts/ActiveSectionContext";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { routing } from "@/i18n/routing";

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
  metadataBase: new URL("https://portfolio-vinimtrevisan.vercel.app"),
  title: "Vinicius Trevisan — Software Engineer",
  description:
    "Engenheiro de software em Curitiba. Sistemas distribuídos, fintech, SaaS e IA aplicada — do schema ao deploy.",
  keywords: [
    "Vinicius Trevisan",
    "Software Engineer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "NestJS",
    "Next.js",
    "FastAPI",
    "Curitiba",
  ],
  authors: [{ name: "Vinicius Meier Trevisan" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Vinicius Trevisan — Software Engineer",
    description:
      "Sistemas distribuídos, fintech, SaaS e IA aplicada — do schema ao deploy.",
    type: "website",
    locale: "pt_BR",
    siteName: "Vinicius Trevisan",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vinicius Trevisan — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinicius Trevisan — Software Engineer",
    description:
      "Sistemas distribuídos, fintech, SaaS e IA aplicada — do schema ao deploy.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
