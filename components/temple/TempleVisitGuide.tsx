import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import type { TempleInfoItem } from "@/data/temples/types";

type TempleVisitGuideProps = {
  items: TempleInfoItem[];
};

export default function TempleVisitGuide({ items }: TempleVisitGuideProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#B08D57]">
            Ihr erster Besuch
          </p>
          <h2 className="mt-5 font-serif text-4xl text-[#153B36] sm:text-5xl">
            Das Wichtigste auf einen Blick
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[28px] border border-[#E4E1D9] bg-[#FAFAF7] p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8C8AA] text-[#8A6A38]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 font-serif text-2xl text-[#153B36]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
