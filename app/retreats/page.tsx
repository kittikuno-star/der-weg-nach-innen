import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarDays,
  Euro,
  CheckCircle2,
  Clock3,
  Coffee,
  Flower2,
  HeartHandshake,
  HelpCircle,
  Leaf,
  MapPin,
  MoonStar,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { retreatEvents } from "@/data/retreatEvents";

export const metadata: Metadata = {
  title: "Retreats | Der Weg nach innen",
  description:
    "Entdecken Sie Meditationstage und Retreats von Wat Phra Dhammakaya in Deutschland. Zeit für Ruhe, Achtsamkeit und neue innere Klarheit.",
};

const currentRetreats = retreatEvents;

const benefits = [
  {
    icon: Leaf,
    title: "Bewusst zur Ruhe kommen",
    text: "Sie lassen den Alltag für einige Stunden hinter sich und geben Körper und Geist die Möglichkeit, sich zu entspannen.",
  },
  {
    icon: Sparkles,
    title: "Meditation vertiefen",
    text: "Mehrere angeleitete Meditationseinheiten helfen Ihnen dabei, Ihre Aufmerksamkeit behutsam nach innen zu richten.",
  },
  {
    icon: HeartHandshake,
    title: "In Gemeinschaft üben",
    text: "Die gemeinsame Praxis schafft eine unterstützende und wertschätzende Atmosphäre.",
  },
];

const retreatExperiences = [
  {
    icon: Flower2,
    title: "Angeleitete Meditation",
    text: "Die Meditationen werden ruhig und verständlich erklärt. Sie können jederzeit in Ihrem eigenen Tempo üben.",
  },
  {
    icon: Sun,
    title: "Achtsame Pausen",
    text: "Zwischen den Meditationen gibt es Raum für Stille, Bewegung, Tee und persönliche Erholung.",
  },
  {
    icon: Coffee,
    title: "Gemeinsame Mahlzeit",
    text: "Bei Tagesretreats gehört je nach Veranstaltung eine einfache gemeinsame Mahlzeit zum Tagesablauf.",
  },
  {
    icon: MoonStar,
    title: "Dhamma und Reflexion",
    text: "Buddhistische Impulse unterstützen Sie dabei, Ihre Meditation mit dem täglichen Leben zu verbinden.",
  },
];

const retreatSchedule = [
  {
    time: "09:30 Uhr",
    title: "Ankommen und Registrierung",
    text: "Ankommen, registrieren und in Ruhe am Veranstaltungsort eintreffen.",
  },
  {
    time: "10:00 Uhr",
    title: "Begrüßung und Einführung",
    text: "Begrüßung der Teilnehmenden und Einführung in den Ablauf des Retreat-Tages.",
  },
  {
    time: "10:30 Uhr",
    title: "Meditation I",
    text: "Eine angeleitete Meditation zum Ankommen, Entspannen und bewussten Wahrnehmen.",
  },
  {
    time: "11:15 Uhr",
    title: "Dhamma-Vortrag",
    text: "Ein verständlicher buddhistischer Impuls als Unterstützung für die eigene Praxis.",
  },
  {
    time: "12:00 Uhr",
    title: "Achtsames Mittagessen in Stille",
    text: "Gemeinsames Mittagessen in einer ruhigen und achtsamen Atmosphäre.",
  },
  {
    time: "13:30 Uhr",
    title: "Meditation II",
    text: "Eine weitere angeleitete Meditation zur Vertiefung der inneren Ruhe.",
  },
  {
    time: "14:30 Uhr",
    title: "Dhamma-Vortrag",
    text: "Weitere Impulse zur Meditation und zur Anwendung im täglichen Leben.",
  },
  {
    time: "15:00 Uhr",
    title: "Tee-Pause",
    text: "Zeit für Tee, Erholung und eine bewusste Pause.",
  },
  {
    time: "15:30 Uhr",
    title: "Meditation III",
    text: "Eine vertiefende Meditationseinheit am Nachmittag.",
  },
  {
    time: "16:20 Uhr",
    title: "Metta-Meditation",
    text: "Meditation der liebenden Güte für sich selbst und andere.",
  },
  {
    time: "16:45 Uhr",
    title: "Fragen und Austausch",
    text: "Gelegenheit für Fragen, persönliche Reflexion und gemeinsamen Austausch.",
  },
  {
    time: "17:00 Uhr",
    title: "Abschluss",
    text: "Gemeinsamer Abschluss des One Day Retreats.",
  },
];

