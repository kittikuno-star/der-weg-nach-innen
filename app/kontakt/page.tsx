import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GeneralContactForm from "@/components/forms/GeneralContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Der Weg nach innen",
  description:
    "Kontaktieren Sie uns bei Fragen zu Meditation, Kursen, Retreats, Tempelbesuchen und buddhistischen Veranstaltungen.",
};

const contactReasons = [
  {
    icon: CalendarDays,
    title: "Meditationskurse",
    text: "Wählen Sie Standort und Termin und gelangen Sie direkt zur Anmeldung.",
    href: "/anmeldung?art=meditation",
    actionLabel: "Meditation anmelden",
  },
  {
    icon: Users,
    title: "Retreats",
    text: "Wählen Sie einen ein- oder mehrtägigen Retreat und öffnen Sie das passende Anmeldeformular.",
    href: "/anmeldung?art=retreat",
    actionLabel: "Retreat anmelden",
  },
  {
    icon: CalendarDays,
    title: "Buddhistische Veranstaltungen",
    text: "Melden Sie sich für Zeremonien, Feiertage und weitere buddhistische Veranstaltungen an.",
    href: "/anmeldung?art=ceremony",
    actionLabel: "Veranstaltung anmelden",
  },
  {
    icon: MapPin,
    title: "Schulbesuch oder Gruppenführung",
    text: "Öffnen Sie direkt das Anfrageformular für Schulen, Gruppen und Tempelbesuche.",
    href: "/anmeldung?art=school",
    actionLabel: "Besuch anfragen",
  },
  {
    icon: MessageCircle,
    title: "Allgemeine Fragen",
    text: "Für persönliche oder noch offene Fragen können Sie uns direkt eine Nachricht schreiben.",
    href: "#kontaktformular",
    actionLabel: "Nachricht schreiben",
  },
  {
    icon: HelpCircle,
    title: "Ich bin noch unsicher",
    text: "Sie wissen noch nicht, welches Angebot zu Ihnen passt? Schreiben Sie uns kurz. Wir helfen Ihnen bei der Orientierung.",
    href: "/kontakt?thema=unsicher#kontaktformular",
    actionLabel: "Orientierung erhalten",
  },
];

