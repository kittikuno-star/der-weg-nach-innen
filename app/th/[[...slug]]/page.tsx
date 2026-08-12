import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpenText, CalendarDays, CheckCircle2, Clock3, Globe2, HeartHandshake, MapPin, Navigation } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import GermanyMap from "@/components/locations/GermanyMap";
import Container from "@/components/ui/Container";
import { retreatEvents } from "@/data/retreatEvents";
import { templeLocations } from "@/data/templeLocations";

export const metadata: Metadata = {
  title: "เส้นทางสู่ความสงบภายใน",
  description: "การทำสมาธิ สติ และหลักธรรมทางพระพุทธศาสนาในประเทศเยอรมนี เปิดกว้างสำหรับทุกคน",
};

type PageContent = { eyebrow: string; title: string; intro: string; sections: { title: string; text: string; items?: string[] }[]; cta?: { label: string; href: string } };

const pageImages: Record<string, string> = {
  home: "/images/hero/hero-01.png",
  meditation: "/images/meditation/why-meditation-01.png",
  courses: "/images/courses/course-weekly-01.png",
  retreats: "/images/retreat/retreat-hero-01.png",
  offers: "/images/courses/course-introduction-01.png",
  inspiration: "/images/inspiration/inspiration-buddhist-wisdom-01.png",
  "about-us": "/images/about/projektteam-uebersicht.png",
  contact: "/images/temples/bavaria/hero-01.jpg",
  "legal-notice": "/images/hero/hero-01.png",
  privacy: "/images/meditation/why-meditation-01.png",
};

const locations = [
  ["bavaria", "วัดพระธรรมกายบาวาเรีย", "Heinkelstraße 1, 86343 Königsbrunn", "ทุกวันพุธ เวลา 19:30–21:00 น."],
  ["rheinland", "วัดพระธรรมกายไรน์ลันด์", "Ingelheim am Rhein", "กิจกรรมสมาธิและ One Day Retreat ตามกำหนดการ"],
  ["nrw", "วัดพระธรรมกายนอร์ดไรน์ เวสต์ฟาเลิน", "Nordrhein-Westfalen", "หลักสูตรสมาธิและกิจกรรมทางพระพุทธศาสนา"],
  ["berlin", "วัดพระธรรมกายเบอร์ลิน", "Dahlewitz, Brandenburg", "การทำสมาธิและกิจกรรมสำหรับผู้สนใจ"],
  ["hamburg", "วัดพระธรรมกายฮัมบวร์ก", "Am Silberberg 1, 29581 Gerdau", "One Day Retreat วันที่ 10 ตุลาคม 2026"],
  ["heilbronn", "วัดพุทธไฮล์บรอนน์", "Waldeck 7, 71543 Wüstenrot", "หลักสูตรสมาธิและ One Day Retreat วันที่ 17 ตุลาคม 2026"],
  ["schwarzwald", "วัดพระธรรมกายชวาร์ซวัลด์", "Baden-Württemberg", "การทำสมาธิและกิจกรรมตามกำหนดการ"],
] as const;

