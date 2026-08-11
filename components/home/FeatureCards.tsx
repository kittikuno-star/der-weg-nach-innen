import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import IconBox from "@/components/ui/IconBox";
import { routes } from "@/lib/routes";

const cards = [
  {
    icon: Sparkles,
    title: "Meditation",
    text: "Finden Sie innere Ruhe durch Meditation und entdecken Sie Ihren persönlichen Weg nach innen.",
    href: routes.meditation,
    ariaLabel: "Mehr über Meditation erfahren",
  },
  {
    icon: BookOpen,
    title: "Meditationskurse",
    text: "Lernen Sie Meditation Schritt für Schritt – verständlich, praxisnah und alltagstauglich.",
    href: "/#meditationsangebote",
    ariaLabel: "Meditationskurse ansehen",
  },
  {
    icon: CalendarDays,
    title: "Retreats",
    text: "Entdecken Sie Meditationstage und Retreats an verschiedenen Standorten in Deutschland.",
    href: "/#retreat",
    ariaLabel: "Retreat-Angebote ansehen",
  },
];

export default function FeatureCards() {
  return (
    <section
      id="entdecken"
      className="scroll-mt-20 bg-[#FAFAF8] py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
            Entdecken
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#153B36] lg:text-5xl">
            Meditation beginnt mit dem ersten Schritt
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
            Ob Meditation, Kurse oder Retreats – hier finden Sie den passenden
            Einstieg auf Ihrem persönlichen Weg.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn
              key={card.title}
              delay={index * 0.15}
            >
              <Link
                href={card.href}
                aria-label={card.ariaLabel}
                className="block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
              >
                <Card className="group h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="transition-transform duration-500 group-hover:rotate-6">
                    <IconBox
                      icon={card.icon}
                      interactive
                    />
                  </div>

                  <h3 className="mt-8 font-serif text-3xl text-[#153B36] transition-colors duration-300 group-hover:text-[#B08D57]">
                    {card.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {card.text}
                  </p>

                  <p className="mt-8 text-sm font-semibold text-[#153B36] transition-colors duration-300 group-hover:text-[#B08D57]">
                    Mehr entdecken →
                  </p>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}