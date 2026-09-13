import type { Metadata } from "next";

import RegistrationHub from "@/components/forms/RegistrationHub";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pathname: "/th/registration",
  title: "ศูนย์ลงทะเบียน",
  description: "เลือกประเภทกิจกรรม แล้วไปยังแบบฟอร์มลงทะเบียนที่ถูกต้องโดยตรง",
});

type Props = {
  searchParams: Promise<{
    art?: string;
    event?: string;
    course?: string;
    ceremony?: string;
    tempel?: string;
  }>;
};

export default async function ThaiRegistrationPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="bg-stone-50" lang="th">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
        <RegistrationHub
          language="th"
          basePath="/th/registration"
          kind={params.art}
          eventId={params.event}
          courseId={params.course}
          ceremonyId={params.ceremony}
          templeSlug={params.tempel}
        />
      </section>
    </div>
  );
}
