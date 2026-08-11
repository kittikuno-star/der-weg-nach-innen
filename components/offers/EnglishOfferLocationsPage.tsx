import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Navigation } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { templeLocations } from "@/data/templeLocations";

type EnglishOfferLocationsPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  sectionTitle: string;
  sectionDescription: string;
  contactText: string;
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

const locations = locationOrder.map((slug) => templeLocations[slug]);

export default function EnglishOfferLocationsPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  sectionTitle,
  sectionDescription,
  contactText,
}: EnglishOfferLocationsPageProps) {
  return (
    <main className="bg-[#F7F4ED]">
      <section className="border-b border-[#E5DED0] bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <FadeIn>
            <Link
              href="/en/offers"
              className="inline-flex items-center gap-2 font-medium text-[#153B36] transition hover:text-[#9A7644]"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to all offers
            </Link>
          </FadeIn>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <FadeIn>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                  {eyebrow}
                </p>
                <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#153B36] sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {description}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-[#E4DED2] bg-[#EDE8DE] shadow-[0_20px_60px_rgba(21,59,54,0.11)]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102F2B]/20 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">
                All seven locations
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                {sectionTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                {sectionDescription}
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location, index) => (
              <div
                key={location.slug}
                className={location.slug === "bavaria" ? "xl:col-start-2" : undefined}
              >
                <FadeIn delay={index * 0.05}>
                  <Link
                    href={`/en/locations/${location.slug}`}
                    className="group block h-full overflow-hidden rounded-[28px] border border-[#E0DDD4] bg-white shadow-[0_16px_50px_rgba(21,59,54,0.05)] outline-none transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C8B58E] hover:shadow-[0_28px_70px_rgba(21,59,54,0.12)] focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-4"
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
                        <div className="flex items-start gap-2 text-sm leading-6 text-slate-500">
                          <Navigation
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-[#B08D57]"
                            strokeWidth={1.8}
                          />
                          <span>
                            {location.city}, {location.region}
                          </span>
                        </div>
                        <h3 className="mt-4 font-serif text-2xl leading-tight text-[#153B36] sm:text-[1.75rem]">
                          {location.name}
                        </h3>
                        <p className="mt-4 flex-1 leading-7 text-slate-600">
                          Buddhist meditation, Dhamma and community in {location.city}.
                        </p>
                        <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36] transition-colors group-hover:text-[#B08D57]">
                          View location
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-14 rounded-[28px] border border-[#DED5C5] bg-[#EFE8DC] px-7 py-8 text-center sm:px-10">
              <h2 className="font-serif text-3xl text-[#153B36]">
                Would you like to enquire about this offer at a location?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                {contactText}
              </p>
              <Link
                href="/en/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#153B36] px-7 py-3 font-medium text-white transition hover:bg-[#244B45]"
              >
                Contact us
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
