import type { Metadata } from "next";
import Link from "next/link";

import RegistrationForm from "@/components/forms/RegistrationForm";
import { getRetreatEvent, retreatEvents } from "@/data/retreatEvents";
import { getWeeklyCourseGroup, getWeeklyCourseGroups } from "@/data/weeklyCourseEvents";

export const metadata: Metadata = {
  title: "ลงทะเบียน | Der Weg nach innen",
  description: "ลงทะเบียนเข้าร่วมหลักสูตรสมาธิหรือ One Day Retreat",
};

type ThaiRegistrationPageProps = {
  searchParams: Promise<{ event?: string; course?: string }>;
};

export default async function ThaiRegistrationPage({ searchParams }: ThaiRegistrationPageProps) {
  const { event: eventId, course: courseId } = await searchParams;
  const selectedRetreat = getRetreatEvent(eventId);
  const selectedCourseGroup = getWeeklyCourseGroup(courseId);
  const isCourseRegistration = Boolean(selectedCourseGroup);
  const hasSelection = Boolean(selectedRetreat || selectedCourseGroup);

  return (
    <main className="bg-stone-50" lang="th">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              {isCourseRegistration ? "หลักสูตรสมาธิ ณ สถานที่จัดกิจกรรม" : "ONE DAY RETREAT"}
            </p>
            <h1 className="font-serif text-4xl tracking-tight text-[#153B36] md:text-5xl">
              {isCourseRegistration ? "ลงทะเบียนหลักสูตรสมาธิ" : "ลงทะเบียน One Day Retreat"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {isCourseRegistration
                ? "เลือกรอบที่ต้องการเข้าร่วม แล้วกรอกข้อมูลในแบบฟอร์มด้านล่าง"
                : "กรุณากรอกแบบฟอร์มแยกสำหรับผู้เข้าร่วมแต่ละท่าน ระบบจะแสดงกิจกรรมที่ท่านเลือกไว้โดยอัตโนมัติ"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {hasSelection ? (
            <RegistrationForm
              selectedRetreat={selectedRetreat}
              selectedCourseGroup={selectedCourseGroup}
              language="th"
            />
          ) : (
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-3xl text-[#153B36]">เลือก One Day Retreat</h2>
                <div className="mt-5 grid gap-4">
                  {retreatEvents.map((retreat) => (
                    <Link key={retreat.id} href={`/th/registration?event=${retreat.id}`} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-amber-600">
                      <strong className="text-[#153B36]">{retreat.temple}</strong>
                      <p className="mt-2 text-slate-600">{new Intl.DateTimeFormat("th-TH", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${retreat.dateValue}T12:00:00+02:00`))} · {retreat.time}</p>
                    </Link>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="font-serif text-3xl text-[#153B36]">เลือกหลักสูตรสมาธิ</h2>
                <div className="mt-5 grid gap-4">
                  {getWeeklyCourseGroups().filter((group) => group.status === "active").map((group) => (
                    <Link key={group.id} href={`/th/registration?course=${group.events[0].id}`} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-amber-600">
                      <strong className="text-[#153B36]">{group.temple}</strong>
                      <p className="mt-2 text-slate-600">{group.postalCode} {group.city} · เข้าร่วมโดยไม่มีค่าใช้จ่าย</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
