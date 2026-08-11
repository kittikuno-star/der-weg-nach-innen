import type { Metadata } from "next";

import SchoolVisitForm from "@/components/forms/SchoolVisitForm";
import OfferLocationsPage from "@/components/offers/OfferLocationsPage";

export const metadata: Metadata = {
  title: "Schulangebote | Der Weg nach innen",
  description:
    "Schulklassen können alle sieben buddhistischen Tempel und Meditationsorte in Deutschland besuchen.",
};

export default function SchoolOffersPage() {
  return (
    <OfferLocationsPage
      eyebrow="Schulangebote"
      title="Buddhismus und Meditation vor Ort kennenlernen"
      description="Unsere Tempel heißen Schulklassen und Lehrkräfte willkommen. Bei einem Besuch erhalten Schülerinnen und Schüler einen altersgerechten Einblick in den Buddhismus, das Leben im Tempel und die Meditation."
      image="/images/offers/schulangebote.png"
      imageAlt="Dhammakaya-Mönch im Gespräch mit einer Schulklasse"
      sectionTitle="Wählen Sie einen Tempel für Ihren Schulbesuch"
      sectionDescription="Schulangebote sind an allen sieben Standorten möglich. Auf der jeweiligen Standortseite finden Sie weitere Informationen und die passende Kontaktmöglichkeit."
      contactText="Teilen Sie uns den gewünschten Standort, die Klassenstufe, die Gruppengröße und einen möglichen Zeitraum mit. Wir besprechen den Besuch anschließend persönlich mit Ihnen."
      contactForm={<SchoolVisitForm />}
    />
  );
}