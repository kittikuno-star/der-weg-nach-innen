import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#153B36]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#B08D57]/5 blur-3xl"
      />

      <Container>
        <div id="testimonials-heading">
          <SectionTitle
            eyebrow="Erfahrungen"
            title="Was unsere Teilnehmenden sagen"
            subtitle="Jede Meditation ist eine persönliche Erfahrung. Lesen Sie, wie Menschen durch Meditation mehr Ruhe, Klarheit und Gelassenheit in ihren Alltag gebracht haben."
          />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.15}
            >
              <Card
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-[28px]
                  border
                  border-[#ECEEEB]
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D9C39A]
                  hover:shadow-2xl
                "
              >
                <div className="text-6xl leading-none text-[#B08D57]/25 transition-all duration-500 group-hover:text-[#B08D57]">
                  “
                </div>

                <blockquote className="mt-5 flex-1">
                  <p className="text-[17px] leading-8 text-slate-600">
                    {item.text}
                  </p>
                </blockquote>

                <div className="mt-10 border-t border-[#ECEEEB] pt-6">
                  <p className="font-serif text-2xl text-[#153B36]">
                    {item.name}
                  </p>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
                    {item.location}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}