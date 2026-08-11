import type { ReactNode } from "react";

import { designSystem, type CardVariant } from "@/lib/design-system";

type CardPadding = "sm" | "md" | "lg";

type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-6",
  md: "p-8",
  lg: "p-10",
};

export default function Card({
  children,
  variant = "base",
  padding = "md",
  className = "",
}: CardProps) {
  const variantClass =
    designSystem.card[variant] ?? designSystem.card.base;

  return (
    <div
      className={`${variantClass} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}