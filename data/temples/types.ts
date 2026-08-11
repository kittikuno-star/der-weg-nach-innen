import type { LucideIcon } from "lucide-react";

export type TempleAction = {
  label: string;
  href: string;
};

export type TempleActivity = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
  href?: string;
};

export type TempleInfoItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TempleFaqItem = {
  question: string;
  answer: string;
};

export type TempleData = {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  region: string;
  heroImage: string;
  eyebrow: string;
  headline: string;
  highlightedHeadline: string;
  introduction: string;
  primaryAction: TempleAction;
  secondaryAction: TempleAction;
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
  };
  activities: TempleActivity[];
  visitInfo: TempleInfoItem[];
  facilities: string[];
  gallery: string[];
  faq: TempleFaqItem[];
  address: {
    label: string;
    lines: string[];
    parking: string;
    publicTransport: string;
    mapsHref?: string;
  };
};
