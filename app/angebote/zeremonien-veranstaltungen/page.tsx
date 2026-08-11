import type { Metadata } from "next";

import OfferLocationsPage from "@/components/offers/OfferLocationsPage";

export const metadata: Metadata = {
  title: "Zeremonien und Veranstaltungen | Der Weg nach innen",
  description:
    "Buddhistische Zeremonien, Feiertage und besondere Veranstaltungen an allen sieben Standorten in Deutschland.",
};

export default function CeremoniesPage() {
  return (
    <OfferLocationsPage
      eyebrow="Zeremonien und Veranstaltungen"
      title="Buddhistische Tradition gemeinsam erleben"
      description="Unsere Tempel laden zu buddhistischen Feiertagen, Zeremonien, kulturellen Begegnungen und besonderen Veranstaltungen ein. Besucherinnen und Besucher sind herzlich willkommen, die Tradition respektvoll kennenzulernen."
      image="/images/offers/zeremonien-veranstaltungen-neu.png"
      imageAlt="Buddhistische Zeremonie mit Dhammakaya-Mönchen und Gästen"
      sectionTitle="Veranstaltungen in unseren sieben Tempeln"
      sectionDescription="Wählen Sie einen Standort, um den Tempel kennenzulernen. Aktuelle Termine und Teilnahmeinformationen erhalten Sie über die jeweilige Standortseite oder auf Anfrage."
      contactText="Schreiben Sie uns, für welchen Standort oder welche Art von Veranstaltung Sie sich interessieren. Wir helfen Ihnen gerne mit den passenden Informationen weiter."
    />
  );
}
