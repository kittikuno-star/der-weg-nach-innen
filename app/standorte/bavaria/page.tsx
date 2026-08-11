import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { templeLocations } from "@/data/templeLocations";

const location = templeLocations["bavaria"];

export const metadata: Metadata = {
  title: "Wat Phra Dhammakaya Bavaria | Der Weg nach innen",
  description:
    "Meditation, Dhamma und Gemeinschaft im Wat Phra Dhammakaya Bavaria in Königsbrunn bei Augsburg.",
};

export default function BavariaPage() {
  return (
    <main>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#153B36] transition-colors hover:text-[#B08D57]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Zurück zu allen Standorten
          </Link>

          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#DEDCD4] bg-[#FAF9F5] shadow-[0_24px_70px_rgba(21,59,54,0.08)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[340px] bg-[#E9E7DF] sm:min-h-[440px] lg:min-h-[600px]">
                <Image
                  src="/images/temples/bavaria/hero-01.jpg"
                  alt="Wat Phra Dhammakaya Bavaria in Königsbrunn bei Augsburg"
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/35 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
                  Standort Bavaria
                </p>

                <h1 className="mt-4 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  Wat Phra Dhammakaya Bavaria
                </h1>

                <div className="mt-6 flex items-start gap-3 text-slate-600">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]"
                  />

                  <address className="not-italic leading-7">
                    <span className="block font-semibold text-[#153B36]">
                      {location.street}
                    </span>
                    <span className="block">
                      {location.postalCode} {location.city}
                    </span>
                    <span className="block text-sm text-slate-500">
                      {location.region}
                    </span>
                  </address>
                </div>

                <p className="mt-8 text-lg leading-8 text-slate-600">
                  Ein ruhiger und offener Ort für Meditation, buddhistische
                  Praxis und persönliche Begegnung. Besucherinnen und Besucher
                  sind unabhängig von Herkunft, Erfahrung oder Glaubensrichtung
                  herzlich willkommen.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kontakt?standort=bavaria"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    Kontakt aufnehmen
                  </Link>

                  <Link
                    href="/standorte"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7D5CE] bg-white px-6 py-3 font-semibold text-[#153B36] transition-colors hover:border-[#B08D57]"
                  >
                    Weitere Standorte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-[26px] border border-[#E0DED7] bg-white p-7 shadow-[0_14px_40px_rgba(21,59,54,0.05)]">
              <Clock3
                aria-hidden="true"
                className="h-7 w-7 text-[#B08D57]"
                strokeWidth={1.6}
              />

              <h2 className="mt-5 font-serif text-2xl text-[#153B36]">
                Meditation
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Jeden Mittwoch findet von 19:30 bis 21:00 Uhr eine angeleitete
                Meditation mit einem verständlichen Dhamma-Impuls statt.
              </p>
            </article>

            <article className="rounded-[26px] border border-[#E0DED7] bg-white p-7 shadow-[0_14px_40px_rgba(21,59,54,0.05)]">
              <CalendarDays
                aria-hidden="true"
                className="h-7 w-7 text-[#B08D57]"
                strokeWidth={1.6}
              />

              <h2 className="mt-5 font-serif text-2xl text-[#153B36]">
                Retreats und Veranstaltungen
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                One Day Retreats, buddhistische Feiertage und weitere
                gemeinschaftliche Veranstaltungen werden regelmäßig auf der
                Website angekündigt.
              </p>
            </article>

            <article className="rounded-[26px] border border-[#E0DED7] bg-white p-7 shadow-[0_14px_40px_rgba(21,59,54,0.05)]">
              <MapPin
                aria-hidden="true"
                className="h-7 w-7 text-[#B08D57]"
                strokeWidth={1.6}
              />

              <h2 className="mt-5 font-serif text-2xl text-[#153B36]">
                Besuch im Tempel
              </h2>

              <address className="mt-3 not-italic leading-7 text-slate-600">
                <span className="block font-semibold text-[#153B36]">
                  {location.street}
                </span>
                <span className="block">
                  {location.postalCode} {location.city}
                </span>
              </address>
              <p className="mt-4 leading-7 text-slate-600">
                Bitte vereinbaren Sie Ihren ersten Besuch vorab, da nicht
                jederzeit eine deutschsprachige Ansprechperson vor Ort ist.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-[28px] border border-[#DEDCD5] bg-white px-6 py-9 text-center sm:px-10">
            <h2 className="font-serif text-3xl text-[#153B36]">
              Möchten Sie den Tempel besuchen?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Vereinbaren Sie Ihren Besuch bitte vorab. So können wir Sie
              persönlich empfangen und uns Zeit für Ihre Fragen nehmen.
            </p>

            <Link
              href="/kontakt?standort=bavaria"
              className="mt-7 inline-flex rounded-full bg-[#153B36] px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Besuch anfragen
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}