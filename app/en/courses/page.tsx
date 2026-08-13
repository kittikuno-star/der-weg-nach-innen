import type { Metadata } from "next";
import {
  CalendarDays,
  Check,
  Clock3,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getWeeklyCourseGroups } from "@/data/weeklyCourseEvents";


export const metadata: Metadata = {
  title: "Meditation Courses | The Way Within",
  description:
    "Free meditation courses held in German at Buddhist temples in Germany, suitable for beginners and experienced meditators.",
};

const courseBenefits = [
  {
    icon: Sparkles,
    title: "A clear introduction",
    text: "Learn the foundations of meditation step by step in a calm and accessible way.",
  },
  {
    icon: HeartHandshake,
    title: "Personal guidance",
    text: "Experienced meditation teachers support your first steps and answer your questions.",
  },
  {
    icon: Users,
    title: "Meditate together",
    text: "Practise with others in an open, respectful and welcoming atmosphere.",
  },
];

const courseFormats = [
  {
    eyebrow: "For beginners",
    title: "Introduction to meditation",
    description:
      "A calm and accessible introduction for anyone who would like to discover meditation or begin again.",
    href: "/en/meditation",
    actionLabel: "Learn about meditation",
    details: [
      {
        icon: Clock3,
        text: "About 60 to 90 minutes",
      },
      {
        icon: Users,
        text: "Suitable for beginners",
      },
      {
        icon: MapPin,
        text: "At several locations",
      },
    ],
  },
  {
    eyebrow: "Regular practice",
    title: "Weekly meditation",
    description:
      "Deepen your meditation through regular practice and gradually develop greater inner calm.",
    href: "#wochenkurse",
    actionLabel: "View weekly courses",
    details: [
      {
        icon: CalendarDays,
        text: "Regular sessions",
      },
      {
        icon: Users,
        text: "For beginners and experienced meditators",
      },
      {
        icon: HeartHandshake,
        text: "Guided meditation",
      },
    ],
  },
  {
    eyebrow: "More time for yourself",
    title: "Meditation days",
    description:
      "A full day gives you the opportunity to slow down and deepen your meditation in a supportive setting.",
    href: "/en/retreats",
    actionLabel: "View retreats",
    details: [
      {
        icon: Clock3,
        text: "One-day or multi-day programmes",
      },
      {
        icon: Sparkles,
        text: "Meditation and Dhamma reflections",
      },
      {
        icon: MapPin,
        text: "At selected locations",
      },
    ],
  },
];

const courseSteps = [
  {
    number: "01",
    title: "Arrive",
    text: "Take time to become familiar with the place, the schedule and the meditation group.",
  },
  {
    number: "02",
    title: "Introduction",
    text: "The essential foundations are explained clearly and prepared together.",
  },
  {
    number: "03",
    title: "Meditation",
    text: "You are guided through the meditation step by step.",
  },
  {
    number: "04",
    title: "Questions and reflection",
    text: "Afterwards, there is time for questions, personal experiences and practical guidance for everyday life.",
  },
];

const weeklyCourseGroups = getWeeklyCourseGroups();

function englishSchedule(schedule?: string) {
  if (schedule === "Jeden Mittwoch") return "Every Wednesday";
  if (schedule === "Jeden Freitag") return "Every Friday";
  return schedule ?? "";
}

function englishTime(time?: string) {
  return time?.replace(" Uhr", "") ?? "";
}

