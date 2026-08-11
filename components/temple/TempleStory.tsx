import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";

type TempleStoryProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
};

export default function TempleStory({
  eyebrow,
  title,
  paragraphs,
  image,
}: TempleStoryProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-[#ECE9E1] shadow-[0_24px_70px_rgba(21,59,54,0.10)]">
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#B08D57]">
                {eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                {title}
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
