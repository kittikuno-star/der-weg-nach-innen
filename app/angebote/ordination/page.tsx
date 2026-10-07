import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CircleAlert, ExternalLink } from "lucide-react";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Deutschsprachige Ordination",
  description:
    "Informationen zur einmal jährlich stattfindenden deutschsprachigen Ordination im Wat Phra Dhammakaya Bavaria.",
};

const programContents = [
  "Einführung in das Leben eines Theravāda-Mönchs",
  "Auseinandersetzung mit buddhistischer Disziplin",
  "Meditationspraxis",
  "Dhamma-Unterricht",
  "Buddhistische Kultur und gemeinschaftliches Leben",
] as const;

const orientationRequirements = [
  "männlich und zwischen 18 und 70 Jahre alt",
  "gutes, von anderen bestätigbares Verhalten",
  "Bereitschaft zu einer einfachen Lebensweise",
  "ausreichende körperliche und geistige Gesundheit",
  "keine ansteckenden Krankheiten",
  "keine Drogenabhängigkeit",
  "keine Vorstrafen",
  "Zustimmung einer nahestehenden Person beziehungsweise der Familie",
] as const;

const generalSequence = [
  "Anmeldung",
  "Vorbereitung",
  "Training",
  "Vorbereitung auf die Ordinationszeremonie",
  "Ordination",
  "Leben und Training als Mönch",
  "Abschluss",
] as const;

const orientationPackingList = [
  "weiße Kleidung",
  "warme Kleidung oder Pullover",
  "Handtuch",
  "persönliche Hygieneartikel",
  "Sandalen",
  "persönlich notwendige Medikamente",
] as const;

const orientationRestrictions = [
  "gefährliche Gegenstände",
  "Zigaretten",
  "illegale Drogen",
  "Wertgegenstände",
  "Mobiltelefone",
  "mitgebrachte Lebensmittel",
] as const;

