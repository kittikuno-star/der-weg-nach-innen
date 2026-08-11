import Image from "next/image";
import {
  Brain,
  Leaf,
  Sparkles,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import IconBox from "@/components/ui/IconBox";
import {
  Eyebrow,
  Heading,
  Text,
} from "@/components/ui/Typography";
import { routes } from "@/lib/routes";

const benefits = [
  {
    icon: Sparkles,
    label: "Ruhe finden",
  },
  {
    icon: Brain,
    label: "Den Geist verstehen",
  },
  {
    icon: Leaf,
    label: "Bewusst leben",
  },
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#F3EFE6_0%,transparent_40%)]"
      />

      <Container>
        <div className="relative grid gap-12 pb-16 pt-12 sm:gap-14 sm:pb-20 sm:pt-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24 lg:pt-24 xl:gap-24">
          <div className="relative z-10 max-w-xl">
            <Eyebrow>
              Meditation • Achtsamkeit • Buddhismus
            </Eyebrow>

            <Heading
              as="h1"
              variant="hero"
              className="mt-5"
            >
              DER WEG
              <br />
              NACH INNEN
            </Heading>

            <Text
              variant="lead"
              className="mt-6 max-w-lg sm:mt-7 lg:mt-8"
            >
              Meditation für mehr Ruhe, Klarheit und innere Stärke – offen für
              alle, unabhängig von Religion oder Erfahrung.
            </Text>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 lg:mt-12">
              {benefits.map(
                ({ icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4"
                  >
                    <IconBox
                      icon={icon}
                      variant="light"
                      size="md"
                      interactive
                    />

                    <Text
                      as="span"
                      variant="label"
                      className="text-[#55606A]"
                    >
                      {label}
                    </Text>
                  </div>
                ),
              )}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap lg:mt-14">
              <Button
                href="/#meditationsangebote"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                Angebote ansehen
              </Button>

              <Button
                href={routes.meditation}
                variant="outline"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                Mehr über Meditation
              </Button>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -left-8 top-10 hidden h-48 w-48 rounded-full bg-[#D8C19B]/20 blur-3xl xl:block"
            />

            <div
              aria-hidden="true"
              className="absolute -right-10 bottom-10 hidden h-56 w-56 rounded-full bg-[#153B36]/10 blur-3xl xl:block"
            />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-[#EDE9DF] shadow-[0_20px_55px_rgba(0,0,0,0.13)] sm:aspect-[3/4] sm:rounded-[32px] lg:aspect-auto lg:h-[700px] lg:rounded-[40px] xl:h-[780px]">
              <Image
                src="/images/hero/hero-01.png"
                alt="Meditierende Person in ruhiger Natur"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 50vw"
                className="object-cover object-[68%_center] sm:object-[75%_center] lg:object-[82%_center]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center xl:flex">
        <span className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8B7355]">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-[#B08D57]/40">
          <div className="mt-2 h-3 w-1.5 animate-bounce rounded-full bg-[#B08D57]" />
        </div>
      </div>
    </section>
  );
}