import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Feather,
  Heart,
  Leaf,
  Lightbulb,
  Flower2,
  Pause,
  Quote,
  Sparkles,
  Sun,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Inspiration | Der Weg nach innen",
  description:
    "Impulse zu Meditation, Achtsamkeit und buddhistischer Weisheit für mehr Ruhe, Klarheit und Mitgefühl im Alltag.",
};

const featuredArticle = {
  category: "Meditation",
  readingTime: "6 Minuten",
  title: "Warum Meditation unser Leben verändern kann",
  description:
    "Meditation beginnt nicht mit vollkommener Stille. Sie beginnt mit einem bewussten Augenblick, in dem Sie sich selbst wieder wahrnehmen.",
  href: "#warum-meditation",
};

const articles = [
  {
    icon: Flower2,
    category: "Meditation",
    title: "Warum Meditation unser Leben verändert",
    description:
      "Meditation hilft uns, innezuhalten, Gedanken bewusster wahrzunehmen und einen ruhigeren Umgang mit dem Alltag zu entwickeln.",
    readingTime: "6 Minuten",
    href: "#warum-meditation",
  },
  {
    icon: Pause,
    category: "Achtsamkeit",
    title: "Die Kraft der Achtsamkeit",
    description:
      "Achtsamkeit bedeutet, den gegenwärtigen Augenblick bewusst zu erleben, ohne ihn vorschnell zu bewerten.",
    readingTime: "5 Minuten",
    href: "#kraft-der-achtsamkeit",
  },
  {
    icon: BookOpen,
    category: "Buddhistische Weisheit",
    title: "Innere Ruhe entsteht nicht durch Festhalten",
    description:
      "Buddhistische Weisheit lädt uns dazu ein, Veränderungen anzunehmen und unnötiges Festhalten schrittweise loszulassen.",
    readingTime: "7 Minuten",
    href: "#buddhistische-weisheit",
  },
  {
    icon: Brain,
    category: "Geist und Gedanken",
    title: "Gedanken beobachten, ohne ihnen zu folgen",
    description:
      "Nicht jeder Gedanke verlangt eine Reaktion. Meditation kann uns helfen, einen heilsamen Abstand zu entwickeln.",
    readingTime: "5 Minuten",
    href: "#gedanken-beobachten",
  },
  {
    icon: Heart,
    category: "Mitgefühl",
    title: "Freundlicher mit sich selbst umgehen",
    description:
      "Mitgefühl beginnt dort, wo wir unsere eigenen Schwierigkeiten wahrnehmen, ohne uns dafür zu verurteilen.",
    readingTime: "6 Minuten",
    href: "#mitgefuehl",
  },
  {
    icon: Leaf,
    category: "Alltag und Praxis",
    title: "Kleine Momente der Stille im Alltag",
    description:
      "Bereits kurze bewusste Pausen können dazu beitragen, den Tag ruhiger und klarer zu gestalten.",
    readingTime: "4 Minuten",
    href: "#stille-im-alltag",
  },
];

const principles = [
  {
    number: "01",
    title: "Innehalten",
    text: "Bevor Sie reagieren, schenken Sie sich einen bewussten Atemzug.",
  },
  {
    number: "02",
    title: "Wahrnehmen",
    text: "Beobachten Sie Gedanken und Gefühle, ohne sie sofort verändern zu müssen.",
  },
  {
    number: "03",
    title: "Verstehen",
    text: "Erkennen Sie, welche inneren Ursachen zu Unruhe oder Gelassenheit führen.",
  },
  {
    number: "04",
    title: "Loslassen",
    text: "Lassen Sie nach und nach los, was unnötiges Leiden oder Anspannung erzeugt.",
  },
];

const dailyPractices = [
  {
    icon: Sun,
    title: "Am Morgen",
    text: "Beginnen Sie den Tag mit drei ruhigen Atemzügen, bevor Sie Ihr Telefon oder Ihre Aufgaben betrachten.",
  },
  {
    icon: Pause,
    title: "Zwischendurch",
    text: "Unterbrechen Sie den gewohnten Ablauf für einen Moment und nehmen Sie Körper und Atem bewusst wahr.",
  },
  {
    icon: Heart,
    title: "Im Umgang mit anderen",
    text: "Hören Sie einen Augenblick länger zu, bevor Sie antworten oder eine Situation bewerten.",
  },
  {
    icon: Feather,
    title: "Am Abend",
    text: "Betrachten Sie den vergangenen Tag mit Freundlichkeit und lassen Sie Unabgeschlossenes für den Moment ruhen.",
  },
];

