import RegistrationForm from "@/components/forms/RegistrationForm";
import CeremonyRegistrationForm from "@/components/forms/CeremonyRegistrationForm";
import { getBuddhistEvent } from "@/data/buddhistEvents";
import { getRetreatEvent } from "@/data/retreatEvents";
import { getWeeklyCourseGroup } from "@/data/weeklyCourseEvents";

export const metadata = {
  title: "Anmeldung | Der Weg nach Innen",
  description: "Melden Sie sich für Meditation oder einen One Day Retreat an.",
};

type RegistrationPageProps = {
  searchParams: Promise<{
    event?: string;
    course?: string;
    ceremony?: string;
    tempel?: string;
  }>;
};

export default async function RegistrationPage({
  searchParams,
}: RegistrationPageProps) {
  const {
    event: eventId,
    course: courseId,
    ceremony: ceremonyId,
    tempel: templeSlug,
  } = await searchParams;
  const selectedRetreat = getRetreatEvent(eventId);
  const selectedCourseGroup = getWeeklyCourseGroup(courseId);
  const selectedCeremony = getBuddhistEvent(ceremonyId);
  const isCourseRegistration = Boolean(selectedCourseGroup);
  const isCeremonyRegistration = Boolean(selectedCeremony);

  return (
    <main className="bg-stone-50">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {isCeremonyRegistration
                ? "Buddhistische Veranstaltung"
                : isCourseRegistration
                  ? "Meditationskurs vor Ort"
                  : "One Day Retreat"}
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-[#153B36] md:text-5xl">
              {isCeremonyRegistration
                ? "Tempel wählen und teilnehmen"
                : isCourseRegistration
                ? "Anmeldung zur Meditation"
                : "Anmeldung zum Retreat"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {isCeremonyRegistration
                ? "Wählen Sie den Tempel vor Ort, den gewünschten Termin und die Teilnahmezeit aus."
                : isCourseRegistration
                ? "Wählen Sie Ihren gewünschten regelmäßigen Termin und füllen Sie das Formular aus."
                : "Bitte füllen Sie für jede teilnehmende Person ein eigenes Formular aus. Der ausgewählte Termin wird automatisch übernommen."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {selectedCeremony ? (
            <CeremonyRegistrationForm
              selectedEvent={selectedCeremony}
              initialTempleSlug={templeSlug}
            />
          ) : (
            <RegistrationForm
              selectedRetreat={selectedRetreat}
              selectedCourseGroup={selectedCourseGroup}
            />
          )}
        </div>
      </section>
    </main>
  );
}
