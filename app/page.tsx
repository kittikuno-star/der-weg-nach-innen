import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Flower2,
  MapPin,
  Sparkles,
  SunMedium,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Meditation und Buddhismus in Deutschland | Der Weg nach innen",
  description:
    "Meditation, Retreats und buddhistische Weisheit von Wat Phra Dhammakaya Deutschland.",
};

const offers = [
  {
    eyebrow: "Meditation",
    title: "Zur Ruhe kommen",
    text: "Ein verständlicher Einstieg – offen für Anfänger und Menschen mit Erfahrung.",
    href: "/meditation",
    image: "/images/courses/course-introduction-01.png",
  },
  {
    eyebrow: "Wochenkurse",
    title: "Gemeinsam üben",
    text: "Regelmäßige Meditation vor Ort und online für eine beständige Praxis.",
    href: "/kurse",
    image: "/images/courses/course-weekly-01.png",
  },
  {
    eyebrow: "Retreats",
    title: "Zeit für Stille",
    text: "Ein ganzer Tag, um Abstand zu gewinnen, neue Kraft zu sammeln und nach innen zu hören.",
    href: "/retreats",
    image: "/images/courses/course-retreat-01.png",
  },
];

const locations = [
  {
    name: "Wat Phra Dhammakaya Bavaria",
    city: "Königsbrunn bei Augsburg",
    href: "/standorte/bavaria",
  },
  {
    name: "Wat Phra Dhammakaya Rheinland",
    city: "Ingelheim am Rhein",
    href: "/standorte/rheinland",
  },
  {
    name: "Wat Buddha Nordrhein-Westfalen",
    city: "Moers",
    href: "/standorte/nrw",
  },
  {
    name: "Wat Buddha Heilbronn",
    city: "Wüstenrot",
    href: "/standorte/heilbronn",
  },
  {
    name: "Wat Phra Dhammakaya Schwarzwald",
    city: "Kippenheim",
    href: "/standorte/schwarzwald",
  },
  {
    name: "Wat Phra Dhammakaya Hamburg",
    city: "Gerdau",
    href: "/standorte/hamburg",
  },
  {
    name: "Wat Phra Dhammakaya Berlin",
    city: "Blankenfelde-Mahlow",
    href: "/standorte/berlin",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden bg-[#102F2B] text-white sm:min-h-[680px] lg:min-h-[calc(100svh-5rem)]">
        <Image
          src="/images/hero/hero-01.png"
          alt="Ruhige Landschaft im warmen Morgenlicht"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-center lg:motion-safe:animate-[heroZoom_16s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2522]/92 via-[#0B2522]/58 to-[#0B2522]/18 sm:from-[#0B2522]/90 sm:via-[#0B2522]/48 sm:to-[#0B2522]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2522]/75 via-transparent to-black/10" />

        <Container className="relative flex min-h-[620px] items-center py-16 sm:min-h-[680px] sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E2CFA8] min-[390px]:text-xs min-[390px]:tracking-[0.28em] sm:text-sm sm:tracking-[0.34em]">
              Meditation · Kurse · Retreats
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-[2.8rem] leading-[1.02] tracking-[-0.025em] min-[390px]:text-[3.2rem] sm:mt-7 sm:text-6xl lg:text-[5.4rem]">
              Meditation für mehr
              <span className="block text-[#E4CFA7]">
                Ruhe und Klarheit
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 min-[390px]:text-lg min-[390px]:leading-8 sm:mt-8 sm:text-xl">
              Entdecken Sie Meditationskurse, Retreats und buddhistische
              Angebote in unseren Tempeln in Deutschland. Unsere Angebote stehen
              Anfängern ebenso offen wie Menschen mit Meditationserfahrung.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[390px]:gap-4 sm:mt-10 sm:flex-row">
              <Button
                href="/#meditationsangebote"
                size="lg"
                variant="secondary"
                className="w-full justify-center sm:w-auto"
              >
                Angebote ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/standorte"
                size="lg"
                className="w-full justify-center border border-white/30 bg-white/10 text-white shadow-none backdrop-blur-md hover:bg-white hover:text-[#153B36] sm:w-auto"
              >
                Standorte entdecken
              </Button>
            </div>
          </div>
        </Container>

        <a
          href="#warum-meditation"
          aria-label="Zum nächsten Abschnitt"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/65 transition hover:text-white lg:flex"
        >
          Entdecken
          <ArrowDown className="h-5 w-5 motion-safe:animate-bounce" />
        </a>
      </section>

      <section className="border-b border-[#E5DED0] bg-[#F7F4ED] py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <FadeIn>
              <div className="relative mx-auto aspect-[1054/1492] w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(21,59,54,0.12)]">
                <Image
                src="/images/events/kathinafest-bavaria-2026.webp"
                  alt="Plakat zum Kathinafest 2026 im Wat Phra Dhammakaya Bavaria"
                  fill
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  className="object-contain"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                  Aktuelle Tempelveranstaltung
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl lg:text-6xl">
                  Kathinafest 2026 in Königsbrunn
                </h2>

                <div className="mt-7 space-y-4 text-lg text-slate-600">
                  <p className="flex items-start gap-3">
                    <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                    <span>Sonntag, 8. November 2026 · Beginn 9:30 Uhr</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                    <span>Wat Phra Dhammakaya Bavaria, Heinkelstraße 1, 86343 Königsbrunn</span>
                  </p>
                </div>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  Alle Interessierten sind herzlich willkommen. Zum Programm
                  gehören die Kathinazeremonie, Rezitationen, Dhammaimpulse,
                  ein gemeinsames Mittagessen und Zeit für Begegnung.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://forms.gle/kyCfxFFEoYfo8Vs1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#153B36] px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Jetzt anmelden
                  </a>
                  <a
                    href="https://watbavaria.de/?p=168"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#153B36] bg-white px-7 py-3 font-semibold text-[#153B36] transition-colors hover:bg-[#EEF2EF]"
                  >
                    Zur Tempelwebseite
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="warum-meditation" className="bg-[#F7F4ED] py-24 lg:py-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <FadeIn>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                  Warum Meditation?
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#153B36] sm:text-5xl lg:text-6xl">
                  Ein Moment der Stille kann alles verändern.
                </h2>
                <p className="mt-7 text-lg leading-8 text-slate-600">
                  Meditation schenkt Klarheit, Frieden und neue Kraft für den
                  Alltag. Sie brauchen keine Vorkenntnisse und müssen nichts
                  leisten.
                </p>
                <Link
                  href="/meditation"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#153B36] underline decoration-[#B08D57]/50 underline-offset-8 transition hover:decoration-[#B08D57]"
                >
                  Mehr über Meditation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(21,59,54,0.13)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/meditation/why-meditation-01.png"
                  alt="Meditation in ruhiger Atmosphäre"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition duration-1000 hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/22 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="meditationsangebote" className="scroll-mt-24 bg-white py-24 lg:py-36">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                Unsere Angebote
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl lg:text-6xl">
                Für Ihren persönlichen Weg
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Beginnen Sie in Ihrem eigenen Tempo – vor Ort, online oder an
                einem stillen Retreat-Tag.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <FadeIn key={offer.title} delay={index * 0.08}>
                <Link
                  href={offer.href}
                  className="group block h-full overflow-hidden rounded-[30px] border border-[#E8E3D8] bg-[#FBFAF7] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(21,59,54,0.11)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={offer.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-9">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9A7644]">
                      {offer.eyebrow}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl text-[#153B36]">
                      {offer.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">{offer.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section id="retreat" className="relative min-h-[680px] scroll-mt-24 overflow-hidden bg-[#153B36] text-white">
        <Image
          src="/images/retreat/retreat-hero-01.png"
          alt="Ein stiller Ort für Meditation und Rückzug"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2C28]/92 via-[#0C2C28]/55 to-transparent" />

        <Container className="relative flex min-h-[680px] items-center py-24">
          <FadeIn>
            <div className="max-w-xl">
              <SunMedium className="h-8 w-8 text-[#D9BE89]" strokeWidth={1.5} />
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#D9BE89]">
                Zeit für Stille
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[1.03] sm:text-6xl">
                Schalten Sie ab.
                <span className="block text-[#E4CFA7]">Kommen Sie an.</span>
              </h2>
              <p className="mt-7 text-lg leading-8 text-white/75">
                Unsere Retreats schaffen Raum zum Auftanken, Vertiefen und
                bewussten Innehalten.
              </p>
              <Button href="/retreats" size="lg" variant="secondary" className="mt-9">
                Retreats entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-[#F7F4ED] py-24 lg:py-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(21,59,54,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/inspiration/inspiration-buddhist-wisdom-01.png"
                  alt="Buddhistische Weisheit in ruhiger Bildsprache"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102F2B]/25 via-transparent to-transparent" />
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="max-w-xl lg:pl-6">
                <Flower2 className="h-8 w-8 text-[#B08D57]" strokeWidth={1.5} />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                  Buddhistische Weisheit
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#153B36] sm:text-5xl lg:text-6xl">
                  Seit über 2.500 Jahren finden Menschen Orientierung nach innen.
                </h2>
                <p className="mt-7 text-lg leading-8 text-slate-600">
                  Die Lehre des Buddha zeigt zeitlose Wege zu Klarheit,
                  Mitgefühl und einem bewussteren Leben.
                </p>
                <Link
                  href="/inspiration"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#153B36] underline decoration-[#B08D57]/50 underline-offset-8 transition hover:decoration-[#B08D57]"
                >
                  Inspiration entdecken
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-[#153B36] py-24 text-white lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <FadeIn>
              <div className="max-w-xl">
                <MapPin className="h-8 w-8 text-[#D6BC8C]" strokeWidth={1.5} />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#D6BC8C]">
                  Willkommen im Tempel
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Orte der Stille für alle Menschen.
                </h2>
                <p className="mt-7 text-lg leading-8 text-white/68">
                  Besuchen Sie unsere Tempel, lernen Sie die Gemeinschaft kennen
                  und erleben Sie Meditation in einer ruhigen Atmosphäre.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-5 sm:grid-cols-2">
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className={index === locations.length - 1 ? "sm:col-span-2" : undefined}
                >
                  <FadeIn delay={index * 0.06}>
                    <Link
                      href={location.href}
                      className="group flex h-full items-center justify-between gap-6 rounded-[28px] border border-white/12 bg-white/[0.055] p-7 transition duration-300 hover:border-[#D6BC8C]/45 hover:bg-white/[0.09] sm:p-8"
                    >
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl">
                          {location.name}
                        </h3>
                        <p className="mt-2 text-white/60">{location.city}</p>
                      </div>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/18 text-[#D6BC8C] transition group-hover:translate-x-1 group-hover:bg-[#D6BC8C] group-hover:text-[#153B36]">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </Link>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#0D2F2B] py-24 text-white lg:py-32">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B08D57]/10 blur-3xl" />
        <Container className="relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Sparkles className="mx-auto h-8 w-8 text-[#D6BC8C]" strokeWidth={1.5} />
              <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Bereit für Ihren nächsten Schritt?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Beginnen Sie dort, wo es für Sie stimmig ist – mit einem Kurs,
                einem Retreat oder einem Besuch im Tempel.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/anmeldung" size="lg" variant="secondary">
                  Jetzt starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  href="/kontakt"
                  size="lg"
                  className="border border-white/25 bg-transparent text-white shadow-none hover:bg-white hover:text-[#153B36]"
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
