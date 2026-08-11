import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";

const stats = [
  {
    value: "Seit 2011",
    label: "Meditation in Deutschland",
  },
  {
    value: "Kostenfrei",
    label: "Regelmäßige Meditation",
  },
  {
    value: "7",
    label: "Standorte",
  },
  {
    value: "Offen",
    label: "Für Anfänger und Erfahrene",
  },
];

export default function StatsSection() {
  return (
    <section
      aria-label="Meditationsangebote auf einen Blick"
      className="bg-[#153B36] py-16 lg:py-20"
    >
      <Container>
        <dl className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((item, index) => (
            <FadeIn
              key={item.label}
              delay={index * 0.1}
            >
              <div className="text-center">
                <dt className="sr-only">
                  {item.label}
                </dt>

                <dd className="font-serif text-4xl leading-tight text-white lg:text-5xl">
                  {item.value}
                </dd>

                <div
                  aria-hidden="true"
                  className="mx-auto my-5 h-px w-10 bg-[#B08D57]"
                />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7C29A]">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </dl>
      </Container>
    </section>
  );
}