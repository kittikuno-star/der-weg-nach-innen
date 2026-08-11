import type { Metadata } from "next";

import OfferLocationsPage from "@/components/offers/OfferLocationsPage";

export const metadata: Metadata = {
  title: "Vorträge und Gespräche | Der Weg nach innen",
  description:
    "Vorträge und persönliche Gespräche über Meditation und buddhistische Lebenspraxis an allen sieben Standorten.",
};

export default function TalksPage() {
  return (
    <OfferLocationsPage
      eyebrow="Vorträge und Gespräche"
      title="Impulse für einen bewussteren Alltag"
      description="Unsere Mönche vermitteln buddhistische Gedanken verständlich und lebensnah. Vorträge und offene Gespräche bieten Raum für Fragen zu Meditation, innerer Ruhe und dem Umgang mit den Herausforderungen des Alltags."
      image="/images/offers/vortraege-gespraeche-neu.png"
      imageAlt="Dhammakaya-Mönch bei einem Vortrag und offenen Gespräch"
      sectionTitle="Vorträge und Gespräche an allen Standorten"
      sectionDescription="Wählen Sie den Tempel, der für Sie gut erreichbar ist. Themen, Gruppengröße und Termin können anschließend direkt abgestimmt werden."
      contactText="Nennen Sie uns bitte den gewünschten Standort, das Thema, die ungefähre Teilnehmerzahl und Ihren bevorzugten Zeitraum."
    />
  );
}