export default function EnglishCoursesPage() {
  return (
    <div lang="en">
      <section
        aria-labelledby="courses-page-heading"
        className="relative isolate overflow-hidden bg-[#153B36] py-24 sm:py-28 lg:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#B08D57]/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-40 right-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-white/5 blur-3xl"
        />

        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                Meditation courses
              </p>

              <h1
                id="courses-page-heading"
                className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl"
              >
                Learn meditation
                <span className="block text-[#E7D7B8]">
                  step by step
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                Our meditation courses offer clear and practical guidance — whether you are beginning for the first time or wish to deepen an existing practice.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="#wochenkurse" size="lg">
                  View weekly courses
                </Button>

                <Button
                  href="/en/meditation"
                  size="lg"
                  variant="secondary"
                >
                  Learn about meditation
                </Button>
              </div>

              <p className="mt-7 text-sm leading-6 text-white/55">
                Our regular meditation courses are held in German, free of charge and open to people with no previous experience.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section
        aria-labelledby="course-introduction-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Your introduction
                </p>

                <h2
                  id="course-introduction-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Discover meditation in a clear and accessible way
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Meditation does not need to be complicated or strenuous. In our courses, you learn how to relax the body and gently guide the mind within.
                </p>

                <p>
                  The aim is not to become completely still at once. Thoughts and feelings may arise. You learn to meet them with greater calm, clarity and kindness.
                </p>

                <p>
                  Each session includes a clear introduction, a guided
                  meditation and enough time for questions.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {courseBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <FadeIn
                  key={benefit.title}
                  delay={index * 0.12}
                >
                  <article className="group h-full rounded-[28px] border border-[#E7E8E4] bg-[#FAFAF8] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_24px_70px_rgba(21,59,54,0.09)]">
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
        id="kursangebote"
        aria-labelledby="course-formats-heading"
        className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Our courses
            </p>

            <h2
              id="course-formats-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Find the form of meditation that suits you
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From a first introduction to regular practice, we offer different ways to integrate meditation into everyday life.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {courseFormats.map((course, index) => (
              <FadeIn
                key={course.title}
                delay={index * 0.12}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#E4E5E1] bg-white shadow-[0_18px_50px_rgba(21,59,54,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5BF93] hover:shadow-[0_26px_80px_rgba(21,59,54,0.10)]">
                  <div className="h-2 bg-[#153B36] transition-colors duration-500 group-hover:bg-[#B08D57]" />

                  <div className="flex flex-1 flex-col p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                      {course.eyebrow}
                    </p>

                    <h3 className="mt-5 font-serif text-3xl leading-tight text-[#153B36]">
                      {course.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {course.description}
                    </p>

                    <ul className="mt-8 space-y-4">
                      {course.details.map((detail) => {
                        const DetailIcon = detail.icon;

                        return (
                          <li
                            key={detail.text}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                          >
                            <DetailIcon
                              aria-hidden="true"
                              className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
                              strokeWidth={1.8}
                            />

                            <span>{detail.text}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-auto pt-9">
                      <Button href={course.href}>
                        {course.actionLabel}
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="wochenkurse"
        aria-labelledby="weekly-courses-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Regular in-person courses
            </p>

            <h2
              id="weekly-courses-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Weekly meditation courses
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our regular meditation courses are free of charge and suitable
              for both beginners and experienced meditators.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {weeklyCourseGroups.map((course, index) => {
              const isActive = course.status === "active";

              return (
                <FadeIn key={course.id} delay={index * 0.08}>
                  <article className="flex h-full flex-col rounded-[30px] border border-[#E4E5E1] bg-[#FAFAF8] p-8 shadow-[0_18px_50px_rgba(21,59,54,0.05)] sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                      {isActive
                        ? "In-person meditation course"
                        : "Meditation course being planned"}
                    </p>

                    <h3 className="mt-5 font-serif text-3xl leading-tight text-[#153B36]">
                      {course.temple}
                    </h3>

                    {isActive ? (
                      <div className="mt-8 space-y-6">
                        <div className="space-y-4">
                          {course.events.map((event) => (
                            <div
                              key={event.id}
                              className="rounded-2xl border border-[#E4E5E1] bg-white px-5 py-4"
                            >
                              <div className="flex items-start gap-3">
                                <CalendarDays
                                  aria-hidden="true"
                                  className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
                                  strokeWidth={1.8}
                                />
                                <p className="font-medium text-[#153B36]">
                                  {englishSchedule(event.schedule)}
                                </p>
                              </div>
                              <div className="mt-3 flex items-start gap-3">
                                <Clock3
                                  aria-hidden="true"
                                  className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
                                  strokeWidth={1.8}
                                />
                                <p className="text-slate-600">
                                  {englishTime(event.time)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-start gap-3 text-slate-600">
                          <MapPin
                            aria-hidden="true"
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
                            strokeWidth={1.8}
                          />
                          <div className="leading-7">
                            <p className="font-medium text-[#153B36]">
                              {course.street}
                            </p>
                            <p>
                              {course.postalCode} {course.city}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-8 space-y-6">
                        <div className="flex items-start gap-3 text-slate-600">
                          <MapPin
                            aria-hidden="true"
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
                            strokeWidth={1.8}
                          />
                          <div className="leading-7">
                            <p className="font-medium text-[#153B36]">
                              {course.street}
                            </p>
                            <p>
                              {course.postalCode} {course.city}
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-[#E3D5B8] bg-[#F7F2E8] px-5 py-5">
                          <p className="font-semibold text-[#153B36]">
                            Dates will be announced soon
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Further information about the day and time will be
                            published here as soon as the course is confirmed.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 rounded-2xl bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                      <span className="font-semibold text-[#153B36]">
                        Participation:
                      </span>{" "}
                      free of charge
                    </div>

                    {isActive && (
                      <div className="mt-auto pt-8">
                        <Button href={`/en/registration?course=${course.events[0].id}`}>
                          Register now
                        </Button>
                      </div>
                    )}
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-slate-500">
            Schedules may change. Registered participants will be informed personally about short-notice changes when contact details are available. Current dates will also be published on this website.
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="course-process-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  What to expect
                </p>

                <h2
                  id="course-process-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  What to expect from a meditation course
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  You can arrive at your own pace. We guide you through the whole session and answer your questions.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {courseSteps.map((step, index) => (
                <FadeIn
                  key={step.number}
                  delay={index * 0.08}
                >
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
        aria-labelledby="course-requirements-heading"
        className="bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-5xl rounded-[34px] border border-[#E2E1DC] bg-white p-8 shadow-[0_24px_70px_rgba(21,59,54,0.06)] sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                    Good to know
                  </p>

                  <h2
                    id="course-requirements-heading"
                    className="mt-5 font-serif text-4xl leading-tight text-[#153B36]"
                  >
                    You can simply begin
                  </h2>
                </div>

                <ul className="space-y-5">
                  {[
                    "No previous meditation experience is required.",
                    "Comfortable and appropriate clothing is sufficient.",
                    "You are welcome to bring your own meditation cushion if you wish.",
                    "You may meditate on a cushion or on a chair.",
                    "Questions are always welcome.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-base leading-7 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#153B36] text-white">
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          strokeWidth={2}
                        />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[36px] bg-[#153B36] px-6 py-16 text-center text-white sm:px-10 lg:px-20 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#B08D57]/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
              />

              <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Your next step
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Discover a meditation course near you
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Choose a suitable session and discover meditation in a calm and open atmosphere.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="#wochenkurse" size="lg">
                    View weekly courses
                  </Button>

                  <Button
                    href="/en/meditation"
                    size="lg"
                    variant="secondary"
                  >
                    Discover meditation
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
