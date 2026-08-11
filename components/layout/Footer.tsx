"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { ORGANIZATION, SITE } from "@/lib/constants";
import { routes } from "@/lib/routes";

const englishNavigation = [
  { id: "home", label: "Home", href: "/en" },
  { id: "meditation", label: "Meditation", href: "/en/meditation" },
  { id: "offers", label: "Offers", href: "/en/offers" },
  { id: "courses", label: "Meditation courses", href: "/en/courses" },
  { id: "retreats", label: "Retreats", href: "/en/retreats" },
  { id: "locations", label: "Locations", href: "/en/locations" },
  { id: "inspiration", label: "Inspiration", href: "/en/inspiration" },
  { id: "about", label: "About us", href: "/en/about-us" },
  { id: "contact", label: "Contact", href: "/en/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const currentYear = new Date().getFullYear();
  const activeNavigation = isEnglish
    ? englishNavigation
    : navigation.filter((item) => item.visible);

  return (
    <footer className="border-t border-[#E8E8E8] bg-[#F8F7F4]">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href={isEnglish ? "/en" : routes.home}>
              <h2 className="font-serif text-4xl tracking-tight text-[#153B36]">{isEnglish ? "THE WAY" : "DER WEG"}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.4em] text-[#B08D57]">{isEnglish ? "WITHIN" : "NACH INNEN"}</p>
            </Link>
            <p className="mt-8 max-w-md leading-8 text-gray-600">
              {isEnglish
                ? "Meditation, mindfulness and Buddhist wisdom — open and accessible to everyone."
                : SITE.description}
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-[#153B36]">{isEnglish ? "Navigation" : "Navigation"}</h3>
            <ul className="space-y-4">
              {activeNavigation.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-gray-600 transition hover:text-[#153B36]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-[#153B36]">{isEnglish ? "Contact" : "Kontakt"}</h3>
            <div className="space-y-3 text-gray-600">
              <p>{ORGANIZATION.name}</p>
              <p>{isEnglish ? "Germany" : ORGANIZATION.country}</p>
              <a href="mailto:info@wegnachinnen.de" className="inline-block transition hover:text-[#153B36]">info@wegnachinnen.de</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E5E5E5] py-8 text-sm text-gray-500 lg:flex-row">
          <p>© {currentYear} {isEnglish ? "The Way Within" : "Der Weg nach Innen"}.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={isEnglish ? "/en/contact" : routes.contact} className="transition hover:text-[#153B36]">{isEnglish ? "Contact" : "Kontakt"}</Link>
            <Link href="/impressum" className="transition hover:text-[#153B36]">{isEnglish ? "Legal notice" : "Impressum"}</Link>
            <Link href="/datenschutz" className="transition hover:text-[#153B36]">{isEnglish ? "Privacy" : "Datenschutz"}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
