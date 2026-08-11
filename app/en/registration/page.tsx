import type { Metadata } from "next";

import RegistrationForm from "@/components/forms/RegistrationForm";
import { getRetreatEvent } from "@/data/retreatEvents";
import { getWeeklyCourseGroup } from "@/data/weeklyCourseEvents";

export const metadata: Metadata = {
  title: "Registration | The Way Within",
  description: "Register for an in-person meditation course or a one-day retreat.",
};

type EnglishRegistrationPageProps = {
  searchParams: Promise<{ event?: string; course?: string }>;
};

export default async function EnglishRegistrationPage({
  searchParams,
}: EnglishRegistrationPageProps) {
  const { event: eventId, course: courseId } = await searchParams;
  const selectedRetreat = getRetreatEvent(eventId);
  const selectedCourseGroup = getWeeklyCourseGroup(courseId);
  const isCourseRegistration = Boolean(selectedCourseGroup);

  return (
    <main className="bg-stone-50" lang="en">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {isCourseRegistration ? "In-person meditation course" : "One-day retreat"}
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-[#153B36] md:text-5xl">
              {isCourseRegistration
                ? "Meditation course registration"
                : "Retreat registration"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {isCourseRegistration
                ? "Select your preferred regular session and complete the form below."
                : "Please complete a separate form for each participant. Your selected retreat will be added automatically."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RegistrationForm
            selectedRetreat={selectedRetreat}
            selectedCourseGroup={selectedCourseGroup}
            language="en"
          />
        </div>
      </section>
    </main>
  );
}
