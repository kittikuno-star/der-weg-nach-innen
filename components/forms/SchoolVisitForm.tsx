"use client";

import {
  Camera,
  CheckCircle2,
  LoaderCircle,
  Send,
  TriangleAlert,
} from "lucide-react";
import {
  FormEvent,
  useState,
} from "react";

import type {
  SchoolVisitApiPayload,
  SchoolVisitApiResponse,
  SchoolVisitGroupType,
  SchoolVisitPhotoPermission,
  SchoolVisitPublicationPermission,
} from "@/types/school-visit";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const requestedTopicOptions = [
  {
    value: "buddhism",
    label: "Grundlagen des Buddhismus",
  },
  {
    value: "meditation",
    label: "Einführung in die Meditation",
  },
  {
    value: "monastic-life",
    label: "Alltag und Leben im Tempel",
  },
  {
    value: "temple-tour",
    label: "Führung durch den Tempel",
  },
  {
    value: "questions",
    label: "Gespräch und Fragerunde",
  },
  {
    value: "other",
    label: "Andere Themen",
  },
];

const templeOptions = [
  {
    value: "hamburg",
    label: "Hamburg",
  },
  {
    value: "berlin",
    label: "Berlin",
  },
  {
    value: "nrw",
    label: "Nordrhein-Westfalen",
  },
  {
    value: "rheinland",
    label: "Rheinland",
  },
  {
    value: "heilbronn",
    label: "Heilbronn",
  },
  {
    value: "schwarzwald",
    label: "Schwarzwald",
  },
  {
    value: "bavaria",
    label: "Bavaria / Königsbrunn",
  },
];

function getStringValue(
  formData: FormData,
  fieldName: string,
): string {
  const value =
    formData.get(fieldName);

  return typeof value === "string"
    ? value.trim()
    : "";
}

function isGroupType(
  value: FormDataEntryValue | null,
): value is SchoolVisitGroupType {
  return (
    value === "school-class" ||
    value === "student-group" ||
    value === "teacher-group" ||
    value === "youth-group" ||
    value === "adult-group" ||
    value === "other"
  );
}

function isPhotoPermission(
  value: FormDataEntryValue | null,
): value is SchoolVisitPhotoPermission {
  return (
    value === "yes" ||
    value === "no" ||
    value === "by-agreement"
  );
}

function isPublicationPermission(
  value: FormDataEntryValue | null,
): value is SchoolVisitPublicationPermission {
  return (
    value ===
      "website-and-social-media" ||
    value === "website-only" ||
    value === "no"
  );
}

type SchoolVisitFormProps = {
  initialTempleSlug?: string;
};

