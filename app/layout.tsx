import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import { SITE } from "@/lib/constants";
import { DEFAULT_DESCRIPTIONS, DEFAULT_TITLES, alternatesForPath, socialMetadataForPath } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get("x-page-pathname") ?? "/";
  const language = (requestHeaders.get("x-page-language") ?? "de") as keyof typeof DEFAULT_TITLES;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: DEFAULT_TITLES[language],
      template: language === "en" ? "%s | The Way Within" : language === "th" ? "%s | เส้นทางสู่ความสงบภายใน" : "%s | Der Weg nach innen",
    },
    description: DEFAULT_DESCRIPTIONS[language],
    alternates: alternatesForPath(pathname),
    ...socialMetadataForPath(pathname),
  };
}

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const requestHeaders = await headers();
  const language = requestHeaders.get("x-page-language") ?? "de";

  return (
    <html
      lang={language}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollProgress />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <BackToTop />

        <Footer />
      </body>
    </html>
  );
}
