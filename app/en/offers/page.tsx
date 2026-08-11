import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Flower2,
  MapPin,
  Sparkles,
  SunMedium,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Meditation and Buddhism in Germany",
  description:
    "Meditation, retreats and Buddhist wisdom from Wat Phra Dhammakaya in Germany.",
};

const offers = [
  {
    eyebrow: "Meditation",
    title: "Find inner calm",
    text: "A clear and welcoming introduction for beginners and experienced meditators.",
    href: "/en/meditation",
    image: "/images/courses/course-introduction-01.png",
  },
  {
    eyebrow: "Weekly courses",
    title: "Practise together",
    text: "Regular meditation on site and online to support a steady personal practice.",
    href: "/en/courses",
    image: "/images/courses/course-weekly-01.png",
  },
  {
    eyebrow: "Retreats",
    title: "Time for stillness",
    text: "A full day to step back, regain strength and reconnect with yourself.",
    href: "/en/retreats",
    image: "/images/courses/course-retreat-01.png",
  },
];

const locations = [
  { name: "Wat Phra Dhammakaya Bavaria", city: "Königsbrunn near Augsburg", href: "/en/locations/bavaria" },
  { name: "Wat Phra Dhammakaya Rheinland", city: "Ingelheim am Rhein", href: "/en/locations/rheinland" },
  { name: "Wat Buddha Nordrhein-Westfalen", city: "Moers", href: "/en/locations/nrw" },
  { name: "Wat Buddha Heilbronn", city: "Wüstenrot", href: "/en/locations/heilbronn" },
  { name: "Wat Phra Dhammakaya Schwarzwald", city: "Kippenheim", href: "/en/locations/schwarzwald" },
  { name: "Wat Phra Dhammakaya Hamburg", city: "Gerdau", href: "/en/locations/hamburg" },
  { name: "Wat Phra Dhammakaya Berlin", city: "Blankenfelde-Mahlow", href: "/en/locations/berlin" },
];