export default function SchoolVisitForm({ initialTempleSlug }: SchoolVisitFormProps) {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [
    responseMessage,
    setResponseMessage,
  ] = useState("");

  const [
    photoPermission,
    setPhotoPermission,
  ] =
    useState<SchoolVisitPhotoPermission>(
      "no",
    );

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const groupType =
      formData.get("groupType");

    const selectedPhotoPermission =
      formData.get("photoPermission");

    const selectedPublicationPermission =
      formData.get(
        "publicationPermission",
      );

    if (!isGroupType(groupType)) {
      setStatus("error");
      setResponseMessage(
        "Bitte wählen Sie die Art der Gruppe aus.",
      );
      return;
    }

    if (
      !isPhotoPermission(
        selectedPhotoPermission,
      )
    ) {
      setStatus("error");
      setResponseMessage(
        "Bitte wählen Sie aus, ob Fotos aufgenommen werden dürfen.",
      );
      return;
    }

    const publicationPermission =
      selectedPhotoPermission === "no"
        ? "no"
        : selectedPublicationPermission;

    if (
      !isPublicationPermission(
        publicationPermission,
      )
    ) {
      setStatus("error");
      setResponseMessage(
        "Bitte wählen Sie aus, ob Fotos veröffentlicht werden dürfen.",
      );
      return;
    }

    const requestedTopics =
      formData
        .getAll("requestedTopics")
        .filter(
          (
            value,
          ): value is string =>
            typeof value === "string",
        );

    const participantCount =
      Number(
        getStringValue(
          formData,
          "participantCount",
        ),
      );

    const guardianConsentConfirmed =
      formData.get(
        "guardianConsentConfirmed",
      ) === "on";

    if (
      selectedPhotoPermission !== "no" &&
      !guardianConsentConfirmed
    ) {
      setStatus("error");
      setResponseMessage(
        "Bitte bestätigen Sie, dass die erforderlichen Einwilligungen für Fotoaufnahmen vorliegen.",
      );
      return;
    }

    const payload: SchoolVisitApiPayload =
      {
        requestType:
          "school-visit",
        submittedAt:
          new Date().toISOString(),
        status: "new",

        firstName: getStringValue(
          formData,
          "firstName",
        ),
        lastName: getStringValue(
          formData,
          "lastName",
        ),
        email: getStringValue(
          formData,
          "email",
        ),
        phone: getStringValue(
          formData,
          "phone",
        ),

        organizationName:
          getStringValue(
            formData,
            "organizationName",
          ),
        groupType,
        gradeOrAgeGroup:
          getStringValue(
            formData,
            "gradeOrAgeGroup",
          ),
        participantCount,

        preferredLocation:
          getStringValue(
            formData,
            "preferredLocation",
          ),
        preferredDate:
          getStringValue(
            formData,
            "preferredDate",
          ),
        alternativeDates:
          getStringValue(
            formData,
            "alternativeDates",
          ),

        requestedTopics,
        specialNotes:
          getStringValue(
            formData,
            "specialNotes",
          ),
        message: getStringValue(
          formData,
          "message",
        ),

        photoPermission:
          selectedPhotoPermission,
        publicationPermission,
        guardianConsentConfirmed:
          selectedPhotoPermission ===
          "no"
            ? false
            : guardianConsentConfirmed,

        privacyConsent:
          formData.get(
            "privacyConsent",
          ) === "on",
      };

    setStatus("submitting");
    setResponseMessage("");

    try {
      const response =
        await fetch(
          "/api/school-visit",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              payload,
            ),
          },
        );

      const responseBody =
        (await response.json()) as
          SchoolVisitApiResponse;

      if (
        !response.ok ||
        responseBody.success !== true
      ) {
        throw new Error(
          responseBody.message ||
            "Ihre Anfrage konnte nicht gesendet werden.",
        );
      }

      setStatus("success");
      setResponseMessage(
        responseBody.message ||
          "Ihre Anfrage wurde erfolgreich übermittelt.",
      );

      form.reset();
      setPhotoPermission("no");
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        error instanceof Error
          ? error.message
          : "Beim Senden Ihrer Anfrage ist ein unerwarteter Fehler aufgetreten.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-[28px] border border-emerald-200 bg-emerald-50 px-6 py-10 text-center sm:px-10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2
            aria-hidden="true"
            className="h-7 w-7"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="mt-6 font-serif text-3xl text-[#153B36]">
          Vielen Dank für Ihre Anfrage
        </h3>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
          {responseMessage}
        </p>

        <p className="mx-auto mt-3 max-w-xl leading-8 text-slate-600">
          Sie erhalten eine Bestätigung
          per E-Mail. Wir prüfen Ihre
          Angaben und melden uns
          persönlich bei Ihnen.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setResponseMessage("");
          }}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[#153B36] px-6 py-3 font-semibold text-[#153B36] transition-colors hover:bg-[#153B36] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D57]/20"
        >
          Weitere Anfrage stellen
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-8"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7644]">
          Kontaktperson
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="schoolFirstName"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Vorname
            </label>

            <input
              id="schoolFirstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="schoolLastName"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Nachname
            </label>

            <input
              id="schoolLastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="schoolEmail"
              className="block text-sm font-semibold text-[#153B36]"
            >
              E-Mail-Adresse
            </label>

            <input
              id="schoolEmail"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="schoolPhone"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Telefonnummer
            </label>

            <input
              id="schoolPhone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7644]">
          Schule oder Gruppe
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="organizationName"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Name der Schule oder
              Organisation
            </label>

            <input
              id="organizationName"
              name="organizationName"
              type="text"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="groupType"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Art der Gruppe
            </label>

            <select
              id="groupType"
              name="groupType"
              required
              defaultValue={templeOptions.some((option) => option.value === initialTempleSlug) ? initialTempleSlug : ""}
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            >
              <option
                value=""
                disabled
              >
                Bitte auswählen
              </option>
              <option value="school-class">
                Schulklasse
              </option>
              <option value="student-group">
                Studierendengruppe
              </option>
              <option value="teacher-group">
                Lehrkräfte
              </option>
              <option value="youth-group">
                Jugendgruppe
              </option>
              <option value="adult-group">
                Erwachsenengruppe
              </option>
              <option value="other">
                Andere Gruppe
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="gradeOrAgeGroup"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Klassenstufe oder
              Altersgruppe
            </label>

            <input
              id="gradeOrAgeGroup"
              name="gradeOrAgeGroup"
              type="text"
              placeholder="Zum Beispiel: 8. Klasse"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="participantCount"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Anzahl der Personen
            </label>

            <input
              id="participantCount"
              name="participantCount"
              type="number"
              min={1}
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7644]">
          Besuchswunsch
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="preferredLocation"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Gewünschter Standort
            </label>

            <select
              id="preferredLocation"
              name="preferredLocation"
              required
              defaultValue=""
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            >
              <option
                value=""
                disabled
              >
                Standort auswählen
              </option>

              {templeOptions.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ),
              )}
            </select>
          </div>

          <div>
            <label
              htmlFor="preferredDate"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Gewünschter Termin
            </label>

            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              required
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="alternativeDates"
              className="block text-sm font-semibold text-[#153B36]"
            >
              Alternative Termine
              <span className="ml-2 font-normal text-slate-400">
                optional
              </span>
            </label>

            <input
              id="alternativeDates"
              name="alternativeDates"
              type="text"
              placeholder="Weitere mögliche Tage oder Zeiträume"
              disabled={
                status ===
                "submitting"
              }
              className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
            />
          </div>
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9A7644]">
          Gewünschte Inhalte
        </legend>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {requestedTopicOptions.map(
            (option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#E1DED6] bg-[#FAFAF8] p-4"
              >
                <input
                  type="checkbox"
                  name="requestedTopics"
                  value={option.value}
                  disabled={
                    status ===
                    "submitting"
                  }
                  className="mt-1 h-5 w-5 rounded border-[#C9CCC6] text-[#153B36] focus:ring-[#B08D57]"
                />

                <span className="text-sm leading-7 text-slate-700">
                  {option.label}
                </span>
              </label>
            ),
          )}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="specialNotes"
          className="block text-sm font-semibold text-[#153B36]"
        >
          Besondere Hinweise
          <span className="ml-2 font-normal text-slate-400">
            optional
          </span>
        </label>

        <textarea
          id="specialNotes"
          name="specialNotes"
          rows={4}
          placeholder="Zum Beispiel Barrierefreiheit, sprachliche oder organisatorische Hinweise"
          disabled={
            status === "submitting"
          }
          className="mt-3 w-full resize-y rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 leading-7 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="schoolVisitMessage"
          className="block text-sm font-semibold text-[#153B36]"
        >
          Ihre Nachricht
          <span className="ml-2 font-normal text-slate-400">
            optional
          </span>
        </label>

        <textarea
          id="schoolVisitMessage"
          name="message"
          rows={5}
          placeholder="Weitere Wünsche oder Fragen"
          disabled={
            status === "submitting"
          }
          className="mt-3 w-full resize-y rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 leading-7 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
        />
      </div>

      <fieldset className="rounded-[24px] border border-[#E2D8C5] bg-[#FBF7EF] p-6">
        <legend className="px-2 font-serif text-2xl text-[#153B36]">
          Fotoaufnahmen
        </legend>

        <div className="flex items-start gap-4">
          <Camera
            aria-hidden="true"
            className="mt-1 h-6 w-6 shrink-0 text-[#9A7644]"
            strokeWidth={1.7}
          />

          <p className="text-sm leading-7 text-slate-600">
            Bitte teilen Sie uns mit,
            ob während des Besuchs Fotos
            aufgenommen und gegebenenfalls
            veröffentlicht werden dürfen.
          </p>
        </div>

        <div className="mt-6">
          <label
            htmlFor="photoPermission"
            className="block text-sm font-semibold text-[#153B36]"
          >
            Dürfen Fotos aufgenommen
            werden?
          </label>

          <select
            id="photoPermission"
            name="photoPermission"
            value={photoPermission}
            onChange={(event) => {
              setPhotoPermission(
                event.target
                  .value as SchoolVisitPhotoPermission,
              );
            }}
            disabled={
              status === "submitting"
            }
            className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-white px-5 py-4 outline-none focus:border-[#B08D57] focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
          >
            <option value="no">
              Nein
            </option>
            <option value="by-agreement">
              Nur nach vorheriger Absprache
            </option>
            <option value="yes">
              Ja
            </option>
          </select>
        </div>

        {photoPermission !== "no" && (
          <div className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="publicationPermission"
                className="block text-sm font-semibold text-[#153B36]"
              >
                Dürfen geeignete Fotos
                veröffentlicht werden?
              </label>

              <select
                id="publicationPermission"
                name="publicationPermission"
                required
                defaultValue=""
                disabled={
                  status ===
                  "submitting"
                }
                className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-white px-5 py-4 outline-none focus:border-[#B08D57] focus:ring-4 focus:ring-[#B08D57]/10 disabled:opacity-60"
              >
                <option
                  value=""
                  disabled
                >
                  Bitte auswählen
                </option>
                <option value="website-and-social-media">
                  Auf der Website und in
                  sozialen Medien
                </option>
                <option value="website-only">
                  Nur auf der Website
                </option>
                <option value="no">
                  Keine Veröffentlichung
                </option>
              </select>
            </div>

            <label className="flex cursor-pointer items-start gap-4">
              <input
                type="checkbox"
                name="guardianConsentConfirmed"
                required
                disabled={
                  status ===
                  "submitting"
                }
                className="mt-1 h-5 w-5 shrink-0 rounded border-[#C9CCC6] text-[#153B36] focus:ring-[#B08D57]"
              />

              <span className="text-sm leading-7 text-slate-600">
                Ich bestätige, dass die
                erforderlichen Einwilligungen
                der Erziehungsberechtigten
                vorliegen, sofern
                minderjährige Teilnehmende
                erkennbar fotografiert werden.
              </span>
            </label>
          </div>
        )}
      </fieldset>

      <label className="flex cursor-pointer items-start gap-4">
        <input
          type="checkbox"
          name="privacyConsent"
          required
          disabled={
            status === "submitting"
          }
          className="mt-1 h-5 w-5 shrink-0 rounded border-[#C9CCC6] text-[#153B36] focus:ring-[#B08D57]"
        />

        <span className="text-sm leading-7 text-slate-600">
          Ich bin damit einverstanden,
          dass meine Angaben zur Bearbeitung
          der Anfrage verwendet werden.
          Weitere Informationen finden Sie
          in der Datenschutzerklärung.
        </span>
      </label>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800"
        >
          <TriangleAlert
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0"
            strokeWidth={1.8}
          />

          <p className="text-sm leading-7">
            {responseMessage}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={
          status === "submitting"
        }
        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#153B36] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#244B45] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D57]/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            Anfrage wird gesendet
            <LoaderCircle
              aria-hidden="true"
              className="h-4 w-4 animate-spin"
              strokeWidth={1.8}
            />
          </>
        ) : (
          <>
            Schulbesuch anfragen
            <Send
              aria-hidden="true"
              className="h-4 w-4"
              strokeWidth={1.8}
            />
          </>
        )}
      </button>
    </form>
  );
}
