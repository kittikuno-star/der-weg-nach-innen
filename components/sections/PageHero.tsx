import type { LucideIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type HeroButton = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  icon: LucideIcon;
  headingId: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

export default function PageHero({
  eyebrow,
  title,
  highlightedTitle,
  description,
  icon: Icon,
  headingId,
  primaryButton,
  secondaryButton,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#153B36] py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,141,87,0.25),transparent_45%)]"
      />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#E7D7B8]">
            <Icon
              aria-hidden="true"
              className="h-8 w-8"
              strokeWidth={1.7}
            />
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">
            {eyebrow}
          </p>

          <h1
            id={headingId}
            className="mt-6 font-serif text-5xl leading-tight sm:text-6xl"
          >
            {title}

            {highlightedTitle && (
              <>
                <br />
                <span className="text-[#E7D7B8]">
                  {highlightedTitle}
                </span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">
            {description}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              {primaryButton && (
                <Button href={primaryButton.href} size="lg">
                  {primaryButton.label}
                </Button>
              )}

              {secondaryButton && (
                <Button
                  href={secondaryButton.href}
                  size="lg"
                  variant="secondary"
                >
                  {secondaryButton.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}