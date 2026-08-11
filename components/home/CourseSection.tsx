import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { courses } from "@/data/courses";

export default function CourseSection() {
  return (
    <section
      id="meditationsangebote"
      className="relative scroll-mt-20 overflow-hidden bg-[#FAFAF8] py-16 lg:py-20"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#B08D57]/5 blur-3xl" />

      <Container>
        <SectionTitle
          eyebrow="Kurse"
          title="Meditation Schritt für Schritt lernen"
          subtitle="Unsere Kurse begleiten dich auf deinem persönlichen Weg zu mehr Ruhe, Klarheit und Achtsamkeit."
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {courses.map((course, index) => (
            <FadeIn
              key={course.id}
              delay={index * 0.15}
            >
              <Card className="group h-full overflow-hidden p-0">
                <div className="relative h-52 overflow-hidden lg:h-56">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[250px] flex-col p-7">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#B08D57]">
                    {course.category}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#153B36]">
                    {course.shortTitle}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-gray-600">
                    {course.description}
                  </p>

                  <div className="mt-6">
                    <Button
                      href={course.href}
                      variant="secondary"
                    >
                      Mehr erfahren
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