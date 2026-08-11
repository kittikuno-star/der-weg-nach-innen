import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, Clock, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "เส้นทางสู่ความสงบภายใน",
  description: "การทำสมาธิ สติ และหลักธรรมทางพระพุทธศาสนาในประเทศเยอรมนี เปิดกว้างสำหรับทุกคน",
};

type PageContent = { eyebrow: string; title: string; intro: string; sections: { title: string; text: string; items?: string[] }[]; cta?: { label: string; href: string } };

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
    { title: "รูปแบบของหลักสูตร", text: "แต่ละครั้งประกอบด้วยคำแนะนำที่เข้าใจง่าย การทำสมาธิร่วมกัน และช่วงแลกเปลี่ยนประสบการณ์อย่างเป็นกันเอง" },
    { title: "หลักสูตรที่จัดเป็นประจำ", text: "กรุณาตรวจสอบกำหนดการล่าสุดก่อนเดินทาง", items: ["Königsbrunn: ทุกวันพุธ เวลา 19:30–21:00 น.", "กิจกรรมตามกำหนดการที่ Heilbronn, Rheinland, NRW, Berlin, Hamburg และ Schwarzwald", "เหมาะสำหรับผู้เริ่มต้นและผู้มีประสบการณ์"] },
  ], cta: { label: "ลงทะเบียนเข้าร่วม", href: "/th/registration" } },
  retreats: { eyebrow: "ONE DAY RETREAT", title: "หนึ่งวันเพื่อความสงบและการฟื้นฟูใจ", intro: "วันปฏิบัติธรรมเปิดโอกาสให้ท่านได้หยุดพักจากความเร่งรีบ ฝึกสมาธิอย่างลึกซึ้งขึ้น และนำความสงบกลับไปสู่ชีวิตประจำวัน", sections: [
    { title: "กิจกรรมตลอดวัน", text: "ประกอบด้วยการทำสมาธิแบบมีผู้นำ การเจริญสติ ธรรมบรรยาย และช่วงพักอย่างเพียงพอ จัดเป็นภาษาเยอรมัน", items: ["30 สิงหาคม 2026 — Wat Phra Dhammakaya Bavaria, Königsbrunn", "10 ตุลาคม 2026 — Wat Phra Dhammakaya Hamburg, Gerdau", "17 ตุลาคม 2026 — Wat Buddha Heilbronn, Wüstenrot", "เวลาโดยทั่วไป 09:30–17:00 น. ค่าเข้าร่วม 25 ยูโร"] },
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
  "about-us": { eyebrow: "เกี่ยวกับเรา", title: "พื้นที่แห่งความสงบ การเรียนรู้ และการพบกัน", intro: "Der Weg nach innen เชื่อมโยงกิจกรรมสมาธิและพระพุทธศาสนาของวัดต่าง ๆ ในประเทศเยอรมนี เพื่อให้ผู้สนใจเข้าถึงได้ง่ายและเข้าใจได้", sections: [
    { title: "สิ่งที่เราให้ความสำคัญ", text: "เรานำเสนอการฝึกสมาธิและหลักธรรมด้วยภาษาที่เข้าใจง่าย เคารพความแตกต่าง และเปิดกว้างสำหรับทุกคน" },
    { title: "แนวทางการทำงาน", text: "กิจกรรมดำเนินโดยพระสงฆ์และอาสาสมัครที่มีประสบการณ์ โดยมุ่งให้ผู้เข้าร่วมสามารถนำสิ่งที่เรียนรู้ไปใช้ได้จริงในชีวิตประจำวัน" },
    { title: "ไม่จำเป็นต้องเปลี่ยนความเชื่อ", text: "ผู้เข้าร่วมไม่จำเป็นต้องเป็นชาวพุทธ จุดมุ่งหมายคือการเรียนรู้ ฝึกใจ และค้นพบความสงบภายในด้วยตนเอง" },
  ], cta: { label: "ทำความรู้จักกิจกรรม", href: "/th/offers" } },
  contact: { eyebrow: "ติดต่อ", title: "เรายินดีรับฟังและตอบคำถาม", intro: "หากมีคำถามเกี่ยวกับหลักสูตรสมาธิ One Day Retreat การเยี่ยมชมวัด หรือกิจกรรมอื่น ๆ สามารถติดต่อเราได้โดยตรง", sections: [
    { title: "อีเมล", text: "Kittikuno@gmail.com" },
    { title: "เพื่อให้เราตอบได้รวดเร็ว", text: "กรุณาระบุชื่อ กิจกรรมหรือสถานที่ที่สนใจ วันที่ต้องการเข้าร่วม และคำถามของท่าน" },
  ], cta: { label: "ส่งอีเมล", href: "mailto:Kittikuno@gmail.com" } },
  registration: { eyebrow: "ลงทะเบียน", title: "ลงทะเบียนเข้าร่วมกิจกรรม", intro: "กรุณาเลือกกิจกรรมหรือสถานที่ที่ต้องการเข้าร่วม แล้วกรอกแบบฟอร์มลงทะเบียนภาษาไทย", sections: [
    { title: "ข้อมูลที่ควรระบุ", text: "กรุณาแจ้งชื่อ นามสกุล อีเมล หมายเลขโทรศัพท์ กิจกรรมและวันที่ต้องการเข้าร่วม รวมถึงข้อจำกัดด้านอาหารหรือสุขภาพที่จำเป็น" },
    { title: "การยืนยัน", text: "หลังจากได้รับข้อมูลแล้ว เราจะส่งรายละเอียดและการยืนยันกลับทางอีเมล" },
  ], cta: { label: "เปิดแบบฟอร์มลงทะเบียน", href: "/th/registration" } },
  "legal-notice": { eyebrow: "ข้อมูลทางกฎหมาย", title: "ข้อมูลผู้รับผิดชอบเว็บไซต์", intro: "ฉบับภาษาเยอรมันเป็นฉบับที่มีผลทางกฎหมาย ข้อความภาษาไทยนี้จัดทำขึ้นเพื่อช่วยให้เข้าใจข้อมูลเบื้องต้น", sections: [{ title: "ผู้ให้บริการ", text: "Wat Phra Dhammakaya Germany — ประเทศเยอรมนี — อีเมล: Kittikuno@gmail.com" }], cta: { label: "ดูฉบับภาษาเยอรมัน", href: "/impressum" } },
  privacy: { eyebrow: "การคุ้มครองข้อมูล", title: "นโยบายความเป็นส่วนตัว", intro: "เราใช้ข้อมูลส่วนบุคคลเฉพาะเท่าที่จำเป็นสำหรับการติดต่อ การลงทะเบียน และการดำเนินกิจกรรม", sections: [
    { title: "การติดต่อและการลงทะเบียน", text: "ข้อมูลที่ท่านส่งจะใช้เพื่อตอบคำถามหรือดำเนินการลงทะเบียนเท่านั้น และจะไม่ส่งต่อให้บุคคลภายนอกโดยไม่มีเหตุผลทางกฎหมาย" },
    { title: "ฉบับที่มีผลทางกฎหมาย", text: "นโยบายภาษาเยอรมันเป็นฉบับที่มีผลทางกฎหมาย ข้อความภาษาไทยเป็นคำอธิบายเพื่อความเข้าใจ" },
  ], cta: { label: "ดูฉบับภาษาเยอรมัน", href: "/datenschutz" } },
};

function LocationPage({ slug }: { slug: string }) {
  const location = locations.find(([id]) => id === slug);
  if (!location) notFound();
  const [, name, address, schedule] = location;
  return <ThaiPage content={{ eyebrow: "สถานที่ปฏิบัติธรรม", title: name, intro: address, sections: [
    { title: "กิจกรรม", text: schedule },
    { title: "ก่อนเดินทาง", text: "กรุณาตรวจสอบวัน เวลา และการลงทะเบียนล่วงหน้า เนื่องจากกำหนดการอาจแตกต่างกันในแต่ละสัปดาห์" },
    { title: "สำหรับผู้มาใหม่", text: "ทุกคนสามารถเข้าร่วมได้ ไม่จำเป็นต้องมีประสบการณ์ทำสมาธิหรือเป็นชาวพุทธ กรุณาสวมเสื้อผ้าที่สุภาพและสบาย" },
  ], cta: { label: "สอบถามหรือลงทะเบียน", href: "/th/contact" } }} />;
}

function ThaiPage({ content }: { content: PageContent }) {
  return <main lang="th" className="bg-[#FCFBF8] text-slate-700">
    <section className="border-b border-stone-200 bg-gradient-to-br from-[#EEF5F2] via-white to-[#FBF4E8]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <p className="mb-4 text-sm font-semibold tracking-[0.22em] text-amber-700">{content.eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-[#153B36] md:text-6xl">{content.title}</h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">{content.intro}</p>
        {content.cta && <Link href={content.cta.href} className="mt-10 inline-flex rounded-full bg-[#153B36] px-7 py-3.5 font-semibold text-white transition hover:bg-[#24584f]">{content.cta.label}</Link>}
      </div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
      {content.sections.map((section, index) => <article key={section.title} className={`rounded-3xl border border-stone-200 bg-white p-8 shadow-sm ${index === 0 && content.sections.length % 2 === 1 ? "lg:col-span-2" : ""}`}>
        <h2 className="font-serif text-2xl text-[#153B36]">{section.title}</h2>
        <p className="mt-4 leading-8">{section.text}</p>
        {section.items && <ul className="mt-6 space-y-3">{section.items.map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-700"/><span>{item.startsWith("ดูรายละเอียด: ") ? <Link className="text-[#153B36] underline" href={item.replace("ดูรายละเอียด: ", "")}>{item.replace("ดูรายละเอียด: ", "ดูรายละเอียดสถานที่")}</Link> : item}</span></li>)}</ul>}
      </article>)}
    </section>
  </main>;
}

export default async function ThaiCatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  if (slug[0] === "locations" && slug[1]) return <LocationPage slug={slug[1]} />;
  const key = slug.join("/") || "home";
  const content = pages[key];
  if (!content) notFound();
  return <ThaiPage content={content} />;
}
