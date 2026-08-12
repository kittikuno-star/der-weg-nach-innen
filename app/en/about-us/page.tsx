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

export const metadata: Metadata = {
  title: "About us | The Way Within",
  description:
    "Learn more about The Way Within, our purpose, our values and the people behind the project.",
};

const values = [
  {
    title: "Inner calm",
    text: "We offer clear and accessible ways to practise meditation, helping people become quieter within and discover greater clarity.",
    icon: HeartHandshake,
  },
  {
    title: "Clear guidance",
    text: "Buddhist wisdom is shared in an open, contemporary and practical language that connects with everyday life.",
    icon: BookOpenText,
  },
  {
    title: "Open to everyone",
    text: "Our activities welcome people with or without previous experience, regardless of background or religious belief.",
    icon: Globe2,
  },
];

const projectAreas = [
  {
    title: "Meditation guidance",
    text: "Supporting meditation activities and presenting Buddhist practice with care and clarity.",
    icon: HeartHandshake,
  },
  {
    title: "Content and community",
    text: "Developing accessible content and connecting learning opportunities, temples and participants.",
    icon: UsersRound,
  },
  {
    title: "Photography and media",
    text: "Creating a calm, authentic and respectful visual language for the project.",
    icon: Camera,
  },
  {
    title: "Technology and development",
    text: "Building a reliable, accessible and sustainable digital platform that can grow over time.",
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
                About us
              </p>

              <h1
                id="about-heading"
                className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl"
              >
                A shared journey
                <span className="block text-[#E7D7B8]">towards inner calm</span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                The Way Within brings together meditation activities from seven
                Buddhist temples in Germany and makes meditation accessible in
                a clear, open and contemporary way.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/en/courses" size="lg">
                  Explore meditation courses
                </Button>
                <Button href="/en/locations" size="lg" variant="secondary">
                  View locations
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
                  Our purpose
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  Meditation as a first step
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  We aim to help people settle the mind, understand themselves
                  more deeply and develop mindfulness in everyday life.
                </p>
                <p>
                  Our content is rooted in the Buddhist meditation tradition.
                  At the same time, it is presented so that people without any
                  religious background can find a natural and understandable
                  way into the practice.
                </p>
                <p>
                  This website brings together regular meditation courses,
                  retreats, inspiring content and information about seven
                  temples in Germany.
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
              What matters to us
            </p>
            <h2
              id="values-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Our values
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
        id="people-behind-the-project"
        aria-labelledby="team-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Creating together
            </p>
            <h2
              id="team-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              People behind the project
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The Way Within is supported by Buddhist monks and dedicated
              volunteers. Together they bring experience in meditation,
              Buddhist teaching, community, media and technology.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              The Way Within is a project of DIDE - Dhammakaya International
              Deutschland gemeinnützige GmbH.
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
                    Vision and project leadership
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#153B36]">
                    Phra Somkait Kittikuno
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    Responsible for the vision, strategic direction and overall
                    development of the project. He brings Buddhist wisdom and
                    modern technology together to offer people an accessible
                    path to meditation, inner calm and conscious living.
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
                    Content and community
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#153B36]">
                    Phramaha Ekkarach
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    Responsible for developing and presenting the content and
                    for supporting the community. He helps ensure that Buddhist
                    teachings are communicated authentically, clearly and in a
                    way that is accessible to people with different levels of
                    experience.
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
                  Welcome
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Find your own way within
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Discover our meditation courses or visit one of our seven
                  locations in Germany.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/en/courses" size="lg">
                    View courses
                  </Button>
                  <Button href="/en/contact" size="lg" variant="secondary">
                    Contact us
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
