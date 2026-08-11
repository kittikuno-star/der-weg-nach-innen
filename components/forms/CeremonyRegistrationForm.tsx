"use client";

import { FormEvent, useMemo, useState } from "react";

import type { BuddhistEvent } from "@/data/buddhistEvents";
import { templeLocations } from "@/data/templeLocations";

type CeremonyRegistrationFormProps = {
  selectedEvent: BuddhistEvent;
  initialTempleSlug?: string;
};

type FormState = {
  templeSlug: string;
  eventDate: string;
  participation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  participants: string;
  message: string;
  privacyConsent: boolean;
};

export default function CeremonyRegistrationForm({
  selectedEvent,
  initialTempleSlug,
}: CeremonyRegistrationFormProps) {
  const availableTemples = useMemo(
    () =>
      selectedEvent.templeSlugs.map((slug) => templeLocations[slug]),
    [selectedEvent.templeSlugs],
  );
  const validInitialTemple = availableTemples.some(
    (temple) => temple.slug === initialTempleSlug,
  )
    ? initialTempleSlug!
    : "";
  const [formData, setFormData] = useState<FormState>({
    templeSlug: validInitialTemple,
    eventDate: selectedEvent.dates[0]?.value ?? "",
    participation: selectedEvent.participationOptions?.[0] ?? "Gesamtes Programm",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    participants: "1",
    message: "",
    privacyConsent: false,
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedTemple = templeLocations[formData.templeSlug];
    const selectedDate = selectedEvent.dates.find(
      (date) => date.value === formData.eventDate,
    );

    if (!selectedTemple) {
      setStatus("error");
      setErrorMessage("Bitte wählen Sie einen Tempel aus.");
      return;
    }
    if (!selectedDate) {
      setStatus("error");
      setErrorMessage("Bitte wählen Sie einen Termin aus.");
      return;
    }
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setStatus("error");
      setErrorMessage("Bitte geben Sie Ihren Vor- und Nachnamen ein.");
      return;
    }
    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }
    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registrationType: "ceremony",
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          event: `${selectedEvent.title} – ${selectedTemple.name} – ${formData.participation}`,
          eventDate: selectedDate.value,
          participants: Number(formData.participants),
          participantNames: "",
          meditationExperience: "",
          foodPreferences: [],
          foodOther: "",
          allergies: "",
          healthNotes: "",
          needsAccommodation: "no",
          arrivalDate: "",
          departureDate: "",
          accommodationAccepted: false,
          emergencyContactName: "",
          emergencyContactPhone: "",
          discoverySource: "",
          discoverySourceOther: "",
          photoConsent: "",
          newsletterConsent: false,
          privacyConsent: formData.privacyConsent,
          message: formData.message.trim(),
          submittedAt: new Date().toISOString(),
          status: "new",
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          result?.message || "Die Anmeldung konnte nicht übermittelt werden.",
        );
      }
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Es ist ein unerwarteter Fehler aufgetreten.",
      );
    }
  }

  if (status === "success") {
    return (
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          Vielen Dank für Ihre Anmeldung
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Ihre Anmeldung wurde übermittelt. Weitere Informationen erhalten Sie
          per E-Mail.
        </p>
      </section>
    );
  }

  const fieldClass =
    "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
      noValidate
    >
      <div className="mb-8 rounded-2xl border border-[#D9D4C8] bg-[#F7F6F2] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
          Gewählte Veranstaltung
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[#153B36]">
          {selectedEvent.title}
        </h2>
        {selectedEvent.thaiTitle ? (
          <p lang="th" className="mt-2 text-slate-500">
            {selectedEvent.thaiTitle}
          </p>
        ) : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Tempel vor Ort <span className="text-red-600">*</span>
          </span>
          <select
            value={formData.templeSlug}
            onChange={(event) => updateField("templeSlug", event.target.value)}
            className={fieldClass}
            required
          >
            <option value="">Bitte Tempel auswählen</option>
            {availableTemples.map((temple) => (
              <option key={temple.slug} value={temple.slug}>
                {temple.name} – {temple.city}, {temple.region}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Termin <span className="text-red-600">*</span>
          </span>
          <select
            value={formData.eventDate}
            onChange={(event) => updateField("eventDate", event.target.value)}
            className={fieldClass}
            required
          >
            {selectedEvent.dates.map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Teilnahmezeit <span className="text-red-600">*</span>
          </span>
          <select
            value={formData.participation}
            onChange={(event) => updateField("participation", event.target.value)}
            className={fieldClass}
            required
          >
            {(selectedEvent.participationOptions ?? ["Gesamtes Programm"]).map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ),
            )}
          </select>
        </label>

        {[
          ["firstName", "Vorname", "text"],
          ["lastName", "Nachname", "text"],
          ["email", "E-Mail-Adresse", "email"],
          ["phone", "Telefonnummer (optional)", "tel"],
        ].map(([field, label, type]) => (
          <label key={field}>
            <span className="mb-2 block text-sm font-medium text-slate-800">
              {label}
              {field !== "phone" ? <span className="text-red-600"> *</span> : null}
            </span>
            <input
              type={type}
              value={formData[field as keyof FormState] as string}
              onChange={(event) =>
                updateField(field as keyof FormState, event.target.value as never)
              }
              className={fieldClass}
              required={field !== "phone"}
            />
          </label>
        ))}

        <label>
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Anzahl der Personen
          </span>
          <input
            type="number"
            min="1"
            max="20"
            value={formData.participants}
            onChange={(event) => updateField("participants", event.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-800">
            Nachricht oder weitere Hinweise (optional)
          </span>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`${fieldClass} resize-y`}
          />
        </label>
      </div>

      <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-2xl bg-slate-50 p-4">
        <input
          type="checkbox"
          checked={formData.privacyConsent}
          onChange={(event) =>
            updateField("privacyConsent", event.target.checked)
          }
          className="mt-1 h-5 w-5 rounded border-slate-300 accent-[#153B36]"
        />
        <span className="text-sm leading-6 text-slate-700">
          Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der
          Anmeldung zu. <span className="text-red-600">*</span>
        </span>
      </label>

      {status === "error" ? (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#153B36] px-7 py-3 font-semibold text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Anmeldung wird gesendet …" : "Anmeldung absenden"}
      </button>
    </form>
  );
}
