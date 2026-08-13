import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  ExternalLink,
  Globe2,
  MapPin,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { getUpcomingRetreatEventsByTemple } from "@/data/retreatEvents";
import { getWeeklyCourseEventsByTemple } from "@/data/weeklyCourseEvents";
import type { TempleLocation } from "@/data/templeLocations";

type SupportedLanguage = "de" | "en" | "th";

type TempleLocationPageProps = {
  location: TempleLocation;
  language?: SupportedLanguage;
};

const copy = {
  de: {
    back: "Zurück zu allen Standorten",
    backHref: "/standorte",
    locationLabel: "Standort",
    photoAlt: (name: string) => `Außenansicht von ${name}`,
    photoMissing: "Tempelfoto folgt",
    visitTitle: "Besuch und Anfahrt",
    visitText:
      "Bitte vereinbaren Sie Ihren Besuch vorab, damit wir sicherstellen können, dass jemand vor Ort ist.",
    contact: "Kontakt aufnehmen",
    contactHref: (slug: string) => `/kontakt?standort=${slug}`,
    website: "Website des Tempels",
    facebook: "Facebook-Seite",
    offersEyebrow: "Angebote vor Ort",
    offersTitle: (city: string) => `Meditation und Retreats in ${city}`,
    offersText:
      "Entdecken Sie die regelmäßigen Meditationsangebote und besonderen Veranstaltungstermine an diesem Standort.",
    weeklyTitle: "Regelmäßige Meditationsabende",
    weeklyEyebrow: "Wöchentliche Meditation",
    scheduleSr: "Termin",
    timeSr: "Uhrzeit",
    weeklyNote:
      "Die Teilnahme ist kostenfrei. Anfänger und Menschen mit Meditationserfahrung sind herzlich willkommen.",
    retreatTitle: "One Day Retreat",
    dateSr: "Datum",
    retreatText:
      "Ein ganzer Tag für Meditation, Achtsamkeit und innere Einkehr. Das Angebot findet in deutscher Sprache statt und ist für Anfänger sowie Fortgeschrittene geeignet.",
    register: "Jetzt anmelden",
    registerHref: (id: string) => `/anmeldung?event=${id}`,
  },
  en: {
    back: "Back to all locations",
    backHref: "/en/locations",
    locationLabel: "Location",
    photoAlt: (name: string) => `Exterior view of ${name}`,
    photoMissing: "Temple photo coming soon",
    visitTitle: "Visiting and directions",
    visitText:
      "Please arrange your visit in advance so that we can make sure someone is available to welcome you.",
    contact: "Contact us",
    contactHref: (slug: string) => `/en/contact?location=${slug}`,
    website: "Temple website",
    facebook: "Facebook page",
    offersEyebrow: "Activities at this location",
    offersTitle: (city: string) => `Meditation and retreats in ${city}`,
    offersText:
      "Discover regular meditation sessions and upcoming special events at this location.",
    weeklyTitle: "Regular meditation sessions",
    weeklyEyebrow: "Weekly meditation",
    scheduleSr: "Schedule",
    timeSr: "Time",
    weeklyNote:
      "Participation is free of charge. Beginners and experienced meditators are warmly welcome.",
    retreatTitle: "One Day Retreat",
    dateSr: "Date",
    retreatText:
      "A full day for meditation, mindfulness and inner reflection. The retreat is held in German and is suitable for beginners and experienced meditators.",
    register: "Register now",
    registerHref: (id: string) => `/en/registration?event=${id}`,
  },
  th: {
    back: "กลับไปยังสถานที่ทั้งหมด",
    backHref: "/th/locations",
    locationLabel: "สถานที่",
    photoAlt: (name: string) => `ภาพภายนอกของ ${name}`,
    photoMissing: "กำลังเพิ่มภาพวัด",
    visitTitle: "การเยี่ยมชมและการเดินทาง",
    visitText:
      "กรุณาติดต่อก่อนเดินทาง เพื่อให้เราสามารถตรวจสอบได้ว่ามีผู้ดูแลอยู่ที่วัดเพื่อต้อนรับท่าน",
    contact: "ติดต่อสอบถาม",
    contactHref: (slug: string) => `/th/contact?location=${slug}`,
    website: "เว็บไซต์ของวัด",
    facebook: "Facebook",
    offersEyebrow: "กิจกรรม ณ สถานที่นี้",
    offersTitle: (city: string) => `การทำสมาธิและ Retreat ใน ${city}`,
    offersText:
      "ดูกิจกรรมสมาธิที่จัดเป็นประจำและกิจกรรมพิเศษที่กำลังจะมาถึง ณ สถานที่แห่งนี้",
    weeklyTitle: "การทำสมาธิเป็นประจำ",
    weeklyEyebrow: "สมาธิประจำสัปดาห์",
    scheduleSr: "กำหนดการ",
    timeSr: "เวลา",
    weeklyNote:
      "เข้าร่วมได้โดยไม่มีค่าใช้จ่าย ยินดีต้อนรับทั้งผู้เริ่มต้นและผู้มีประสบการณ์",
    retreatTitle: "One Day Retreat",
    dateSr: "วันที่",
    retreatText:
      "หนึ่งวันสำหรับการทำสมาธิ การเจริญสติ และการกลับมาสู่ความสงบภายใน กิจกรรมดำเนินเป็นภาษาเยอรมัน และเหมาะสำหรับทั้งผู้เริ่มต้นและผู้มีประสบการณ์",
    register: "ลงทะเบียน",
    registerHref: (id: string) => `/th/registration?event=${id}`,
  },
} satisfies Record<SupportedLanguage, Record<string, unknown>>;

