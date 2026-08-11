import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Feather,
  Flower2,
  Heart,
  Leaf,
  Lightbulb,
  Pause,
  Quote,
  Sun,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Inspiration | The Way Within",
  description:
    "Reflections on meditation, mindfulness and Buddhist wisdom for greater calm, clarity and compassion in everyday life.",
};

const articles = [
  {
    icon: Flower2,
    category: "Meditation",
    title: "How meditation can change the way we live",
    description:
      "Meditation helps us pause, notice our thoughts more clearly and respond to everyday life with greater calm.",
    readingTime: "6 min read",
    href: "#meditation-and-change",
  },
  {
    icon: Pause,
    category: "Mindfulness",
    title: "The quiet strength of mindfulness",
    description:
      "Mindfulness means meeting the present moment consciously, without judging it too quickly.",
    readingTime: "5 min read",
    href: "#mindfulness",
  },
  {
    icon: BookOpen,
    category: "Buddhist wisdom",
    title: "Inner peace does not come from holding on",
    description:
      "Buddhist wisdom invites us to understand change and gradually release what creates unnecessary tension.",
    readingTime: "7 min read",
    href: "#buddhist-wisdom",
  },
  {
    icon: Brain,
    category: "Mind and thoughts",
    title: "Observe thoughts without following every one",
    description:
      "Not every thought requires a reaction. Meditation can help us develop a healthier inner distance.",
    readingTime: "5 min read",
    href: "#daily-practice",
  },
  {
    icon: Heart,
    category: "Compassion",
    title: "Learning to meet yourself with kindness",
    description:
      "Compassion begins when we acknowledge our own difficulties without condemning ourselves for having them.",
    readingTime: "6 min read",
    href: "#compassion",
  },
  {
    icon: Leaf,
    category: "Everyday practice",
    title: "Small moments of stillness during the day",
    description:
      "Even brief conscious pauses can help the day feel clearer, steadier and less hurried.",
    readingTime: "4 min read",
    href: "#daily-practice",
  },
];

const principles = [
  {
    number: "01",
    title: "Pause",
    text: "Before reacting, give yourself one conscious breath.",
  },
  {
    number: "02",
    title: "Notice",
    text: "Observe thoughts and feelings without needing to change them immediately.",
  },
  {
    number: "03",
    title: "Understand",
    text: "Recognise which inner conditions lead towards tension or ease.",
  },
  {
    number: "04",
    title: "Let go",
    text: "Gradually release what creates unnecessary suffering or pressure.",
  },
];

const dailyPractices = [
  {
    icon: Sun,
    title: "In the morning",
    text: "Begin with three calm breaths before looking at your phone or the tasks ahead.",
  },
  {
    icon: Pause,
    title: "During the day",
    text: "Interrupt your usual rhythm for a moment and notice the body and breath consciously.",
  },
  {
    icon: Heart,
    title: "With other people",
    text: "Listen one moment longer before responding or judging the situation.",
  },
  {
    icon: Feather,
    title: "In the evening",
    text: "Look back on the day with kindness and allow unfinished matters to rest for now.",
  },
];

