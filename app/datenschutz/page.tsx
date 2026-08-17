import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Website Der Weg nach innen.",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-[#F7F6F2] py-16 sm:py-20 lg:py-24">
      <Container>
        <article className="mx-auto max-w-4xl rounded-[30px] border border-[#E1DDD3] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(21,59,54,0.07)] sm:px-10 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Schutz Ihrer Daten
          </p>
          <h1 className="mt-5 font-serif text-4xl text-[#153B36] sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-6 leading-8 text-slate-600">
            Diese Erklärung informiert darüber, welche personenbezogenen Daten
            beim Besuch dieser Website und bei der Anmeldung zu Angeboten
            verarbeitet werden.
          </p>

          <div className="mt-10 space-y-10 leading-7 text-slate-700">
            <Section title="1. Verantwortlicher">
              <address className="not-italic">
                DIDE - Dhammakaya International Deutschland gemeinnützige GmbH
                <br />
                Heinkelstr. 1
                <br />
                86343 Königsbrunn
                <br />
                Deutschland
              </address>
              <p className="mt-4">
                E-Mail:{" "}
                <a
                  href="mailto:info@derwegnachinnen.de"
                  className="font-medium text-[#153B36] underline decoration-[#B08D57] underline-offset-4"
                >
                  info@derwegnachinnen.de
                </a>
              </p>
            </Section>

            <Section title="2. Hosting bei Netlify und Domainverwaltung bei GoDaddy">
              <p>
                Diese Website wird bei Netlify gehostet. Die Domain wird bei
                GoDaddy verwaltet. Beim Aufruf der Website verarbeitet Netlify
                technisch erforderliche Daten,
                insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
                aufgerufene Seite, übertragene Datenmenge, Browsertyp,
                Betriebssystem und Referrer-Informationen. Diese Verarbeitung
                ist erforderlich, um die Website sicher und zuverlässig
                bereitzustellen.
              </p>
              <p className="mt-4">
                Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO. Das
                berechtigte Interesse besteht in der sicheren, stabilen und
                technisch fehlerfreien Bereitstellung der Website. Soweit
                Netlify Daten außerhalb des Europäischen Wirtschaftsraums
                verarbeitet, werden die vom Anbieter vorgesehenen Garantien für
                internationale Datenübermittlungen genutzt.
              </p>
            </Section>

            <Section title="3. Server-Protokolldaten">
              <p>
                Technische Protokolldaten können vorübergehend gespeichert
                werden, um Fehler zu erkennen, Angriffe abzuwehren und den
                Betrieb der Website sicherzustellen. Sie werden nicht zur
                Erstellung persönlicher Nutzungsprofile verwendet. Die
                Speicherdauer richtet sich nach den technisch erforderlichen
                Sicherheits- und Protokollierungsfristen des Hostinganbieters.
              </p>
            </Section>

            <Section title="4. Schriftarten und Icons">
              <p>
                Die Website verwendet die Schriftarten Geist und Geist Mono
                über die Next.js-Schriftverwaltung. Die Schriftdateien werden
                lokal mit der Website ausgeliefert; beim Besuch der Website wird
                deshalb keine Verbindung zu Google Fonts hergestellt. Icons
                werden aus der lokal eingebundenen Open-Source-Bibliothek Lucide
                verwendet.
              </p>
            </Section>

            <Section title="5. Kontaktaufnahme">
              <p>
                Wenn Sie per E-Mail oder über ein künftig aktiviertes
                Kontaktformular Kontakt aufnehmen, werden die von Ihnen
                übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für
                mögliche Rückfragen verarbeitet. Rechtsgrundlage ist je nach
                Inhalt Art. 6 Abs. 1 Buchst. b DSGVO oder Art. 6 Abs. 1 Buchst.
                f DSGVO. Die Daten werden gelöscht, sobald die Anfrage
                abschließend bearbeitet ist und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            <Section title="6. Anmeldung zu Retreats und Veranstaltungen">
              <p>
                Bei einer Anmeldung werden insbesondere Name, Kontaktdaten,
                ausgewählte Veranstaltung, Meditationserfahrung,
                Ernährungswünsche, Notfallkontakt, freiwillige Hinweise sowie
                die erteilten Einwilligungen verarbeitet. Die Verarbeitung
                dient der Organisation, Durchführung und Kommunikation im
                Zusammenhang mit der Veranstaltung.
              </p>
              <p className="mt-4">
                Rechtsgrundlage für die zur Anmeldung und Durchführung
                erforderlichen Daten ist Art. 6 Abs. 1 Buchst. b DSGVO. Soweit
                eine Verarbeitung auf einer freiwilligen Einwilligung beruht,
                ist Art. 6 Abs. 1 Buchst. a DSGVO maßgeblich.
              </p>
            </Section>

            <Section title="7. Gesundheitsangaben und besondere Kategorien personenbezogener Daten">
              <p>
                Angaben zu Allergien, Unverträglichkeiten oder gesundheitlichen
                Besonderheiten sind freiwillig und sollen nur gemacht werden,
                wenn sie für eine sichere Teilnahme wichtig sind. Solche
                Angaben können Gesundheitsdaten im Sinne von Art. 9 DSGVO sein.
                Sie werden nur aufgrund Ihrer ausdrücklichen Einwilligung gemäß
                Art. 9 Abs. 2 Buchst. a DSGVO verarbeitet. Die Einwilligung kann
                jederzeit mit Wirkung für die Zukunft widerrufen werden.
              </p>
              <p className="mt-4">
                Gesundheits- und Notfallangaben werden grundsätzlich nach
                Abschluss der jeweiligen Veranstaltung gelöscht, sobald sie
                nicht mehr für die sichere Abwicklung benötigt werden.
              </p>
            </Section>

            <Section title="8. Speicherung in Google Sheets">
              <p>
                Anmeldedaten werden über eine serverseitige Schnittstelle an
                Google Apps Script übermittelt und in einer zugriffsgeschützten
                Google-Tabelle gespeichert. Zugriff hat ausschließlich der
                Betreiber dieser Website. Google verarbeitet die Daten dabei
                als technischer Dienstleister. Eine Verarbeitung in Staaten
                außerhalb des Europäischen Wirtschaftsraums kann nicht
                vollständig ausgeschlossen werden. Hierfür gelten die von
                Google bereitgestellten datenschutzrechtlichen Garantien.
              </p>
              <p className="mt-4">
                Normale Anmeldedaten werden spätestens sechs Monate nach der
                Veranstaltung gelöscht, sofern keine gesetzlichen
                Aufbewahrungspflichten oder berechtigten Gründe für eine längere
                Speicherung bestehen. Gesundheits- und Notfallangaben werden
                früher gelöscht, wie im vorherigen Abschnitt beschrieben.
              </p>
            </Section>

            <Section title="9. Newsletter und weitere Informationen">
              <p>
                Wenn Sie freiwillig Informationen zu weiteren Angeboten
                wünschen, wird Ihre E-Mail-Adresse nur auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 Buchst. a DSGVO verwendet. Die
                Einwilligung kann jederzeit per E-Mail widerrufen werden. Ohne
                eine solche Einwilligung wird Ihre E-Mail-Adresse nicht für
                allgemeine Werbe- oder Informationsnachrichten verwendet.
              </p>
            </Section>

            <Section title="10. Fotoeinwilligung">
              <p>
                Eine Zustimmung zu Fotoaufnahmen ist freiwillig und von der
                Teilnahme unabhängig. Eine erteilte Einwilligung kann jederzeit
                mit Wirkung für die Zukunft widerrufen werden. Bereits erfolgte
                Veröffentlichungen werden im Rahmen des rechtlich und technisch
                Zumutbaren entfernt.
              </p>
            </Section>

            <Section title="11. Cookies und externe Inhalte">
              <p>
                Nach dem derzeitigen Stand verwendet diese Website keine
                Analyse-, Marketing- oder Social-Media-Cookies und bindet keine
                externen Karten-, Video- oder Trackingdienste ein. Technisch
                notwendige Funktionen können ohne Einwilligung eingesetzt
                werden. Sollte die Website künftig einwilligungspflichtige
                Dienste verwenden, wird zuvor eine entsprechende
                Einwilligungslösung eingerichtet und diese Erklärung angepasst.
              </p>
            </Section>

            <Section title="12. Empfänger personenbezogener Daten">
              <p>
                Personenbezogene Daten werden nur an Dienstleister übermittelt,
                soweit dies für Hosting, technische Verarbeitung oder die
                Durchführung einer Veranstaltung erforderlich ist. Eine
                Weitergabe zu Werbezwecken oder ein Verkauf personenbezogener
                Daten findet nicht statt.
              </p>
            </Section>

            <Section title="13. Ihre Rechte">
              <p>
                Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das
                Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch. Erteilte
                Einwilligungen können jederzeit mit Wirkung für die Zukunft
                widerrufen werden. Außerdem besteht das Recht, sich bei einer
                zuständigen Datenschutzaufsichtsbehörde zu beschweren.
              </p>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
                <a
                  href="mailto:info@derwegnachinnen.de"
                  className="font-medium text-[#153B36] underline decoration-[#B08D57] underline-offset-4"
                >
                  info@derwegnachinnen.de
                </a>
                .
              </p>
            </Section>

            <Section title="14. Sicherheit">
              <p>
                Es werden angemessene technische und organisatorische Maßnahmen
                eingesetzt, um personenbezogene Daten gegen Verlust,
                unberechtigten Zugriff und missbräuchliche Verwendung zu
                schützen. Dazu gehören insbesondere beschränkte Zugriffsrechte,
                verschlüsselte Übertragung und eine datensparsame Speicherung.
              </p>
            </Section>

            <Section title="15. Aktualität dieser Erklärung">
              <p>
                Diese Datenschutzerklärung wird angepasst, wenn sich die
                Website, eingesetzte Dienste oder rechtliche Anforderungen
                ändern. Stand: August 2026.
              </p>
            </Section>

            <div className="rounded-2xl bg-[#F5F1E8] p-6">
              <p>
                Angaben zum Betreiber finden Sie im{" "}
                <Link
                  href="/impressum"
                  className="font-medium text-[#153B36] underline decoration-[#B08D57] underline-offset-4"
                >
                  Impressum
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-[#153B36]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