const suitableFor = [
  "Menschen ohne Meditationserfahrung",
  "Meditierende, die ihre Praxis vertiefen möchten",
  "Menschen, die eine bewusste Pause vom Alltag suchen",
  "Teilnehmende, die Ruhe und Gemeinschaft verbinden möchten",
  "Menschen mit Interesse an buddhistischer Weisheit",
  "Alle, die neue Kraft und innere Klarheit entwickeln möchten",
];

const frequentlyAskedQuestions = [
  {
    question: "Benötige ich bereits Meditationserfahrung?",
    answer:
      "Nein. Unsere Meditationstage und Retreats sind grundsätzlich auch für Anfänger geeignet. Alle Übungen werden verständlich und Schritt für Schritt angeleitet.",
  },
  {
    question: "Muss ich auf dem Boden sitzen?",
    answer:
      "Nein. Sie können auf einem Meditationskissen oder auf einem Stuhl meditieren. Entscheidend ist eine bequeme und stabile Sitzhaltung.",
  },
  {
    question: "Was sollte ich zu einem Retreat mitbringen?",
    answer:
      "Bitte tragen Sie bequeme Kleidung. Je nach Veranstaltungsort können eine leichte Decke, warme Socken und eine Trinkflasche hilfreich sein. Genauere Hinweise erhalten Sie mit der Anmeldung.",
  },
  {
    question: "Ist ein Retreat vollständig schweigend?",
    answer:
      "Nicht jeder Meditationstag ist ein Schweige-Retreat. Es gibt ruhige Phasen, angeleitete Meditationen sowie je nach Programm Austausch und Dhamma-Impulse.",
  },
  {
    question: "Entstehen Kosten für die Teilnahme?",
    answer:
      "Bei einigen Veranstaltungen wird ein Selbstkostenbeitrag erhoben, beispielsweise für Verpflegung oder Raumnutzung. Die genaue Höhe wird jeweils bei der Anmeldung angegeben.",
  },
];

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meditationstage und Retreats"
        title="Zeit für Stille."
        highlightedTitle="Raum für neue Klarheit."
        description="Ein Retreat schenkt Ihnen die Möglichkeit, den Alltag bewusst zu unterbrechen, zur Ruhe zu kommen und Ihre Meditation in einer unterstützenden Atmosphäre zu vertiefen."
        icon={MoonStar}
        headingId="retreats-page-heading"
        primaryButton={{
          label: "Aktuelle Retreats ansehen",
          href: "#aktuelle-retreats",
        }}
        secondaryButton={{
          label: "Fragen zum Retreat",
          href: "/kontakt",
        }}
      />

      <section
        id="aktuelle-retreats"
        aria-labelledby="current-retreats-heading"
        className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                Aktuelle Termine
              </p>
              <h2
                id="current-retreats-heading"
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                One Day Retreats im August 2026
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Ein ganzer Tag für Meditation, Achtsamkeit und innere Einkehr.
                Beide Angebote finden in deutscher Sprache statt und sind für
                Anfänger sowie Fortgeschrittene geeignet.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {currentRetreats.map((retreat, index) => (
              <FadeIn key={retreat.temple} delay={index * 0.1}>
                <article className="group h-full overflow-hidden rounded-[30px] border border-[#DDD9CF] bg-white shadow-[0_20px_60px_rgba(21,59,54,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(21,59,54,0.12)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7DF]">
                    <Image
                      src={retreat.image}
                      alt={retreat.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#153B36]/35 via-transparent to-transparent"
                    />
                    <div className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#153B36] shadow-sm backdrop-blur-sm">
                      One Day Retreat
                    </div>
                  </div>

                  <div className="p-7 sm:p-9">
                    <h3 className="font-serif text-3xl leading-tight text-[#153B36]">
                      {retreat.temple}
                    </h3>

                    <dl className="mt-7 space-y-4 text-slate-600">
                      <div className="flex items-start gap-3">
                        <CalendarDays aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" strokeWidth={1.8} />
                        <div><dt className="sr-only">Datum</dt><dd>{retreat.dateLabel}</dd></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" strokeWidth={1.8} />
                        <div><dt className="sr-only">Uhrzeit</dt><dd>{retreat.time}</dd></div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" strokeWidth={1.8} />
                        <div className="flex items-start gap-3">
  <MapPin
    aria-hidden="true"
    className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
    strokeWidth={1.8}
  />

  <div>
    <dt className="sr-only">Adresse</dt>

    <dd className="leading-7">
      <span className="block font-medium text-[#153B36]">
        {retreat.street}
      </span>

      <span className="block">
        {retreat.postalCode} {retreat.city}
      </span>
    </dd>
  </div>
</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Euro aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" strokeWidth={1.8} />
                        <div><dt className="sr-only">Teilnahmebeitrag</dt><dd>Teilnahmebeitrag: {retreat.price}</dd></div>
                      </div>
                    </dl>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button href={`/anmeldung?event=${retreat.id}`} className="w-full sm:w-auto">
                        Jetzt anmelden
                      </Button>
                      <Button href="#tagesprogramm" variant="outline" className="w-full sm:w-auto">
                        Programm ansehen
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-10 rounded-[24px] border border-[#DED9CD] bg-white px-6 py-5 text-center text-slate-600 sm:px-8">
              <span className="font-semibold text-[#153B36]">Im Teilnahmebeitrag enthalten:</span>{" "}
              geführte Meditationen, Dhamma-Vorträge, Mittagessen und Tee-Pause.
            </div>
          </FadeIn>
        </Container>
      </section>

      <section
        aria-labelledby="retreat-introduction-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative overflow-hidden rounded-[34px] bg-[#EAE7DF] shadow-[0_26px_90px_rgba(21,59,54,0.12)]">
                <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image
                    src="/images/meditation/retreat-hero-01.png"
                    alt="Ruhige Meditation in einem hellen und friedlichen Raum"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#153B36]/35 via-transparent to-transparent"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Eine bewusste Auszeit
                </p>

                <h2
                  id="retreat-introduction-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Wenn der Alltag leiser wird, kann das Innere hörbar werden
                </h2>

                <div className="mt-7 space-y-6 text-lg leading-8 text-slate-600">
                  <p>
                    Im Alltag richtet sich unsere Aufmerksamkeit häufig nach
                    außen. Termine, Aufgaben und Erwartungen lassen nur wenig
                    Raum, um die eigenen Gedanken und Gefühle bewusst
                    wahrzunehmen.
                  </p>

                  <p>
                    Ein Meditationstag oder Retreat bietet Ihnen einen
                    geschützten Rahmen, um langsamer zu werden und wieder einen
                    klareren Zugang zu Ihrer inneren Ruhe zu finden.
                  </p>

                  <p>
                    Dabei geht es nicht um Leistung. Sie müssen nichts
                    erreichen. Sie dürfen ankommen, loslassen und Schritt für
                    Schritt lernen, Ihrem Geist mit Geduld und Freundlichkeit
                    zu begegnen.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-3 rounded-full bg-[#F4F1EA] px-5 py-3 text-sm font-semibold text-[#153B36]">
                    <Clock3
                      aria-hidden="true"
                      className="h-4 w-4 text-[#B08D57]"
                      strokeWidth={1.8}
                    />
                    Tages- und mehrtägige Angebote
                  </div>

                  <div className="inline-flex items-center gap-3 rounded-full bg-[#F4F1EA] px-5 py-3 text-sm font-semibold text-[#153B36]">
                    <Users
                      aria-hidden="true"
                      className="h-4 w-4 text-[#B08D57]"
                      strokeWidth={1.8}
                    />
                    Für Anfänger geeignet
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="retreat-benefits-heading"
        className="bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Warum ein Retreat?
            </p>

            <h2
              id="retreat-benefits-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Eine Pause, die über den Moment hinauswirkt
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ein Retreat schafft Zeit und Raum, um neue Kraft zu sammeln und
              eine achtsamere Beziehung zu sich selbst zu entwickeln.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <FadeIn key={benefit.title} delay={index * 0.12}>
                  <article className="group h-full rounded-[28px] border border-[#E2E1DB] bg-white p-8 shadow-[0_16px_50px_rgba(21,59,54,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:shadow-[0_24px_70px_rgba(21,59,54,0.09)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8] transition-transform duration-500 group-hover:scale-105">
                      <BenefitIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3 className="mt-7 font-serif text-2xl text-[#153B36]">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {benefit.text}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="retreat-angebot"
        aria-labelledby="retreat-experience-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Ihr Retreat-Erlebnis
                </p>

                <h2
                  id="retreat-experience-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Was Sie während eines Retreats erwartet
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Unsere Programme verbinden Meditation, Stille, buddhistische
                  Impulse und bewusste Pausen zu einem ausgewogenen Tagesablauf.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2">
              {retreatExperiences.map((experience, index) => {
                const ExperienceIcon = experience.icon;

                return (
                  <FadeIn key={experience.title} delay={index * 0.08}>
                    <article className="group h-full rounded-[26px] border border-[#E7E8E4] bg-[#FAFAF8] p-7 transition-all duration-500 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_20px_60px_rgba(21,59,54,0.07)]">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#153B36] p-3 text-[#E7D7B8]">
                        <ExperienceIcon
                          aria-hidden="true"
                          className="h-6 w-6"
                          strokeWidth={1.7}
                        />
                      </div>

                      <h3 className="mt-6 font-serif text-2xl text-[#153B36]">
                        {experience.title}
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {experience.text}
                      </p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="tagesprogramm"
        aria-labelledby="retreat-schedule-heading"
        className="scroll-mt-24 bg-[#153B36] py-20 text-white lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#E7D7B8]">
                  <CalendarDays
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.6}
                  />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Tagesprogramm
                </p>

                <h2
                  id="retreat-schedule-heading"
                  className="mt-5 font-serif text-4xl leading-tight sm:text-5xl"
                >
                  Ablauf des One Day Retreats
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/70">
                  Der Retreat-Tag beginnt um 09:30 Uhr und endet um 17:00 Uhr.
                  Meditation, Dhamma-Vorträge und bewusste Pausen wechseln sich
                  in einem ruhigen Tagesrhythmus ab.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {retreatSchedule.map((item, index) => (
                <FadeIn key={`${item.time}-${item.title}`} delay={index * 0.06}>
                  <article className="group grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#D6BC8C]/40 hover:bg-white/[0.09] sm:grid-cols-[7rem_1fr] sm:p-7">
                    <p className="font-semibold text-[#D6BC8C]">
                      {item.time}
                    </p>

                    <div>
                      <h3 className="font-serif text-2xl text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-8 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="retreat-suitable-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Für wen geeignet?
                </p>

                <h2
                  id="retreat-suitable-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Sie dürfen genau so kommen, wie Sie sind
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Für die Teilnahme müssen Sie keine besonderen Fähigkeiten
                  mitbringen. Offenheit, bequeme Kleidung und die Bereitschaft,
                  sich etwas Zeit für sich selbst zu schenken, genügen.
                </p>

                <div className="mt-9">
                  <Button href="/kontakt">
                    Teilnahme anfragen
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-[32px] border border-[#E2E1DB] bg-[#F7F6F2] p-7 sm:p-10">
                <ul className="space-y-5">
                  {suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]"
                        strokeWidth={1.8}
                      />

                      <span className="text-lg leading-8 text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="retreat-faq-heading"
        className="bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                  <HelpCircle
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Häufige Fragen
                </p>

                <h2
                  id="retreat-faq-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Gut vorbereitet zu Ihrem Retreat
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {frequentlyAskedQuestions.map((item, index) => (
                <FadeIn key={item.question} delay={index * 0.07}>
                  <article className="rounded-[24px] border border-[#E1E2DE] bg-white p-7 shadow-[0_14px_45px_rgba(21,59,54,0.04)]">
                    <h3 className="font-serif text-xl leading-7 text-[#153B36]">
                      {item.question}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.answer}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[38px] bg-[#153B36] px-6 py-16 text-center text-white sm:px-10 lg:px-20 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#B08D57]/20 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl"
              />

              <div className="relative mx-auto max-w-3xl">
                <MoonStar
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-[#D6BC8C]"
                  strokeWidth={1.5}
                />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Ihre Zeit für Stille
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Schenken Sie sich einen Tag, der ganz bewusst beginnt
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Schreiben Sie uns, welcher Standort oder welcher Zeitraum für
                  Sie infrage kommt. Wir informieren Sie über kommende
                  Meditationstage und Retreats.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/kontakt" size="lg">
                    Retreat anfragen
                  </Button>

                  <Button href="/kurse" size="lg" variant="secondary">
                    Kurse kennenlernen
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}