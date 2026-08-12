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
import { routes } from "@/lib/routes";


const weeklyCourseGroups = getWeeklyCourseGroups();

const courseBenefits = [
  {
    icon: Sparkles,
    title: "Verständlicher Einstieg",
    text: "Sie lernen die Grundlagen der Meditation Schritt für Schritt und in einer ruhigen, verständlichen Form kennen.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Begleitung",
    text: "Erfahrene Meditationslehrende begleiten Sie bei Ihren ersten Schritten und beantworten Ihre Fragen.",
  },
  {
    icon: Users,
    title: "Gemeinsam meditieren",
    text: "In einer offenen und wertschätzenden Atmosphäre können Sie gemeinsam mit anderen Menschen üben.",
  },
];

const courseFormats = [
  {
    eyebrow: "Für den Einstieg",
    title: "Einführung in die Meditation",
    description:
      "Ein ruhiger und verständlicher Einstieg für Menschen, die Meditation kennenlernen oder neu beginnen möchten.",
    details: [
      {
        icon: Clock3,
        text: "Etwa 60 bis 90 Minuten",
      },
      {
        icon: Users,
        text: "Für Anfänger geeignet",
      },
      {
        icon: MapPin,
        text: "An verschiedenen Standorten",
      },
    ],
  },
  {
    eyebrow: "Regelmäßige Praxis",
    title: "Wöchentliche Meditation",
    description:
      "Vertiefen Sie Ihre Meditation durch regelmäßige Übung und entwickeln Sie Schritt für Schritt mehr innere Ruhe.",
    details: [
      {
        icon: CalendarDays,
        text: "Regelmäßige Termine",
      },
      {
        icon: Users,
        text: "Für Anfänger und Erfahrene",
      },
      {
        icon: HeartHandshake,
        text: "Begleitete Meditation",
      },
    ],
  },
  {
    eyebrow: "Mehr Zeit für sich",
    title: "Meditationstage",
    description:
      "Ein ganzer Tag bietet Ihnen die Möglichkeit, zur Ruhe zu kommen und Ihre Meditation in geschützter Atmosphäre zu vertiefen.",
    details: [
      {
        icon: Clock3,
        text: "Ein- oder mehrtägige Angebote",
      },
      {
        icon: Sparkles,
        text: "Meditation und Dhamma-Impulse",
      },
      {
        icon: MapPin,
        text: "An ausgewählten Standorten",
      },
    ],
  },
];

const courseSteps = [
  {
    number: "01",
    title: "Ankommen",
    text: "Sie lernen den Ort, den Ablauf und die Meditationsgruppe in Ruhe kennen.",
  },
  {
    number: "02",
    title: "Einführung",
    text: "Die wichtigsten Grundlagen werden verständlich erklärt und gemeinsam vorbereitet.",
  },
  {
    number: "03",
    title: "Meditation",
    text: "Sie werden Schritt für Schritt durch die Meditation begleitet.",
  },
  {
    number: "04",
    title: "Austausch",
    text: "Im Anschluss bleibt Zeit für Fragen, persönliche Erfahrungen und Hinweise für den Alltag.",
  },
];

