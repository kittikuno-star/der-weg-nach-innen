import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenText,
  Camera,
  Code2,
  Globe2,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Über uns | Der Weg nach innen",
  description:
    "Erfahren Sie mehr über Der Weg nach innen, unsere Ausrichtung, unsere Werte und die Menschen hinter dem Projekt.",
};

const values = [
  {
    title: "Innere Ruhe",
    text: "Wir schaffen verständliche Zugänge zu Meditation, die Menschen dabei unterstützen, stiller zu werden und neue Klarheit zu finden.",
    icon: HeartHandshake,
  },
  {
    title: "Verständliche Vermittlung",
    text: "Buddhistische Weisheit wird in einer offenen, zeitgemäßen und lebensnahen Sprache vermittelt.",
    icon: BookOpenText,
  },
  {
    title: "Offen für alle",
    text: "Unsere Angebote richten sich an Menschen mit und ohne Vorkenntnisse, unabhängig von Herkunft oder Glaubensrichtung.",
    icon: Globe2,
  },
];

const projectAreas = [
  {
    title: "Meditationsleitung",
    text: "Begleitung der Meditationsangebote und sorgfältige Vermittlung buddhistischer Praxis.",
    icon: HeartHandshake,
  },
  {
    title: "Inhalte und Gemeinschaft",
    text: "Entwicklung verständlicher Inhalte sowie Verbindung zwischen Lernangeboten, Tempeln und Teilnehmenden.",
    icon: UsersRound,
  },
  {
    title: "Fotografie und Medien",
    text: "Gestaltung einer ruhigen, glaubwürdigen und wertschätzenden visuellen Sprache.",
    icon: Camera,
  },
  {
    title: "Technik und Entwicklung",
    text: "Aufbau einer verlässlichen, zugänglichen und langfristig erweiterbaren digitalen Plattform.",
    icon: Code2,
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        aria-labelledby="about-heading"
        className="relative isolate overflow-hidden bg-[#153B36] py-24 sm:py-28 lg:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#B08D57]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-36 right-0 -z-10 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        />

        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                Über uns
              </p>

              <h1
                id="about-heading"
                className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl"
              >
                Ein gemeinsamer Weg
                <span className="block text-[#E7D7B8]">
                  zur inneren Ruhe
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                „Der Weg nach innen“ verbindet Meditationsangebote von sieben
                buddhistischen Tempeln in Deutschland und macht Meditation in
                einer verständlichen, offenen und zeitgemäßen Form zugänglich.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/#meditationsangebote" size="lg">
                  Angebote entdecken
                </Button>
                <Button href={routes.locations} size="lg" variant="secondary">
                  Standorte ansehen
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Unsere Ausrichtung
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  Meditation als erster Schritt
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Wir möchten Menschen dabei unterstützen, zur Ruhe zu kommen,
                  den eigenen Geist besser zu verstehen und Achtsamkeit im
                  Alltag zu entwickeln.
                </p>
                <p>
                  Unsere Inhalte haben ihre Grundlage in der buddhistischen
                  Meditationstradition. Zugleich werden sie so vermittelt, dass
                  auch Menschen ohne religiöse Vorkenntnisse einen natürlichen
                  und verständlichen Zugang finden können.
                </p>
                <p>
                  Die Website bündelt regelmäßige Meditationskurse, Retreats,
                  inspirierende Inhalte und Informationen zu sieben Tempeln in
                  Deutschland.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="values-heading"
        className="bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Was uns wichtig ist
            </p>
            <h2
              id="values-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Unsere Werte
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <article className="h-full rounded-[28px] border border-[#E4E5E1] bg-white p-8 shadow-[0_18px_50px_rgba(21,59,54,0.05)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.7}
                      />
                    </div>
                    <h3 className="mt-7 font-serif text-3xl text-[#153B36]">
                      {value.title}
                    </h3>
                    <p className="mt-5 leading-8 text-slate-600">
                      {value.text}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="menschen-hinter-dem-projekt"
        aria-labelledby="team-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Gemeinsam gestalten
            </p>
            <h2
              id="team-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Menschen hinter dem Projekt
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hinter „Der Weg nach innen“ stehen buddhistische Mönche und
              engagierte Unterstützer. Sie verbinden Erfahrung in Meditation,
              buddhistischer Lehre, Gemeinschaft, Medien und Technik.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <article className="overflow-hidden rounded-[32px] border border-[#E4E5E1] bg-[#F7F6F2] shadow-[0_20px_60px_rgba(21,59,54,0.08)]">
                <div className="relative h-[360px] overflow-hidden bg-[#EFE9DD] sm:h-[420px]">
                  <Image
                    src="/images/about/phra-kittikuno.jpeg"
                    alt="Phra Somkait Kittikuno"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                    Vision und Projektleitung
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#153B36]">
                    Phra Somkait Kittikuno
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    Verantwortlich für die Vision, die strategische Ausrichtung
                    und die Gesamtentwicklung des Projekts. Er verbindet
                    buddhistische Weisheit mit moderner Technologie, um Menschen
                    einen verständlichen Zugang zu Meditation, innerer Ruhe und
                    bewusster Lebensführung zu eröffnen.
                  </p>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.1}>
              <article className="overflow-hidden rounded-[32px] border border-[#E4E5E1] bg-[#F7F6F2] shadow-[0_20px_60px_rgba(21,59,54,0.08)]">
                <div className="relative h-[360px] overflow-hidden bg-[#EFE9DD] sm:h-[420px]">
                  <Image
                    src="/images/about/phra-ekkarach.jpeg"
                    alt="Phramaha Ekkarach"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                    Inhalte und Gemeinschaft
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#153B36]">
                    Phramaha Ekkarach
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    Verantwortlich für die Entwicklung und Vermittlung der
                    Inhalte sowie für die Begleitung der Gemeinschaft. Er achtet
                    darauf, dass buddhistische Lehren verständlich, authentisch
                    und für Menschen mit unterschiedlichen Vorkenntnissen
                    zugänglich vermittelt werden.
                  </p>
                </div>
              </article>
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <FadeIn key={area.title} delay={0.08 + index * 0.08}>
                  <article className="h-full rounded-[28px] border border-[#E4E5E1] bg-white p-7 shadow-[0_16px_45px_rgba(21,59,54,0.05)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#153B36] text-[#E7D7B8]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-[#153B36]">
                      {area.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {area.text}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[36px] bg-[#153B36] px-6 py-16 text-center text-white sm:px-10 lg:px-20 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#B08D57]/15 blur-3xl"
              />
              <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Willkommen
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Finden Sie Ihren eigenen Weg nach innen
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Lernen Sie unsere Meditationsangebote kennen oder besuchen Sie
                  einen der sieben Standorte in Deutschland.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/#meditationsangebote" size="lg">
                    Angebote ansehen
                  </Button>
                  <Button href={routes.contact} size="lg" variant="secondary">
                    Kontakt aufnehmen
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