export default function EnglishHomePage() {
  return (
    <div lang="en">
      <section className="relative min-h-[760px] overflow-hidden bg-[#102F2B] text-white lg:min-h-[calc(100svh-5rem)]">
        <Image
          src="/images/hero/hero-01.png"
          alt="A peaceful landscape in warm morning light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center motion-safe:animate-[heroZoom_16s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2522]/90 via-[#0B2522]/48 to-[#0B2522]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2522]/70 via-transparent to-black/10" />

        <Container className="relative flex min-h-[760px] items-center py-28 lg:min-h-[calc(100svh-5rem)]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#E2CFA8] sm:text-sm">
              Wat Phra Dhammakaya Germany
            </p>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-[5.75rem]">
              Peace begins
              <span className="block text-[#E4CFA7]">within you.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">
              A moment of stillness can change the way we think, feel and meet life.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/en/courses" size="lg" variant="secondary">
                View meditation offers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/en/meditation"
                size="lg"
                className="border border-white/30 bg-white/10 text-white shadow-none backdrop-blur-md hover:bg-white hover:text-[#153B36]"
              >
                Learn more
              </Button>
            </div>
          </div>
        </Container>

        <a
          href="#why-meditation"
          aria-label="Continue to the next section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/65 transition hover:text-white lg:flex"
        >
          Explore
          <ArrowDown className="h-5 w-5 motion-safe:animate-bounce" />
        </a>
      </section>

      <section id="why-meditation" className="scroll-mt-24 bg-[#F7F4ED] py-24 lg:py-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <FadeIn>
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">Why meditate?</p>
                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#153B36] sm:text-5xl lg:text-6xl">
                  A moment of stillness can change everything.
                </h2>
                <p className="mt-7 text-lg leading-8 text-slate-600">
                  Meditation can bring clarity, peace and renewed strength into everyday life. No previous experience is required, and there is nothing you need to achieve.
                </p>
                <Link href="/en/meditation" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#153B36] underline decoration-[#B08D57]/50 underline-offset-8 transition hover:decoration-[#B08D57]">
                  Discover meditation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(21,59,54,0.13)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image src="/images/meditation/why-meditation-01.png" alt="Meditation in a peaceful atmosphere" fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover transition duration-1000 hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/22 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="meditation-offers" className="scroll-mt-24 bg-white py-24 lg:py-36">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">Our offers</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl lg:text-6xl">For your personal journey</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Begin at your own pace — on site, online or during a quiet retreat day.</p>
            </div>
          </FadeIn>
          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <FadeIn key={offer.title} delay={index * 0.08}>
                <Link href={offer.href} className="group block h-full overflow-hidden rounded-[30px] border border-[#E8E3D8] bg-[#FBFAF7] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(21,59,54,0.11)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={offer.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-8 lg:p-9">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9A7644]">{offer.eyebrow}</p>
                    <h3 className="mt-4 font-serif text-3xl text-[#153B36]">{offer.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{offer.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">Learn more<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section id="retreat" className="relative min-h-[680px] scroll-mt-24 overflow-hidden bg-[#153B36] text-white">
        <Image src="/images/retreat/retreat-hero-01.png" alt="A quiet place for meditation and retreat" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2C28]/92 via-[#0C2C28]/55 to-transparent" />
        <Container className="relative flex min-h-[680px] items-center py-24">
          <FadeIn>
            <div className="max-w-xl">
              <SunMedium className="h-8 w-8 text-[#D9BE89]" strokeWidth={1.5} />
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#D9BE89]">Time for stillness</p>
              <h2 className="mt-6 font-serif text-5xl leading-[1.03] sm:text-6xl">Switch off.<span className="block text-[#E4CFA7]">Arrive within.</span></h2>
              <p className="mt-7 text-lg leading-8 text-white/75">Our retreats create space to recharge, deepen your practice and pause consciously.</p>
              <Button href="/en/contact" size="lg" variant="secondary" className="mt-9">Ask about retreats<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section id="inspiration" className="scroll-mt-24 bg-[#F7F4ED] py-24 lg:py-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] shadow-[0_30px_80px_rgba(21,59,54,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image src="/images/inspiration/inspiration-buddhist-wisdom-01.png" alt="Buddhist wisdom in a peaceful visual setting" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102F2B]/25 via-transparent to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="max-w-xl lg:pl-6">
                <Flower2 className="h-8 w-8 text-[#B08D57]" strokeWidth={1.5} />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">Buddhist wisdom</p>
                <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-[#153B36] sm:text-5xl lg:text-6xl">For more than 2,500 years, people have found guidance by looking within.</h2>
                <p className="mt-7 text-lg leading-8 text-slate-600">The Buddha’s teaching offers timeless paths towards clarity, compassion and a more conscious life.</p>
                <Button href="/en/inspiration" size="lg" className="mt-9">Explore inspiration<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="locations" className="scroll-mt-24 bg-[#153B36] py-24 text-white lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <FadeIn>
              <div className="max-w-xl">
                <MapPin className="h-8 w-8 text-[#D6BC8C]" strokeWidth={1.5} />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.34em] text-[#D6BC8C]">Welcome to the temple</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Places of stillness open to everyone.</h2>
                <p className="mt-7 text-lg leading-8 text-white/68">Visit our temples, meet the community and experience meditation in a peaceful atmosphere.</p>
              </div>
            </FadeIn>
            <div className="grid gap-5 sm:grid-cols-2">
              {locations.map((location, index) => (
                <div key={location.name} className={index === locations.length - 1 ? "sm:col-span-2" : undefined}>
                  <FadeIn delay={index * 0.06}>
                    <Link href={location.href} className="group flex h-full items-center justify-between gap-6 rounded-[28px] border border-white/12 bg-white/[0.055] p-7 transition duration-300 hover:border-[#D6BC8C]/45 hover:bg-white/[0.09] sm:p-8">
                      <div><h3 className="font-serif text-2xl sm:text-3xl">{location.name}</h3><p className="mt-2 text-white/60">{location.city}</p></div>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/18 text-[#D6BC8C] transition group-hover:translate-x-1 group-hover:bg-[#D6BC8C] group-hover:text-[#153B36]"><ArrowRight className="h-5 w-5" /></span>
                    </Link>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#0D2F2B] py-24 text-white lg:py-32">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B08D57]/10 blur-3xl" />
        <Container className="relative">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Sparkles className="mx-auto h-8 w-8 text-[#D6BC8C]" strokeWidth={1.5} />
              <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Ready for your next step?</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">Begin wherever feels right for you — with a meditation course, a retreat or a visit to one of our temples.</p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="mailto:info@wegnachinnen.de" size="lg" variant="secondary">Contact us<ArrowRight className="ml-2 h-5 w-5" /></Button>
                <Button href="/" size="lg" className="border border-white/25 bg-transparent text-white shadow-none hover:bg-white hover:text-[#153B36]">German website</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
