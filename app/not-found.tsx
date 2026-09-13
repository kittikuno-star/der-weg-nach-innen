import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { languageFromPathname } from "@/lib/languageRoutes";

const translations = {
  de: {
    title: "Seite nicht gefunden",
    text: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    action: "Zur Startseite",
    href: "/",
  },
  en: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved.",
    action: "Return home",
    href: "/en",
  },
  th: {
    title: "ไม่พบหน้าที่ต้องการ",
    text: "หน้าที่ท่านกำลังค้นหาไม่มีอยู่หรือถูกย้ายไปแล้ว",
    action: "กลับไปหน้าแรก",
    href: "/th",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const language = languageFromPathname(requestHeaders.get("x-page-pathname") ?? "/");

  return {
    title: translations[language].title,
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  const requestHeaders = await headers();
  const language = languageFromPathname(requestHeaders.get("x-page-pathname") ?? "/");
  const translation = translations[language];

  return (
    <section className="bg-[#F7F6F2] py-24 sm:py-32" aria-labelledby="not-found-heading">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[30px] bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">404</p>
          <h1 id="not-found-heading" className="mt-5 font-serif text-4xl text-[#153B36] sm:text-5xl">
            {translation.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{translation.text}</p>
          <Link
            href={translation.href}
            className="mt-8 inline-flex rounded-full bg-[#153B36] px-7 py-3.5 font-semibold text-white transition hover:bg-[#244B45]"
          >
            {translation.action}
          </Link>
        </div>
      </Container>
    </section>
  );
}
