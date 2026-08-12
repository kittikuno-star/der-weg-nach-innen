import RegistrationHub from "@/components/forms/RegistrationHub";

export const metadata = {
  title: "Zentrale Anmeldung | Der Weg nach Innen",
  description: "Zentrale Anmeldung für Meditation, Retreats, Veranstaltungen sowie Schul- und Gruppenbesuche.",
};

type RegistrationPageProps = {
  searchParams: Promise<{
    art?: string; event?: string; course?: string; ceremony?: string; tempel?: string;
  }>;
};

export default async function RegistrationPage({
  searchParams,
}: RegistrationPageProps) {
  const p = await searchParams;
  return <main className="bg-stone-50"><section className="py-16 lg:py-20"><div className="mx-auto max-w-5xl px-6 lg:px-8"><RegistrationHub language="de" basePath="/anmeldung" kind={p.art} eventId={p.event} courseId={p.course} ceremonyId={p.ceremony} templeSlug={p.tempel}/></div></section></main>;
}
