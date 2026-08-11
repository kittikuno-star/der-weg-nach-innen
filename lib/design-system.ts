/**
 * WPD Germany Design System
 * Version: 1.0.0
 *
 * Central source of truth for reusable visual styles used throughout
 * DER-WEG-NACH-INNEN-WEB.
 *
 * Important:
 * - Keep complete Tailwind class names as static strings.
 * - Do not construct class names dynamically.
 * - Prefer semantic token names over component-specific names.
 */

export const designSystem = {
  colors: {
    brand: {
      primary: "#153B36",
      primarySoft: "#244B45",
      primaryMuted: "#315C55",
      gold: "#B08D57",
      goldLight: "#D6BC8C",
      goldSoft: "#E7D7B8",
    },

    background: {
      white: "#FFFFFF",
      soft: "#FAFAF8",
      cream: "#F7F6F2",
      warm: "#F4F1EA",
      goldSoft: "#FBF7EF",
      dark: "#153B36",
    },

    border: {
      light: "#E7E8E4",
      default: "#E1E2DE",
      warm: "#DEDCD5",
      gold: "#D8C49D",
      goldSoft: "#E5DCCB",
    },

    text: {
      heading: "#153B36",
      body: "#475569",
      muted: "#64748B",
      light: "#FFFFFF",
      lightMuted: "rgba(255, 255, 255, 0.75)",
      gold: "#B08D57",
      goldDark: "#735D38",
    },
  },

  spacing: {
    section: "py-20 lg:py-28",
    sectionCompact: "py-16 lg:py-20",
    sectionLarge: "py-24 lg:py-32",
    hero: "py-24 sm:py-28 lg:py-36",

    contentGap: "gap-12 lg:gap-16",
    contentGapLarge: "gap-14 lg:gap-20",

    headerToContent: "mt-14",
    titleToDescription: "mt-6",
    eyebrowToTitle: "mt-5",
  },

  container: {
    content: "mx-auto max-w-7xl px-5 sm:px-6 lg:px-8",
    narrow: "mx-auto max-w-3xl",
    medium: "mx-auto max-w-4xl",
    wide: "mx-auto max-w-6xl",
  },

  radius: {
    small: "rounded-xl",
    control: "rounded-2xl",
    card: "rounded-[28px]",
    cardLarge: "rounded-[32px]",
    section: "rounded-[38px]",
    pill: "rounded-full",
  },

  shadow: {
    subtle: "shadow-[0_14px_45px_rgba(21,59,54,0.04)]",
    card: "shadow-[0_16px_50px_rgba(21,59,54,0.04)]",
    elevated: "shadow-[0_24px_70px_rgba(21,59,54,0.09)]",
    image: "shadow-[0_26px_90px_rgba(21,59,54,0.12)]",
    section: "shadow-[0_24px_80px_rgba(21,59,54,0.07)]",
  },

  typography: {
    eyebrow:
      "text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]",

    eyebrowOnDark:
      "text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]",

    pageTitle:
      "font-serif text-5xl leading-[1.07] text-[#153B36] sm:text-6xl lg:text-7xl",

    pageTitleOnDark:
      "font-serif text-5xl leading-[1.07] text-white sm:text-6xl lg:text-7xl",

    sectionTitle:
      "font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl",

    sectionTitleOnDark:
      "font-serif text-4xl leading-tight text-white sm:text-5xl",

    cardTitle: "font-serif text-2xl leading-tight text-[#153B36]",

    body: "text-lg leading-8 text-slate-600",

    bodyOnDark: "text-lg leading-8 text-white/70",

    description: "text-lg leading-8 text-slate-600",

    descriptionOnDark: "text-lg leading-8 text-white/75",

    small: "text-sm leading-7 text-slate-600",
  },

  surface: {
    white: "bg-white",
    soft: "bg-[#FAFAF8]",
    cream: "bg-[#F7F6F2]",
    warm: "bg-[#F4F1EA]",
    dark: "bg-[#153B36] text-white",
  },

  border: {
    light: "border border-[#E7E8E4]",
    default: "border border-[#E1E2DE]",
    warm: "border border-[#DEDCD5]",
    gold: "border border-[#D8C49D]",
  },

  card: {
    base:
      "h-full rounded-[28px] border border-[#E7E8E4] bg-white p-8",

    soft:
      "h-full rounded-[28px] border border-[#E7E8E4] bg-[#FAFAF8] p-8",

    interactive:
      "h-full rounded-[28px] border border-[#E7E8E4] bg-[#FAFAF8] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_24px_70px_rgba(21,59,54,0.09)]",

    interactiveWhite:
      "h-full rounded-[28px] border border-[#E7E8E4] bg-white p-8 shadow-[0_16px_50px_rgba(21,59,54,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:shadow-[0_24px_70px_rgba(21,59,54,0.09)]",

    dark:
      "h-full rounded-[28px] border border-white/10 bg-white/[0.06] p-8 text-white backdrop-blur-sm",
  },

  iconBox: {
    default:
      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]",

    light:
      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F1EA] text-[#153B36]",

    dark:
      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#E7D7B8]",

    gold:
      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B08D57] text-white",
  },

  transition: {
    default: "transition-colors duration-300",
    interactive: "transition-all duration-500",
    transform: "transition-transform duration-500",
  },

  focus: {
    ring:
      "outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4",

    ringDark:
      "outline-none focus-visible:ring-2 focus-visible:ring-[#D6BC8C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#153B36]",
  },

  grid: {
    twoColumns: "grid gap-8 md:grid-cols-2",
    threeColumns: "grid gap-8 md:grid-cols-3",
    fourColumns: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
  },
} as const;

export type DesignSystem = typeof designSystem;

export type SurfaceVariant = keyof typeof designSystem.surface;

export type IconBoxVariant = keyof typeof designSystem.iconBox;

export type CardVariant = keyof typeof designSystem.card;

export type SectionSpacing = keyof typeof designSystem.spacing;