function formatCourseSchedule(
  weekday: string | undefined,
  fallback: string | undefined,
  language: SupportedLanguage,
) {
  if (language === "de") return fallback ?? weekday ?? "";

  if (language === "th") {
    const weekdayMapTh: Record<string, string> = {
      Montag: "ทุกวันจันทร์",
      Dienstag: "ทุกวันอังคาร",
      Mittwoch: "ทุกวันพุธ",
      Donnerstag: "ทุกวันพฤหัสบดี",
      Freitag: "ทุกวันศุกร์",
      Samstag: "ทุกวันเสาร์",
      Sonntag: "ทุกวันอาทิตย์",
    };

    return weekday
      ? weekdayMapTh[weekday] ?? fallback ?? weekday
      : fallback ?? "";
  }

  const weekdayMapEn: Record<string, string> = {
    Montag: "Every Monday",
    Dienstag: "Every Tuesday",
    Mittwoch: "Every Wednesday",
    Donnerstag: "Every Thursday",
    Freitag: "Every Friday",
    Samstag: "Every Saturday",
    Sonntag: "Every Sunday",
  };

  return weekday
    ? weekdayMapEn[weekday] ?? fallback ?? weekday
    : fallback ?? "";
}

function formatRetreatDate(dateValue: string, language: SupportedLanguage) {
  const locale =
    language === "en"
      ? "en-GB"
      : language === "th"
        ? "th-TH-u-ca-gregory"
        : "de-DE";
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(`${dateValue}T12:00:00+02:00`));
}

