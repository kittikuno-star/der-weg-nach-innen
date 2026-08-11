import type { Metadata } from "next";
import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Meditation | The Way Within",
  description:
    "Discover how meditation can support inner calm, clarity and a more compassionate way of living.",
};

const benefits = [
  {
    title: "Calm",
    text: "Find a place of stillness within and learn to approach everyday life with greater ease and composure.",
  },
  {
    title: "Clarity",
    text: "Develop a clearer understanding of your thoughts, emotions and decisions.",
  },
  {
    title: "Compassion",
    text: "Meet yourself and others with greater understanding, patience and kindness.",
  },
];

export default function EnglishMeditationPage() {
  return (
    <main lang="en">
      <section
        aria-labelledby="meditation-page-heading"
        className="relative isolate overflow-hidden bg-[#153B36] py-24 sm:py-28 lg:py-36"
      >
        <Image
          src="/images/meditation/why-meditation-01.png"
          alt="A peaceful meditation scene in a natural setting"
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
                Find inner calm.
                <span className="block text-[#E7D7B8]">
                  Discover yourself.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                Meditation can help you quiet the mind, release tension and
                develop greater inner clarity.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/en/courses" size="lg">
                  View meditation offers
                </Button>

                <Button
                  href="#why-meditate"
                  size="lg"
                  variant="secondary"
                >
                  Learn more
                </Button>
              </div>

              <p className="mt-7 text-sm leading-6 text-white/60">
                Suitable for beginners and experienced meditators.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section
        id="why-meditate"
        aria-labelledby="why-meditate-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Why meditate?
                </p>

                <h2
                  id="why-meditate-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Greater ease in everyday life
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Meditation is much more than a short break. It invites you to
                  observe the mind consciously, become familiar with your
                  thoughts and develop greater inner stability.
                </p>

                <p>
                  With regular practice, it can become easier to meet stress,
                  restlessness and difficult thoughts with greater awareness.
                  The aim is not to suppress thoughts, but to relate to them
                  with calm and clarity.
                </p>

                <p>
                  Meditation is suitable for people with no previous experience
                  as well as for experienced practitioners. Even a few
                  consciously spent minutes can be a valuable beginning.
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
              Everyday benefits
            </p>

            <h2
              id="benefits-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              What meditation can support
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Meditation is a personal experience. With regular practice, calm,
              clarity and a kinder relationship with yourself can gradually
              develop.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.12}>
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
                  Your first step
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Begin your journey within
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Our regular meditation offers are free of charge, open to
                  everyone and accessible without previous experience.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/en/courses" size="lg">
                    View offers
                  </Button>

                  <Button
                    href="/en/retreats"
                    size="lg"
                    variant="secondary"
                  >
                    Discover retreats
                  </Button>
                </div>

                <p className="mt-7 text-sm leading-6 text-white/55">
                  You do not need special equipment or previous meditation
                  experience.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
