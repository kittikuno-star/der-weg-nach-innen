import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import type { TempleLocation } from "@/data/templeLocations";

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

export default function EnglishTempleLocationPage({
  location,
}: EnglishTempleLocationPageProps) {
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
                    <p>{location.region}</p>
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
    </main>
  );
}
