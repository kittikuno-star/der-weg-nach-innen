import Container from "@/components/ui/Container";
import type { TempleFaqItem } from "@/data/temples/types";

type TempleFAQProps = {
  items: TempleFaqItem[];
};

export default function TempleFAQ({ items }: TempleFAQProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#B08D57]">
              Häufige Fragen
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
              Gut informiert vor dem ersten Besuch
            </h2>
          </div>

          <div className="divide-y divide-[#E5E2DA] border-y border-[#E5E2DA]">
            {items.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="cursor-pointer list-none pr-8 font-serif text-xl text-[#153B36] marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
