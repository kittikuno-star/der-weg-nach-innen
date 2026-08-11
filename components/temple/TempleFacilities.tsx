import { Check } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";

type TempleFacilitiesProps = {
  facilities: string[];
};

export default function TempleFacilities({ facilities }: TempleFacilitiesProps) {
  return (
    <section className="bg-[#F4F2EC] py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#B08D57]">
                Ausstattung
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                Für einen ruhigen und angenehmen Aufenthalt
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {facilities.map((facility, index) => (
              <FadeIn key={facility} delay={index * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(21,59,54,0.05)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8C8AA] text-[#8A6A38]">
                    <Check className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="font-medium text-[#153B36]">{facility}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
