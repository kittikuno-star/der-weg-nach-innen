import { Car, MapPin, Train } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { TempleData } from "@/data/temples/types";

type TempleMapProps = {
  temple: Pick<TempleData, "name" | "address">;
};

export default function TempleMap({ temple }: TempleMapProps) {
  return (
    <section id="anfahrt" className="scroll-mt-24 bg-[#F4F2EC] py-20 lg:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-[34px] bg-white shadow-[0_24px_75px_rgba(21,59,54,0.08)] lg:grid-cols-2">
          <div className="flex min-h-[420px] items-center justify-center bg-[#E6E2D8] p-10 text-center">
            <div>
              <MapPin className="mx-auto h-9 w-9 text-[#8A6A38]" strokeWidth={1.5} />
              <p className="mt-5 font-serif text-2xl text-[#153B36]">Google Maps</p>
              <p className="mt-3 max-w-sm leading-7 text-slate-600">
                Die interaktive Karte wird ergänzt, sobald die bestätigten Standortdaten eingesetzt sind.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#B08D57]">
              Anreise
            </p>
            <h2 className="mt-5 font-serif text-4xl text-[#153B36]">
              {temple.address.label}
            </h2>
            <div className="mt-5 leading-8 text-slate-600">
              {temple.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Car className="mt-1 h-5 w-5 shrink-0 text-[#8A6A38]" strokeWidth={1.6} />
                <p className="leading-7 text-slate-600">{temple.address.parking}</p>
              </div>
              <div className="flex gap-4">
                <Train className="mt-1 h-5 w-5 shrink-0 text-[#8A6A38]" strokeWidth={1.6} />
                <p className="leading-7 text-slate-600">{temple.address.publicTransport}</p>
              </div>
            </div>

            <div className="mt-9">
              <Button href="/kontakt?thema=tempelbesuch" variant="primary">
                Besuch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