export default function TempleLocationPage({
  location,
  language = "de",
}: TempleLocationPageProps) {
  const t = copy[language];
  const weeklyCourses = getWeeklyCourseEventsByTemple(location.name);
  const retreats = getUpcomingRetreatEventsByTemple(location.name);
  const hasOffers = weeklyCourses.length > 0 || retreats.length > 0;
  const displayName =
    language === "th" ? location.nameTh ?? location.name : location.name;
  const description =
    language === "en"
      ? location.descriptionEn ?? location.description
      : language === "th"
        ? location.descriptionTh ?? location.description
        : location.description;

  return (
    <main>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <Link
            href={t.backHref as string}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#153B36] transition-colors hover:text-[#B08D57]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back as string}
          </Link>

          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#DEDCD4] bg-[#FAF9F5] shadow-[0_24px_70px_rgba(21,59,54,0.08)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[320px] bg-[#E9E7DF] lg:min-h-[560px]">
                {location.image ? (
                  <Image
                    src={location.image}
                    alt={(t.photoAlt as (name: string) => string)(displayName)}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#9A845E]">
                    {t.photoMissing as string}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
                  {t.locationLabel as string}
                </p>

                <h1 className="mt-4 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  {displayName}
                </h1>

                <div className="mt-6 flex items-start gap-3 text-slate-600">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                  <div>
                    <p className="font-semibold text-[#153B36]">
                      {location.city}
                    </p>
                    <p>{location.region}</p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-8 text-slate-600">
                  {description}
                </p>

                <div className="mt-10 rounded-[22px] border border-[#DEDCD4] bg-white p-6">
                  <h2 className="font-serif text-2xl text-[#153B36]">
                    {t.visitTitle as string}
                  </h2>
                  <address className="mt-4 not-italic leading-7 text-slate-600">
                    <span className="block font-semibold text-[#153B36]">
                      {location.street}
                    </span>
                    <span className="block">
                      {location.postalCode} {location.city}
                    </span>
                  </address>
                  <p className="mt-4 leading-7 text-slate-600">
                    {t.visitText as string}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={(t.contactHref as (slug: string) => string)(location.slug)}
                      className="inline-flex items-center justify-center rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      {t.contact as string}
                    </Link>

                    {location.website ? (
                      <a
                        href={location.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#153B36] bg-white px-6 py-3 font-semibold text-[#153B36] transition-colors hover:bg-[#F1F4F2]"
                      >
                        <Globe2 className="h-4 w-4" />
                        {t.website as string}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}

                    {location.facebook ? (
                      <a
                        href={location.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8D5CC] bg-white px-6 py-3 font-semibold text-[#153B36] transition-colors hover:border-[#153B36] hover:bg-[#F7F6F2]"
                      >
                        {t.facebook as string}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {hasOffers ? (
        <section
          aria-labelledby={`location-offers-heading-${language}`}
          className="bg-[#F7F6F2] py-20 lg:py-28"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                {t.offersEyebrow as string}
              </p>
              <h2
                id={`location-offers-heading-${language}`}
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                {(t.offersTitle as (city: string) => string)(location.city)}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t.offersText as string}
              </p>
            </div>

            {weeklyCourses.length > 0 ? (
              <div className="mt-14">
                <h3 className="font-serif text-3xl text-[#153B36]">
                  {t.weeklyTitle as string}
                </h3>

                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  {weeklyCourses.map((course) => (
                    <article
                      key={course.id}
                      className="rounded-[28px] border border-[#E3E1DA] bg-white p-7 shadow-[0_18px_50px_rgba(21,59,54,0.06)] sm:p-8"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                        {t.weeklyEyebrow as string}
                      </p>

                      <dl className="mt-6 space-y-4 text-slate-600">
                        <div className="flex items-start gap-3">
                          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                          <div>
                            <dt className="sr-only">{t.scheduleSr as string}</dt>
                            <dd className="font-semibold text-[#153B36]">
                              {formatCourseSchedule(
                                course.weekday,
                                course.schedule,
                                language,
                              )}
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                          <div>
                            <dt className="sr-only">{t.timeSr as string}</dt>
                            <dd>
                              {language === "th"
                                ? course.time?.replace(" Uhr", " น.")
                                : language === "en"
                                  ? course.time?.replace(" Uhr", "")
                                  : course.time}
                            </dd>
                          </div>
                        </div>
                      </dl>

                      <p className="mt-6 text-sm leading-6 text-slate-500">
                        {t.weeklyNote as string}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {retreats.length > 0 ? (
              <div className="mt-14">
                <h3 className="font-serif text-3xl text-[#153B36]">
                  {t.retreatTitle as string}
                </h3>

                <div className="mt-7 grid gap-6 lg:grid-cols-2">
                  {retreats.map((retreat) => (
                    <article
                      key={retreat.id}
                      className="overflow-hidden rounded-[28px] border border-[#DDD9CF] bg-white shadow-[0_20px_60px_rgba(21,59,54,0.08)]"
                    >
                      <div className="relative aspect-[16/9] bg-[#E9E7DF]">
                        <Image
                          src={retreat.image}
                          alt={retreat.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/45 via-transparent to-transparent" />
                        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#153B36] shadow-sm">
                          One Day Retreat
                        </div>
                      </div>

                      <div className="p-7 sm:p-8">
                        <dl className="space-y-4 text-slate-600">
                          <div className="flex items-start gap-3">
                            <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                            <div>
                              <dt className="sr-only">{t.dateSr as string}</dt>
                              <dd className="font-semibold text-[#153B36]">
                                {formatRetreatDate(retreat.dateValue, language)}
                              </dd>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                            <div>
                              <dt className="sr-only">{t.timeSr as string}</dt>
                              <dd>
                                {language === "th"
                                  ? retreat.time.replace(" Uhr", " น.")
                                  : language === "en"
                                    ? retreat.time.replace(" Uhr", "")
                                    : retreat.time}
                              </dd>
                            </div>
                          </div>
                        </dl>

                        <p className="mt-6 leading-7 text-slate-600">
                          {t.retreatText as string}
                        </p>

                        <Link
                          href={(t.registerHref as (id: string) => string)(retreat.id)}
                          className="mt-7 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                          {t.register as string}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}
    </main>
  );
}
