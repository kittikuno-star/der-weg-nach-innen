import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Coffee,
  Euro,
  Flower2,
  HeartHandshake,
  HelpCircle,
  Leaf,
  MapPin,
  MoonStar,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { retreatEvents } from "@/data/retreatEvents";

export const metadata: Metadata = {
  title: "Meditation Retreats in Germany | The Way Within",
  description:
    "Discover one-day meditation retreats at Buddhist temples in Germany, with guided meditation, Dhamma talks and mindful breaks.",
};

const benefits = [
  { icon: Leaf, title: "Step away from daily life", text: "Leave appointments and responsibilities behind for a few hours and give body and mind space to settle." },
  { icon: Sparkles, title: "Deepen your meditation", text: "Several guided sessions help you turn your attention inward gently and develop greater stability." },
  { icon: HeartHandshake, title: "Practise in community", text: "Meditating together creates a respectful and supportive atmosphere without pressure or competition." },
];

const experiences = [
  { icon: Flower2, title: "Guided meditation", text: "Each practice is explained calmly and clearly. You can participate at your own pace." },
  { icon: Sun, title: "Mindful breaks", text: "Between sessions there is time for silence, gentle movement, tea and personal rest." },
  { icon: Coffee, title: "Shared meal", text: "Depending on the event, a simple vegetarian lunch and refreshments are included." },
  { icon: MoonStar, title: "Dhamma and reflection", text: "Accessible Buddhist teachings help connect meditation with everyday life." },
];

const schedule = [
  ["9:30 am", "Arrival and registration", "Arrive calmly and become familiar with the temple."],
  ["10:00 am", "Welcome and introduction", "An overview of the day and a gentle introduction to the practice."],
  ["10:30 am", "Meditation I", "A guided session for relaxation and present-moment awareness."],
  ["11:15 am", "Dhamma talk", "A clear Buddhist reflection to support your practice."],
  ["12:00 pm", "Mindful lunch", "A shared vegetarian meal in a quiet atmosphere."],
  ["1:30 pm", "Meditation II", "A second session to deepen calm and inner awareness."],
  ["2:30 pm", "Dhamma and daily life", "Guidance on bringing meditation into everyday situations."],
  ["3:00 pm", "Tea break", "Time for tea, rest and a conscious pause."],
  ["3:30 pm", "Meditation III", "An afternoon practice for stability and clarity."],
  ["4:20 pm", "Loving-kindness meditation", "Cultivating kindness toward yourself and others."],
  ["4:45 pm", "Questions and exchange", "Space for questions and personal reflection."],
  ["5:00 pm", "Closing", "A calm conclusion to the retreat day."],
] as const;

const suitableFor = [
  "People with no previous meditation experience",
  "Meditators who would like to deepen their practice",
  "Anyone seeking a conscious break from daily life",
  "People who value quiet practice and community",
  "Visitors interested in practical Buddhist wisdom",
  "Anyone wishing to develop renewed energy and inner clarity",
];

const faqs = [
  { question: "Do I need meditation experience?", answer: "No. Our meditation days are suitable for beginners. Every practice is introduced clearly and step by step." },
  { question: "Do I have to sit on the floor?", answer: "No. You may meditate on a cushion or on a chair. A comfortable and stable posture is what matters." },
  { question: "What should I bring?", answer: "Please wear comfortable clothing. Warm socks, a light blanket and a water bottle may be useful." },
  { question: "Is the retreat completely silent?", answer: "Not every meditation day is a silent retreat. The programme includes quiet periods, guided meditation, Dhamma teachings and opportunities for exchange." },
  { question: "Is there a participation fee?", answer: "Some events have a contribution toward meals and organisational costs. The exact amount is shown with each retreat." },
];

function englishDate(dateValue: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(`${dateValue}T12:00:00+02:00`));
}

