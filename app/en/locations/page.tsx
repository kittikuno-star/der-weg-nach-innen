import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { templeLocations } from "@/data/templeLocations";

export const metadata: Metadata = {
  title: "Locations | The Way Within",
  description:
    "Discover Buddhist temples and meditation centres throughout Germany.",
};

const locationOrder = [
  "hamburg",
  "berlin",
  "nrw",
  "rheinland",
  "heilbronn",
  "schwarzwald",
  "bavaria",
] as const;

export default function EnglishLocationsPage() {
  const locations = locationOrder.map((slug) => templeLocations[slug]);

  return (
    <main>
      <section className="border-b border-[#E5DED0] bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                Seven locations in Germany
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.025em] text-[#153B36] sm:text-6xl lg:text-7xl">
                Find a place near you
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Discover our Buddhist temples and meditation centres. Choose a
                location to learn more about visits, meditation and activities.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location, index) => (
              <div
                key={location.slug}
                className={location.slug === "bavaria" ? "xl:col-start-2" : undefined}
              >
                <FadeIn delay={index * 0.06}>
                  <Link
                    href={`/en/locations/${location.slug}`}
                    className="group block h-full overflow-hidden rounded-[28px] border border-[#E0E1DC] bg-white shadow-[0_16px_50px_rgba(21,59,54,0.05)] outline-none transition-all duration-500 hover:-translate-y-2 hover:border-[#D2B982] hover:shadow-[0_28px_80px_rgba(21,59,54,0.12)] focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
                  >
                    <article className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E7DF]">
                        {location.image ? (
                          <Image
                            src={location.image}
                            alt={`Exterior view of ${location.name}`}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(145deg,#EAE7DE,#F7F5EF)] text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#B08D57] shadow-sm">
                              <MapPin className="h-7 w-7" strokeWidth={1.5} />
                            </div>
                            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B7654]">
                              Temple photo coming soon
                            </p>
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#153B36]/35 to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col p-7 sm:p-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Navigation className="h-4 w-4 text-[#B08D57]" strokeWidth={1.8} />
                          <span>
                            {location.city}, {location.region}
                          </span>
                        </div>
                        <h2 className="mt-4 font-serif text-2xl leading-tight text-[#153B36] sm:text-[1.75rem]">
                          {location.name}
                        </h2>
                        <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">
                          View location
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
