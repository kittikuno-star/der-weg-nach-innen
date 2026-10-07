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
import {
  getBuddhistEventsByTemple,
  getPastBuddhistEventDates,
  getUpcomingBuddhistEventDates,
} from "@/data/buddhistEvents";
import { getUpcomingRetreatEventsByTemple } from "@/data/retreatEvents";
import { getWeeklyCourseEventsByTemple } from "@/data/weeklyCourseEvents";
import type { TempleLocation } from "@/data/templeLocations";
import { getVenue } from "@/data/venues";

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

const heilbronnRetreatRegistrationLabel: Record<SupportedLanguage, string> = {
  de: "Zum One Day Retreat anmelden",
  en: "Register for the One Day Retreat",
  th: "ลงทะเบียน One Day Retreat",
};

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
  const regionalEvents = language === "de"
    ? getBuddhistEventsByTemple(location.slug).filter((event) => event.venueId)
    : [];
  const hasOffers = weeklyCourses.length > 0 || retreats.length > 0;
  const profile = location.profile?.[language];
  const featuredOffer = location.featuredOffer?.[language];
  const displayName =
    language === "th" ? location.nameTh ?? location.name : location.name;
  const description =
    language === "en"
      ? location.descriptionEn ?? location.description
      : language === "th"
        ? location.descriptionTh ?? location.description
        : location.description;

  return (
    <div>
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

      {profile ? (
        <section
          aria-labelledby={`temple-today-heading-${language}`}
          className="border-t border-[#E5E2DA] bg-white py-20 lg:py-24"
        >
          <Container>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <div>
                {profile.today.eyebrow ? (
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                    {profile.today.eyebrow}
                  </p>
                ) : null}
                <h2
                  id={`temple-today-heading-${language}`}
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  {profile.today.title}
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-slate-600">
                  {profile.today.description}
                </p>
                {profile.today.items?.length ? (
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {profile.today.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[22px] border border-[#E3E1DA] bg-[#FAF9F5] px-6 py-5 leading-7 text-slate-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {featuredOffer ? (
        <section
          aria-labelledby={`featured-offer-heading-${language}`}
          className="border-t border-[#E5E2DA] bg-[#F7F6F2] py-20 lg:py-24"
        >
          <Container>
            <div className="mx-auto max-w-5xl rounded-[32px] border border-[#DED9CF] bg-white px-7 py-10 shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:px-10 lg:px-14 lg:py-14">
              {featuredOffer.eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  {featuredOffer.eyebrow}
                </p>
              ) : null}
              <h2
                id={`featured-offer-heading-${language}`}
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                {featuredOffer.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {featuredOffer.description}
              </p>
              {featuredOffer.details?.length ? (
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {featuredOffer.details.map((detail) => (
                    <li
                      key={detail}
                      className="border-l-2 border-[#D6BC8C] py-2 pl-5 leading-7 text-slate-600"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link
                href={featuredOffer.href}
                className="mt-9 inline-flex rounded-full bg-[#153B36] px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {featuredOffer.linkLabel}
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      {hasOffers ? (
        <section
          aria-labelledby={`location-offers-heading-${language}`}
          className="bg-[#F7F6F2] py-20 lg:py-28"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                {profile?.currentOffers.eyebrow ?? (t.offersEyebrow as string)}
              </p>
              <h2
                id={`location-offers-heading-${language}`}
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                {profile?.currentOffers.title ??
                  (t.offersTitle as (city: string) => string)(location.city)}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {profile?.currentOffers.description ?? (t.offersText as string)}
              </p>
              {profile?.currentOffers.items?.length ? (
                <ul className="mt-7 space-y-3 text-left leading-7 text-slate-600">
                  {profile.currentOffers.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[#E2DED4] bg-white px-5 py-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
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

                        {retreat.registrationUrl ? (
                          <a
                            href={retreat.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex w-full justify-center rounded-full bg-[#153B36] px-6 py-3 text-center font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
                          >
                            {heilbronnRetreatRegistrationLabel[language]}
                          </a>
                        ) : (
                          <Link
                            href={(t.registerHref as (id: string) => string)(retreat.id)}
                            className="mt-7 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                          >
                            {t.register as string}
                          </Link>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {profile ? (
        <section
          aria-labelledby={`temple-development-heading-${language}`}
          className="border-t border-[#E5E2DA] bg-white py-20 lg:py-28"
        >
          <Container>
            <div className="mx-auto max-w-5xl rounded-[32px] border border-[#DED9CF] bg-[#FAF9F5] px-7 py-10 shadow-[0_20px_60px_rgba(21,59,54,0.06)] sm:px-10 lg:px-14 lg:py-14">
              {profile.development.eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  {profile.development.eyebrow}
                </p>
              ) : null}
              <h2
                id={`temple-development-heading-${language}`}
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                {profile.development.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {profile.development.description}
              </p>
              {profile.development.items?.length ? (
                <ul className="mt-9 grid gap-4 md:grid-cols-2">
                  {profile.development.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-[#D6BC8C] py-2 pl-5 leading-7 text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {regionalEvents.length > 0 ? (
        <section className="border-t border-[#E5DED0] bg-white py-20 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                Regionale Angebote
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                Angebote außerhalb des Tempels
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Diese Veranstaltungen werden von {location.name} organisiert
                und finden an einem externen Veranstaltungsort statt.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-8">
              {regionalEvents.map((event) => {
                const venue = getVenue(event.venueId);
                const upcomingDates = getUpcomingBuddhistEventDates(event);
                const pastDates = getPastBuddhistEventDates(event);

                if (!venue) return null;

                return (
                  <article
                    key={event.id}
                    className="rounded-[30px] border border-[#DED9CF] bg-[#FAF9F5] p-7 shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:p-10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A7644]">
                      Organisiert durch {location.name}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-[#153B36] sm:text-4xl">
                      {event.title}
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-8 grid gap-6 border-t border-[#E2DDD3] pt-7 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                        <address className="not-italic leading-7 text-slate-600">
                          <span className="block font-semibold text-[#153B36]">{venue.name}</span>
                          <span className="block">{venue.street}</span>
                          <span className="block">{venue.postalCode} {venue.city}</span>
                        </address>
                      </div>
                      <div className="leading-7 text-slate-600">
                        <p className="font-semibold text-[#153B36]">Kontakt</p>
                        {event.contactPerson ? <p>{event.contactPerson}</p> : null}
                        {event.contactEmail ? (
                          <a className="font-medium text-[#153B36] underline decoration-[#B08D57] underline-offset-4" href={`mailto:${event.contactEmail}`}>
                            {event.contactEmail}
                          </a>
                        ) : null}
                      </div>
                    </div>

                    {upcomingDates.length > 0 ? (
                      <div className="mt-9">
                        <h4 className="font-serif text-2xl text-[#153B36]">Bestätigte kommende Termine</h4>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {upcomingDates.map((date) => (
                            <li key={date.value} className="flex items-start gap-3 rounded-2xl border border-[#E2DDD3] bg-white px-5 py-4 text-slate-600">
                              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                              <span>{date.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {pastDates.length > 0 ? (
                      <div className="mt-9">
                        <h4 className="font-serif text-2xl text-[#153B36]">Vergangene Termine</h4>
                        <ul className="mt-4 space-y-2 text-slate-500">
                          {pastDates.map((date) => <li key={date.value}>{date.label}</li>)}
                        </ul>
                      </div>
                    ) : null}

                    {event.program ? (
                      <div className="mt-10">
                        <h4 className="font-serif text-2xl text-[#153B36]">Programm</h4>
                        <div className="mt-5 space-y-6">
                          {event.program.map((programItem) => (
                            <div key={programItem.time} className="grid gap-3 border-l-2 border-[#D6BC8C] pl-5 sm:grid-cols-[110px_1fr]">
                              <p className="font-semibold text-[#153B36]">{programItem.time}</p>
                              <ul className="space-y-2 text-slate-600">
                                {programItem.items.map((item) => <li key={item}>{item}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}
    </div>
  );
}
