import Link from "next/link";
import { ArrowRight } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import type { TempleActivity } from "@/data/temples/types";

type TempleActivitiesProps = {
  activities: TempleActivity[];
};

export default function TempleActivities({ activities }: TempleActivitiesProps) {
  return (
    <section className="bg-[#F4F2EC] py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#B08D57]">
            Angebote
          </p>
          <h2 className="mt-5 font-serif text-4xl text-[#153B36] sm:text-5xl">
            Meditation und Begegnung im Tempel
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <FadeIn key={activity.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[28px] bg-white p-8 shadow-[0_18px_55px_rgba(21,59,54,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
                  {activity.eyebrow}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-[#153B36]">
                  {activity.title}
                </h3>
                {activity.meta && (
                  <p className="mt-3 font-medium text-[#8A6A38]">
                    {activity.meta}
                  </p>
                )}
                <p className="mt-4 flex-1 leading-8 text-slate-600">
                  {activity.description}
                </p>
                {activity.href && (
                  <Link
                    href={activity.href}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#8A6A38]"
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
