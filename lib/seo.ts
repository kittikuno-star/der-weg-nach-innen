import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import { languageAlternatives, languageFromPathname } from "@/lib/languageRoutes";

export const DEFAULT_DESCRIPTIONS = {
  de: "Meditation, Achtsamkeit und buddhistische Weisheit – kostenlos und offen für alle.",
  en: "Meditation, mindfulness and Buddhist wisdom in Germany — open and accessible to everyone.",
  th: "การทำสมาธิ สติ และหลักธรรมทางพระพุทธศาสนาในประเทศเยอรมนี เปิดกว้างสำหรับทุกคน",
} as const;

export const DEFAULT_TITLES = {
  de: "Der Weg nach innen",
  en: "The Way Within",
  th: "เส้นทางสู่ความสงบภายใน",
} as const;

const OPEN_GRAPH_LOCALES = {
  de: "de_DE",
  en: "en_GB",
  th: "th_TH",
} as const;

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE.url).toString();
}

export function alternatesForPath(pathname: string): Metadata["alternates"] {
  const alternatives = languageAlternatives(pathname);

  return {
    canonical: absoluteUrl(pathname),
    languages: {
      "de-DE": absoluteUrl(alternatives.de),
      en: absoluteUrl(alternatives.en),
      th: absoluteUrl(alternatives.th),
      "x-default": absoluteUrl(alternatives.de),
    },
  };
}

export function socialMetadataForPath(pathname: string): Pick<Metadata, "openGraph" | "twitter"> {
  const language = languageFromPathname(pathname);
  const title = DEFAULT_TITLES[language];
  const description = DEFAULT_DESCRIPTIONS[language];

  return {
    openGraph: {
      type: "website",
      url: absoluteUrl(pathname),
      siteName: title,
      locale: OPEN_GRAPH_LOCALES[language],
      title,
      description,
      images: [
        {
          url: absoluteUrl("/images/hero/hero-01.png"),
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/hero/hero-01.png")],
    },
  };
}

export function pageMetadata({
  pathname,
  title,
  description,
}: {
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const social = socialMetadataForPath(pathname);

  return {
    title,
    description,
    alternates: alternatesForPath(pathname),
    openGraph: {
      ...social.openGraph,
      title,
      description,
    },
    twitter: {
      ...social.twitter,
      title,
      description,
    },
  };
}
