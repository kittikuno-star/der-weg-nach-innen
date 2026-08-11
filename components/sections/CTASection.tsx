import type { ReactNode } from "react";

import Button from "@/components/ui/Button";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/sections/SectionHeader";

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;

  primaryButtonText: string;
  primaryButtonHref: string;

  secondaryButtonText?: string;
  secondaryButtonHref?: string;

  background?: "white" | "soft" | "cream" | "warm" | "dark";
};

export default function CTASection({
  eyebrow,
  title,
  description,

  primaryButtonText,
  primaryButtonHref,

  secondaryButtonText,
  secondaryButtonHref,

  background = "dark",
}: CTASectionProps) {
  const dark = background === "dark";

  return (
    <Section background={background}>
      <SectionHeader
        alignment="center"
        theme={dark ? "dark" : "light"}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button
          href={primaryButtonHref}
          variant={dark ? "secondary" : "primary"}
          size="lg"
        >
          {primaryButtonText}
        </Button>

        {secondaryButtonText && secondaryButtonHref && (
          <Button
            href={secondaryButtonHref}
            variant={dark ? "outline" : "ghost"}
            size="lg"
          >
            {secondaryButtonText}
          </Button>
        )}
      </div>
    </Section>
  );
}