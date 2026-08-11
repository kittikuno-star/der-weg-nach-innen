import type { Metadata } from "next";

import EnglishOfferLocationsPage from "@/components/offers/EnglishOfferLocationsPage";

export const metadata: Metadata = {
  title: "Talks and conversations | The Way Within",
  description:
    "Talks and personal conversations about meditation and Buddhist practice at all seven locations.",
};

export default function TalksAndConversationsPage() {
  return (
    <EnglishOfferLocationsPage
      eyebrow="Talks and conversations"
      title="Practical reflections for a more mindful life"
      description="Our monks present Buddhist ideas in an accessible and practical way. Talks and open conversations create space for questions about meditation, inner peace and dealing with everyday challenges."
      image="/images/offers/vortraege-gespraeche-neu.png"
      imageAlt="A Dhammakaya monk giving a talk and speaking with visitors"
      sectionTitle="Talks and conversations at all locations"
      sectionDescription="Choose the temple that is easiest for you to reach. The subject, group size and date can then be arranged directly."
      contactText="Please tell us your preferred location, the topic, the approximate number of participants and your preferred time period."
    />
  );
}
