import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Flower2, GraduationCap, Landmark, MessagesSquare } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Offers",
  description: "Meditation courses, retreats, school and temple visits, talks and Buddhist events in Germany.",
};

const offers = [
  { title: "Meditation courses", text: "Regular meditation for beginners and experienced practitioners, both in person and online.", action: "View courses", href: "/en/courses", image: "/images/offers/meditationskurse.png", alt: "A Dhammakaya monk guiding a meditation group", icon: Flower2 },
  { title: "Retreats", text: "One or more days to settle the mind, deepen meditation and restore your energy.", action: "View retreats", href: "/en/retreats", image: "/images/offers/retreats.png", alt: "A meditation retreat with a Dhammakaya monk and participants", icon: CalendarDays },
  { title: "School programmes", text: "Temple visits, age-appropriate introductions to Buddhism and a first shared experience of meditation.", action: "View programme", href: "/en/offers/school-programmes", image: "/images/offers/schulangebote.png", alt: "A Dhammakaya monk speaking with a school class", icon: GraduationCap },
  { title: "Temple visits", text: "Discover a Buddhist temple, experience its atmosphere and meet us in person.", action: "Choose a temple", href: "/en/locations", image: "/images/offers/tempelbesuche.png", alt: "A Dhammakaya monk welcoming visitors to a temple", icon: Landmark },
  { title: "Talks and conversations", text: "Accessible reflections on meditation, Buddhist practice and a more mindful approach to everyday life.", action: "View offer", href: "/en/offers/talks-and-conversations", image: "/images/offers/vortraege-gespraeche-neu.png", alt: "A Dhammakaya monk giving a talk and answering questions", icon: MessagesSquare },
  { title: "Ceremonies and events", text: "Buddhist holidays, cultural encounters and special events at our temples.", action: "View offer", href: "/en/offers/ceremonies-and-events", image: "/images/offers/zeremonien-veranstaltungen-neu.png", alt: "A Buddhist ceremony with Dhammakaya monks and guests", icon: BookOpen },
];

export default function EnglishOffersPage() {
  return <main className="bg-[#F7F4ED]">
    <section className="border-b border-[#E5DED0] bg-white py-20 sm:py-24 lg:py-28"><Container><FadeIn><div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9A7644]">Our offers</p>
      <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.025em] text-[#153B36] sm:text-6xl lg:text-7xl">What would you like to explore?</h1>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">Choose the area that interests you. You will go directly to the relevant programme or to the temples where it is offered.</p>
    </div></FadeIn></Container></section>
    <section className="py-16 sm:py-20 lg:py-28"><Container>
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">{offers.map((offer, index) => { const Icon = offer.icon; return <FadeIn key={offer.title} delay={index * 0.06}><Link href={offer.href} className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#E4DED2] bg-white shadow-[0_16px_45px_rgba(21,59,54,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-[#C8B58E] hover:shadow-[0_26px_70px_rgba(21,59,54,0.13)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE8DE]"><Image src={offer.image} alt={offer.alt} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-1000 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#102F2B]/35 via-transparent to-transparent"/><span className="absolute bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/92 text-[#153B36] shadow-lg backdrop-blur-sm"><Icon className="h-6 w-6" strokeWidth={1.7}/></span></div>
        <div className="flex flex-1 flex-col p-7 sm:p-8"><h2 className="font-serif text-3xl leading-tight text-[#153B36]">{offer.title}</h2><p className="mt-4 flex-1 leading-7 text-slate-600">{offer.text}</p><span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">{offer.action}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></span></div>
      </Link></FadeIn>; })}</div>
      <FadeIn delay={0.12}><div className="mt-14 rounded-[28px] border border-[#DED5C5] bg-[#EFE8DC] px-7 py-8 text-center sm:px-10"><h2 className="font-serif text-3xl text-[#153B36]">Not sure which offer is right for you?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">Tell us briefly what you are looking for. We will help you find a suitable starting point or location.</p><Link href="/en/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#153B36] px-7 py-3 font-medium text-white transition hover:bg-[#244B45]">Contact us<ArrowRight className="h-4 w-4"/></Link></div></FadeIn>
    </Container></section>
  </main>;
}
