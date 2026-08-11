import type { Metadata } from "next";

import EnglishOfferLocationsPage from "@/components/offers/EnglishOfferLocationsPage";

export const metadata: Metadata = {
  title: "School programmes | The Way Within",
  description:
    "School classes can visit all seven Buddhist temples and meditation centres in Germany.",
};

export default function SchoolProgrammesPage() {
  return (
    <EnglishOfferLocationsPage
      eyebrow="School programmes"
      title="Discover Buddhism and meditation at a temple"
      description="Our temples welcome school classes and teachers. During a visit, students receive an age-appropriate introduction to Buddhism, temple life and meditation."
      image="/images/offers/schulangebote.png"
      imageAlt="A Dhammakaya monk speaking with a school class"
      sectionTitle="Choose a temple for your school visit"
      sectionDescription="School programmes are possible at all seven locations. Choose a temple to learn more about the place and find the appropriate contact option."
      contactText="Please tell us your preferred location, the students’ age group, the approximate group size and a possible date or time period. We will then discuss the visit with you personally."
    />
  );
}
