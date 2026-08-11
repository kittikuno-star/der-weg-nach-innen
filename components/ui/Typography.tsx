import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingVariant =
  | "hero"
  | "page"
  | "section"
  | "card";

type TextVariant =
  | "lead"
  | "body"
  | "small"
  | "label";

type TextTheme = "light" | "dark";

type HeadingProps = {
  children: ReactNode;
  as?: HeadingLevel;
  variant?: HeadingVariant;
  theme?: TextTheme;
  className?: string;
};

type TextProps = {
  children: ReactNode;
  as?: "p" | "div" | "span";
  variant?: TextVariant;
  theme?: TextTheme;
  className?: string;
};

type EyebrowProps = {
  children: ReactNode;
  as?: "p" | "span";
  theme?: TextTheme;
  className?: string;
};

const headingClasses: Record<HeadingVariant, string> = {
  hero:
    "font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[6rem]",

  page:
    "font-serif text-5xl leading-[1.07] tracking-[-0.035em] sm:text-6xl lg:text-7xl",

  section:
    "font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-5xl",

  card:
    "font-serif text-2xl leading-tight tracking-[-0.015em]",
};

const textClasses: Record<TextVariant, string> = {
  lead:
    "text-lg leading-8 lg:text-xl lg:leading-9",

  body:
    "text-base leading-8 sm:text-lg",

  small:
    "text-sm leading-7",

  label:
    "text-sm font-medium uppercase tracking-[0.18em] sm:text-base sm:tracking-[0.22em]",
};

const headingThemeClasses: Record<TextTheme, string> = {
  light: "text-[#153B36]",
  dark: "text-white",
};

const textThemeClasses: Record<TextTheme, string> = {
  light: "text-slate-600",
  dark: "text-white/75",
};

const eyebrowThemeClasses: Record<TextTheme, string> = {
  light: "text-[#B08D57]",
  dark: "text-[#D6BC8C]",
};

export function Heading({
  children,
  as = "h2",
  variant = "section",
  theme = "light",
  className = "",
}: HeadingProps) {
  const Component = as;

  return (
    <Component
      className={`${headingClasses[variant]} ${headingThemeClasses[theme]} ${className}`}
    >
      {children}
    </Component>
  );
}

export function Text({
  children,
  as = "p",
  variant = "body",
  theme = "light",
  className = "",
}: TextProps) {
  const Component = as;

  return (
    <Component
      className={`${textClasses[variant]} ${textThemeClasses[theme]} ${className}`}
    >
      {children}
    </Component>
  );
}

export function Eyebrow({
  children,
  as = "p",
  theme = "light",
  className = "",
}: EyebrowProps) {
  const Component = as;

  return (
    <Component
      className={`text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm sm:tracking-[0.45em] ${eyebrowThemeClasses[theme]} ${className}`}
    >
      {children}
    </Component>
  );
}