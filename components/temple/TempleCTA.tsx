import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type TempleCTAProps = {
  templeName: string;
};

export default function TempleCTA({ templeName }: TempleCTAProps) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="rounded-[38px] bg-[#153B36] px-6 py-16 text-center text-white sm:px-10 lg:px-20">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#D6BC8C]">
            Willkommen
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Wir freuen uns darauf, Sie in {templeName} willkommen zu heißen
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Schreiben Sie uns kurz, wann Sie kommen möchten. Wir bestätigen den Termin und senden Ihnen alle wichtigen Informationen.
          </p>
          <div className="mt-9">
            <Button href="/kontakt?thema=tempelbesuch" size="lg" variant="secondary">
              Besuch anfragen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
