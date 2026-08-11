"use client";

import { FormEvent, useMemo, useState } from "react";

import type { RetreatEvent } from "@/data/retreatEvents";
import type { WeeklyCourseGroup } from "@/data/weeklyCourseEvents";

type RegistrationFormProps = {
  selectedRetreat?: RetreatEvent;
  selectedCourseGroup?: WeeklyCourseGroup;
  language?: string;
};

type FormDataState = {
  selectedCourseId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  meditationExperience: string;
  foodPreferences: string[];
  dietaryRequirements: string;
  allergies: string;
  healthNotes: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  message: string;
  photoConsent: string;
  newsletterConsent: boolean;
  privacyConsent: boolean;
};

const initialFormData: FormDataState = {
  selectedCourseId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  meditationExperience: "",
  foodPreferences: [],
  dietaryRequirements: "",
  allergies: "",
  healthNotes: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  message: "",
  photoConsent: "",
  newsletterConsent: false,
  privacyConsent: false,
};

export default function RegistrationForm({
  selectedRetreat,
  selectedCourseGroup,
}: RegistrationFormProps) {
  const isCourseRegistration = Boolean(selectedCourseGroup);
  const isMultiDayRetreat =
    selectedRetreat?.registrationType === "multi-day-retreat";
  const defaultCourseId = selectedCourseGroup?.events[0]?.id ?? "";
  const [formData, setFormData] = useState<FormDataState>({
    ...initialFormData,
    selectedCourseId: defaultCourseId,
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedCourse = useMemo(
    () =>
      selectedCourseGroup?.events.find(
        (event) => event.id === formData.selectedCourseId,
      ),
    [formData.selectedCourseId, selectedCourseGroup],
  );

  function updateField<K extends keyof FormDataState>(
    field: K,
    value: FormDataState[K],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function validateForm() {
    if (!selectedRetreat && !selectedCourseGroup) {
      return "Bitte wählen Sie zuerst eine Veranstaltung aus.";
    }
    if (isCourseRegistration && !selectedCourse) {
      return "Bitte wählen Sie Ihren gewünschten Meditationstermin aus.";
    }
    if (!formData.firstName.trim()) return "Bitte geben Sie Ihren Vornamen ein.";
    if (!formData.lastName.trim()) return "Bitte geben Sie Ihren Nachnamen ein.";
    if (!formData.email.trim()) return "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    if (
      (isCourseRegistration || isMultiDayRetreat) &&
      !formData.phone.trim()
    ) {
      return "Bitte geben Sie Ihre Telefonnummer ein.";
    }
    if (
      isMultiDayRetreat &&
      (!formData.emergencyContactName.trim() ||
        !formData.emergencyContactPhone.trim())
    ) {
      return "Bitte geben Sie einen Notfallkontakt an.";
    }
    if (!formData.privacyConsent) {
      return "Bitte stimmen Sie der Datenschutzerklärung zu.";
    }
    return "";
  }

  function toggleFoodPreference(value: string, checked: boolean) {
    updateField(
      "foodPreferences",
      checked
        ? [...formData.foodPreferences, value]
        : formData.foodPreferences.filter((item) => item !== value),
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const eventName = isCourseRegistration
      ? `Meditationskurs – ${selectedCourseGroup!.temple} – ${selectedCourse!.schedule}, ${selectedCourse!.time}`
      : `One Day Retreat – ${selectedRetreat!.temple}`;

    const eventDate = isCourseRegistration
      ? `${selectedCourse!.weekday}, ${selectedCourse!.time}`
      : selectedRetreat!.dateValue;

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registrationType: isCourseRegistration
            ? "onsite"
            : selectedRetreat!.registrationType,
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          event: eventName,
          eventDate,
          participants: 1,
          participantNames: "",
          meditationExperience: formData.meditationExperience,
          foodPreferences: isCourseRegistration
            ? []
            : formData.foodPreferences,
          foodOther: isCourseRegistration
            ? ""
            : formData.dietaryRequirements.trim(),
          allergies: isMultiDayRetreat ? formData.allergies.trim() : "",
          healthNotes: isMultiDayRetreat ? formData.healthNotes.trim() : "",
          needsAccommodation: "no",
          arrivalDate: "",
          departureDate: "",
          accommodationAccepted: false,
          emergencyContactName: isMultiDayRetreat
            ? formData.emergencyContactName.trim()
            : "",
          emergencyContactPhone: isMultiDayRetreat
            ? formData.emergencyContactPhone.trim()
            : "",
          discoverySource: "",
          discoverySourceOther: "",
          photoConsent: formData.photoConsent,
          newsletterConsent: formData.newsletterConsent,
          privacyConsent: formData.privacyConsent,
          message:
            isCourseRegistration || isMultiDayRetreat
              ? formData.message.trim()
              : "",
          submittedAt: new Date().toISOString(),
          status: "new",
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Die Anmeldung konnte leider nicht übermittelt werden.",
        );
      }

      setStatus("success");
      setFormData({
        ...initialFormData,
        selectedCourseId: defaultCourseId,
      });
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
      <section
        className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center shadow-sm sm:px-10"
        aria-live="polite"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
          ✓
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-slate-900">
          Vielen Dank für Ihre Anmeldung
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
          Ihre Anmeldung wurde erfolgreich übermittelt. Sie erhalten weitere
          Informationen per E-Mail.
        </p>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
      noValidate
    >
      {selectedCourseGroup ? (
        <section className="mb-8 rounded-2xl border border-[#D9D4C8] bg-[#F7F6F2] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
            Gewählte Veranstaltung
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[#153B36]">
            Meditationskurs – {selectedCourseGroup.temple}
          </h2>
          <div className="mt-4 leading-7 text-slate-700">
            <p>{selectedCourseGroup.street}</p>
            <p>
              {selectedCourseGroup.postalCode} {selectedCourseGroup.city}
            </p>
            <p>Teilnahme: {selectedCourseGroup.price}</p>
          </div>

          <div className="mt-6">
            <label
              htmlFor="selectedCourseId"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Gewünschter Termin <span className="text-red-600">*</span>
            </label>
            <select
              id="selectedCourseId"
              value={formData.selectedCourseId}
              onChange={(event) =>
                updateField("selectedCourseId", event.target.value)
              }
              className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
              required
            >
              {selectedCourseGroup.events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.schedule}, {event.time}
                </option>
              ))}
            </select>
          </div>
        </section>
      ) : selectedRetreat ? (
        <section className="mb-8 rounded-2xl border border-[#D9D4C8] bg-[#F7F6F2] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
            Gewählte Veranstaltung
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[#153B36]">
            One Day Retreat – {selectedRetreat.temple}
          </h2>
          <div className="mt-4 space-y-1 leading-7 text-slate-700">
            <p>
              {selectedRetreat.dateLabel}, {selectedRetreat.time}
            </p>
            <p>{selectedRetreat.street}</p>
            <p>
              {selectedRetreat.postalCode} {selectedRetreat.city}
            </p>
            <p>Teilnahmebeitrag: {selectedRetreat.price}</p>
          </div>
        </section>
      ) : (
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
          Bitte wählen Sie zuerst eine Veranstaltung aus.
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Persönliche Anmeldung
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Bitte füllen Sie für jede teilnehmende Person ein eigenes
          Anmeldeformular aus.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="firstName"
          label="Vorname"
          required
          value={formData.firstName}
          onChange={(value) => updateField("firstName", value)}
        />
        <FormField
          id="lastName"
          label="Nachname"
          required
          value={formData.lastName}
          onChange={(value) => updateField("lastName", value)}
        />
        <FormField
          id="email"
          label="E-Mail-Adresse"
          type="email"
          required
          value={formData.email}
          onChange={(value) => updateField("email", value)}
        />
        <FormField
          id="phone"
          label="Telefonnummer"
          type="tel"
          required={isCourseRegistration || isMultiDayRetreat}
          value={formData.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <SelectField
          id="meditationExperience"
          label="Meditationserfahrung"
          value={formData.meditationExperience}
          onChange={(value) => updateField("meditationExperience", value)}
          options={[
            "Keine Erfahrung",
            "Wenig Erfahrung",
            "Regelmäßige Praxis",
            "Langjährige Praxis",
          ]}
          placeholder="Bitte auswählen"
        />

        {!isCourseRegistration && (
          <>
            <div className="sm:col-span-2">
              <p className="mb-3 block text-sm font-medium text-slate-800">
                Ernährungswünsche
                <span className="ml-2 font-normal text-slate-500">
                  Mehrfachauswahl möglich
                </span>
              </p>
              <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
                {[
                  ["vegetarian", "Vegetarisch"],
                  ["vegan", "Vegan"],
                  ["gluten-free", "Glutenfrei"],
                  ["lactose-free", "Laktosefrei"],
                  ["other", "Andere Ernährungswünsche"],
                ].map(([value, label]) => (
                  <Checkbox
                    key={value}
                    checked={formData.foodPreferences.includes(value)}
                    onChange={(checked) =>
                      toggleFoodPreference(value, checked)
                    }
                    label={label}
                  />
                ))}
              </div>
            </div>

            {formData.foodPreferences.includes("other") && (
              <TextAreaField
                id="dietaryRequirements"
                label="Andere Ernährungswünsche"
                value={formData.dietaryRequirements}
                placeholder="Bitte kurz beschreiben"
                onChange={(value) =>
                  updateField("dietaryRequirements", value)
                }
              />
            )}

            {isMultiDayRetreat && (
              <>
                <TextAreaField
                  id="allergies"
                  label="Allergien oder Unverträglichkeiten"
                  value={formData.allergies}
                  placeholder="Bitte Person und Besonderheit angeben."
                  onChange={(value) => updateField("allergies", value)}
                />
                <TextAreaField
                  id="healthNotes"
                  label="Gesundheitliche Hinweise"
                  value={formData.healthNotes}
                  placeholder="Nur Angaben, die für die Teilnahme wichtig sind."
                  onChange={(value) => updateField("healthNotes", value)}
                />
              </>
            )}
          </>
        )}

        {(isCourseRegistration || isMultiDayRetreat) && (
          <TextAreaField
            id="message"
            label="Nachricht oder weitere Hinweise"
            value={formData.message}
            onChange={(value) => updateField("message", value)}
          />
        )}

        {isMultiDayRetreat && (
          <>
            <FormField
              id="emergencyContactName"
              label="Name des Notfallkontakts"
              required
              value={formData.emergencyContactName}
              onChange={(value) => updateField("emergencyContactName", value)}
            />
            <FormField
              id="emergencyContactPhone"
              label="Telefonnummer des Notfallkontakts"
              type="tel"
              required
              value={formData.emergencyContactPhone}
              onChange={(value) => updateField("emergencyContactPhone", value)}
            />
          </>
        )}

        <SelectField
          id="photoConsent"
          label="Fotoeinwilligung"
          value={formData.photoConsent}
          onChange={(value) => updateField("photoConsent", value)}
          options={["Ja", "Nein"]}
          placeholder="Bitte auswählen"
        />
      </div>

      <div className="mt-7 space-y-4 rounded-2xl bg-slate-50 p-4">
        <Checkbox
          checked={formData.newsletterConsent}
          onChange={(value) => updateField("newsletterConsent", value)}
          label="Ich möchte gelegentlich Informationen zu weiteren Meditationsangeboten erhalten."
        />
        <Checkbox
          checked={formData.privacyConsent}
          onChange={(value) => updateField("privacyConsent", value)}
          required
          label="Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anmeldung zu."
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={
          status === "submitting" ||
          (!selectedRetreat && !selectedCourseGroup)
        }
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#153B36] px-7 py-3 font-semibold text-white transition hover:bg-[#0F2F2B] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Anmeldung wird gesendet …"
          : "Jetzt verbindlich anmelden"}
      </button>
    </form>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  onChange: (value: string) => void;
};

function FormField({
  id,
  label,
  value,
  type = "text",
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
      />
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
};

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function TextAreaField({
  id,
  label,
  value,
  placeholder,
  required = false,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      <textarea
        id={id}
        rows={4}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
      />
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
  required = false,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 rounded border-slate-300 accent-[#153B36]"
      />
      <span className="text-sm leading-6 text-slate-700">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
    </label>
  );
}