export default function InspirationPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#153B36] py-24 text-white sm:py-28 lg:py-36">
        <div className="absolute -left-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#B08D57]/20 blur-3xl" />
        <div className="absolute -bottom-48 right-0 -z-10 h-[38rem] w-[38rem] rounded-full bg-white/[0.06] blur-3xl" />

        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#E7D7B8]">
                <Lightbulb className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                Inspiration
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.07] sm:text-6xl lg:text-7xl">
                Reflections for a
                <span className="block text-[#E7D7B8]">more conscious life</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                Explore reflections on meditation, mindfulness and Buddhist
                wisdom that can accompany you on your own way within.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="#articles" size="lg">Explore reflections</Button>
                <Button href="/en/meditation" size="lg" variant="secondary">
                  Discover meditation
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeIn>
            <article className="overflow-hidden rounded-[36px] border border-[#E4E4DF] bg-[#F7F6F2] shadow-[0_24px_80px_rgba(21,59,54,0.07)]">
              <div className="grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex items-center justify-center bg-[#153B36] p-10 text-white sm:p-14 lg:p-16">
                  <div className="max-w-md">
                    <Flower2 className="h-16 w-16 text-[#E7D7B8]" strokeWidth={1.25} />
                    <blockquote className="mt-10 font-serif text-3xl leading-snug sm:text-4xl">
                      “Stillness does not begin outside us. It begins when we
                      consciously turn our attention within.”
                    </blockquote>
                    <p className="mt-7 text-sm uppercase tracking-[0.25em] text-[#D6BC8C]">
                      A reflection on meditation
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-8 sm:p-12 lg:p-16">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B08D57]">
                      Meditation · 6 min read
                    </p>
                    <h2 className="mt-6 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                      How meditation can change the way we live
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      Meditation does not begin with perfect silence. It begins
                      with one conscious moment in which we notice ourselves
                      again and stop being carried away by every thought.
                    </p>
                    <Link href="#meditation-and-change" className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#153B36]">
                      Read the reflection
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </Container>
      </section>

      <section id="articles" className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Reflections and ideas
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
              Inspiration for your way within
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              These reflections connect meditation and Buddhist wisdom with
              questions and experiences from everyday life.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <FadeIn key={article.title} delay={index * 0.08}>
                  <article className="group flex h-full flex-col rounded-[28px] border border-[#E2E3DF] bg-white p-8 shadow-[0_16px_50px_rgba(21,59,54,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5BF93] hover:shadow-[0_26px_80px_rgba(21,59,54,0.1)]">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                      <span className="text-xs text-slate-400">{article.readingTime}</span>
                    </div>
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#B08D57]">
                      {article.category}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl leading-snug text-[#153B36]">
                      {article.title}
                    </h3>
                    <p className="mt-5 flex-1 leading-8 text-slate-600">
                      {article.description}
                    </p>
                    <Link href={article.href} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="meditation-and-change" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <Container>
          <FadeIn>
            <article className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Meditation</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                Meditation changes our relationship with experience
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">
                <p>
                  Meditation does not mean that we will never feel restless
                  again. It helps us recognise restlessness without being
                  completely controlled by it.
                </p>
                <blockquote className="rounded-[28px] bg-[#F7F4ED] px-8 py-9 font-serif text-2xl leading-relaxed text-[#153B36]">
                  We do not need to believe every thought, follow every feeling
                  or solve every difficulty immediately.
                </blockquote>
                <p>
                  With regular practice, thoughts become easier to observe as
                  thoughts and feelings as passing experiences. Life may remain
                  demanding, yet we can meet it with more clarity, patience and
                  inner stability.
                </p>
              </div>
            </article>
          </FadeIn>
        </Container>
      </section>

      <section id="mindfulness" className="scroll-mt-24 bg-[#153B36] py-20 text-white lg:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">The strength of mindfulness</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Being present where life is actually happening
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/70">
                  Mindfulness means meeting the present moment with openness,
                  steadiness and clarity.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((principle) => (
                  <article key={principle.number} className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6">
                    <p className="font-serif text-3xl text-[#D6BC8C]/70">{principle.number}</p>
                    <h3 className="mt-5 font-serif text-2xl">{principle.title}</h3>
                    <p className="mt-3 leading-7 text-white/65">{principle.text}</p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="buddhist-wisdom" className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#153B36] text-[#E7D7B8]">
                <BookOpen className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Buddhist wisdom</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">Everything changes</h2>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">
                Change touches every part of life. Pleasant experiences do not
                remain forever, yet difficulties are not permanent either.
                Understanding this can help us hold less tightly and meet life
                more openly.
              </p>
              <blockquote className="mt-12 rounded-[32px] bg-white px-8 py-12 shadow-[0_22px_70px_rgba(21,59,54,0.07)] sm:px-12">
                <Quote className="mx-auto h-9 w-9 text-[#B08D57]" strokeWidth={1.4} />
                <p className="mt-7 font-serif text-2xl leading-relaxed text-[#153B36] sm:text-3xl">
                  When we understand that nothing can be held forever, space
                  opens for gratitude, composure and a more conscious meeting
                  with the present moment.
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section id="daily-practice" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Small practices</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
              Bring mindfulness into everyday life
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              You do not always need much time. What matters is remembering the
              present moment repeatedly throughout the day.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dailyPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <FadeIn key={practice.title} delay={index * 0.1}>
                  <article className="flex h-full gap-6 rounded-[26px] border border-[#E4E5E1] bg-[#FAFAF8] p-7 sm:p-8">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#153B36] p-3.5 text-[#E7D7B8]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#153B36]">{practice.title}</h3>
                      <p className="mt-3 leading-8 text-slate-600">{practice.text}</p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="compassion" className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[36px] border border-[#E2E1DC] bg-white shadow-[0_24px_80px_rgba(21,59,54,0.07)] lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex items-center justify-center bg-[#153B36] p-10 text-white sm:p-14">
                <div className="max-w-sm text-center lg:text-left">
                  <Heart className="mx-auto h-12 w-12 text-[#D6BC8C] lg:mx-0" strokeWidth={1.3} />
                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6BC8C]">Compassion</p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight">Meeting yourself with greater kindness</h2>
                </div>
              </div>
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="space-y-6 text-lg leading-9 text-slate-600">
                  <p>
                    Many people speak to themselves more harshly than they
                    would ever speak to a close friend. Mistakes, uncertainty
                    and exhaustion quickly become reasons for self-judgement.
                  </p>
                  <p>
                    Compassion does not mean ignoring difficulties. It means
                    meeting them with understanding and responsibility without
                    adding further suffering through condemnation.
                  </p>
                  <p>
                    You may acknowledge that something is difficult. You may
                    give yourself time. And you may still take the next helpful
                    step.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-[#153B36] py-20 text-white lg:py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Turn reflection into practice</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Discover meditation courses, retreats and temples where you can
                experience these principles directly.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/en/courses" size="lg" variant="secondary">View meditation courses</Button>
                <Button href="/en/locations" size="lg" className="border border-white/25 bg-transparent text-white shadow-none hover:bg-white hover:text-[#153B36]">
                  Find a location
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
