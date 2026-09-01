import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import type { BuddhistEvent } from "@/data/buddhistEvents";
import { templeLocations } from "@/data/templeLocations";

const categoryLabels = {
  monthly: "Monatliche Zeremonie",
  "buddhist-holiday": "Buddhistischer Feiertag",
  "teacher-day": "Gedenk- und Meistertag",
  "temple-festival": "Tempelveranstaltung",
} as const;

type BuddhistEventCardProps = {
  event: BuddhistEvent;
  templeSlug?: string;
};

export default function BuddhistEventCard({
  event,
  templeSlug,
}: BuddhistEventCardProps) {
  const displayedTemples = templeSlug
    ? [templeLocations[templeSlug]]
    : event.templeSlugs.map((slug) => templeLocations[slug]);
  const hasDate = event.dates.length > 0;
  const canRegister = hasDate && event.registrationOpen;
  const registrationHref = templeSlug
    ? `/anmeldung?ceremony=${event.id}&tempel=${templeSlug}`
    : `/anmeldung?ceremony=${event.id}`;
  const finalRegistrationHref = event.registrationUrl ?? registrationHref;
  const usesExternalRegistration = Boolean(event.registrationUrl);

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-[#E1DDD3] bg-white p-7 shadow-[0_18px_55px_rgba(21,59,54,0.06)] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A7644]">
        {categoryLabels[event.category]}
      </p>

      <h3 className="mt-4 font-serif text-3xl leading-tight text-[#153B36]">
        {event.title}
      </h3>

      {event.thaiTitle ? (
        <p lang="th" className="mt-2 text-base text-slate-500">
          {event.thaiTitle}
        </p>
      ) : null}

      <p className="mt-5 flex-1 leading-7 text-slate-600">
        {event.description}
      </p>

      <div className="mt-7 space-y-4 border-t border-[#E8E3DA] pt-6">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
          <div>
            <p className="font-semibold text-[#153B36]">
              {hasDate ? event.dates[0].label : "Termin folgt in Kürze"}
            </p>
            {event.dates.length > 1 ? (
              <p className="mt-1 text-sm text-slate-500">
                Weitere Monatstermine sind bei der Anmeldung auswählbar.
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
          <p className="text-sm leading-6 text-slate-600">
            {displayedTemples.length === 1
              ? `${displayedTemples[0].name}, ${displayedTemples[0].city}`
              : displayedTemples.length === 7
                ? "An allen sieben Tempelstandorten"
                : displayedTemples.map((temple) => temple.name).join(", ")}
          </p>
        </div>
      </div>

      {canRegister ? (
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href={finalRegistrationHref}
            target={usesExternalRegistration ? "_blank" : undefined}
            rel={usesExternalRegistration ? "noopener noreferrer" : undefined}
            className="inline-flex w-fit rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {usesExternalRegistration ? "Jetzt anmelden" : "Tempel wählen und anmelden"}
          </Link>

          {event.detailsUrl ? (
            <a
              href={event.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#153B36] underline decoration-[#B08D57]/50 underline-offset-4 transition hover:decoration-[#B08D57]"
            >
              Mehr beim Tempel erfahren
            </a>
          ) : null}
        </div>
      ) : (
        <p className="mt-7 w-fit rounded-full bg-[#F1EEE7] px-5 py-2.5 text-sm font-semibold text-[#806C4C]">
          {hasDate ? "Anmeldung wird noch freigeschaltet" : "Termin folgt in Kürze"}
        </p>
      )}
    </article>
  );
}
