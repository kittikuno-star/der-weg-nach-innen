import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const benefits = [
  {
    title: "Ruhe",
    text: "Finden Sie einen Ort der Stille und lernen Sie, den Alltag bewusster und gelassener zu erleben.",
  },
  {
    title: "Klarheit",
    text: "Entwickeln Sie einen klareren Blick auf Ihre Gedanken, Gefühle und Entscheidungen.",
  },
  {
    title: "Mitgefühl",
    text: "Begegnen Sie sich selbst und anderen mit mehr Verständnis, Geduld und Freundlichkeit.",
  },
];

export default function MeditationPage() {
  return (
    <>
      <section
        aria-labelledby="meditation-page-heading"
        className="relative isolate overflow-hidden bg-[#153B36] py-24 sm:py-28 lg:py-36"
      >
        <Image
          src="/images/meditation/why-meditation-01.png"
          alt="Eine ruhige Meditationsszene in natürlicher Umgebung"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102F2B]/95 via-[#153B36]/80 to-[#153B36]/35"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102F2B]/45 via-transparent to-black/10"
        />

        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                Meditation
              </p>

              <h1
                id="meditation-page-heading"
                className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl"
              >
                Finden Sie Ruhe.
                <span className="block text-[#E7D7B8]">
                  Entdecken Sie sich selbst.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                Meditation kann Ihnen helfen, den Geist zur Ruhe zu bringen,
                Anspannung loszulassen und mehr innere Klarheit zu entwickeln.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/#meditationsangebote" size="lg">
                  Meditationsangebote ansehen
                </Button>

                <Button
                  href="#warum-meditation"
                  size="lg"
                  variant="secondary"
                >
                  Mehr erfahren
                </Button>
              </div>

              <p className="mt-7 text-sm leading-6 text-white/60">
                Für Anfänger und erfahrene Meditierende geeignet.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section
        id="warum-meditation"
        aria-labelledby="warum-meditation-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Warum Meditation?
                </p>

                <h2
                  id="warum-meditation-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Mehr Gelassenheit im Alltag
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Meditation ist weit mehr als eine kurze Pause. Sie lädt dazu
                  ein, den eigenen Geist bewusst wahrzunehmen, Gedanken
                  kennenzulernen und innere Stabilität zu entwickeln.
                </p>

                <p>
                  Durch regelmäßige Übung kann es leichter werden, mit Stress,
                  Unruhe und belastenden Gedanken achtsamer umzugehen. Dabei
                  geht es nicht darum, Gedanken zu unterdrücken, sondern ihnen
                  mit Ruhe und Klarheit zu begegnen.
                </p>

                <p>
                  Meditation eignet sich sowohl für Menschen ohne
                  Vorerfahrung als auch für erfahrene Praktizierende. Bereits
                  wenige bewusst gestaltete Minuten können ein wertvoller
                  Anfang sein.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="benefits-heading"
        className="relative overflow-hidden bg-[#F7F6F2] py-20 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#153B36]/5 blur-3xl"
        />

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Wirkung im Alltag
            </p>

            <h2
              id="benefits-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Was Meditation unterstützen kann
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Meditation ist eine persönliche Erfahrung. Mit regelmäßiger
              Praxis können sich Ruhe, Klarheit und ein freundlicherer Umgang
              mit sich selbst entwickeln.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <FadeIn
                key={benefit.title}
                delay={index * 0.12}
              >
                <article className="group h-full rounded-[28px] border border-[#E7E8E4] bg-white p-8 shadow-[0_18px_50px_rgba(21,59,54,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:shadow-[0_24px_70px_rgba(21,59,54,0.10)]">
                  <div
                    aria-hidden="true"
                    className="h-1 w-12 rounded-full bg-[#B08D57] transition-all duration-500 group-hover:w-20"
                  />

                  <h3 className="mt-7 font-serif text-3xl text-[#153B36]">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {benefit.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[36px] bg-[#153B36] px-6 py-16 text-center text-white sm:px-10 lg:px-20 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#B08D57]/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl"
              />

              <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Ihr erster Schritt
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Beginnen Sie Ihren Weg nach innen
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Unsere regelmäßigen Meditationsangebote sind kostenfrei,
                  offen für alle und ohne Vorkenntnisse zugänglich.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/#meditationsangebote" size="lg">
                    Angebote ansehen
                  </Button>

                  <Button
                    href="/#retreat"
                    size="lg"
                    variant="secondary"
                  >
                    Retreats entdecken
                  </Button>
                </div>

                <p className="mt-7 text-sm leading-6 text-white/55">
                  Sie benötigen keine besondere Ausrüstung und keine
                  vorherige Meditationserfahrung.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}