export default function InspirationPage() {
  return (
    <>
      <section
        aria-labelledby="inspiration-page-heading"
        className="relative isolate overflow-hidden bg-[#153B36] py-24 sm:py-28 lg:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#B08D57]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-48 right-0 -z-10 h-[38rem] w-[38rem] rounded-full bg-white/[0.06] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(214,188,140,0.12),transparent_42%)]"
        />

        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#E7D7B8] backdrop-blur-sm">
                <Lightbulb
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth={1.6}
                />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                Inspiration
              </p>

              <h1
                id="inspiration-page-heading"
                className="mt-6 font-serif text-5xl leading-[1.07] text-white sm:text-6xl lg:text-7xl"
              >
                Gedanken für einen
                <span className="block text-[#E7D7B8]">
                  bewussteren Alltag
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                Entdecken Sie Impulse zu Meditation, Achtsamkeit und
                buddhistischer Weisheit, die Sie auf Ihrem persönlichen Weg
                nach innen begleiten können.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="#beitraege" size="lg">
                  Beiträge entdecken
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
          </FadeIn>
        </Container>
      </section>

      <section
        aria-labelledby="featured-article-heading"
        className="bg-white py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <article className="relative overflow-hidden rounded-[36px] border border-[#E4E4DF] bg-[#F7F6F2] shadow-[0_24px_80px_rgba(21,59,54,0.07)]">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#B08D57]/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-36 left-20 h-80 w-80 rounded-full bg-[#153B36]/10 blur-3xl"
              />

              <div className="relative grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex items-center justify-center bg-[#153B36] p-10 text-white sm:p-14 lg:p-16">
                  <div className="max-w-md">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.07] text-[#E7D7B8]">
                      <Flower2
                        aria-hidden="true"
                        className="h-10 w-10"
                        strokeWidth={1.35}
                      />
                    </div>

                    <blockquote className="mt-10 font-serif text-3xl leading-snug text-white sm:text-4xl">
                      „Ruhe beginnt nicht außerhalb von uns, sondern in dem
                      Augenblick, in dem wir bewusst nach innen schauen.“
                    </blockquote>

                    <p className="mt-7 text-sm uppercase tracking-[0.25em] text-[#D6BC8C]">
                      Gedanken zur Meditation
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-8 sm:p-12 lg:p-16">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                      <span>{featuredArticle.category}</span>

                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-[#B08D57]"
                      />

                      <span>{featuredArticle.readingTime}</span>
                    </div>

                    <h2
                      id="featured-article-heading"
                      className="mt-6 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                    >
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      {featuredArticle.description}
                    </p>

                    <Link
                      href={featuredArticle.href}
                      className="group mt-9 inline-flex items-center gap-3 rounded-full font-semibold text-[#153B36] outline-none transition-colors hover:text-[#B08D57] focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
                    >
                      Artikel lesen

                      <ArrowRight
                        aria-hidden="true"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.8}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </Container>
      </section>

      <section
        id="beitraege"
        aria-labelledby="articles-heading"
        className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Impulse und Gedanken
            </p>

            <h2
              id="articles-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Inspiration für Ihren Weg nach innen
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Die Beiträge verbinden Meditation und buddhistische Weisheit mit
              Fragen und Erfahrungen des täglichen Lebens.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const ArticleIcon = article.icon;

              return (
                <FadeIn key={article.title} delay={index * 0.08}>
                  <article className="group flex h-full flex-col rounded-[28px] border border-[#E2E3DF] bg-white p-8 shadow-[0_16px_50px_rgba(21,59,54,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5BF93] hover:shadow-[0_26px_80px_rgba(21,59,54,0.1)]">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8] transition-transform duration-500 group-hover:scale-105">
                        <ArticleIcon
                          aria-hidden="true"
                          className="h-6 w-6"
                          strokeWidth={1.6}
                        />
                      </div>

                      <span className="text-xs font-medium text-slate-400">
                        {article.readingTime}
                      </span>
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

                    <Link
                      href={article.href}
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-[#153B36] outline-none transition-colors hover:text-[#B08D57] focus-visible:rounded-full focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
                    >
                      Weiterlesen

                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={1.8}
                      />
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="warum-meditation"
        aria-labelledby="meditation-article-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                  <Flower2
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                  Meditation
                </p>

                <h2
                  id="meditation-article-heading"
                  className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
                >
                  Warum Meditation unser Leben verändern kann
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <article className="space-y-7 text-lg leading-9 text-slate-600">
                <p>
                  Viele Menschen beginnen mit der Meditation, weil sie sich
                  weniger Stress, mehr Ruhe oder eine bessere Konzentration
                  wünschen. Diese Wünsche sind verständlich. Doch Meditation
                  kann noch tiefer führen: Sie lädt uns dazu ein, unsere innere
                  Welt bewusster kennenzulernen.
                </p>

                <p>
                  Im Alltag reagieren wir häufig automatisch. Ein Gedanke
                  entsteht, ein Gefühl folgt und schon handeln oder sprechen
                  wir, ohne den inneren Ablauf wirklich wahrgenommen zu haben.
                  Meditation schafft zwischen Reiz und Reaktion einen kleinen,
                  aber wertvollen Raum.
                </p>

                <div className="my-10 rounded-[26px] border-l-4 border-[#B08D57] bg-[#F7F6F2] p-7 sm:p-9">
                  <Quote
                    aria-hidden="true"
                    className="h-7 w-7 text-[#B08D57]"
                    strokeWidth={1.5}
                  />

                  <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-[#153B36]">
                    Meditation bedeutet nicht, niemals mehr unruhig zu sein.
                    Sie hilft uns, Unruhe zu erkennen, ohne vollständig von ihr
                    bestimmt zu werden.
                  </blockquote>
                </div>

                <p>
                  Mit regelmäßiger Übung lernen wir, Gedanken als Gedanken und
                  Gefühle als vorübergehende Erfahrungen zu betrachten. Wir
                  müssen nicht alles festhalten, ablehnen oder sofort lösen.
                  Manchmal genügt es zunächst, bewusst wahrzunehmen, was gerade
                  da ist.
                </p>

                <p>
                  Dadurch kann sich unser Verhältnis zu schwierigen
                  Situationen verändern. Das Leben bleibt nicht immer ruhig,
                  doch wir können lernen, ihm mit mehr Klarheit, Geduld und
                  innerer Stabilität zu begegnen.
                </p>
              </article>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        id="kraft-der-achtsamkeit"
        aria-labelledby="mindfulness-heading"
        className="scroll-mt-24 bg-[#153B36] py-20 text-white lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Die Kraft der Achtsamkeit
                </p>

                <h2
                  id="mindfulness-heading"
                  className="mt-5 font-serif text-4xl leading-tight sm:text-5xl"
                >
                  Wirklich dort sein, wo das Leben gerade stattfindet
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/70">
                  Achtsamkeit bedeutet, dem gegenwärtigen Moment mit Offenheit
                  und Klarheit zu begegnen.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.09]"
                  >
                    <p className="font-serif text-3xl text-[#D6BC8C]/70">
                      {principle.number}
                    </p>

                    <h3 className="mt-5 font-serif text-2xl text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/65">
                      {principle.text}
                    </p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        id="buddhistische-weisheit"
        aria-labelledby="wisdom-heading"
        className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#153B36] text-[#E7D7B8]">
                <BookOpen
                  aria-hidden="true"
                  className="h-7 w-7"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                Buddhistische Weisheit
              </p>

              <h2
                id="wisdom-heading"
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                Alles verändert sich
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">
                Veränderungen begleiten jeden Bereich unseres Lebens.
                Angenehme Erfahrungen bleiben nicht für immer, aber auch
                Schwierigkeiten sind nicht unveränderlich. Wer diese Wahrheit
                zunehmend versteht, kann lernen, weniger krampfhaft
                festzuhalten und dem Leben offener zu begegnen.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <blockquote className="relative mt-12 overflow-hidden rounded-[32px] bg-white px-8 py-12 shadow-[0_22px_70px_rgba(21,59,54,0.07)] sm:px-12">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B08D57]/10 blur-3xl"
                />

                <Quote
                  aria-hidden="true"
                  className="relative mx-auto h-9 w-9 text-[#B08D57]"
                  strokeWidth={1.4}
                />

                <p className="relative mt-7 font-serif text-2xl leading-relaxed text-[#153B36] sm:text-3xl">
                  Wenn wir erkennen, dass nichts dauerhaft festgehalten werden
                  kann, entsteht Raum für Dankbarkeit, Gelassenheit und einen
                  bewussteren Umgang mit dem gegenwärtigen Augenblick.
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        id="gedanken-beobachten"
        aria-labelledby="daily-practice-heading"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
              Kleine Übungen
            </p>

            <h2
              id="daily-practice-heading"
              className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
            >
              Achtsamkeit in Ihren Alltag integrieren
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sie benötigen nicht immer viel Zeit. Entscheidend ist, dass Sie
              sich im Alltag wiederholt bewusst an den gegenwärtigen Moment
              erinnern.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dailyPractices.map((practice, index) => {
              const PracticeIcon = practice.icon;

              return (
                <FadeIn key={practice.title} delay={index * 0.1}>
                  <article className="group flex h-full gap-6 rounded-[26px] border border-[#E4E5E1] bg-[#FAFAF8] p-7 transition-all duration-500 hover:border-[#D6C092] hover:bg-white hover:shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:p-8">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#153B36] p-3.5 text-[#E7D7B8]">
                      <PracticeIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                        strokeWidth={1.6}
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl text-[#153B36]">
                        {practice.title}
                      </h3>

                      <p className="mt-3 leading-8 text-slate-600">
                        {practice.text}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="mitgefuehl"
        aria-labelledby="compassion-heading"
        className="bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[36px] border border-[#E2E1DC] bg-white shadow-[0_24px_80px_rgba(21,59,54,0.07)] lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex items-center justify-center bg-[#153B36] p-10 text-white sm:p-14">
                <div className="max-w-sm text-center lg:text-left">
                  <Heart
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-[#D6BC8C] lg:mx-0"
                    strokeWidth={1.3}
                  />

                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6BC8C]">
                    Mitgefühl
                  </p>

                  <h2
                    id="compassion-heading"
                    className="mt-5 font-serif text-4xl leading-tight"
                  >
                    Freundlicher mit sich selbst umgehen
                  </h2>
                </div>
              </div>

              <div className="p-8 sm:p-12 lg:p-14">
                <div className="space-y-6 text-lg leading-9 text-slate-600">
                  <p>
                    Viele Menschen sprechen mit sich selbst strenger, als sie
                    jemals mit einem guten Freund sprechen würden. Fehler,
                    Unsicherheit oder Erschöpfung werden schnell als
                    persönliches Versagen betrachtet.
                  </p>

                  <p>
                    Mitgefühl bedeutet nicht, Schwierigkeiten zu ignorieren.
                    Es bedeutet, ihnen mit Verständnis und Verantwortlichkeit
                    zu begegnen, ohne zusätzliches Leiden durch harte
                    Selbstverurteilung zu erzeugen.
                  </p>

                  <p>
                    Sie dürfen anerkennen, dass etwas schwierig ist. Sie dürfen
                    sich Zeit geben. Und Sie dürfen dennoch den nächsten
                    heilsamen Schritt gehen.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section
        id="stille-im-alltag"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
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
                <Sparkles
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-[#D6BC8C]"
                  strokeWidth={1.5}
                />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
                  Ihr Weg nach innen
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                  Inspiration wird lebendig, wenn sie zur Erfahrung wird
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Lernen Sie Meditation Schritt für Schritt kennen und
                  entdecken Sie, wie bewusste Stille Ihren Alltag bereichern
                  kann.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href={routes.meditation} size="lg">
                    Meditation kennenlernen
                  </Button>

                  <Button href="/kurse" size="lg" variant="secondary">
                    Kurse entdecken
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