export default function EnglishRetreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meditation days and retreats"
        title="Time for silence."
        highlightedTitle="Space for new clarity."
        description="A retreat gives you the opportunity to pause daily life, settle inwardly and deepen your meditation in a supportive atmosphere."
        icon={MoonStar}
        headingId="english-retreats-heading"
        primaryButton={{ label: "View current retreats", href: "#current-retreats" }}
        secondaryButton={{ label: "Ask a question", href: "/en/contact" }}
      />

      <section id="current-retreats" className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Current dates</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">Upcoming one-day retreats in 2026</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">A full day of meditation, mindfulness and inner reflection. The current events are held in German and are suitable for beginners and experienced meditators.</p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {retreatEvents.map((retreat, index) => (
              <FadeIn key={retreat.id} delay={index * 0.1}>
                <article className="group h-full overflow-hidden rounded-[30px] border border-[#DDD9CF] bg-white shadow-[0_20px_60px_rgba(21,59,54,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(21,59,54,0.12)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7DF]">
                    <Image src={retreat.image} alt={retreat.imageAlt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/35 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#153B36] shadow-sm">One-day retreat</div>
                  </div>
                  <div className="p-7 sm:p-9">
                    <h3 className="font-serif text-3xl leading-tight text-[#153B36]">{retreat.temple}</h3>
                    <dl className="mt-7 space-y-4 text-slate-600">
                      <div className="flex items-start gap-3"><CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" /><div><dt className="sr-only">Date</dt><dd>{englishDate(retreat.dateValue)}</dd></div></div>
                      <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" /><div><dt className="sr-only">Time</dt><dd>9:30 am – 5:00 pm</dd></div></div>
                      <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" /><div><dt className="sr-only">Address</dt><dd><span className="block font-medium text-[#153B36]">{retreat.street}</span><span className="block">{retreat.postalCode} {retreat.city}</span></dd></div></div>
                      <div className="flex items-start gap-3"><Euro className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" /><div><dt className="sr-only">Fee</dt><dd>Participation fee: {retreat.price}</dd></div></div>
                    </dl>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button href={`/en/registration?event=${retreat.id}`} className="w-full sm:w-auto">Register now</Button>
                      <Button href="#day-programme" variant="outline" className="w-full sm:w-auto">View programme</Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-10 rounded-[24px] border border-[#DED9CD] bg-white px-6 py-5 text-center text-slate-600 sm:px-8"><span className="font-semibold text-[#153B36]">Included:</span> guided meditation, Dhamma talks, lunch and a tea break.</div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <FadeIn><div className="relative overflow-hidden rounded-[34px] bg-[#EAE7DF] shadow-[0_26px_90px_rgba(21,59,54,0.12)]"><div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"><Image src="/images/meditation/retreat-hero-01.png" alt="Quiet meditation in a bright and peaceful room" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/35 via-transparent to-transparent" /></div></div></FadeIn>
            <FadeIn delay={0.1}><div><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">A conscious pause</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">When daily life becomes quieter, the inner world becomes easier to hear</h2><div className="mt-7 space-y-6 text-lg leading-8 text-slate-600"><p>Daily attention is often directed outward. Appointments, tasks and expectations leave little room to notice our own thoughts and feelings.</p><p>A meditation day offers a protected setting in which to slow down and reconnect with inner calm.</p><p>There is no performance to achieve. You may simply arrive, let go and meet your mind with patience and kindness.</p></div><div className="mt-9 flex flex-wrap gap-4"><span className="inline-flex items-center gap-3 rounded-full bg-[#F4F1EA] px-5 py-3 text-sm font-semibold text-[#153B36]"><Clock3 className="h-4 w-4 text-[#B08D57]" />Day and multi-day formats</span><span className="inline-flex items-center gap-3 rounded-full bg-[#F4F1EA] px-5 py-3 text-sm font-semibold text-[#153B36]"><Users className="h-4 w-4 text-[#B08D57]" />Suitable for beginners</span></div></div></FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Why attend a retreat?</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">A pause whose effects can continue afterward</h2><p className="mt-6 text-lg leading-8 text-slate-600">A retreat creates time and space to regain energy and develop a more mindful relationship with yourself.</p></div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">{benefits.map((benefit, index) => { const Icon = benefit.icon; return <FadeIn key={benefit.title} delay={index * 0.1}><article className="h-full rounded-[28px] border border-[#E2E1DB] bg-white p-8"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]"><Icon className="h-6 w-6" /></div><h3 className="mt-7 font-serif text-2xl text-[#153B36]">{benefit.title}</h3><p className="mt-4 leading-8 text-slate-600">{benefit.text}</p></article></FadeIn>; })}</div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><FadeIn><div><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Your retreat experience</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">What you can expect</h2><p className="mt-6 text-lg leading-8 text-slate-600">Our programmes combine meditation, silence, Buddhist guidance and restorative breaks in a balanced rhythm.</p></div></FadeIn><div className="grid gap-6 sm:grid-cols-2">{experiences.map((item, index) => { const Icon = item.icon; return <FadeIn key={item.title} delay={index * 0.08}><article className="h-full rounded-[26px] border border-[#E7E8E4] bg-[#FAFAF8] p-7"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]"><Icon className="h-6 w-6" /></div><h3 className="mt-6 font-serif text-2xl text-[#153B36]">{item.title}</h3><p className="mt-4 leading-8 text-slate-600">{item.text}</p></article></FadeIn>; })}</div></div>
        </Container>
      </section>

      <section id="day-programme" className="scroll-mt-24 bg-[#153B36] py-20 text-white lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"><FadeIn><div><CalendarDays className="h-8 w-8 text-[#E7D7B8]" /><p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#D8C49D]">Example programme</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">A calm and balanced day</h2><p className="mt-6 text-lg leading-8 text-white/70">The exact sequence may vary slightly by location.</p></div></FadeIn><div className="space-y-4">{schedule.map(([time, title, text], index) => <FadeIn key={`${time}-${title}`} delay={index * 0.03}><div className="grid gap-3 rounded-[22px] border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[110px_1fr]"><p className="font-semibold text-[#E7D7B8]">{time}</p><div><h3 className="font-serif text-xl">{title}</h3><p className="mt-2 leading-7 text-white/65">{text}</p></div></div></FadeIn>)}</div></div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-20 lg:py-28"><Container><div className="grid gap-14 lg:grid-cols-2"><FadeIn><div><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Who is it for?</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">You do not need to be experienced</h2><p className="mt-6 text-lg leading-8 text-slate-600">The day is designed to be accessible, respectful and free of pressure.</p></div></FadeIn><FadeIn delay={0.1}><ul className="grid gap-4">{suitableFor.map((item) => <li key={item} className="flex items-start gap-4 rounded-[20px] border border-[#E2E1DB] bg-white p-5 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B08D57]" /><span>{item}</span></li>)}</ul></FadeIn></div></Container></section>

      <section className="bg-white py-20 lg:py-28"><Container><div className="mx-auto max-w-3xl text-center"><HelpCircle className="mx-auto h-8 w-8 text-[#B08D57]" /><p className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Frequently asked questions</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">Helpful information before your visit</h2></div><div className="mx-auto mt-12 max-w-4xl space-y-4">{faqs.map((faq, index) => <FadeIn key={faq.question} delay={index * 0.05}><details className="rounded-[22px] border border-[#E2E1DB] bg-[#FAFAF8] p-6"><summary className="cursor-pointer font-serif text-xl text-[#153B36]">{faq.question}</summary><p className="mt-4 leading-8 text-slate-600">{faq.answer}</p></details></FadeIn>)}</div></Container></section>

      <section className="bg-[#EDE6D9] py-20 lg:py-24"><Container><FadeIn><div className="mx-auto max-w-4xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8D6E3F]">Take the next step</p><h2 className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">Give yourself a day for what is often missing</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Explore the current dates or contact us if you are unsure which retreat is right for you.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><Button href="#current-retreats" size="lg">View retreats <ArrowRight className="ml-2 h-5 w-5" /></Button><Link href="/en/contact" className="inline-flex items-center justify-center rounded-full border border-[#153B36]/25 px-7 py-3 font-semibold text-[#153B36] transition hover:bg-white">Contact us</Link></div></div></FadeIn></Container></section>
    </>
  );
}
