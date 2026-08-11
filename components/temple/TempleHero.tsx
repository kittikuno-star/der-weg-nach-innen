import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { TempleAction } from "@/data/temples/types";

type TempleHeroProps = {
  image: string;
  imageAlt?: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryAction: TempleAction;
  secondaryAction?: TempleAction;
};

export default function TempleHero({
  image,
  imageAlt,
  eyebrow,
  title,
  highlightedTitle,
  description,
  primaryAction,
  secondaryAction,
}: TempleHeroProps) {
  return (
    <section
      aria-labelledby="temple-hero-title"
      className="relative isolate flex min-h-[78svh] overflow-hidden bg-[#102F2B] text-white sm:min-h-[82svh] lg:min-h-[86svh]"
    >
      <Image
        src={image}
        alt={imageAlt ?? `${title} ${highlightedTitle}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* The layered overlays keep text readable without hiding the temple image. */}
      <div className="absolute inset-0 bg-[#102F2B]/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2824]/95 via-[#102F2B]/72 to-[#102F2B]/12 lg:via-[#102F2B]/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081F1C]/80 via-transparent to-[#081F1C]/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#102F2B] to-transparent" />

      <Container className="relative z-10 flex w-full items-end pb-20 pt-32 sm:pb-24 sm:pt-36 lg:items-center lg:py-32">
        <FadeIn>
          <div className="max-w-3xl [text-shadow:0_3px_24px_rgba(0,0,0,0.28)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4 text-[#E4CFA7]"
                strokeWidth={1.8}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F2E6CF] sm:text-sm sm:tracking-[0.3em]">
                {eyebrow}
              </p>
            </div>

            <h1
              id="temple-hero-title"
              className="mt-6 max-w-3xl font-serif text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98] tracking-[-0.025em]"
            >
              {title}
              <span className="mt-3 block text-[#E4CFA7]">
                {highlightedTitle}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8 lg:text-xl">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                href={primaryAction.href}
                size="lg"
                variant="secondary"
                className="group min-h-14 w-full shadow-[0_18px_45px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  {primaryAction.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Button>

              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  size="lg"
                  variant="outline"
                  className="min-h-14 w-full border-white/70 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#153B36] sm:w-auto"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </Container>

      <a
        href="#temple-content"
        aria-label="Zum Inhalt springen"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white/85 backdrop-blur-sm transition hover:bg-white hover:text-[#153B36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CFA7] lg:inline-flex"
      >
        <ArrowDown aria-hidden="true" className="h-5 w-5" />
      </a>
    </section>
  );
}