export default function CoursesPage() {
  return (
    <>
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
                Meditationskurse
              </p>

              <h1
                id="courses-page-heading"
                className="mt-6 font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl"
              >
                Lernen Sie Meditation
                <span className="block text-[#E7D7B8]">
                  Schritt für Schritt
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                Unsere Meditationsangebote begleiten Sie auf verständliche und
                praxisnahe Weise – unabhängig davon, ob Sie neu beginnen oder
                Ihre bisherige Praxis vertiefen möchten.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="#wochenkurse" size="lg">
                  Wochenkurse ansehen
                </Button>

                <Button
                  href={routes.meditation}
                  size="lg"
                  variant="secondary"
                >
                  Mehr über Meditation
                </Button>
              </div>

              <p className="mt-7 text-sm leading-6 text-white/55">
                Die regelmäßigen Meditationsangebote sind kostenfrei und ohne
                Vorkenntnisse zugänglich.
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
                  Ihr Einstieg
                </p>

                <h2
                  id="course-introduction-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Meditation verständlich kennenlernen
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Meditation muss weder kompliziert noch anstrengend sein. In
                  unseren Kursen lernen Sie, den Körper zur Ruhe kommen zu
                  lassen und den Geist behutsam nach innen zu führen.
                </p>

                <p>
                  Dabei geht es nicht darum, sofort vollkommen still zu werden.
                  Gedanken und Gefühle dürfen da sein. Sie lernen, ihnen mit
                  mehr Ruhe, Klarheit und Freundlichkeit zu begegnen.
                </p>

                <p>
                  Jede Einheit enthält eine verständliche Einführung, eine
                  begleitete Meditation und genügend Zeit für Fragen.
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
              Unsere Angebote
            </p>

            <h2
              id="course-formats-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Finden Sie die passende Form der Meditation
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vom ersten Kennenlernen bis zur regelmäßigen Praxis bieten wir
              unterschiedliche Möglichkeiten, Meditation in Ihren Alltag zu
              integrieren.
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
                      <Button
                        href={
                          course.title === "Meditationstage"
                            ? routes.retreats
                            : "#wochenkurse"
                        }
                      >
                        {course.title === "Meditationstage"
                          ? "Retreats ansehen"
                          : "Wochenkurse ansehen"}
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
              Regelmäßige Kurse vor Ort
            </p>

            <h2
              id="weekly-courses-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Wöchentliche Meditationskurse
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Unsere regelmäßigen Meditationskurse sind kostenfrei und sowohl
              für Anfänger als auch für Menschen mit Meditationserfahrung
              geeignet. Die Kurse finden in deutscher Sprache statt.
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
                        ? "Meditationskurs vor Ort"
                        : "Meditationskurs in Planung"}
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
                                  {event.schedule}
                                </p>
                              </div>
                              <div className="mt-3 flex items-start gap-3 pl-0">
                                <Clock3
                                  aria-hidden="true"
                                  className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]"
                                  strokeWidth={1.8}
                                />
                                <p className="text-slate-600">{event.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <dl className="text-slate-600">
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
                                {course.street}
                              </span>
                              <span className="block">
                                {course.postalCode} {course.city}
                              </span>
                            </dd>
                          </div>
                        </div>
                        </dl>
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
                            Termine folgen in Kürze
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Weitere Informationen zu Wochentag und Uhrzeit
                            werden hier veröffentlicht, sobald der Kurs
                            feststeht.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 rounded-2xl bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                      <span className="font-semibold text-[#153B36]">
                        Teilnahme:
                      </span>{" "}
                      {course.price}
                      {isActive && !course.registrationRequired
                        ? " – ohne Anmeldung"
                        : ""}
                    </div>

                    {isActive && course.registrationRequired && (
                      <div className="mt-auto pt-8">
                        <Button href={`/anmeldung?course=${course.id}`}>
                          Jetzt anmelden
                        </Button>
                      </div>
                    )}
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-slate-500">
            Änderungen sind vorbehalten. Aktuelle Termine und kurzfristige
            Änderungen werden auf dieser Website veröffentlicht.
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
                  Der Ablauf
                </p>

                <h2
                  id="course-process-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Was Sie bei einem Meditationskurs erwartet
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Sie können in Ruhe ankommen. Wir begleiten Sie durch den
                  gesamten Ablauf und beantworten Ihre Fragen.
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
                    Gut zu wissen
                  </p>

                  <h2
                    id="course-requirements-heading"
                    className="mt-5 font-serif text-4xl leading-tight text-[#153B36]"
                  >
                    Sie können einfach beginnen
                  </h2>
                </div>

                <ul className="space-y-5">
                  {[
                    "Sie benötigen keine Meditationserfahrung.",
                    "Bequeme und angemessene Kleidung ist ausreichend.",
                    "Meditationskissen können Sie bei Bedarf selbst mitbringen.",
                    "Sie können auf einem Kissen oder auf einem Stuhl meditieren.",
                    "Fragen sind jederzeit herzlich willkommen.",
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
                  Ihr nächster Schritt
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Entdecken Sie ein Meditationsangebot in Ihrer Nähe
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Wählen Sie einen passenden Termin und lernen Sie Meditation in
                  einer ruhigen und offenen Atmosphäre kennen.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="#wochenkurse" size="lg">
                    Wochenkurse ansehen
                  </Button>

                  <Button
                    href={routes.meditation}
                    size="lg"
                    variant="secondary"
                  >
                    Meditation kennenlernen
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