const contactSteps = [
  {
    number: "01",
    title: "Anliegen auswählen",
    text: "Teilen Sie uns mit, ob es um Meditation, einen Retreat-Tag, einen Standort oder ein anderes Thema geht.",
  },
  {
    number: "02",
    title: "Nachricht senden",
    text: "Beschreiben Sie Ihr Anliegen möglichst kurz und nennen Sie bei Terminfragen auch Ihren gewünschten Standort.",
  },
  {
    number: "03",
    title: "Persönliche Rückmeldung",
    text: "Wir prüfen Ihre Anfrage und melden uns mit den passenden Informationen bei Ihnen zurück.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Kann ich einen Tempel ohne Anmeldung besuchen?",
    answer:
      "Bitte vereinbaren Sie Ihren Besuch vorher. Nicht an jedem Standort ist jederzeit jemand vor Ort, der Besucher empfangen kann.",
  },
  {
    question: "Benötige ich Erfahrung für einen Meditationskurs?",
    answer:
      "Nein. Unsere Meditationsangebote sind grundsätzlich auch für Anfänger geeignet. Die Übungen werden verständlich und Schritt für Schritt erklärt.",
  },
  {
    question: "Sind die Meditationsangebote kostenfrei?",
    answer:
      "Die regelmäßigen Meditationsangebote sind kostenfrei. Bei besonderen Retreats oder Veranstaltungen kann ein Selbstkostenbeitrag entstehen. Darauf wird bei der jeweiligen Anmeldung ausdrücklich hingewiesen.",
  },
  {
    question: "Kann ich auch auf einem Stuhl meditieren?",
    answer:
      "Ja. Sie müssen nicht auf dem Boden sitzen. Meditation ist sowohl auf einem Kissen als auch auf einem Stuhl möglich.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir sind gerne"
        highlightedTitle="für Sie da"
        description="Schreiben Sie uns bei Fragen zu Meditation, Kursen, Retreats, Tempelbesuchen oder Veranstaltungen. Wir helfen Ihnen gerne dabei, das passende Angebot zu finden."
        icon={Mail}
        headingId="contact-page-heading"
        primaryButton={{
          label: "Zentrale Anmeldung",
          href: "/anmeldung",
        }}
        secondaryButton={{
          label: "Nachricht schreiben",
          href: "#kontaktformular",
        }}
      />

      <section
        aria-labelledby="contact-reasons-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Ihr Anliegen
            </p>

            <h2
              id="contact-reasons-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Wobei können wir Ihnen helfen?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Wählen Sie den passenden Bereich. Sie gelangen direkt zu den
              Angeboten oder bei allgemeinen Fragen zum Kontaktformular.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactReasons.map((reason, index) => {
              const ReasonIcon = reason.icon;

              return (
                <FadeIn key={reason.title} delay={index * 0.1}>
                  <Link
                    href={reason.href}
                    className={`group flex h-full flex-col rounded-[28px] border border-[#E5E6E2] bg-[#FAFAF8] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_24px_70px_rgba(21,59,54,0.09)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D57]/25 ${
                      index === contactReasons.length - 1
                        ? "sm:col-span-2 lg:col-start-2 lg:col-span-2"
                        : ""
                    }`}
                    aria-label={`${reason.title}: ${reason.actionLabel}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8] transition-transform duration-500 group-hover:scale-105">
                      <ReasonIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3 className="mt-7 font-serif text-2xl leading-tight text-[#153B36]">
                      {reason.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {reason.text}
                    </p>

                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#8C6B35]">
                      {reason.actionLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.8}
                      />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="kontaktformular"
        aria-labelledby="contact-form-heading"
        className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                  <Send
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.6}
                  />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Kontaktformular
                </p>

                <h2
                  id="contact-form-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Schreiben Sie uns Ihre Nachricht
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Bitte beschreiben Sie Ihr Anliegen kurz. Bei Fragen zu einem
                  Standort oder Termin nennen Sie uns bitte auch die
                  betreffende Stadt oder Region.
                </p>

                <div className="mt-8 rounded-[24px] border border-[#E1DED6] bg-white p-6">
                  <div className="flex items-start gap-4">
                    <Clock3
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]"
                      strokeWidth={1.7}
                    />

                    <div>
                      <h3 className="font-semibold text-[#153B36]">
                        Persönliche Bearbeitung
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Ihre Nachricht wird persönlich gelesen. Je nach
                        Aufenthaltsort und laufenden Tempelaktivitäten kann die
                        Beantwortung etwas Zeit benötigen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-[32px] border border-[#E1E2DE] bg-white p-7 shadow-[0_24px_80px_rgba(21,59,54,0.07)] sm:p-10">
               <GeneralContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contact-process-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Der Kontaktweg
                </p>

                <h2
                  id="contact-process-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  So erreicht Ihre Anfrage die richtige Stelle
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Eine kurze und klare Nachricht hilft uns, Ihr Anliegen direkt
                  dem passenden Standort oder Ansprechpartner zuzuordnen.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {contactSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <article className="group grid gap-5 rounded-[26px] border border-[#E7E8E4] bg-[#FAFAF8] p-7 transition-all duration-500 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:grid-cols-[5rem_1fr] sm:p-8">
                    <p
                      aria-hidden="true"
                      className="font-serif text-4xl text-[#B08D57]/50 transition-colors duration-500 group-hover:text-[#B08D57]"
                    >
                      {step.number}
                    </p>

                    <div>
                      <h3 className="font-serif text-2xl text-[#153B36]">
                        {step.title}
                      </h3>

                      <p className="mt-3 leading-8 text-slate-600">
                        {step.text}
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
        aria-labelledby="contact-faq-heading"
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
                  id="contact-faq-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Vielleicht finden Sie hier bereits Ihre Antwort
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {frequentlyAskedQuestions.map((item, index) => (
                <FadeIn key={item.question} delay={index * 0.08}>
                  <article className="rounded-[24px] border border-[#E1E2DE] bg-white p-7 shadow-[0_14px_45px_rgba(21,59,54,0.04)]">
                    <div className="flex items-start gap-4">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]"
                        strokeWidth={1.8}
                      />

                      <div>
                        <h3 className="font-serif text-xl leading-7 text-[#153B36]">
                          {item.question}
                        </h3>

                        <p className="mt-3 leading-8 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
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
                <MessageCircle
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-[#D6BC8C]"
                  strokeWidth={1.5}
                />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Persönliche Orientierung
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Finden Sie das passende Angebot für Ihren Weg
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Entdecken Sie unsere Standorte oder informieren Sie sich über
                  Meditationskurse und Retreats in Deutschland.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/standorte" size="lg">
                    Standorte entdecken
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