const pages: Record<string, PageContent> = {
  home: { eyebrow: "DER WEG NACH INNEN", title: "หยุดพัก เพื่อค้นพบความสงบภายใน", intro: "พื้นที่สำหรับการทำสมาธิ การเจริญสติ และการเรียนรู้หลักธรรมทางพระพุทธศาสนาในประเทศเยอรมนี ไม่ว่าท่านจะเพิ่งเริ่มต้นหรือมีประสบการณ์แล้ว ทุกคนสามารถเข้าร่วมได้", sections: [
    { title: "เริ่มต้นอย่างเรียบง่าย", text: "การทำสมาธิไม่จำเป็นต้องซับซ้อน เพียงให้เวลากับตนเอง วางความกังวลลงชั่วคราว และค่อย ๆ กลับมาอยู่กับความสงบภายใน" },
    { title: "กิจกรรมของเรา", text: "เราเปิดสอนสมาธิเป็นภาษาเยอรมัน จัดวันปฏิบัติธรรมแบบ One Day Retreat และกิจกรรมที่ช่วยนำหลักธรรมไปใช้ในชีวิตประจำวัน", items: ["หลักสูตรสมาธิประจำสัปดาห์", "One Day Retreat", "การบรรยายและสนทนาธรรม", "กิจกรรมสำหรับโรงเรียนและกลุ่มต่าง ๆ"] },
    { title: "เปิดกว้างสำหรับทุกคน", text: "ไม่จำเป็นต้องเป็นชาวพุทธหรือมีพื้นฐานมาก่อน ท่านสามารถมาเรียนรู้ ฝึกปฏิบัติ และค้นหาวิธีที่เหมาะกับตนเองได้อย่างเป็นธรรมชาติ" },
  ], cta: { label: "ดูกิจกรรมทั้งหมด", href: "/th/offers" } },
  meditation: { eyebrow: "การทำสมาธิ", title: "กลับมาอยู่กับตนเอง", intro: "สมาธิคือการฝึกใจให้หยุดจากความฟุ้งซ่าน ค่อย ๆ ผ่อนคลาย และรับรู้ความสงบที่มีอยู่ภายใน", sections: [
    { title: "สมาธิคืออะไร", text: "สมาธิไม่ใช่การบังคับให้ใจว่าง แต่เป็นการเรียนรู้ที่จะวางความคิดอย่างอ่อนโยน และให้ใจได้พักอย่างแท้จริง" },
    { title: "ประโยชน์ในชีวิตประจำวัน", text: "การฝึกอย่างสม่ำเสมอช่วยให้เรามีสติ รับมือกับความเครียดได้ดีขึ้น และมองเหตุการณ์ต่าง ๆ ด้วยความชัดเจนและเมตตามากขึ้น" },
    { title: "สำหรับผู้เริ่มต้น", text: "เริ่มจากช่วงเวลาสั้น ๆ ในท่านั่งที่สบาย ไม่คาดหวังผลเร็วเกินไป และฝึกด้วยความสม่ำเสมอ ความสงบจะค่อย ๆ เติบโตจากภายใน" },
  ], cta: { label: "ดูหลักสูตรสมาธิ", href: "/th/courses" } },
  courses: { eyebrow: "หลักสูตรสมาธิ", title: "ฝึกสมาธิร่วมกันอย่างสม่ำเสมอ", intro: "หลักสูตรของเราเหมาะสำหรับทั้งผู้เริ่มต้นและผู้มีประสบการณ์ ดำเนินกิจกรรมเป็นภาษาเยอรมันและไม่มีค่าใช้จ่าย", sections: [
    { title: "รูปแบบของหลักสูตร", text: "แต่ละครั้งประกอบด้วยคำแนะนำที่เข้าใจง่าย การทำสมาธิร่วมกัน และช่วงแลกเปลี่ยนประสบการณ์อย่างเป็นกันเอง\n\nภาษาที่ใช้ในกิจกรรม: ภาษาเยอรมัน" },
    { title: "หลักสูตรที่จัดเป็นประจำ", text: "กรุณาตรวจสอบกำหนดการล่าสุดก่อนเดินทาง\n\nภาษาที่ใช้ในกิจกรรม: ภาษาเยอรมัน", items: ["Königsbrunn: ทุกวันพุธ เวลา 19:30–21:00 น.", "กิจกรรมตามกำหนดการที่ Heilbronn, Rheinland, NRW, Berlin, Hamburg และ Schwarzwald", "เหมาะสำหรับผู้เริ่มต้นและผู้มีประสบการณ์"] },
  ], cta: { label: "ลงทะเบียนเข้าร่วม", href: "/th/registration" } },
  retreats: { eyebrow: "ONE DAY RETREAT", title: "หนึ่งวันเพื่อความสงบและการฟื้นฟูใจ", intro: "วันปฏิบัติธรรมเปิดโอกาสให้ท่านได้หยุดพักจากความเร่งรีบ ฝึกสมาธิอย่างลึกซึ้งขึ้น และนำความสงบกลับไปสู่ชีวิตประจำวัน", sections: [
    { title: "กิจกรรมตลอดวัน", text: "One Day Retreat (ภาษาเยอรมัน)\n\nประกอบด้วยการทำสมาธิแบบมีผู้นำ การเจริญสติ ธรรมบรรยาย และช่วงพักอย่างเพียงพอ\n\nภาษาที่ใช้ในกิจกรรม: ภาษาเยอรมัน", items: ["30 สิงหาคม 2026 — Wat Phra Dhammakaya Bavaria, Königsbrunn", "10 ตุลาคม 2026 — Wat Phra Dhammakaya Hamburg, Gerdau", "17 ตุลาคม 2026 — Wat Buddha Heilbronn, Wüstenrot", "เวลาโดยทั่วไป 09:30–17:00 น. ค่าเข้าร่วม 25 ยูโร"] },
    { title: "ใครสามารถเข้าร่วมได้", text: "ผู้ใหญ่ทั้งผู้เริ่มต้นและผู้มีประสบการณ์สามารถเข้าร่วมได้ กรุณาลงทะเบียนล่วงหน้าเนื่องจากจำนวนที่มีจำกัด" },
  ], cta: { label: "ลงทะเบียน One Day Retreat", href: "/th/registration" } },
  offers: { eyebrow: "กิจกรรม", title: "เส้นทางที่เหมาะกับท่าน", intro: "เลือกกิจกรรมที่สอดคล้องกับความสนใจ เวลา และประสบการณ์ของท่าน", sections: [
    { title: "สมาธิและการปฏิบัติ", text: "หลักสูตรสมาธิประจำสัปดาห์ One Day Retreat และกิจกรรมฝึกสติสำหรับผู้เริ่มต้นและผู้มีประสบการณ์" },
    { title: "การเรียนรู้และการแลกเปลี่ยน", text: "การบรรยาย สนทนาธรรม กิจกรรมเยี่ยมชมวัดสำหรับโรงเรียน และการเรียนรู้พระพุทธศาสนาในบรรยากาศที่เปิดกว้าง" },
    { title: "พิธีกรรมและกิจกรรมวัฒนธรรม", text: "โอกาสในการทำความรู้จักประเพณีทางพระพุทธศาสนาอย่างเข้าใจ พร้อมคำอธิบายเป็นภาษาเยอรมัน" },
  ], cta: { label: "ติดต่อสอบถาม", href: "/th/contact" } },
  locations: { eyebrow: "สถานที่", title: "วัดและศูนย์ปฏิบัติธรรมในประเทศเยอรมนี", intro: "ค้นหากิจกรรมใกล้ท่าน แต่ละแห่งมีตารางกิจกรรมแตกต่างกัน กรุณาตรวจสอบรายละเอียดก่อนเดินทาง", sections: locations.map(([slug, name, address, schedule]) => ({ title: name, text: `${address} — ${schedule}`, items: [`ดูรายละเอียด: /th/locations/${slug}`] })), cta: { label: "สอบถามสถานที่", href: "/th/contact" } },
  inspiration: { eyebrow: "แรงบันดาลใจ", title: "ความสงบเริ่มต้นจากช่วงเวลานี้", intro: "ข้อคิดและหลักธรรมที่ช่วยให้เรากลับมามีสติ เข้าใจตนเอง และดำเนินชีวิตด้วยความเมตตา", sections: [
    { title: "หยุดก่อนที่จะตอบสนอง", text: "เมื่อมีสิ่งมากระทบใจ การหยุดเพียงชั่วขณะช่วยให้เราเห็นอารมณ์ของตนเอง และเลือกตอบสนองด้วยปัญญาแทนความเคยชิน" },
    { title: "ความสุขที่ไม่ต้องแสวงหาไกล", text: "ความสุขที่มั่นคงไม่ได้ขึ้นอยู่กับการได้ทุกอย่างดังใจ แต่เกิดจากใจที่รู้จักพอ รู้จักวาง และเห็นคุณค่าของสิ่งที่มีอยู่" },
    { title: "เมตตาต่อตนเองและผู้อื่น", text: "การให้อภัยและความปรารถนาดีไม่ใช่ความอ่อนแอ แต่เป็นพลังที่ทำให้ใจเป็นอิสระจากความโกรธและความขัดแย้ง" },
  ] },
  "about-us": { eyebrow: "เกี่ยวกับเรา", title: "พื้นที่แห่งความสงบ การเรียนรู้ และการพบกัน", intro: "Der Weg nach innen เป็นโครงการของ DIDE - Dhammakaya International Deutschland gemeinnützige GmbH และเชื่อมโยงกิจกรรมสมาธิและพระพุทธศาสนาของวัดต่าง ๆ ในประเทศเยอรมนี เพื่อให้ผู้สนใจเข้าถึงได้ง่ายและเข้าใจได้", sections: [
    { title: "สิ่งที่เราให้ความสำคัญ", text: "เรานำเสนอการฝึกสมาธิและหลักธรรมด้วยภาษาที่เข้าใจง่าย เคารพความแตกต่าง และเปิดกว้างสำหรับทุกคน" },
    { title: "แนวทางการทำงาน", text: "กิจกรรมดำเนินโดยพระสงฆ์และอาสาสมัครที่มีประสบการณ์ โดยมุ่งให้ผู้เข้าร่วมสามารถนำสิ่งที่เรียนรู้ไปใช้ได้จริงในชีวิตประจำวัน" },
    { title: "ไม่จำเป็นต้องเปลี่ยนความเชื่อ", text: "ผู้เข้าร่วมไม่จำเป็นต้องเป็นชาวพุทธ จุดมุ่งหมายคือการเรียนรู้ ฝึกใจ และค้นพบความสงบภายในด้วยตนเอง" },
  ], cta: { label: "ทำความรู้จักกิจกรรม", href: "/th/offers" } },
  contact: { eyebrow: "ติดต่อ", title: "เรายินดีรับฟังและตอบคำถาม", intro: "หากมีคำถามเกี่ยวกับหลักสูตรสมาธิ One Day Retreat การเยี่ยมชมวัด หรือกิจกรรมอื่น ๆ สามารถติดต่อเราได้โดยตรง", sections: [
    { title: "อีเมล", text: "Kittikuno@gmail.com" },
    { title: "เพื่อให้เราตอบได้รวดเร็ว", text: "กรุณาระบุชื่อ กิจกรรมหรือสถานที่ที่สนใจ วันที่ต้องการเข้าร่วม และคำถามของท่าน" },
  ], cta: { label: "ส่งอีเมล", href: "mailto:Kittikuno@gmail.com" } },
  registration: { eyebrow: "ลงทะเบียน", title: "ลงทะเบียนเข้าร่วมกิจกรรม", intro: "กรุณาเลือกกิจกรรมหรือสถานที่ที่ต้องการเข้าร่วม แล้วกรอกแบบฟอร์มลงทะเบียนภาษาไทย", sections: [
    { title: "ข้อมูลที่ควรระบุ", text: "กรุณาแจ้งชื่อ นามสกุล อีเมล กิจกรรมและวันที่ต้องการเข้าร่วม ส่วนหมายเลขโทรศัพท์กรอกหรือไม่กรอกก็ได้" },
    { title: "การยืนยัน", text: "หลังจากได้รับข้อมูลแล้ว เราจะส่งรายละเอียดและการยืนยันกลับทางอีเมล" },
  ], cta: { label: "เปิดแบบฟอร์มลงทะเบียน", href: "/th/registration" } },
  "legal-notice": { eyebrow: "ข้อมูลทางกฎหมาย", title: "ข้อมูลผู้รับผิดชอบเว็บไซต์", intro: "ฉบับภาษาเยอรมันเป็นฉบับที่มีผลทางกฎหมาย ข้อความภาษาไทยนี้จัดทำขึ้นเพื่อช่วยให้เข้าใจข้อมูลเบื้องต้น", sections: [{ title: "ผู้ให้บริการ", text: "DIDE - Dhammakaya International Deutschland gemeinnützige GmbH — Heinkelstr. 1, 86343 Königsbrunn — Amtsgericht Augsburg, HRB 24820 — อีเมล: Kittikuno@gmail.com" }], cta: { label: "ดูฉบับภาษาเยอรมัน", href: "/impressum" } },
  privacy: { eyebrow: "การคุ้มครองข้อมูล", title: "นโยบายความเป็นส่วนตัว", intro: "เราใช้ข้อมูลส่วนบุคคลเฉพาะเท่าที่จำเป็นสำหรับการติดต่อ การลงทะเบียน และการดำเนินกิจกรรม", sections: [
    { title: "การติดต่อและการลงทะเบียน", text: "ข้อมูลที่ท่านส่งจะใช้เพื่อตอบคำถามหรือดำเนินการลงทะเบียนเท่านั้น และจะไม่ส่งต่อให้บุคคลภายนอกโดยไม่มีเหตุผลทางกฎหมาย" },
    { title: "ฉบับที่มีผลทางกฎหมาย", text: "นโยบายภาษาเยอรมันเป็นฉบับที่มีผลทางกฎหมาย ข้อความภาษาไทยเป็นคำอธิบายเพื่อความเข้าใจ" },
  ], cta: { label: "ดูฉบับภาษาเยอรมัน", href: "/datenschutz" } },
};

