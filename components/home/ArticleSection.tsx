import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { articles } from "@/data/articles";
import { routes } from "@/lib/routes";

export default function ArticleSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-24 lg:py-32">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#B08D57]/5 blur-3xl" />

      <Container>
        <SectionTitle
          eyebrow="Artikel"
          title="Inspiration für deinen Alltag"
          subtitle="Gedanken und Impulse rund um Meditation und buddhistische Lebensweise."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn
              key={article.id}
              delay={index * 0.15}
            >
              <Card className="group h-full overflow-hidden p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[340px] flex-col p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.30em] text-[#B08D57]">
                    Inspiration
                  </p>

                  <h3 className="mt-4 min-h-[96px] font-serif text-3xl leading-tight text-[#153B36]">
                    {article.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-8 text-gray-600">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <Button
                      href={routes.inspiration}
                      variant="secondary"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}