import type { LucideIcon } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";

type TempleInfoItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type TempleInfoCardsProps = {
  items: TempleInfoItem[];
};

export default function TempleInfoCards({ items }: TempleInfoCardsProps) {
  return (
    <div className="grid gap-7 md:grid-cols-3">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <FadeIn key={item.title} delay={index * 0.08}>
            <article className="group h-full rounded-[28px] border border-[#E4E4DE] bg-[#FAFAF7] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_24px_70px_rgba(21,59,54,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="mt-7 font-serif text-2xl text-[#153B36]">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
