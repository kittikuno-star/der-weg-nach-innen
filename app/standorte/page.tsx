import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin, Navigation } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import GermanyMap from "@/components/locations/GermanyMap";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Standorte | Der Weg nach innen",
  description:
    "Entdecken Sie die Tempel und Meditationsorte von Wat Phra Dhammakaya in Deutschland.",
};

type LocationCard = {
  id: string;
  name: string;
  city: string;
  region: string;
  image?: string;
  href: string;
};

const locations: LocationCard[] = [
  {
  id: "hamburg",
  name: "Wat Phra Dhammakaya Hamburg",
  city: "Gerdau",
  region: "Niedersachsen",
  image: "/images/temples/hamburg/map-card-01.png",
  href: "/standorte/hamburg",
},
  { id: "berlin", name: "Wat Phra Dhammakaya Berlin", city: "Blankenfelde-Mahlow", region: "Brandenburg", image: "/images/temples/berlin/map-card-01.jpg", href: "/standorte/berlin" },
  { id: "nrw", name: "Wat Buddha Nordrhein-Westfalen", city: "Moers", region: "Nordrhein-Westfalen", image: "/images/temples/nrw/map-card-01.jpg", href: "/standorte/nrw" },
  { id: "rheinland", name: "Wat Phra Dhammakaya Rheinland", city: "Ingelheim am Rhein", region: "Rheinland-Pfalz", image: "/images/temples/rheinland/map-card-01.jpg", href: "/standorte/rheinland" },
  { id: "heilbronn", name: "Wat Buddha Heilbronn", city: "Wüstenrot", region: "Baden-Württemberg", image: "/images/temples/heilbronn/map-card-01.png", href: "/standorte/heilbronn" },
  { id: "schwarzwald", name: "Wat Phra Dhammakaya Schwarzwald", city: "Kippenheim", region: "Baden-Württemberg", image: "/images/temples/schwarzwald/map-card-01.jpg", href: "/standorte/schwarzwald" },
  {
    id: "bavaria",
    name: "Wat Phra Dhammakaya Bavaria",
    city: "Königsbrunn",
    region: "Bayern",
    image: "/images/temples/bavaria/map-card-01.jpg",
    href: "/standorte/bavaria",
  },
];

export default function LocationsPage() {
  return (
    <main>
      <section className="bg-white pb-16 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-5xl rounded-[32px] border border-[#DEDCD4] bg-[#FAF9F5] px-6 py-12 shadow-[0_24px_70px_rgba(21,59,54,0.08)] sm:px-10 lg:px-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D57]">
                  7 Standorte in Deutschland
                </p>
                <h1 className="mt-4 font-serif text-3xl leading-tight text-[#153B36] sm:text-4xl lg:text-5xl">
                  Meditation in Ihrer Nähe
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Entdecken Sie unsere Tempel und Meditationsorte in Deutschland.
                </p>
              </div>

              <div className="mt-10">
                <GermanyMap />
              </div>

              <div className="mt-10 flex justify-center">
                <Button href="#standorte" size="lg">
                  <span className="inline-flex items-center gap-2">
                    Alle Standorte entdecken
                    <ArrowDown aria-hidden="true" className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section
        id="standorte"
        aria-labelledby="locations-list-heading"
        className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28"
      >
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                Unsere Tempel
              </p>
              <h2
                id="locations-list-heading"
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                Entdecken Sie einen Ort in Ihrer Nähe
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Wählen Sie einen Standort und erfahren Sie mehr über Meditation,
                Veranstaltungen und Besuchsmöglichkeiten.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={location.id === "bavaria" ? "xl:col-start-2" : undefined}
              >
                <FadeIn delay={index * 0.06}>
                  <Link
                    href={location.href}
                    className="group block h-full overflow-hidden rounded-[28px] border border-[#E0E1DC] bg-white shadow-[0_16px_50px_rgba(21,59,54,0.05)] outline-none transition-all duration-500 hover:-translate-y-2 hover:border-[#D2B982] hover:shadow-[0_28px_80px_rgba(21,59,54,0.12)] focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
                  >
                    <article className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E7DF]">
                        {location.image ? (
                          <Image
                            src={location.image}
                            alt={`Außenansicht von ${location.name}`}
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
                              Tempelfoto folgt
                            </p>
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#153B36]/35 to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col p-7 sm:p-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Navigation aria-hidden="true" className="h-4 w-4 text-[#B08D57]" strokeWidth={1.8} />
                          <span>{location.city}, {location.region}</span>
                        </div>
                        <h3 className="mt-4 font-serif text-2xl leading-tight text-[#153B36] sm:text-[1.75rem]">
                          {location.name}
                        </h3>
                        <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36] transition-colors group-hover:text-[#B08D57]">
                          Standort entdecken
                          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
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
