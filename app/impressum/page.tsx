import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der Website Der Weg nach innen.",
};

export default function ImpressumPage() {
  return (
    <main className="bg-[#F7F6F2] py-16 sm:py-20 lg:py-24">
      <Container>
        <article className="mx-auto max-w-4xl rounded-[30px] border border-[#E1DDD3] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:px-10 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Rechtliche Informationen
          </p>
          <h1 className="mt-5 font-serif text-4xl text-[#153B36] sm:text-5xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-10 leading-7 text-slate-700">
            <section>
              <h2 className="font-serif text-2xl text-[#153B36]">
                Angaben zum Betreiber dieser Website
              </h2>
              <address className="mt-4 not-italic">
                Phra Somkait Pumarin
                <br />
                Heinkelstraße 1
                <br />
                86343 Königsbrunn
                <br />
                Deutschland
              </address>
              <p className="mt-4">
                E-Mail:{" "}
                <a
                  href="mailto:Kittikuno@gmail.com"
                  className="font-medium text-[#153B36] underline decoration-[#B08D57] underline-offset-4"
                >
                  Kittikuno@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#153B36]">
                Verantwortlich für redaktionelle Inhalte
              </h2>
              <p className="mt-4">
                Phra Somkait Pumarin, Anschrift wie oben.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#153B36]">
                Einordnung des Angebots
              </h2>
              <p className="mt-4">
                „Der Weg nach innen“ ist ein persönlich verantwortetes
                Informations- und Vermittlungsangebot von Phra Somkait Pumarin.
                Die auf dieser Website vorgestellten Tempel, Vereine und
                Veranstalter bleiben für die Durchführung ihrer jeweiligen
                Angebote und Veranstaltungen selbst verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#153B36]">
                Haftung für Inhalte und Verweise
              </h2>
              <p className="mt-4">
                Die Inhalte dieser Website werden mit Sorgfalt erstellt und
                regelmäßig überprüft. Eine Gewähr für Vollständigkeit,
                Richtigkeit und ständige Aktualität kann dennoch nicht
                übernommen werden. Für Inhalte externer Websites, auf die
                verwiesen wird, sind ausschließlich deren jeweilige Betreiber
                verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#153B36]">
                Urheber- und Nutzungsrechte
              </h2>
              <p className="mt-4">
                Texte, Gestaltung, Fotografien und sonstige Inhalte dieser
                Website dürfen nur im Rahmen der gesetzlichen Vorschriften oder
                mit vorheriger Zustimmung der jeweiligen Rechteinhaber
                verwendet werden. Rechte Dritter bleiben unberührt.
              </p>
            </section>

            <section className="rounded-2xl bg-[#F5F1E8] p-6">
              <h2 className="font-serif text-2xl text-[#153B36]">
                Datenschutz
              </h2>
              <p className="mt-3">
                Informationen zur Verarbeitung personenbezogener Daten finden
                Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="font-medium text-[#153B36] underline decoration-[#B08D57] underline-offset-4"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
