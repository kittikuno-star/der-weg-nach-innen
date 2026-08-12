import Link from "next/link";
import { BookOpen, CalendarDays, CircleHelp, Landmark, Users } from "lucide-react";

import CeremonyRegistrationForm from "@/components/forms/CeremonyRegistrationForm";
import RegistrationForm from "@/components/forms/RegistrationForm";
import SchoolVisitForm from "@/components/forms/SchoolVisitForm";
import { buddhistEvents, getBuddhistEvent } from "@/data/buddhistEvents";
import { getRetreatEvent, retreatEvents } from "@/data/retreatEvents";
import { templeLocations } from "@/data/templeLocations";
import { getWeeklyCourseGroup, getWeeklyCourseGroups } from "@/data/weeklyCourseEvents";

export type RegistrationLanguage = "de" | "en" | "th";
export type RegistrationKind = "retreat" | "meditation" | "ceremony" | "school" | "contact";

type Props = {
  language: RegistrationLanguage;
  basePath: string;
  kind?: string;
  eventId?: string;
  courseId?: string;
  ceremonyId?: string;
  templeSlug?: string;
};

const copy = {
  de: {
    eyebrow: "Zentrale Anmeldung", title: "Wofür möchten Sie sich anmelden?",
    intro: "Wählen Sie zuerst das Angebot. Danach führen wir Sie automatisch zum richtigen Formular und zum gewünschten Tempel.",
    retreat: "Retreats", retreatText: "One Day Retreats und mehrtägige Retreats",
    meditation: "Meditation", meditationText: "Regelmäßige Meditation und Meditationskurse",
    ceremony: "Buddhistische Veranstaltungen", ceremonyText: "Feiertage, Zeremonien und Tempelveranstaltungen",
    school: "Schul- und Gruppenbesuch", schoolText: "Besuch, Tempelführung oder Programm für eine Gruppe",
    contact: "Allgemeine Frage", contactText: "Wenn Sie noch nicht wissen, welches Angebot passt",
    choose: "Angebot auswählen", noOffers: "Für diesen Tempel ist derzeit kein Termin eingetragen. Bitte wählen Sie einen anderen Tempel oder stellen Sie eine allgemeine Anfrage.",
    allTemples: "Alle Tempel", back: "Andere Art der Anmeldung wählen", dateSoon: "Termin folgt in Kürze",
  },
  en: {
    eyebrow: "Central registration", title: "What would you like to register for?",
    intro: "Choose an offer first. We will then take you to the correct form and temple automatically.",
    retreat: "Retreats", retreatText: "One-day and multi-day retreats",
    meditation: "Meditation", meditationText: "Regular meditation and meditation courses",
    ceremony: "Buddhist events", ceremonyText: "Holy days, ceremonies and temple events",
    school: "School or group visit", schoolText: "Temple visit, guided tour or group programme",
    contact: "General question", contactText: "If you are not yet sure which offer is right",
    choose: "Choose offer", noOffers: "There is currently no date for this temple. Please choose another temple or send a general enquiry.",
    allTemples: "All temples", back: "Choose another registration type", dateSoon: "Date coming soon",
  },
  th: {
    eyebrow: "ศูนย์รวมการลงทะเบียน", title: "ท่านต้องการลงทะเบียนกิจกรรมใด",
    intro: "เลือกประเภทกิจกรรมก่อน แล้วระบบจะนำท่านไปยังแบบฟอร์มและวัดที่ถูกต้องโดยอัตโนมัติ",
    retreat: "ปฏิบัติธรรม", retreatText: "ปฏิบัติธรรมหนึ่งวันและหลายวัน",
    meditation: "สมาธิ", meditationText: "กิจกรรมนั่งสมาธิประจำและหลักสูตรสมาธิ",
    ceremony: "งานบุญและพิธีกรรม", ceremonyText: "วันสำคัญ พิธีกรรม และกิจกรรมของวัด",
    school: "โรงเรียนและหมู่คณะ", schoolText: "เยี่ยมชมวัด นำชม หรือจัดกิจกรรมสำหรับหมู่คณะ",
    contact: "คำถามทั่วไป", contactText: "กรณียังไม่แน่ใจว่ากิจกรรมใดเหมาะสม",
    choose: "เลือกกิจกรรม", noOffers: "ขณะนี้วัดแห่งนี้ยังไม่มีวันจัดกิจกรรม กรุณาเลือกวัดอื่นหรือส่งคำถามทั่วไป",
    allTemples: "วัดทั้งหมด", back: "เลือกประเภทการลงทะเบียนอื่น", dateSoon: "จะแจ้งกำหนดการเร็ว ๆ นี้",
  },
} as const;

function templeMatchesName(slug: string | undefined, name: string) {
  return !slug || templeLocations[slug]?.name === name;
}

