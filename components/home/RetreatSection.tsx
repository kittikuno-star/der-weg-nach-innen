import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { retreats } from "@/data/retreats";

export default function RetreatSection() {
  const retreat = retreats[0];

  return (
    <section
      id="retreat"
      className="relative scroll-mt-20 overflow-hidden bg-white py-16 lg:py-20"
    >
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#153B36]/5 blur-3xl" />

      <Container>
        <SectionTitle
          eyebrow="Retreat"
          title={retreat.shortTitle}
          subtitle="Ein Retreat schenkt dir Raum zum Innehalten und neue Kraft für den Alltag."
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#B08D57]">
                Meditation erleben
              </p>

              <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#153B36] sm:text-5xl lg:text-[3.2rem]">
                Ein Tag,
                <br />
                der deinen Geist
                <br />
                verändern kann.
              </h3>

              <p className="mt-6 text-base leading-7 text-gray-600 lg:text-lg lg:leading-8">
                Unsere Retreats verbinden Meditation, Achtsamkeit und
                buddhistische Weisheit in einer ruhigen und inspirierenden
                Umgebung.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600 lg:text-lg lg:leading-8">
                Egal ob Anfänger oder erfahrene Meditierende – jeder ist
                herzlich willkommen. Entdecke einen Tag voller Ruhe, Klarheit
                und neuer Inspiration.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  href={retreat.href}
                  className="w-full sm:w-auto"
                >
                  Retreat entdecken
                </Button>

                <Button
                  href={retreat.href}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Termine ansehen
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -bottom-10 -right-10 hidden h-56 w-56 rounded-full bg-[#153B36]/10 blur-3xl xl:block" />

              <div className="relative h-[380px] overflow-hidden rounded-[32px] shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:h-[440px] lg:h-[500px]">
                <Image
                  src={retreat.image}
                  alt={retreat.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}