function LocationPage({ slug }: { slug: string }) {
  const location = locations.find(([id]) => id === slug);
  if (!location) notFound();
  const [, name, address, schedule] = location;
  return <ThaiPage image={templeLocations[slug]?.image ?? "/images/hero/hero-01.png"} content={{ eyebrow: "สถานที่ปฏิบัติธรรม", title: name, intro: address, sections: [
    { title: "กิจกรรม", text: schedule },
    { title: "ก่อนเดินทาง", text: "กรุณาตรวจสอบวัน เวลา และการลงทะเบียนล่วงหน้า เนื่องจากกำหนดการอาจแตกต่างกันในแต่ละสัปดาห์" },
    { title: "สำหรับผู้มาใหม่", text: "ทุกคนสามารถเข้าร่วมได้ ไม่จำเป็นต้องมีประสบการณ์ทำสมาธิหรือเป็นชาวพุทธ กรุณาสวมเสื้อผ้าที่สุภาพและสบาย" },
  ], cta: { label: "สอบถามหรือลงทะเบียน", href: "/th/contact" } }} />;
}

function ThaiLocationsPage() {
  return (
    <main lang="th" className="bg-[#F7F6F2] text-slate-700">
      <section className="border-b border-[#E5DED0] bg-white pb-16 pt-10 sm:pt-12 lg:pb-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-5xl rounded-[32px] border border-[#E4DED1] bg-[#FBFAF6] px-5 py-9 text-center shadow-[0_24px_70px_rgba(21,59,54,0.08)] sm:px-10 lg:px-14">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#9A7644]">สถานที่ทั้ง 7 แห่งในประเทศเยอรมนี</p>
              <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#153B36] sm:text-4xl lg:text-5xl">ค้นหาวัดและศูนย์ปฏิบัติธรรมใกล้คุณ</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">เลือกจุดบนแผนที่เพื่อดูที่อยู่ ตารางสมาธิ และกิจกรรมล่าสุดของแต่ละวัด</p>
              <div className="mt-7 rounded-[26px] border border-[#E4DED1] bg-white px-2 py-6 sm:px-8">
                <GermanyMap language="th" />
              </div>
              <Link href="#thai-locations" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition hover:bg-[#244B45]">ดูรายชื่อสถานที่<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section id="thai-locations" className="scroll-mt-28 py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {locations.map(([slug, name, address], index) => {
              const temple = templeLocations[slug];
              return (
                <FadeIn key={slug} delay={index * 0.05}>
                  <Link href={`/th/locations/${slug}`} className="group block h-full overflow-hidden rounded-[28px] border border-[#E0E1DC] bg-white shadow-[0_16px_50px_rgba(21,59,54,0.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(21,59,54,0.12)]">
                    <article className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E7DF]">
                        <Image src={temple?.image ?? "/images/hero/hero-01.png"} alt={name} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#153B36]/40 to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-start gap-2 text-sm leading-6 text-slate-500"><Navigation className="mt-1 h-4 w-4 shrink-0 text-[#B08D57]" />{address}</div>
                        <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#153B36]">{name}</h2>
                        <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">ดูสถานที่<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}

function thaiRetreatDate(dateValue: string) {
  return new Intl.DateTimeFormat("th-TH-u-ca-gregory", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(`${dateValue}T12:00:00+02:00`));
}

function ThaiRetreatsPage() {
  return (
    <main lang="th" className="bg-[#F7F6F2] text-slate-700">
      <section className="relative isolate min-h-[440px] overflow-hidden bg-[#102F2B] text-white">
        <Image src="/images/retreat/retreat-hero-01.png" alt="บรรยากาศการปฏิบัติธรรม" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2522]/95 via-[#0B2522]/72 to-[#0B2522]/25" />
        <Container className="relative flex min-h-[440px] items-center py-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#E2CFA8]">ONE DAY RETREAT</p>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.2] sm:text-4xl lg:text-5xl">หนึ่งวันเพื่อความสงบและการฟื้นฟูใจ</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">วันปฏิบัติธรรมเปิดโอกาสให้ท่านได้หยุดพักจากความเร่งรีบ ฝึกสมาธิอย่างลึกซึ้งขึ้น และนำความสงบกลับไปสู่ชีวิตประจำวัน</p>
            <p className="mt-5 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2.5 font-semibold text-white">ภาษาที่ใช้ในกิจกรรม: ภาษาเยอรมัน</p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-[0.28em] text-[#B08D57]">กิจกรรมตลอดวัน</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#153B36] sm:text-4xl">One Day Retreat (ภาษาเยอรมัน)</h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">ประกอบด้วยการทำสมาธิแบบมีผู้นำ การเจริญสติ ธรรมบรรยาย ช่วงพัก และการรับประทานอาหารร่วมกัน เหมาะสำหรับทั้งผู้เริ่มต้นและผู้มีประสบการณ์</p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {retreatEvents.map((retreat, index) => (
              <FadeIn key={retreat.id} delay={index * 0.08}>
                <article className="group h-full overflow-hidden rounded-[30px] border border-[#DDD9CF] bg-white shadow-[0_20px_60px_rgba(21,59,54,0.08)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7DF]">
                    <Image src={retreat.image} alt={retreat.imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#153B36]/45 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#153B36] shadow-sm">ONE DAY RETREAT · ภาษาเยอรมัน</div>
                  </div>
                  <div className="p-7 sm:p-8">
                    <h3 className="text-2xl font-semibold leading-tight text-[#153B36]">{retreat.temple}</h3>
                    <dl className="mt-6 space-y-4 text-slate-600">
                      <div className="flex items-start gap-3"><CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" /><dd>{thaiRetreatDate(retreat.dateValue)}</dd></div>
                      <div className="flex items-start gap-3"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" /><dd>{retreat.time}</dd></div>
                      <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" /><dd><span className="block font-semibold text-[#153B36]">{retreat.street}</span>{retreat.postalCode} {retreat.city}</dd></div>
                    </dl>
                    <p className="mt-6 font-semibold text-[#153B36]">ภาษาที่ใช้ในกิจกรรม: ภาษาเยอรมัน</p>
                    <Link href={`/th/registration?event=${retreat.id}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#153B36] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5">ลงทะเบียน<ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

const thaiOffers = [
  {
    title: "สมาธิและการปฏิบัติ",
    text: "หลักสูตรสมาธิประจำสัปดาห์ One Day Retreat และกิจกรรมฝึกสติสำหรับผู้เริ่มต้นและผู้มีประสบการณ์",
    action: "ดูหลักสูตรสมาธิ",
    href: "/th/courses",
    image: "/images/offers/meditationskurse.png",
  },
  {
    title: "การเรียนรู้และการแลกเปลี่ยน",
    text: "การบรรยาย สนทนาธรรม และกิจกรรมเยี่ยมชมวัดในบรรยากาศที่เปิดกว้าง",
    action: "เลือกวัดหรือสถานที่",
    href: "/th/locations",
    image: "/images/offers/tempelbesuche.png",
  },
  {
    title: "พิธีกรรมและกิจกรรมวัฒนธรรม",
    text: "ทำความรู้จักวันสำคัญ ประเพณี และพิธีกรรมทางพระพุทธศาสนาพร้อมคำอธิบายที่เข้าใจง่าย",
    action: "ติดต่อสอบถามกิจกรรม",
    href: "/th/contact",
    image: "/images/offers/zeremonien-veranstaltungen-neu.png",
  },
];

function ThaiOffersPage() {
  return (
    <main lang="th" className="bg-[#F7F4ED] text-slate-700">
      <section className="border-b border-[#E5DED0] bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#9A7644]">กิจกรรมของเรา</p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#153B36] sm:text-4xl lg:text-5xl">เลือกกิจกรรมที่เหมาะกับคุณ</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">คลิกที่หัวข้อเพื่อดูหลักสูตร สถานที่ หรือสอบถามกิจกรรมได้โดยตรง</p>
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="py-14 sm:py-18 lg:py-24">
        <Container>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {thaiOffers.map((offer, index) => (
              <FadeIn key={offer.title} delay={index * 0.06}>
                <Link href={offer.href} className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#E4DED2] bg-white shadow-[0_16px_45px_rgba(21,59,54,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-[#C8B58E] hover:shadow-[0_26px_70px_rgba(21,59,54,0.13)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE8DE]">
                    <Image src={offer.image} alt="" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102F2B]/35 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h2 className="text-2xl font-semibold leading-tight text-[#153B36] sm:text-3xl">{offer.title}</h2>
                    <p className="mt-4 flex-1 text-base leading-8 text-slate-600">{offer.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#153B36]">{offer.action}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

const thaiValues = [
  { title: "ความสงบภายใน", text: "เราเปิดทางสู่การทำสมาธิที่เข้าใจง่าย เพื่อช่วยให้ผู้คนสงบลงและมองเห็นสิ่งต่าง ๆ ได้ชัดเจนขึ้น", icon: HeartHandshake },
  { title: "การถ่ายทอดที่เข้าใจง่าย", text: "หลักธรรมทางพระพุทธศาสนาถูกนำเสนอด้วยภาษาที่เปิดกว้าง ทันสมัย และเชื่อมโยงกับชีวิตประจำวัน", icon: BookOpenText },
  { title: "เปิดกว้างสำหรับทุกคน", text: "กิจกรรมของเราเหมาะสำหรับผู้ที่มีหรือไม่มีประสบการณ์ โดยไม่จำกัดเชื้อชาติหรือความเชื่อ", icon: Globe2 },
];

function ThaiAboutPage() {
  return (
    <main lang="th">
      <section className="relative isolate overflow-hidden bg-[#153B36] py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#B08D57]/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-36 right-0 -z-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#D6BC8C]">เกี่ยวกับเรา</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.18] text-white sm:text-5xl lg:text-6xl">เส้นทางร่วมกัน<span className="block text-[#E7D7B8]">สู่ความสงบภายใน</span></h1>
              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">“Der Weg nach Innen” เชื่อมโยงกิจกรรมสมาธิของวัดพุทธทั้งเจ็ดแห่งในประเทศเยอรมนี และทำให้การเรียนรู้สมาธิเข้าถึงได้อย่างเปิดกว้าง เข้าใจง่าย และร่วมสมัย</p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/th/offers" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E4CFA7] px-7 py-3.5 font-semibold text-[#153B36] transition hover:bg-white">ดูกิจกรรม<ArrowRight className="h-4 w-4" /></Link>
                <Link href="/th/locations" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">ดูสถานที่</Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <FadeIn><div><p className="text-sm font-semibold tracking-[0.3em] text-[#B08D57]">แนวทางของเรา</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-[#153B36] sm:text-4xl">สมาธิคือก้าวแรก</h2></div></FadeIn>
            <FadeIn delay={0.1}><div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg"><p>เราต้องการช่วยให้ผู้คนได้หยุดพัก เข้าใจจิตใจของตนเองมากขึ้น และพัฒนาสติในชีวิตประจำวัน</p><p>เนื้อหาของเรามีพื้นฐานจากประเพณีการทำสมาธิทางพระพุทธศาสนา แต่ถ่ายทอดในรูปแบบที่ผู้ไม่มีพื้นฐานทางศาสนาก็สามารถเข้าถึงได้อย่างเป็นธรรมชาติ</p><p>เว็บไซต์นี้รวบรวมหลักสูตรสมาธิ Retreat เนื้อหาสร้างแรงบันดาลใจ และข้อมูลของวัดทั้งเจ็ดแห่งในประเทศเยอรมนี</p></div></FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold tracking-[0.3em] text-[#B08D57]">สิ่งที่เราให้ความสำคัญ</p><h2 className="mt-5 text-3xl font-semibold text-[#153B36] sm:text-4xl">คุณค่าของเรา</h2></div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {thaiValues.map((value, index) => { const Icon = value.icon; return <FadeIn key={value.title} delay={index * 0.1}><article className="h-full rounded-[28px] border border-[#E4E5E1] bg-white p-8 shadow-[0_18px_50px_rgba(21,59,54,0.05)]"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#153B36] text-[#E7D7B8]"><Icon className="h-6 w-6" strokeWidth={1.7} /></div><h3 className="mt-7 text-2xl font-semibold text-[#153B36]">{value.title}</h3><p className="mt-5 leading-8 text-slate-600">{value.text}</p></article></FadeIn>; })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold tracking-[0.3em] text-[#B08D57]">ร่วมกันสร้างสรรค์</p><h2 className="mt-5 text-3xl font-semibold text-[#153B36] sm:text-4xl">ผู้ที่อยู่เบื้องหลังโครงการ</h2></div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[{ name: "Phra Somkait Kittikuno", role: "วิสัยทัศน์และการบริหารโครงการ", image: "/images/about/phra-kittikuno.jpeg", text: "รับผิดชอบวิสัยทัศน์ ทิศทางเชิงกลยุทธ์ และการพัฒนาโครงการโดยรวม" }, { name: "Phramaha Ekkarach", role: "เนื้อหาและชุมชน", image: "/images/about/phra-ekkarach.jpeg", text: "รับผิดชอบการพัฒนาและถ่ายทอดเนื้อหา รวมถึงการดูแลและเชื่อมโยงชุมชน" }].map((person, index) => <FadeIn key={person.name} delay={index * 0.1}><article className="overflow-hidden rounded-[32px] border border-[#E4E5E1] bg-[#F7F6F2] shadow-[0_20px_60px_rgba(21,59,54,0.08)]"><div className="relative h-[340px] overflow-hidden bg-[#EFE9DD] sm:h-[400px]"><Image src={person.image} alt={person.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" /></div><div className="p-7 sm:p-8"><p className="text-xs font-semibold tracking-[0.24em] text-[#B08D57]">{person.role}</p><h3 className="mt-4 text-2xl font-semibold text-[#153B36] sm:text-3xl">{person.name}</h3><p className="mt-4 leading-7 text-slate-600">{person.text}</p></div></article></FadeIn>)}
          </div>
        </Container>
      </section>
    </main>
  );
}

function ThaiPage({ content, image = "/images/hero/hero-01.png", separateImage = false }: { content: PageContent; image?: string; separateImage?: boolean }) {
  return <main lang="th" className="bg-[#F8F6F0] text-slate-700">
    <section className="relative min-h-[440px] overflow-hidden bg-[#102F2B] text-white">
      {!separateImage && <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center motion-safe:animate-[heroZoom_16s_ease-out_forwards]" />}
      {!separateImage && <div className="absolute inset-0 bg-gradient-to-r from-[#0B2522]/94 via-[#0B2522]/68 to-[#0B2522]/20" />}
      {!separateImage && <div className="absolute inset-0 bg-gradient-to-t from-[#0B2522]/65 via-transparent to-black/10" />}
      <Container className={`relative min-h-[440px] py-14 lg:py-16 ${separateImage ? "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]" : "flex items-center"}`}>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#E2CFA8]">{content.eyebrow}</p>
          <h1 className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl">{content.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">{content.intro}</p>
          {content.cta && <Link href={content.cta.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E4CFA7] px-7 py-3.5 font-semibold text-[#153B36] transition hover:bg-white">{content.cta.label}<ArrowRight className="h-4 w-4" /></Link>}
        </div>
        {separateImage && <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]"><Image src={image} alt="ทีมงานและภารกิจของโครงการ" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" /></div>}
      </Container>
    </section>
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {content.sections.map((section, index) => <FadeIn key={section.title} delay={index * 0.06}><article className={`h-full rounded-[30px] border border-[#E4DED1] bg-white p-8 shadow-[0_18px_50px_rgba(21,59,54,0.06)] sm:p-10 ${index === 0 && content.sections.length % 2 === 1 ? "lg:col-span-2" : ""}`}>
            <h2 className="text-2xl font-semibold text-[#153B36] sm:text-3xl">{section.title}</h2>
            <p className="mt-5 whitespace-pre-line text-lg leading-9 text-slate-600">
              {section.title === "อีเมล" ? (
                <a
                  href={`mailto:${section.text}`}
                  className="font-semibold text-[#153B36] underline decoration-[#B08D57]/60 underline-offset-4 transition hover:text-[#B08D57]"
                >
                  {section.text}
                </a>
              ) : section.text}
            </p>
            {section.items && <ul className="mt-7 space-y-4">{section.items.map(item => <li key={item} className="flex gap-3 leading-7"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]"/><span>{item.startsWith("ดูรายละเอียด: ") ? <Link className="font-semibold text-[#153B36] underline decoration-[#B08D57]/60 underline-offset-4" href={item.replace("ดูรายละเอียด: ", "")}>{item.replace("ดูรายละเอียด: ", "ดูรายละเอียดสถานที่")}</Link> : item}</span></li>)}</ul>}
          </article></FadeIn>)}
        </div>
      </Container>
    </section>
  </main>;
}

export default async function ThaiCatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  if (slug[0] === "locations" && slug[1]) return <LocationPage slug={slug[1]} />;
  const key = slug.join("/") || "home";
  if (key === "locations") return <ThaiLocationsPage />;
  if (key === "offers") return <ThaiOffersPage />;
  if (key === "about-us") return <ThaiAboutPage />;
  if (key === "retreats") return <ThaiRetreatsPage />;
  const content = pages[key];
  if (!content) notFound();
  return <ThaiPage content={content} image={pageImages[key]} separateImage={key === "about-us"} />;
}