export default function RegistrationHub({ language, basePath, kind, eventId, courseId, ceremonyId, templeSlug }: Props) {
  const t = copy[language];
  const selectedRetreat = getRetreatEvent(eventId);
  const selectedCourse = getWeeklyCourseGroup(courseId);
  const selectedCeremony = getBuddhistEvent(ceremonyId);
  const validTemple = templeSlug && templeLocations[templeSlug] ? templeSlug : undefined;
  const queryTemple = validTemple ? `&tempel=${encodeURIComponent(validTemple)}` : "";

  // An explicitly selected registration type must take precedence over stale
  // event/course parameters that may still be present in a copied URL.
  if (kind === "school") return <SchoolVisitForm initialTempleSlug={validTemple} />;

  if (kind === "contact") {
    const contactPath = language === "de" ? "/kontakt#kontaktformular" : language === "en" ? "/en/contact#contact-form" : "/th/contact";
    return <div className="rounded-[28px] border border-stone-200 bg-white p-8 text-center"><p className="text-lg text-slate-600">{t.contactText}</p><Link className="mt-6 inline-flex rounded-full bg-[#153B36] px-7 py-3 font-semibold text-white" href={contactPath}>{t.contact}</Link></div>;
  }

  if ((kind === "ceremony" || !kind) && selectedCeremony) return <CeremonyRegistrationForm selectedEvent={selectedCeremony} initialTempleSlug={validTemple} />;
  if ((kind === "retreat" || !kind) && selectedRetreat) return <RegistrationForm selectedRetreat={selectedRetreat} language={language} />;
  if ((kind === "meditation" || !kind) && selectedCourse) return <RegistrationForm selectedCourseGroup={selectedCourse} language={language} />;

  const itemClass = "group rounded-[28px] border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#B08D57] hover:shadow-lg";
  const kinds = [
    ["retreat", t.retreat, t.retreatText, CalendarDays],
    ["meditation", t.meditation, t.meditationText, BookOpen],
    ["ceremony", t.ceremony, t.ceremonyText, Landmark],
    ["school", t.school, t.schoolText, Users],
    ["contact", t.contact, t.contactText, CircleHelp],
  ] as const;

  let offers: Array<{ id: string; title: string; detail: string; href: string }> = [];
  if (kind === "retreat") offers = retreatEvents.filter((item) => templeMatchesName(validTemple, item.temple)).map((item) => ({ id: item.id, title: item.temple, detail: `${item.dateLabel} · ${item.time}`, href: `${basePath}?event=${item.id}${queryTemple}` }));
  if (kind === "meditation") offers = getWeeklyCourseGroups().filter((group) => group.status === "active" && templeMatchesName(validTemple, group.temple)).map((group) => ({ id: group.id, title: group.temple, detail: `${group.postalCode} ${group.city}`, href: `${basePath}?course=${group.events[0].id}${queryTemple}` }));
  if (kind === "ceremony") offers = buddhistEvents.filter((item) => !validTemple || item.templeSlugs.includes(validTemple)).flatMap((item) => item.dates.length ? item.dates.map((date) => ({ id: `${item.id}-${date.value}`, title: language === "th" && item.thaiTitle ? item.thaiTitle : item.title, detail: date.label, href: `${basePath}?ceremony=${item.id}${queryTemple}` })) : [{ id: item.id, title: language === "th" && item.thaiTitle ? item.thaiTitle : item.title, detail: t.dateSoon, href: `${basePath}?ceremony=${item.id}${queryTemple}` }]);

  if (kind === "retreat" || kind === "meditation" || kind === "ceremony") {
    return <div className="space-y-6"><Link href={basePath} className="text-sm font-semibold text-[#8C6B35]">← {t.back}</Link>{validTemple && <p className="rounded-2xl bg-[#F1E9DA] px-5 py-4 font-semibold text-[#153B36]">{templeLocations[validTemple].name} · {templeLocations[validTemple].city}</p>}<div className="grid gap-4">{offers.map((offer) => <Link key={offer.id} href={offer.href} className={itemClass}><h2 className="font-serif text-2xl text-[#153B36]">{offer.title}</h2><p className="mt-2 text-slate-600">{offer.detail}</p><span className="mt-4 inline-block font-semibold text-[#8C6B35]">{t.choose} →</span></Link>)}</div>{offers.length === 0 && <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">{t.noOffers}</div>}</div>;
  }

  return <div><div className="mb-10 text-center"><p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B08D57]">{t.eyebrow}</p><h1 className="mt-4 font-serif text-4xl text-[#153B36] md:text-5xl">{t.title}</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p></div><div className="grid gap-5 md:grid-cols-2">{kinds.map(([value, title, text, Icon]) => <Link key={value} href={`${basePath}?art=${value}`} className={itemClass}><Icon className="h-7 w-7 text-[#B08D57]"/><h2 className="mt-5 font-serif text-2xl text-[#153B36]">{title}</h2><p className="mt-3 text-slate-600">{text}</p><span className="mt-5 inline-block font-semibold text-[#8C6B35]">{t.choose} →</span></Link>)}</div></div>;
}