export default function OrdinationPage() {
  return (
    <div className="bg-[#F7F4ED]">
      <section className="border-b border-[#E5DED0] bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Link href="/standorte/bavaria" className="inline-flex items-center gap-2 font-medium text-[#153B36]">
            <ArrowLeft className="h-4 w-4" />
            Zurück zu Wat Phra Dhammakaya Bavaria
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">Wat Phra Dhammakaya Bavaria</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.025em] text-[#153B36] sm:text-6xl lg:text-7xl">Deutschsprachige Ordination</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Wat Phra Dhammakaya Bavaria ist ein buddhistischer Tempel und bietet einmal jährlich eine deutschsprachige Ordination an. Das Angebot orientiert sich fachlich am European Ordination Program. Verbindliche Einzelheiten für Bavaria werden jeweils mit der Ausschreibung bekannt gegeben.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <article className="rounded-[30px] border border-[#E2DDD3] bg-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Allgemeine Einordnung</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Was bedeutet buddhistische Ordination?</h2>
              <p className="mt-5 leading-8 text-slate-600">Ordination bezeichnet die Aufnahme in die buddhistische Mönchsgemeinschaft. Sie schafft einen geregelten Rahmen, in dem buddhistische Praxis, Meditation, Lernen und das Leben in Gemeinschaft im Mittelpunkt stehen.</p>
            </article>
            <article className="rounded-[30px] border border-[#D9CDB7] bg-[#EFE8DC] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Für Wat Bavaria bestätigt</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Was ist die deutschsprachige Ordination?</h2>
              <p className="mt-5 leading-8 text-slate-600">Die deutschsprachige Ordination in Wat Phra Dhammakaya Bavaria ermöglicht eine Einführung und Begleitung in deutscher Sprache. Sie findet einmal jährlich statt und orientiert sich am European Ordination Program. Der konkrete Rahmen wird für den jeweiligen Durchgang gesondert bestätigt.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E5DED0] bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">Allgemeine Orientierung des European Ordination Program</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">Was erwartet die Teilnehmer?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Das europäische Programm vermittelt Grundlagen der Theravāda-Ordination. Für Wat Bavaria dient diese Ausrichtung als fachliche Orientierung; die konkrete Gestaltung des nächsten deutschsprachigen Durchgangs wird mit dessen Ausschreibung veröffentlicht.</p>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {programContents.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-[22px] border border-[#E3E1DA] bg-[#FAF9F5] px-5 py-4 leading-7 text-slate-600">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />{item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl rounded-[30px] border border-[#DED9CF] bg-white p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Orientierung, noch nicht als Bavaria-Regel bestätigt</p>
            <h2 className="mt-5 font-serif text-4xl text-[#153B36] sm:text-5xl">Teilnahmevoraussetzungen</h2>
            <p className="mt-6 max-w-3xl leading-8 text-slate-600">Das European Ordination Program nennt die folgenden Kriterien. Sie sind hier als fachliche Orientierung aufgeführt und gelten nicht automatisch als verbindliche Teilnahmebedingungen für Wat Bavaria. Die Bavaria-spezifischen Voraussetzungen werden vor der nächsten Anmeldung bestätigt.</p>
            <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {orientationRequirements.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-7 text-slate-600"><CircleAlert className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E5DED0] bg-[#EFE8DC] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-[28px] bg-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Allgemeiner Bestandteil</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Vorbereitung</h2>
              <p className="mt-5 leading-8 text-slate-600">Vor der Ordination findet eine Vorbereitungs- und Trainingsphase statt. Sie dient dazu, die Praxis, den gemeinschaftlichen Rahmen und die Anforderungen des Mönchslebens kennenzulernen. Eine konkrete Dauer für Wat Bavaria ist noch nicht bestätigt.</p>
            </article>
            <article className="rounded-[28px] bg-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Allgemeine Abfolge, keine Bavaria-Terminplanung</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Ablauf</h2>
              <ol className="mt-7 space-y-4">
                {generalSequence.map((item, index) => (
                  <li key={item} className="flex items-center gap-4 text-slate-600"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#153B36] text-sm font-semibold text-white">{index + 1}</span>{item}</li>
                ))}
              </ol>
              <p className="mt-7 border-t border-[#E5DED0] pt-5 text-sm leading-6 text-slate-500">Termine, Dauer und zeitliche Abfolge für Wat Bavaria werden erst mit der nächsten bestätigten Ausschreibung veröffentlicht.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-2">
            <article className="rounded-[28px] border border-[#E3E1DA] bg-[#FAF9F5] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Orientierung des European Ordination Program</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Was sollte man mitbringen?</h2>
              <ul className="mt-7 space-y-3 leading-7 text-slate-600">{orientationPackingList.map((item) => <li key={item} className="border-l-2 border-[#D6BC8C] pl-4">{item}</li>)}</ul>
              <p className="mt-6 text-sm leading-6 text-slate-500">Die verbindliche Bavaria-Mitbringliste und mögliche Mengen werden mit der nächsten Ausschreibung bekannt gegeben.</p>
            </article>
            <article className="rounded-[28px] border border-[#E3E1DA] bg-[#FAF9F5] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Orientierung des European Ordination Program</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Was ist während des Trainings nicht erlaubt?</h2>
              <ul className="mt-7 space-y-3 leading-7 text-slate-600">{orientationRestrictions.map((item) => <li key={item} className="border-l-2 border-[#D6BC8C] pl-4">{item}</li>)}</ul>
              <p className="mt-6 text-sm leading-6 text-slate-500">Diese Liste wird nicht ungeprüft als verbindliche Bavaria-Regel übernommen. Die geltenden Regeln werden vor der nächsten Ordination bestätigt.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E5DED0] bg-[#F7F4ED] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-2">
            <article className="rounded-[28px] border border-[#DED9CF] bg-white p-7 sm:p-9">
              <h2 className="font-serif text-4xl text-[#153B36]">Gesundheit</h2>
              <p className="mt-5 leading-8 text-slate-600">Die Teilnahme setzt voraus, dass Interessierte den körperlichen und geistigen Anforderungen der Vorbereitung und des gemeinschaftlichen Trainings gewachsen sind. Eine fachliche Prüfung der Bavaria-spezifischen Gesundheitsanforderungen steht noch aus; medizinische Ausschlusskriterien werden deshalb nicht vorweggenommen.</p>
            </article>
            <article className="rounded-[28px] border border-[#DED9CF] bg-white p-7 sm:p-9">
              <h2 className="font-serif text-4xl text-[#153B36]">Unterkunft und Verpflegung</h2>
              <p className="mt-5 leading-8 text-slate-600">Weitere Informationen zu Unterkunft und Verpflegung werden mit der Ausschreibung der nächsten Ordination bekannt gegeben.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-2">
            <article className="rounded-[30px] border border-[#DED9CF] bg-white p-7 shadow-[0_18px_50px_rgba(21,59,54,0.05)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Ausblick</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Nächste deutschsprachige Ordination</h2>
              <p className="mt-5 leading-8 text-slate-600">Der Termin der nächsten deutschsprachigen Ordination wird hier veröffentlicht, sobald er feststeht.</p>
            </article>
            <article className="rounded-[30px] border border-[#DED9CF] bg-white p-7 shadow-[0_18px_50px_rgba(21,59,54,0.05)] sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7644]">Vergangene Veranstaltung</p>
              <h2 className="mt-5 font-serif text-4xl text-[#153B36]">Rückblick 2026</h2>
              <p className="mt-5 leading-8 text-slate-600">Die deutschsprachige Ordination 2026 hat bereits stattgefunden. Eine Anmeldung für diese Veranstaltung ist nicht mehr möglich. Freigegebene authentische Bilder können hier später als Dokumentation ergänzt werden.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#D9CDB7] bg-[#153B36] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <CheckCircle2 className="mx-auto h-9 w-9 text-[#D6BC8C]" />
            <h2 className="mt-5 font-serif text-4xl">Anmeldung</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">Die Anmeldung wird geöffnet, sobald Termin und Teilnahmebedingungen der nächsten Ordination feststehen.</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#E5DED0] bg-white py-12 sm:py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-sm leading-7 text-slate-500">
            <h2 className="font-serif text-2xl text-[#153B36]">Quelle und fachliche Einordnung</h2>
            <p className="mt-4">Die allgemeinen Programminformationen dieser Seite wurden eigenständig auf Deutsch formuliert und orientieren sich an den Programmdetails des European Ordination Program. Orts-, Termin- und Organisationsangaben des europäischen Programms gelten nicht automatisch für Wat Phra Dhammakaya Bavaria.</p>
            <a href="https://www.monkslife.org/about/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-[#153B36] underline decoration-[#B08D57] underline-offset-4">
              Fachliche Referenz: European Ordination Program <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
