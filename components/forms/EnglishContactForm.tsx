"use client";

import { CheckCircle2, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { FormEvent, useState } from "react";
import EnglishContactTopicSelect from "./EnglishContactTopicSelect";
import type { ContactApiPayload, ContactApiResponse, ContactTopic } from "@/types/contact";

const topics: ContactTopic[] = ["unsure", "meditation", "retreat", "visit", "school", "event", "other"];
const value = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

export default function EnglishContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const topic = value(data, "topic") as ContactTopic;
    if (!topics.includes(topic)) { setStatus("error"); setMessage("Please select a topic."); return; }
    const payload: ContactApiPayload = { requestType: "contact", submittedAt: new Date().toISOString(), status: "new", firstName: value(data,"firstName"), lastName: value(data,"lastName"), email: value(data,"email"), topic, location: value(data,"location"), message: value(data,"message"), privacyConsent: data.get("privacy") === "on" };
    setStatus("submitting"); setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "Accept-Language": "en" }, body: JSON.stringify(payload) });
      const body = await response.json() as ContactApiResponse;
      if (!response.ok || !body.success) throw new Error("Your message could not be sent. Please try again later.");
      setStatus("success"); setMessage("Your message has been sent successfully. We will reply as soon as possible."); form.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "An unexpected error occurred."); }
  }

  if (status === "success") return <div role="status" className="rounded-[28px] border border-emerald-200 bg-emerald-50 px-6 py-10 text-center"><CheckCircle2 className="mx-auto h-8 w-8 text-emerald-700"/><h3 className="mt-5 font-serif text-3xl text-[#153B36]">Thank you for your message</h3><p className="mt-4 text-slate-600">{message}</p><button type="button" onClick={() => setStatus("idle")} className="mt-7 rounded-full border border-[#153B36] px-6 py-3 font-semibold text-[#153B36]">Write another message</button></div>;

  const disabled = status === "submitting";
  const inputClass = "mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60";
  return <form className="space-y-7" onSubmit={submit}>
    <div className="grid gap-6 sm:grid-cols-2"><div><label htmlFor="en-firstName" className="block text-sm font-semibold text-[#153B36]">First name</label><input id="en-firstName" name="firstName" required disabled={disabled} autoComplete="given-name" className={inputClass}/></div><div><label htmlFor="en-lastName" className="block text-sm font-semibold text-[#153B36]">Last name</label><input id="en-lastName" name="lastName" required disabled={disabled} autoComplete="family-name" className={inputClass}/></div></div>
    <div><label htmlFor="en-email" className="block text-sm font-semibold text-[#153B36]">Email address</label><input id="en-email" name="email" type="email" required disabled={disabled} autoComplete="email" className={inputClass}/></div>
    <div><label htmlFor="topic" className="block text-sm font-semibold text-[#153B36]">Topic of your enquiry</label><EnglishContactTopicSelect/></div>
    <div><label htmlFor="en-location" className="block text-sm font-semibold text-[#153B36]">Location or region <span className="font-normal text-slate-400">(optional)</span></label><input id="en-location" name="location" disabled={disabled} className={inputClass}/></div>
    <div><label htmlFor="en-message" className="block text-sm font-semibold text-[#153B36]">Your message</label><textarea id="en-message" name="message" rows={7} required disabled={disabled} className={inputClass}/></div>
    <label className="flex items-start gap-4"><input type="checkbox" name="privacy" required disabled={disabled} className="mt-1 h-5 w-5"/><span className="text-sm leading-7 text-slate-600">I agree that my details may be used to respond to my enquiry. See our <a href="/en/privacy" className="underline">privacy policy</a>.</span></label>
    {status === "error" && <p role="alert" className="flex gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-700"><TriangleAlert className="h-5 w-5 shrink-0"/>{message}</p>}
    <button type="submit" disabled={disabled} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#153B36] px-7 py-4 font-semibold text-white disabled:opacity-60">{disabled ? <LoaderCircle className="h-4 w-4 animate-spin"/> : <Send className="h-4 w-4"/>}{disabled ? "Sending…" : "Send message"}</button>
  </form>;
}
