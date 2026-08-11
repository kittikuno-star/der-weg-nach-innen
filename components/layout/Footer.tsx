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
const thaiNavigation = [
  { id: "home", label: "หน้าแรก", href: "/th" }, { id: "meditation", label: "การทำสมาธิ", href: "/th/meditation" },
  { id: "offers", label: "กิจกรรม", href: "/th/offers" }, { id: "courses", label: "หลักสูตรสมาธิ", href: "/th/courses" },
  { id: "retreats", label: "ปฏิบัติธรรม", href: "/th/retreats" }, { id: "locations", label: "สถานที่", href: "/th/locations" },
  { id: "about", label: "เกี่ยวกับเรา", href: "/th/about-us" }, { id: "contact", label: "ติดต่อ", href: "/th/contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const isThai = pathname === "/th" || pathname.startsWith("/th/");
  const currentYear = new Date().getFullYear();
  const activeNavigation = isThai ? thaiNavigation : isEnglish ? englishNavigation : navigation.filter((item) => item.visible);

  return (
    <footer className="border-t border-[#E8E8E8] bg-[#F8F7F4]">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href={isThai ? "/th" : isEnglish ? "/en" : routes.home}>
              <h2 className="font-serif text-4xl tracking-tight text-[#153B36]">{isThai ? "เส้นทาง" : isEnglish ? "THE WAY" : "DER WEG"}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.4em] text-[#B08D57]">{isThai ? "สู่ความสงบภายใน" : isEnglish ? "WITHIN" : "NACH INNEN"}</p>
            </Link>
            <p className="mt-8 max-w-md leading-8 text-gray-600">
              {isThai ? "การทำสมาธิ สติ และหลักธรรมทางพระพุทธศาสนา เปิดกว้างและเข้าถึงได้สำหรับทุกคน" : isEnglish
                ? "Meditation, mindfulness and Buddhist wisdom — open and accessible to everyone."
                : SITE.description}
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-[#153B36]">{isThai ? "เมนู" : "Navigation"}</h3>
            <ul className="space-y-4">
              {activeNavigation.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-gray-600 transition hover:text-[#153B36]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-[#153B36]">{isThai ? "ติดต่อ" : isEnglish ? "Contact" : "Kontakt"}</h3>
            <div className="space-y-3 text-gray-600">
              <p>{ORGANIZATION.name}</p>
              <p>{isThai ? "ประเทศเยอรมนี" : isEnglish ? "Germany" : ORGANIZATION.country}</p>
              <a href="mailto:Kittikuno@gmail.com" className="inline-block transition hover:text-[#153B36]">Kittikuno@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E5E5E5] py-8 text-sm text-gray-500 lg:flex-row">
          <p>© {currentYear} {isThai ? "เส้นทางสู่ความสงบภายใน" : isEnglish ? "The Way Within" : "Der Weg nach innen"}.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={isThai ? "/th/contact" : isEnglish ? "/en/contact" : routes.contact} className="transition hover:text-[#153B36]">{isThai ? "ติดต่อ" : isEnglish ? "Contact" : "Kontakt"}</Link>
            <Link href={isThai ? "/th/legal-notice" : isEnglish ? "/en/legal-notice" : "/impressum"} className="transition hover:text-[#153B36]">{isThai ? "ข้อมูลทางกฎหมาย" : isEnglish ? "Legal notice" : "Impressum"}</Link>
            <Link href={isThai ? "/th/privacy" : isEnglish ? "/en/privacy" : "/datenschutz"} className="transition hover:text-[#153B36]">{isThai ? "การคุ้มครองข้อมูล" : isEnglish ? "Privacy" : "Datenschutz"}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
