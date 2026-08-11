import { ReactNode } from "react";
import { designSystem, SurfaceVariant, SectionSpacing } from "@/lib/design-system";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;

  /**
   * Background surface
   */
  background?: SurfaceVariant;

  /**
   * Vertical spacing
   */
  spacing?: SectionSpacing;

  /**
   * Optional container
   */
  container?: boolean;

  /**
   * Container width
   */
  containerWidth?: "content" | "wide" | "medium" | "narrow";
};

export default function Section({
  children,
  id,
  className = "",
  background = "white",
  spacing = "section",
  container = true,
  containerWidth = "content",
}: SectionProps) {
  const backgroundClass =
    designSystem.surface[background] ?? designSystem.surface.white;

  const spacingClass =
    designSystem.spacing[spacing] ?? designSystem.spacing.section;

  const containerClass =
    designSystem.container[containerWidth] ??
    designSystem.container.content;

  return (
    <section
      id={id}
      className={`${backgroundClass} ${spacingClass} ${className}`}
    >
      {container ? (
        <div className={containerClass}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}