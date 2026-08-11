import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy policy", description: "Privacy information for The Way Within." };
export default function PrivacyPage() { return <main className="bg-[#F7F6F2] py-20 lg:py-28"><Container><article className="mx-auto max-w-3xl rounded-[30px] bg-white p-8 shadow-sm sm:p-12"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">Data protection</p><h1 className="mt-5 font-serif text-5xl text-[#153B36]">Privacy policy</h1><p className="mt-7 leading-8 text-slate-600">The complete and legally authoritative privacy information is currently available in German. It explains what data is processed when you visit this website or use a form, the legal basis and your rights.</p><Link href="/datenschutz" className="mt-8 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white">Open the German privacy policy</Link></article></Container></main>; }
