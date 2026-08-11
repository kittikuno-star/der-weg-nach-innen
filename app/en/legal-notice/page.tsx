import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = { title: "Legal notice", description: "Legal information about The Way Within." };
export default function LegalNoticePage() { return <main className="bg-[#F7F6F2] py-20 lg:py-28"><Container><article className="mx-auto max-w-3xl rounded-[30px] bg-white p-8 shadow-sm sm:p-12"><p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">Legal information</p><h1 className="mt-5 font-serif text-5xl text-[#153B36]">Legal notice</h1><p className="mt-7 leading-8 text-slate-600">The legally authoritative provider information is currently available in German. Names, addresses and statutory details are unchanged and can be found on the German legal notice page.</p><Link href="/impressum" className="mt-8 inline-flex rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white">Open the German legal notice</Link></article></Container></main>; }
