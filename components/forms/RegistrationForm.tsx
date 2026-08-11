"use client";

import { FormEvent, useMemo, useState } from "react";

import type { RetreatEvent } from "@/data/retreatEvents";
import type { WeeklyCourseGroup } from "@/data/weeklyCourseEvents";

type RegistrationFormProps = {
  selectedRetreat?: RetreatEvent;
  selectedCourseGroup?: WeeklyCourseGroup;
  language?: "de" | "en" | "th";
};

type FormDataState = {
  selectedCourseId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  meditationExperience: string;
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
  language = "de",
}: RegistrationFormProps) {
  const isEnglish = language === "en";
  const isThai = language === "th";
  const text = (de: string, en: string, th: string) => isThai ? th : isEnglish ? en : de;
  const isCourseRegistration = Boolean(selectedCourseGroup);
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
      return text("Bitte wählen Sie zuerst eine Veranstaltung aus.", "Please select an event first.", "กรุณาเลือกกิจกรรมก่อน");
    }
    if (isCourseRegistration && !selectedCourse) {
      return text("Bitte wählen Sie Ihren gewünschten Meditationstermin aus.", "Please select your preferred meditation session.", "กรุณาเลือกรอบการทำสมาธิที่ต้องการ");
    }
    if (!formData.firstName.trim()) return text("Bitte geben Sie Ihren Vornamen ein.", "Please enter your first name.", "กรุณากรอกชื่อ");
    if (!formData.lastName.trim()) return text("Bitte geben Sie Ihren Nachnamen ein.", "Please enter your last name.", "กรุณากรอกนามสกุล");
    if (!formData.email.trim()) return text("Bitte geben Sie Ihre E-Mail-Adresse ein.", "Please enter your email address.", "กรุณากรอกอีเมล");
    if (!formData.phone.trim()) return text("Bitte geben Sie Ihre Telefonnummer ein.", "Please enter your telephone number.", "กรุณากรอกหมายเลขโทรศัพท์");
    if (
      !isCourseRegistration &&
      (!formData.emergencyContactName.trim() ||
        !formData.emergencyContactPhone.trim())
    ) {
      return text("Bitte geben Sie einen Notfallkontakt an.", "Please provide an emergency contact.", "กรุณาระบุผู้ติดต่อในกรณีฉุกเฉิน");
    }
    if (!formData.privacyConsent) {
      return text("Bitte stimmen Sie der Datenschutzerklärung zu.", "Please agree to the privacy policy.", "กรุณายินยอมตามนโยบายความเป็นส่วนตัว");
    }
    return "";
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
      ? `${isEnglish ? "Meditation course" : "Meditationskurs"} – ${selectedCourseGroup!.temple} – ${selectedCourse!.schedule}, ${selectedCourse!.time}`
      : `One Day Retreat – ${selectedRetreat!.temple}`;

    const eventDate = isCourseRegistration
      ? `${selectedCourse!.weekday}, ${selectedCourse!.time}`
      : selectedRetreat!.dateValue;

    try {
      const response = await fetch(`/api/registration${language === "de" ? "" : `?lang=${language}`}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registrationType: isCourseRegistration
            ? "onsite"
            : "one-day-retreat",
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          event: eventName,
          eventDate,
          participants: 1,
          participantNames: "",
          meditationExperience: formData.meditationExperience,
          foodPreferences: [],
          foodOther: isCourseRegistration
            ? ""
            : formData.dietaryRequirements.trim(),
          allergies: isCourseRegistration ? "" : formData.allergies.trim(),
          healthNotes: isCourseRegistration
            ? ""
            : formData.healthNotes.trim(),
          needsAccommodation: "no",
          arrivalDate: "",
          departureDate: "",
          accommodationAccepted: false,
          emergencyContactName: isCourseRegistration
            ? ""
            : formData.emergencyContactName.trim(),
          emergencyContactPhone: isCourseRegistration
            ? ""
            : formData.emergencyContactPhone.trim(),
          discoverySource: "",
          discoverySourceOther: "",
          photoConsent: formData.photoConsent,
          newsletterConsent: formData.newsletterConsent,
          privacyConsent: formData.privacyConsent,
          message: formData.message.trim(),
          submittedAt: new Date().toISOString(),
          status: "new",
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          result?.message ||
            text("Die Anmeldung konnte leider nicht übermittelt werden.", "Unfortunately, your registration could not be submitted.", "ไม่สามารถส่งแบบฟอร์มลงทะเบียนได้ในขณะนี้"),
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
          : text("Es ist ein unerwarteter Fehler aufgetreten.", "An unexpected error occurred.", "เกิดข้อผิดพลาดที่ไม่คาดคิด"),
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
          {text("Vielen Dank für Ihre Anmeldung", "Thank you for registering", "ขอบคุณสำหรับการลงทะเบียน")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
          {text("Ihre Anmeldung wurde erfolgreich übermittelt. Sie erhalten weitere Informationen per E-Mail.", "Your registration has been submitted successfully. You will receive further information by email.", "ส่งข้อมูลลงทะเบียนเรียบร้อยแล้ว ท่านจะได้รับรายละเอียดเพิ่มเติมทางอีเมล")}
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
            {text("Gewählte Veranstaltung", "Selected event", "กิจกรรมที่เลือก")}
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[#153B36]">
            {text("Meditationskurs", "Meditation course", "หลักสูตรสมาธิ")} – {selectedCourseGroup.temple}
          </h2>
          <div className="mt-4 leading-7 text-slate-700">
            <p>{selectedCourseGroup.street}</p>
            <p>
              {selectedCourseGroup.postalCode} {selectedCourseGroup.city}
            </p>
            <p>{isThai ? "เข้าร่วมโดยไม่มีค่าใช้จ่าย" : isEnglish ? "Participation: free of charge" : `Teilnahme: ${selectedCourseGroup.price}`}</p>
          </div>

          <div className="mt-6">
            <label
              htmlFor="selectedCourseId"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              {text("Gewünschter Termin", "Preferred session", "รอบที่ต้องการเข้าร่วม")} <span className="text-red-600">*</span>
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
                  {isThai
                    ? `${event.id.includes("friday") ? "ทุกวันศุกร์" : "ทุกวันพุธ"}, ${event.time}`
                    : isEnglish
                    ? `${event.id.includes("friday") ? "Every Friday" : "Every Wednesday"}, ${event.time?.replace(" Uhr", "")}`
                    : `${event.schedule}, ${event.time}`}
                </option>
              ))}
            </select>
          </div>
        </section>
      ) : selectedRetreat ? (
        <section className="mb-8 rounded-2xl border border-[#D9D4C8] bg-[#F7F6F2] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B08D57]">
            {text("Gewählte Veranstaltung", "Selected event", "กิจกรรมที่เลือก")}
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[#153B36]">
            One Day Retreat – {selectedRetreat.temple}
          </h2>
          <div className="mt-4 space-y-1 leading-7 text-slate-700">
            <p>
              {isThai
                ? `${new Intl.DateTimeFormat("th-TH", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${selectedRetreat.dateValue}T12:00:00+02:00`))}, ${selectedRetreat.time}`
                : isEnglish
                ? `${new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${selectedRetreat.dateValue}T12:00:00+02:00`))}, ${selectedRetreat.time.replace(" Uhr", "")}`
                : `${selectedRetreat.dateLabel}, ${selectedRetreat.time}`}
            </p>
            <p>{selectedRetreat.street}</p>
            <p>
              {selectedRetreat.postalCode} {selectedRetreat.city}
            </p>
            <p>{text("Teilnahmebeitrag", "Participation fee", "ค่าเข้าร่วม")}: {selectedRetreat.price}</p>
          </div>
        </section>
      ) : (
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
          {text("Bitte wählen Sie zuerst eine Veranstaltung aus.", "Please select an event first.", "กรุณาเลือกกิจกรรมก่อน")}
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {text("Persönliche Anmeldung", "Personal registration", "ข้อมูลผู้สมัคร")}
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          {text("Bitte füllen Sie für jede teilnehmende Person ein eigenes Anmeldeformular aus.", "Please complete a separate registration form for each participant.", "กรุณากรอกแบบฟอร์มแยกสำหรับผู้เข้าร่วมแต่ละท่าน")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="firstName"
          label={text("Vorname", "First name", "ชื่อ")}
          required
          value={formData.firstName}
          onChange={(value) => updateField("firstName", value)}
        />
        <FormField
          id="lastName"
          label={text("Nachname", "Last name", "นามสกุล")}
          required
          value={formData.lastName}
          onChange={(value) => updateField("lastName", value)}
        />
        <FormField
          id="email"
          label={text("E-Mail-Adresse", "Email address", "อีเมล")}
          type="email"
          required
          value={formData.email}
          onChange={(value) => updateField("email", value)}
        />
        <FormField
          id="phone"
          label={text("Telefonnummer", "Telephone number", "หมายเลขโทรศัพท์")}
          type="tel"
          required
          value={formData.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <SelectField
          id="meditationExperience"
          label={text("Meditationserfahrung", "Meditation experience", "ประสบการณ์การทำสมาธิ")}
          value={formData.meditationExperience}
          onChange={(value) => updateField("meditationExperience", value)}
          options={isThai ? ["ยังไม่มีประสบการณ์", "มีประสบการณ์เล็กน้อย", "ปฏิบัติเป็นประจำ", "ปฏิบัติมาหลายปี"] : isEnglish
            ? ["No experience", "A little experience", "Regular practice", "Many years of practice"]
            : ["Keine Erfahrung", "Wenig Erfahrung", "Regelmäßige Praxis", "Langjährige Praxis"]}
          placeholder={text("Bitte auswählen", "Please select", "กรุณาเลือก")}
        />

        {!isCourseRegistration && (
          <>
            <TextAreaField
              id="dietaryRequirements"
              label={text("Ernährungswünsche", "Dietary requirements", "ความต้องการด้านอาหาร")}
              value={formData.dietaryRequirements}
              placeholder={text("Zum Beispiel vegetarisch oder vegan", "For example, vegetarian or vegan", "เช่น มังสวิรัติหรือวีแกน")}
              onChange={(value) => updateField("dietaryRequirements", value)}
            />
            <TextAreaField
              id="allergies"
              label={text("Allergien oder Unverträglichkeiten", "Allergies or intolerances", "อาการแพ้หรืออาหารที่รับประทานไม่ได้")}
              value={formData.allergies}
              placeholder={text("Bitte Person und Besonderheit angeben.", "Please provide any relevant details.", "กรุณาระบุรายละเอียดที่จำเป็น")}
              onChange={(value) => updateField("allergies", value)}
            />
            <TextAreaField
              id="healthNotes"
              label={text("Gesundheitliche Hinweise", "Health information", "ข้อมูลด้านสุขภาพ")}
              value={formData.healthNotes}
              placeholder={text("Nur Angaben, die für die Teilnahme wichtig sind.", "Only information relevant to your participation.", "ระบุเฉพาะข้อมูลที่สำคัญต่อการเข้าร่วม")}
              onChange={(value) => updateField("healthNotes", value)}
            />
          </>
        )}

        <TextAreaField
          id="message"
          label={text("Nachricht oder weitere Hinweise", "Message or additional information", "ข้อความหรือข้อมูลเพิ่มเติม")}
          value={formData.message}
          onChange={(value) => updateField("message", value)}
        />

        {!isCourseRegistration && (
          <>
            <FormField
              id="emergencyContactName"
              label={text("Name des Notfallkontakts", "Emergency contact name", "ชื่อผู้ติดต่อในกรณีฉุกเฉิน")}
              required
              value={formData.emergencyContactName}
              onChange={(value) => updateField("emergencyContactName", value)}
            />
            <FormField
              id="emergencyContactPhone"
              label={text("Telefonnummer des Notfallkontakts", "Emergency contact telephone number", "หมายเลขโทรศัพท์ผู้ติดต่อฉุกเฉิน")}
              type="tel"
              required
              value={formData.emergencyContactPhone}
              onChange={(value) => updateField("emergencyContactPhone", value)}
            />
          </>
        )}

        <SelectField
          id="photoConsent"
          label={text("Fotoeinwilligung", "Photo consent", "ความยินยอมให้ถ่ายภาพ")}
          value={formData.photoConsent}
          onChange={(value) => updateField("photoConsent", value)}
          options={isThai ? ["ยินยอม", "ไม่ยินยอม"] : isEnglish ? ["Yes", "No"] : ["Ja", "Nein"]}
          placeholder={text("Bitte auswählen", "Please select", "กรุณาเลือก")}
        />
      </div>

      <div className="mt-7 space-y-4 rounded-2xl bg-slate-50 p-4">
        <Checkbox
          checked={formData.newsletterConsent}
          onChange={(value) => updateField("newsletterConsent", value)}
          label={text("Ich möchte gelegentlich Informationen zu weiteren Meditationsangeboten erhalten.", "I would occasionally like to receive information about other meditation programmes.", "ข้าพเจ้าประสงค์จะรับข่าวสารเกี่ยวกับกิจกรรมสมาธิเป็นครั้งคราว")}
        />
        <Checkbox
          checked={formData.privacyConsent}
          onChange={(value) => updateField("privacyConsent", value)}
          required
          label={text("Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anmeldung zu.", "I consent to the processing of my information for the purpose of handling this registration.", "ข้าพเจ้ายินยอมให้ประมวลผลข้อมูลเพื่อดำเนินการลงทะเบียนนี้")}
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
          ? text("Anmeldung wird gesendet …", "Submitting registration …", "กำลังส่งข้อมูลลงทะเบียน…")
          : text("Jetzt verbindlich anmelden", "Submit registration", "ส่งแบบฟอร์มลงทะเบียน")}
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
