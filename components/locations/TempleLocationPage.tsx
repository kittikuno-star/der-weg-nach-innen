import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import { getRetreatEventsByTemple } from "@/data/retreatEvents";
import { getWeeklyCourseEventsByTemple } from "@/data/weeklyCourseEvents";
import type { TempleLocation } from "../../data/templeLocations";

type TempleLocationPageProps = {
  location: TempleLocation;
};

export default function TempleLocationPage({
  location,
}: TempleLocationPageProps) {
  const weeklyCourses = getWeeklyCourseEventsByTemple(location.name);
  const retreats = getRetreatEventsByTemple(location.name);
  const hasOffers = weeklyCourses.length > 0 || retreats.length > 0;

  return (
    <main>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#153B36] transition-colors hover:text-[#B08D57]"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zu allen Standorten
          </Link>

          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#DEDCD4] bg-[#FAF9F5] shadow-[0_24px_70px_rgba(21,59,54,0.08)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[320px] bg-[#E9E7DF] lg:min-h-[560px]">
                {location.image ? (
                  <Image
                    src={location.image}
                    alt={`Außenansicht von ${location.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#9A845E]">
                    Tempelfoto folgt
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
                  Standort
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
                  {location.description}
                </p>

                <div className="mt-10 rounded-[22px] border border-[#DEDCD4] bg-white p-6">
                  <h2 className="font-serif text-2xl text-[#153B36]">
                    Besuch und Anfahrt
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
                    Bitte vereinbaren Sie Ihren Besuch vorab, damit wir
                    sicherstellen können, dass jemand vor Ort ist.
                  </p>
                  <Link
                    href={`/kontakt?standort=${location.slug}`}
                    className="mt-6 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {hasOffers ? (
        <section
          aria-labelledby="location-offers-heading"
          className="bg-[#F7F6F2] py-20 lg:py-28"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">
                Angebote vor Ort
              </p>
              <h2
                id="location-offers-heading"
                className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl"
              >
                Meditation und Retreats in {location.city}
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Entdecken Sie die regelmäßigen Meditationsangebote und
                besonderen Veranstaltungstermine an diesem Standort.
              </p>
            </div>

            {weeklyCourses.length > 0 ? (
              <div className="mt-14">
                <h3 className="font-serif text-3xl text-[#153B36]">
                  Regelmäßige Meditationsabende
                </h3>

                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  {weeklyCourses.map((course) => (
                    <article
                      key={course.id}
                      className="rounded-[28px] border border-[#E3E1DA] bg-white p-7 shadow-[0_18px_50px_rgba(21,59,54,0.06)] sm:p-8"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                        Wöchentliche Meditation
                      </p>

                      <dl className="mt-6 space-y-4 text-slate-600">
                        <div className="flex items-start gap-3">
                          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                          <div>
                            <dt className="sr-only">Termin</dt>
                            <dd className="font-semibold text-[#153B36]">
                              {course.schedule}
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                          <div>
                            <dt className="sr-only">Uhrzeit</dt>
                            <dd>{course.time}</dd>
                          </div>
                        </div>
                      </dl>

                      <p className="mt-6 text-sm leading-6 text-slate-500">
                        Die Teilnahme ist kostenfrei. Anfänger und Menschen mit
                        Meditationserfahrung sind herzlich willkommen.
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {retreats.length > 0 ? (
              <div className="mt-14">
                <h3 className="font-serif text-3xl text-[#153B36]">
                  One Day Retreat
                </h3>

                <div className="mt-7 grid gap-6 lg:grid-cols-2">
                  {retreats.map((retreat) => (
                    <article
                      key={retreat.id}
                      className="overflow-hidden rounded-[28px] border border-[#DDD9CF] bg-white shadow-[0_20px_60px_rgba(21,59,54,0.08)]"
                    >
                      <div className="relative aspect-[16/9] bg-[#E9E7DF]">
                        <Image
                          src={retreat.image}
                          alt={retreat.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/45 via-transparent to-transparent" />
                        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#153B36] shadow-sm">
                          One Day Retreat
                        </div>
                      </div>

                      <div className="p-7 sm:p-8">
                        <dl className="space-y-4 text-slate-600">
                          <div className="flex items-start gap-3">
                            <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                            <div>
                              <dt className="sr-only">Datum</dt>
                              <dd className="font-semibold text-[#153B36]">
                                {retreat.dateLabel}
                              </dd>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" />
                            <div>
                              <dt className="sr-only">Uhrzeit</dt>
                              <dd>{retreat.time}</dd>
                            </div>
                          </div>
                        </dl>

                        <p className="mt-6 leading-7 text-slate-600">
                          Ein ganzer Tag für Meditation, Achtsamkeit und innere
                          Einkehr. Das Angebot findet in deutscher Sprache statt
                          und ist für Anfänger sowie Fortgeschrittene geeignet.
                        </p>

                        <Link
                          href={`/anmeldung?event=${retreat.id}`}
                          className="mt-7 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                          Jetzt anmelden
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}
    </main>
  );
}
