import type { Metadata } from "next";

import RegistrationHub from "@/components/forms/RegistrationHub";

export const metadata: Metadata = {
  title: "Central registration | The Way Within",
  description: "Choose an offer and continue directly to the correct registration form.",
};

type Props = {
  searchParams: Promise<{
    art?: string;
    event?: string;
    course?: string;
    ceremony?: string;
    tempel?: string;
  }>;
};

export default async function EnglishRegistrationPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <main className="bg-stone-50" lang="en">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <RegistrationHub
          language="en"
          basePath="/en/registration"
          kind={params.art}
          eventId={params.event}
          courseId={params.course}
          ceremonyId={params.ceremony}
          templeSlug={params.tempel}
        />
      </section>
    </main>
  );
}
