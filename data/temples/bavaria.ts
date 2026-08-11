import {
  CalendarDays,
  User,
  Footprints,
  Shirt,
} from "lucide-react";

import type { TempleData } from "@/data/temples/types";

export const bavariaTemple: TempleData = {
  slug: "bavaria",
  name: "Wat Phra Dhammakaya Bavaria",
  shortName: "Bavaria",
  city: "Königsbrunn bei Augsburg",
  region: "Bayern",
  heroImage: "/images/temples/bavaria/hero-01.jpg",
  eyebrow: "Königsbrunn · Bayern",
  headline: "Ein Ort für Ruhe,",
  highlightedHeadline: "Meditation und Begegnung",
  introduction:
    "Willkommen in Wat Phra Dhammakaya Bavaria. Entdecken Sie Meditation in einer ruhigen, offenen Atmosphäre – unabhängig von Herkunft, Erfahrung oder Glaubensrichtung.",
  primaryAction: {
    label: "Besuch vereinbaren",
    href: "/kontakt?thema=tempelbesuch",
  },
  secondaryAction: {
    label: "Retreat entdecken",
    href: "/retreats/bavaria",
  },
  story: {
    eyebrow: "Willkommen im Tempel",
    title: "Ein geschützter Raum, in dem Sie einfach ankommen dürfen",
    paragraphs: [
      "Der Tempel ist ein Ort für Meditation, buddhistische Praxis und persönliche Begegnung. Neue Besucherinnen und Besucher sind herzlich willkommen.",
      "Da nicht jederzeit jemand vor Ort ist, bitten wir vor dem ersten Besuch um eine kurze Terminvereinbarung. So können wir uns Zeit für Ihre Fragen nehmen und Sie in Ruhe mit dem Tempel vertraut machen.",
    ],
    image: "/images/meditation/why-meditation-01.png",
  },
  activities: [
    {
      eyebrow: "Vor Ort",
      title: "Meditationsabend",
      description:
        "Angeleitete Meditation und ein verständlicher Dhamma-Impuls in ruhiger Atmosphäre.",
      meta: "Mittwoch · 19:30–21:00 Uhr",
      href: "/meditation",
    },
    {
      eyebrow: "Ganztägig",
      title: "One Day Retreat Bavaria",
      description:
        "Ein Tag mit Meditation, Dhamma, achtsamen Pausen und gemeinsamer Mahlzeit.",
      href: "/retreats/bavaria",
    },
    {
      eyebrow: "Nach Vereinbarung",
      title: "Tempelbesuch",
      description:
        "Lernen Sie den Tempel kennen, stellen Sie Ihre Fragen und erhalten Sie einen ersten Einblick in die buddhistische Praxis.",
      href: "/kontakt?thema=tempelbesuch",
    },
  ],
  visitInfo: [
    {
      icon: CalendarDays,
      title: "Termin",
      description:
        "Bitte vereinbaren Sie Ihren ersten Besuch vorab, da nicht jederzeit jemand vor Ort ist.",
    },
    {
      icon: Shirt,
      title: "Kleidung",
      description:
        "Wir empfehlen möglichst helle, schlichte und bequeme Kleidung.",
    },
    {
      icon: Footprints,
      title: "Schuhe",
      description:
        "Straßenschuhe werden am Eingang ausgezogen. In den Fluren sind Hausschuhe möglich; vor einzelnen Räumen wird sämtliches Schuhwerk ausgezogen.",
    },
    {
      icon: User,
      title: "Vorkenntnisse",
      description:
        "Sie müssen weder Buddhist sein noch Erfahrung mit Meditation haben.",
    },
  ],
  facilities: [
    "Meditationshalle",
    "Speisesaal",
    "Ruhige Außenbereiche",
    "Parkplätze am Tempel",
    "Sanitäre Einrichtungen",
    "Übernachtung nach Absprache",
  ],
  gallery: [
    "/images/hero/hero-01.png",
    "/images/courses/course-introduction-01.png",
    "/images/courses/course-weekly-01.png",
    "/images/courses/course-retreat-01.png",
    "/images/inspiration/inspiration-buddhist-wisdom-01.png",
  ],
  faq: [
    {
      question: "Brauche ich Meditationserfahrung?",
      answer:
        "Nein. Unsere Angebote sind auch für Menschen geeignet, die Meditation zum ersten Mal kennenlernen möchten.",
    },
    {
      question: "Muss ich Buddhist sein?",
      answer:
        "Nein. Der Tempel ist offen für Menschen aller Hintergründe und Glaubensrichtungen.",
    },
    {
      question: "Kostet ein Tempelbesuch etwas?",
      answer:
        "Für einen gewöhnlichen Tempelbesuch wird kein Beitrag verlangt. Bei besonderen Veranstaltungen können Selbstkosten entstehen; dies wird auf der jeweiligen Veranstaltungsseite angegeben.",
    },
    {
      question: "Kann ich spontan vorbeikommen?",
      answer:
        "Bitte vereinbaren Sie Ihren ersten Besuch vorab, weil nicht jederzeit eine deutschsprachige Ansprechperson vor Ort ist.",
    },
  ],
  address: {
    label: "Wat Phra Dhammakaya Bavaria",
    lines: ["Königsbrunn bei Augsburg", "Bayern"],
    parking: "Parkmöglichkeiten befinden sich direkt am Tempelgelände.",
    publicTransport:
      "Die genaue Anreise mit öffentlichen Verkehrsmitteln wird nach Bestätigung der Standortdaten ergänzt.",
  },
};
