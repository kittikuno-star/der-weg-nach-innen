import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { routes } from "@/lib/routes";

export default function CTA() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="relative overflow-hidden bg-[#153B36] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#B08D57]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl"
      />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
            Der Weg beginnt hier
          </p>

          <h2
            id="home-cta-heading"
            className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Entdecken Sie die Kraft
            <span className="block text-[#E4D3B2]">
              der Meditation
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Unsere regelmäßigen Meditationsangebote sind kostenfrei, offen für
            alle und ohne Vorkenntnisse zugänglich. Beginnen Sie Ihren
            persönlichen Weg nach innen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/#meditationsangebote"
              size="lg"
            >
              Meditationsangebote ansehen
            </Button>

            <Button
              href={routes.meditation}
              size="lg"
              variant="secondary"
            >
              Mehr über Meditation
            </Button>
          </div>

          <p className="mt-8 text-sm leading-6 text-white/55">
            Sie benötigen keine besondere Ausrüstung und keine vorherige
            Meditationserfahrung.
          </p>
        </div>
      </Container>
    </section>
  );
}