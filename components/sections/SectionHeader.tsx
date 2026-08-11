import type { ReactNode } from "react";

import { designSystem } from "@/lib/design-system";

type SectionHeaderAlignment = "left" | "center";
type SectionHeaderTheme = "light" | "dark";
type SectionHeaderWidth = "narrow" | "medium" | "wide";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  alignment?: SectionHeaderAlignment;
  theme?: SectionHeaderTheme;
  width?: SectionHeaderWidth;
  className?: string;
};

const widthClasses: Record<SectionHeaderWidth, string> = {
  narrow: "max-w-2xl",
  medium: "max-w-3xl",
  wide: "max-w-4xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = "left",
  theme = "light",
  width = "medium",
  className = "",
}: SectionHeaderProps) {
  const isCentered = alignment === "center";
  const isDark = theme === "dark";

  const alignmentClasses = isCentered
    ? "mx-auto text-center"
    : "text-left";

  const eyebrowClasses = isDark
    ? designSystem.typography.eyebrowOnDark
    : designSystem.typography.eyebrow;

  const titleClasses = isDark
    ? designSystem.typography.sectionTitleOnDark
    : designSystem.typography.sectionTitle;

  const descriptionClasses = isDark
    ? designSystem.typography.descriptionOnDark
    : designSystem.typography.description;

  return (
    <header
      className={`${widthClasses[width]} ${alignmentClasses} ${className}`}
    >
      {eyebrow ? <p className={eyebrowClasses}>{eyebrow}</p> : null}

      <h2 className={`${titleClasses} ${eyebrow ? "mt-5" : ""}`}>
        {title}
      </h2>

      {description ? (
        <div className={`${descriptionClasses} mt-6`}>
          {description}
        </div>
      ) : null}
    </header>
  );
}