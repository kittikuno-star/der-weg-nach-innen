import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { routes } from "@/lib/routes";

export default function MeditationSection() {
  return (
    <section
      id="meditation"
      className="relative scroll-mt-20 overflow-hidden bg-white py-16 lg:py-20"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#153B36]/5 blur-3xl" />

      <Container>
        <SectionTitle
          eyebrow="Meditation"
          title="Warum meditieren?"
          subtitle="Meditation hilft uns, den Geist zu beruhigen, Klarheit zu finden und mehr Gelassenheit in den Alltag zu bringen."
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Bild */}

          <FadeIn>
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-10 -top-10 hidden h-56 w-56 rounded-full bg-[#B08D57]/10 blur-3xl xl:block" />

              <div className="relative h-[380px] overflow-hidden rounded-[32px] shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:h-[440px] lg:h-[500px]">
                <Image
                  src="/images/meditation/why-meditation-01.png"
                  alt="Meditation"
                  fill
                  priority={false}
                  sizes="(max-width:1024px)100vw,50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>

          {/* Text */}

          <FadeIn delay={0.2}>
            <div className="order-1 max-w-xl lg:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#B08D57]">
                Innere Ruhe
              </p>

              <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#153B36] sm:text-5xl lg:text-[3.2rem]">
                Ruhe beginnt
                <br />
                nicht außerhalb,
                <br />
                sondern in dir.
              </h3>

              <p className="mt-6 text-base leading-7 text-gray-600 lg:text-lg lg:leading-8">
                Meditation bedeutet nicht, vor der Welt davonzulaufen. Sie
                schenkt uns einen Raum, den Geist bewusst wahrzunehmen und
                Schritt für Schritt innere Ruhe zu entwickeln.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600 lg:text-lg lg:leading-8">
                Wer regelmäßig meditiert, begegnet Herausforderungen klarer,
                gelassener und mit mehr Mitgefühl.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  href={routes.meditation}
                  className="w-full sm:w-auto"
                >
                  Mehr über Meditation
                </Button>

                <Button
                  href="/#meditationsangebote"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Kurse ansehen
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}