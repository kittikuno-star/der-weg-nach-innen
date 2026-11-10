import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pathname: "/buddhismus",
  title: "Buddhismus verstehen – Die Lehre des Buddha",
  description:
    "Was lehrt der Buddha? Eine verständliche Einführung in die Vier Edlen Wahrheiten, den Edlen Achtfachen Pfad und die buddhistische Praxis im Alltag.",
});

const truths = [
  {
    title: "1. Dukkha – Das Leben ist nicht immer zufriedenstellend",
    text: "Wir erleben Vergänglichkeit, Verlust und Situationen, die nicht unseren Wünschen entsprechen. Der Buddha lädt dazu ein, diese Erfahrungen ehrlich zu betrachten.",
  },
  {
    title: "2. Die Ursache von Dukkha",
    text: "Wenn wir an Dingen festhalten, die sich verändern, entsteht Leiden. Verlangen, Ablehnung und Unwissenheit können unseren Geist unruhig machen.",
  },
  {
    title: "3. Das Ende von Dukkha ist möglich",
    text: "Leiden ist nicht unvermeidlich. Wenn Verlangen und Anhaften überwunden werden, kann der Geist wirklichen Frieden finden.",
  },
  {
    title: "4. Ein Weg führt dorthin",
    text: "Der Edle Achtfache Pfad zeigt, wie Verständnis, ethisches Handeln und die Schulung des Geistes zusammenwirken.",
  },
];

const path = [
  { title: "Weisheit", text: "Rechte Ansicht und rechte Absicht helfen uns, uns selbst und das Leben besser zu verstehen." },
  { title: "Ethisches Verhalten", text: "Rechte Rede, rechtes Handeln und rechter Lebenserwerb fördern einen achtsamen Umgang miteinander." },
  { title: "Geistige Schulung", text: "Rechtes Bemühen, rechte Achtsamkeit und rechte Sammlung stärken die innere Entwicklung." },
];

export default function BuddhismusPage() {
  return (
    <>
      <section className="bg-[#153B36] py-24 text-white sm:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D6BC8C]">Die Lehre des Buddha</p>
            <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Buddhismus verstehen</h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/85">
              Im Buddhismus geht es darum, das Leben besser zu verstehen, Leiden zu überwinden und inneren Frieden zu entwickeln.
              Der Buddha ermutigte Menschen, seine Lehre nicht nur anzuhören, sondern sie im eigenen Leben zu prüfen und zu üben.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9A7644]">Ein erster Überblick</p>
            <h2 className="mt-4 font-serif text-4xl text-[#153B36]">Wer war der Buddha?</h2>
            <div className="mt-7 space-y-5 text-lg leading-9 text-slate-600">
              <p>Siddhattha Gotama lebte vor etwa 2.500 Jahren in Nordindien. Er beschäftigte sich mit einer Frage, die bis heute aktuell ist: Warum leiden Menschen, und wie können sie davon frei werden?</p>
              <p>Nach seiner Erwachung wurde er Buddha genannt, „der Erwachte“. Er lehrte einen praktischen Weg, der Erkenntnis, verantwortungsvolles Handeln und Meditation miteinander verbindet.</p>
              <p>Die buddhistische Lehre lädt dazu ein, freundlich und aufmerksam zu leben. Es geht nicht um blinden Glauben, sondern darum, durch Übung und eigene Einsicht zu verstehen.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F4ED] py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9A7644]">Der Kern der Lehre</p>
            <h2 className="mt-4 font-serif text-4xl text-[#153B36]">Die Vier Edlen Wahrheiten</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Sie beschreiben das Problem des Leidens, seine Ursache, seine Überwindung und den Weg zur Befreiung.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {truths.map((truth) => (
              <article key={truth.title} className="rounded-[26px] border border-[#E7DFCF] bg-white p-7 sm:p-9">
                <h3 className="font-serif text-2xl leading-snug text-[#153B36]">{truth.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{truth.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <h2 className="font-serif text-4xl text-[#153B36]">Der Edle Achtfache Pfad</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Die acht Übungsbereiche werden häufig in drei Gruppen zusammengefasst. Sie unterstützen sich gegenseitig und gehören zu einem gemeinsamen Lebensweg.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {path.map((item) => (
              <article key={item.title} className="rounded-[26px] border border-[#E7E8E4] bg-[#F8F7F4] p-8">
                <h3 className="font-serif text-2xl text-[#153B36]">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F4ED] py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl text-[#153B36]">Buddhismus im Alltag</h2>
            <p className="mt-6 text-lg leading-9 text-slate-600">
              Die Lehre beginnt oft mit einfachen Dingen: bewusst sprechen, anderen kein Leid zufügen,
              großzügig sein und den eigenen Geist beobachten. Auch ein kurzer Moment der Achtsamkeit
              kann helfen, nicht sofort auf Ärger oder Sorge zu reagieren.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Meditation ist ein Teil dieses Weges. Sie hilft dabei, Ruhe und Sammlung zu entwickeln und die eigenen Erfahrungen klarer zu erkennen.
            </p>
            <Link href="/meditation" className="mt-9 inline-flex rounded-full bg-[#153B36] px-7 py-3 font-semibold text-white transition hover:bg-[#24554F]">
              Meditation kennenlernen
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
