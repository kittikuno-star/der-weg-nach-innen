import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import BuddhistEventCard from "@/components/offers/BuddhistEventCard";
import Container from "@/components/ui/Container";
import { buddhistEvents } from "@/data/buddhistEvents";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Buddhistische Angebote | Der Weg nach innen",
  description:
    "Buddhistische Feiertage, Bucha Khao Phra, Gedenktage und Tempelveranstaltungen an sieben Standorten in Deutschland.",
};

const sections = [
  {
    id: "monthly",
    title: "Monatliche Zeremonien",
    description:
      "Regelmäßige gemeinsame Praxis mit Menschen in Tempeln und Meditationszentren auf der ganzen Welt.",
  },
  {
    id: "buddhist-holiday",
    title: "Buddhistische Feiertage",
    description:
      "Bedeutende Tage im buddhistischen Jahreskreis mit Meditation, Rezitation und gemeinschaftlicher Praxis.",
  },
  {
    id: "teacher-day",
    title: "Gedenk- und Meistertage",
    description:
      "Tage des dankbaren Erinnerns an bedeutende Lehrerinnen und Lehrer der Dhammakaya-Tradition.",
  },
  {
    id: "temple-festival",
    title: "Tempelfeste und besondere Zeremonien",
    description:
      "Kulturelle Feste, Ehrungszeremonien und besondere jährliche Veranstaltungen der Tempelgemeinschaften.",
  },
] as const;

export default function BuddhistOffersPage() {
  return (
    <main className="bg-[#F7F4ED]">
      <section className="border-b border-[#E5DED0] bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Link
            href={routes.offers}
            className="inline-flex items-center gap-2 font-medium text-[#153B36]"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zu allen Angeboten
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
              Buddhistische Angebote
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.025em] text-[#153B36] sm:text-6xl lg:text-7xl">
              Buddhistische Tradition gemeinsam erleben
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Entdecken Sie buddhistische Feiertage, Bucha Khao Phra,
              Gedenktage und Tempelveranstaltungen. Wenn eine Anmeldung möglich
              ist, wählen Sie anschließend den Tempel in Ihrer Nähe aus.
            </p>
          </div>
        </Container>
      </section>

      {sections.map((section) => {
        const events = buddhistEvents.filter(
          (event) => event.category === section.id,
        );

        return (
          <section
            key={section.id}
            id={section.id}
            className="border-b border-[#E5DED0] py-16 sm:py-20 lg:py-24"
          >
            <Container>
              <div className="max-w-3xl">
                <h2 className="font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {section.description}
                </p>
              </div>

              <div className="mt-10 grid gap-7 lg:grid-cols-2">
                {events.map((event) => (
                  <BuddhistEventCard key={event.id} event={event} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </main>
  );
}
