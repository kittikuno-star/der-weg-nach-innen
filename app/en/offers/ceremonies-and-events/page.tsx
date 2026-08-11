import type { Metadata } from "next";

import EnglishOfferLocationsPage from "@/components/offers/EnglishOfferLocationsPage";

export const metadata: Metadata = {
  title: "Ceremonies and events | The Way Within",
  description:
    "Buddhist ceremonies, observances and special events at all seven locations in Germany.",
};

export default function CeremoniesAndEventsPage() {
  return (
    <EnglishOfferLocationsPage
      eyebrow="Ceremonies and events"
      title="Experience Buddhist tradition together"
      description="Our temples invite visitors to Buddhist observances, ceremonies, cultural encounters and special events. Everyone is welcome to discover the tradition respectfully."
      image="/images/offers/zeremonien-veranstaltungen-neu.png"
      imageAlt="A Buddhist ceremony with Dhammakaya monks and lay visitors"
      sectionTitle="Events at our seven temples"
      sectionDescription="Choose a location to discover the temple. Current dates and participation details are available through the respective location page or on request."
      contactText="Tell us which location or type of event interests you. We will be happy to help you find the relevant information."
    />
  );
}
