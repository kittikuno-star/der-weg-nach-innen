import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import EnglishContactForm from "@/components/forms/EnglishContactForm";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact | The Way Within",
  description:
    "Contact us with questions about meditation, courses, retreats, temple visits and Buddhist events in Germany.",
};

const contactReasons = [
  {
    icon: CalendarDays,
    title: "Meditation courses",
    text: "Explore our regular meditation offers and find a course or time that suits you.",
    href: "/en/courses",
    actionLabel: "View courses",
  },
  {
    icon: Users,
    title: "Retreats and events",
    text: "First explore our current meditation days, retreats and special events.",
    href: "/en/retreats",
    actionLabel: "View retreats",
  },
  {
    icon: MapPin,
    title: "Temple visits",
    text: "Discover our locations and find the temple you would like to visit.",
    href: "/en/locations",
    actionLabel: "View locations",
  },
  {
    icon: MessageCircle,
    title: "General questions",
    text: "For personal or unanswered questions, you can send us a message directly.",
    href: "#contact-form",
    actionLabel: "Write a message",
  },
  {
    icon: HelpCircle,
    title: "I am not sure yet",
    text: "Not sure which offer is right for you? Tell us briefly what you are looking for and we will help you find a suitable way forward.",
    href: "/en/contact?topic=unsure#contact-form",
    actionLabel: "Get guidance",
  },
];

const contactSteps = [
  {
    number: "01",
    title: "Choose your topic",
    text: "Tell us whether your question concerns meditation, a retreat, a location or another subject.",
  },
  {
    number: "02",
    title: "Send your message",
    text: "Describe your enquiry briefly and include your preferred location when asking about a date or visit.",
  },
  {
    number: "03",
    title: "Receive a personal reply",
    text: "We will review your message and respond with the information most relevant to you.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Can I visit a temple without arranging it first?",
    answer:
      "Please arrange your visit in advance. Not every location has someone available to welcome visitors at all times.",
  },
  {
    question: "Do I need experience to attend a meditation course?",
    answer:
      "No. Our meditation offers are also suitable for beginners. The exercises are explained clearly and step by step.",
  },
  {
    question: "Are the meditation offers free of charge?",
    answer:
      "Regular meditation offers are free of charge. Some retreats or special events may require a contribution towards costs; this is stated clearly with the relevant offer.",
  },
  {
    question: "Can I meditate on a chair?",
    answer:
      "Yes. You do not need to sit on the floor. Meditation is possible both on a cushion and on a chair.",
  },
];

export default function EnglishContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We are here"
        highlightedTitle="to help"
        description="Write to us with questions about meditation, courses, retreats, temple visits or events. We will help you find the most suitable offer or location."
        icon={Mail}
        headingId="english-contact-page-heading"
        primaryButton={{ label: "Write a message", href: "#contact-form" }}
        secondaryButton={{ label: "View locations", href: "/en/locations" }}
      />

      <section aria-labelledby="contact-reasons-heading" className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Your enquiry</p>
            <h2 id="contact-reasons-heading" className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
              How can we help you?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Choose the most relevant area. You will go directly to the offers, or to the contact form for general questions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactReasons.map((reason, index) => {
              const ReasonIcon = reason.icon;
              return (
                <FadeIn key={reason.title} delay={index * 0.1}>
                  <Link
                    href={reason.href}
                    className={`group flex h-full flex-col rounded-[28px] border border-[#E5E6E2] bg-[#FAFAF8] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_24px_70px_rgba(21,59,54,0.09)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D57]/25 ${
                      index === contactReasons.length - 1 ? "sm:col-span-2 lg:col-start-2 lg:col-span-2" : ""
                    }`}
                    aria-label={`${reason.title}: ${reason.actionLabel}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8] transition-transform duration-500 group-hover:scale-105">
                      <ReasonIcon aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-7 font-serif text-2xl leading-tight text-[#153B36]">{reason.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{reason.text}</p>
                    <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#8C6B35]">
                      {reason.actionLabel}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="contact-form" aria-labelledby="contact-form-heading" className="scroll-mt-24 bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                  <Send aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Contact form</p>
                <h2 id="contact-form-heading" className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  Send us your message
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Please describe your enquiry briefly. For questions about a location or date, include the relevant town or region.
                </p>
                <div className="mt-8 rounded-[24px] border border-[#E1DED6] bg-white p-6">
                  <div className="flex items-start gap-4">
                    <Clock3 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" strokeWidth={1.7} />
                    <div>
                      <h3 className="font-semibold text-[#153B36]">Handled personally</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Your message will be read personally. Depending on temple activities and travel, a reply may take a little time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-[32px] border border-[#E1E2DE] bg-white p-7 shadow-[0_24px_80px_rgba(21,59,54,0.07)] sm:p-10">
                <EnglishContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-process-heading" className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">How contact works</p>
                <h2 id="contact-process-heading" className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  Your enquiry reaches the right place
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  A brief, clear message helps us direct your enquiry to the appropriate location or person.
                </p>
              </div>
            </FadeIn>
            <div className="space-y-5">
              {contactSteps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <article className="group grid gap-5 rounded-[26px] border border-[#E7E8E4] bg-[#FAFAF8] p-7 transition-all duration-500 hover:border-[#D8C49D] hover:bg-white hover:shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:grid-cols-[5rem_1fr] sm:p-8">
                    <p aria-hidden="true" className="font-serif text-4xl text-[#B08D57]/50 transition-colors duration-500 group-hover:text-[#B08D57]">{step.number}</p>
                    <div>
                      <h3 className="font-serif text-2xl text-[#153B36]">{step.title}</h3>
                      <p className="mt-3 leading-8 text-slate-600">{step.text}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-faq-heading" className="bg-[#F7F6F2] py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <FadeIn>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]">
                  <HelpCircle aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D57]">Frequently asked questions</p>
                <h2 id="contact-faq-heading" className="mt-5 font-serif text-4xl leading-tight text-[#153B36] sm:text-5xl">
                  You may already find your answer here
                </h2>
              </div>
            </FadeIn>
            <div className="space-y-5">
              {frequentlyAskedQuestions.map((item, index) => (
                <FadeIn key={item.question} delay={index * 0.08}>
                  <article className="rounded-[24px] border border-[#E1E2DE] bg-white p-7 shadow-[0_14px_45px_rgba(21,59,54,0.04)]">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" strokeWidth={1.8} />
                      <div>
                        <h3 className="font-serif text-xl leading-7 text-[#153B36]">{item.question}</h3>
                        <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[38px] bg-[#153B36] px-6 py-16 text-center text-white sm:px-10 lg:px-20 lg:py-20">
              <div aria-hidden="true" className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-[#B08D57]/20 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl" />
              <div className="relative mx-auto max-w-3xl">
                <MessageCircle aria-hidden="true" className="mx-auto h-8 w-8 text-[#D6BC8C]" strokeWidth={1.5} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6BC8C]">Personal guidance</p>
                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">Find the right offer for your path</h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  Explore our locations or learn more about meditation courses and retreats in Germany.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href="/en/locations" size="lg">Explore locations</Button>
                  <Button href="/en/courses" size="lg" variant="secondary">Discover courses</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
