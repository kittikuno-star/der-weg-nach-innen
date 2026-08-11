import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Flower2,
  GraduationCap,
  Landmark,
  MessagesSquare,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Angebote | Der Weg nach innen",
  description:
    "Meditationskurse, Retreats, Schulbesuche, Tempelbesuche, Vorträge und besondere Veranstaltungen in unseren Tempeln in Deutschland.",
};

const offers = [
  {
    title: "Meditationskurse",
    text: "Regelmäßige Meditation für Anfänger und Menschen mit Erfahrung – vor Ort und online.",
    action: "Kurse ansehen",
    href: routes.courses,
    image: "/images/offers/meditationskurse.png",
    alt: "Dhammakaya-Mönch leitet eine Meditationsgruppe an",
    icon: Flower2,
  },
  {
    title: "Retreats",
    text: "Ein oder mehrere Tage, um zur Ruhe zu kommen, die Meditation zu vertiefen und neue Kraft zu sammeln.",
    action: "Retreats ansehen",
    href: routes.retreats,
    image: "/images/offers/retreats.png",
    alt: "Meditationstag mit einem Dhammakaya-Mönch und Teilnehmenden",
    icon: CalendarDays,
  },
  {
    title: "Schulangebote",
    text: "Tempelbesuche, altersgerechte Einführungen in den Buddhismus und erste gemeinsame Meditationserfahrungen.",
    action: "Angebot ansehen",
    href: routes.schoolOffers,
    image: "/images/offers/schulangebote.png",
    alt: "Dhammakaya-Mönch im Gespräch mit einer Schulklasse",
    icon: GraduationCap,
  },
  {
    title: "Tempelbesuche",
    text: "Lernen Sie einen buddhistischen Tempel kennen, erleben Sie die Atmosphäre vor Ort und kommen Sie mit uns ins Gespräch.",
    action: "Tempel auswählen",
    href: routes.locations,
    image: "/images/offers/tempelbesuche.png",
    alt: "Dhammakaya-Mönch begrüßt Besucherinnen und Besucher im Tempel",
    icon: Landmark,
  },
  {
    title: "Vorträge und Gespräche",
    text: "Verständliche Impulse zu Meditation, buddhistischer Lebenspraxis und einem bewussten Umgang mit dem Alltag.",
    action: "Angebot ansehen",
    href: routes.talks,
    image: "/images/offers/vortraege-gespraeche-neu.png",
    alt: "Dhammakaya-Mönch bei einem Vortrag und offenen Gespräch",
    icon: MessagesSquare,
  },
  {
    title: "Zeremonien und Veranstaltungen",
    text: "Buddhistische Feiertage, kulturelle Begegnungen und besondere Veranstaltungen in unseren Tempeln.",
    action: "Angebot ansehen",
    href: routes.ceremonies,
    image: "/images/offers/zeremonien-veranstaltungen-neu.png",
    alt: "Buddhistische Zeremonie mit Dhammakaya-Mönchen und Gästen",
    icon: BookOpen,
  },
];

export default function OffersPage() {
  return (
    <main className="bg-[#F7F4ED]">
      <section className="border-b border-[#E5DED0] bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                Unsere Angebote
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.025em] text-[#153B36] sm:text-6xl lg:text-7xl">
                Was möchten Sie kennenlernen?
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Wählen Sie den Bereich, der Sie interessiert. Sie gelangen ohne
                Umweg zu den passenden Angeboten oder zu den Tempeln, an denen
                diese stattfinden.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer, index) => {
              const Icon = offer.icon;

              return (
                <FadeIn key={offer.title} delay={index * 0.06}>
                  <Link
                    href={offer.href}
                    className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#E4DED2] bg-white shadow-[0_16px_45px_rgba(21,59,54,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-[#C8B58E] hover:shadow-[0_26px_70px_rgba(21,59,54,0.13)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE8DE]">
                      <Image
                        src={offer.image}
                        alt={offer.alt}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102F2B]/35 via-transparent to-transparent" />
                      <span className="absolute bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/92 text-[#153B36] shadow-lg backdrop-blur-sm">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <h2 className="font-serif text-3xl leading-tight text-[#153B36]">
                        {offer.title}
                      </h2>
                      <p className="mt-4 flex-1 leading-7 text-slate-600">
                        {offer.text}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">
                        {offer.action}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-14 rounded-[28px] border border-[#DED5C5] bg-[#EFE8DC] px-7 py-8 text-center sm:px-10">
              <h2 className="font-serif text-3xl text-[#153B36]">
                Sie wissen noch nicht, welches Angebot zu Ihnen passt?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Schreiben Sie uns kurz, wonach Sie suchen. Wir helfen Ihnen,
                den passenden Einstieg oder Standort zu finden.
              </p>
              <Link
                href={routes.contact}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#153B36] px-7 py-3 font-medium text-white transition hover:bg-[#244B45]"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
