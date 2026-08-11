import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import type { TempleLocation } from "@/data/templeLocations";
import { getRetreatEventsByTemple } from "@/data/retreatEvents";
import { getWeeklyCourseEventsByTemple } from "@/data/weeklyCourseEvents";

type EnglishTempleLocationPageProps = {
  location: TempleLocation;
};

const descriptions: Record<string, string> = {
  bavaria:
    "A peaceful and welcoming place for meditation, Buddhist practice and personal encounters.",
  hamburg:
    "A place for meditation, Dhamma and community in northern Germany.",
  berlin:
    "A meditation centre in the Berlin-Brandenburg region offering space for calm, mindfulness and Dhamma.",
  nrw:
    "A Buddhist place for meditation, Dhamma and community in North Rhine-Westphalia.",
  rheinland:
    "A peaceful meditation centre in the Rhineland with space for practice, encounters and events.",
  heilbronn:
    "A Buddhist temple in the Heilbronn region offering meditation and community activities.",
  schwarzwald:
    "A meditation centre in the Black Forest for inner calm, Dhamma and shared practice.",
};

const regions: Record<string, string> = {
  Bayern: "Bavaria", Niedersachsen: "Lower Saxony", Brandenburg: "Brandenburg",
  "Nordrhein-Westfalen": "North Rhine-Westphalia", "Rheinland-Pfalz": "Rhineland-Palatinate",
  "Baden-Württemberg": "Baden-Württemberg",
};

export default function EnglishTempleLocationPage({
  location,
}: EnglishTempleLocationPageProps) {
  const weeklyCourses = getWeeklyCourseEventsByTemple(location.name);
  const retreats = getRetreatEventsByTemple(location.name);
  const hasOffers = weeklyCourses.length > 0 || retreats.length > 0;
  return (
    <main>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/en/locations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#153B36] transition-colors hover:text-[#B08D57]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all locations
          </Link>

          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#DEDCD4] bg-[#FAF9F5] shadow-[0_24px_70px_rgba(21,59,54,0.08)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[320px] bg-[#E9E7DF] lg:min-h-[560px]">
                {location.image ? (
                  <Image
                    src={location.image}
                    alt={`Exterior view of ${location.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#9A845E]">
                    Temple photo coming soon
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
                  Location
                </p>

                <h1 className="mt-4 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  {location.name}
                </h1>

                <div className="mt-6 flex items-start gap-3 text-slate-600">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                  <div>
                    <p className="font-semibold text-[#153B36]">
                      {location.city}
                    </p>
                    <p>{regions[location.region] ?? location.region}</p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-8 text-slate-600">
                  {descriptions[location.slug] ?? location.description}
                </p>

                <div className="mt-10 rounded-[22px] border border-[#DEDCD4] bg-white p-6">
                  <h2 className="font-serif text-2xl text-[#153B36]">
                    Visiting and directions
                  </h2>
                  <address className="mt-4 not-italic leading-7 text-slate-600">
                    <span className="block font-semibold text-[#153B36]">
                      {location.street}
                    </span>
                    <span className="block">
                      {location.postalCode} {location.city}
                    </span>
                  </address>
                  <p className="mt-4 leading-7 text-slate-600">
                    Please arrange your visit in advance so that we can make
                    sure someone is available to welcome you.
                  </p>
                  <Link
                    href={`/en/contact?location=${location.slug}`}
                    className="mt-6 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {hasOffers && <section className="bg-[#F7F6F2] py-20 lg:py-28"><Container>
        <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Offers at this location</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">Meditation and retreats in {location.city}</h2><p className="mt-6 text-lg leading-8 text-slate-600">Discover regular meditation sessions and special retreat dates at this temple.</p></div>
        {weeklyCourses.length > 0 && <div className="mt-14"><h3 className="font-serif text-3xl text-[#153B36]">Regular meditation sessions</h3><div className="mt-7 grid gap-6 md:grid-cols-2">{weeklyCourses.map(course => <article key={course.id} className="rounded-[28px] border border-[#E3E1DA] bg-white p-7"><dl className="space-y-4 text-slate-600"><div className="flex gap-3"><CalendarDays className="h-5 w-5 text-[#B08D57]"/><dd className="font-semibold text-[#153B36]">{course.weekday === "Mittwoch" ? "Every Wednesday" : "Every Friday"}</dd></div><div className="flex gap-3"><Clock3 className="h-5 w-5 text-[#B08D57]"/><dd>{course.time?.replace(" Uhr", "")}</dd></div></dl><p className="mt-6 text-sm leading-6 text-slate-500">Free of charge. Beginners and experienced meditators are welcome.</p></article>)}</div></div>}
        {retreats.length > 0 && <div className="mt-14"><h3 className="font-serif text-3xl text-[#153B36]">One-day retreats</h3><div className="mt-7 grid gap-6 lg:grid-cols-2">{retreats.map(retreat => <article key={retreat.id} className="rounded-[28px] border border-[#DDD9CF] bg-white p-7"><p className="font-semibold text-[#153B36]">{new Intl.DateTimeFormat("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric" }).format(new Date(`${retreat.dateValue}T12:00:00+02:00`))}</p><p className="mt-3 text-slate-600">{retreat.time.replace(" Uhr", "")}</p><p className="mt-5 leading-7 text-slate-600">A full day of meditation, mindfulness and inner reflection. The programme is held in German.</p><Link href={`/en/registration?event=${retreat.id}`} className="mt-7 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white">Register now</Link></article>)}</div></div>}
      </Container></section>}
    </main>
  );
}
