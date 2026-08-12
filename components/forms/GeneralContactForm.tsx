"use client";

import {
  CheckCircle2,
  LoaderCircle,
  Send,
  TriangleAlert,
} from "lucide-react";
import { FormEvent, useState } from "react";

import ContactTopicSelect from "@/components/forms/ContactTopicSelect";
import ContactLocationSelect from "@/components/forms/ContactLocationSelect";
import type {
  ContactApiPayload,
  ContactApiResponse,
  ContactLocation,
  ContactTopic,
} from "@/types/contact";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

function isContactTopic(value: FormDataEntryValue | null): value is ContactTopic {
  return (
    value === "unsure" ||
    value === "meditation" ||
    value === "retreat" ||
    value === "visit" ||
    value === "school" ||
    value === "event" ||
    value === "other"
  );
}

function isContactLocation(
  value: FormDataEntryValue | null,
): value is ContactLocation {
  return (
    value === "general" ||
    value === "bavaria" ||
    value === "heilbronn" ||
    value === "rheinland" ||
    value === "hamburg" ||
    value === "berlin" ||
    value === "nrw" ||
    value === "schwarzwald"
  );
}

function getStringValue(
  formData: FormData,
  fieldName: string,
): string {
  const value = formData.get(fieldName);

  return typeof value === "string"
    ? value.trim()
    : "";
}

export default function GeneralContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [responseMessage, setResponseMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const topic = formData.get("topic");
    const location = formData.get("location");

    if (!isContactTopic(topic)) {
      setStatus("error");
      setResponseMessage(
        "Bitte wählen Sie ein Thema für Ihre Anfrage aus.",
      );
      return;
    }

    if (!isContactLocation(location)) {
      setStatus("error");
      setResponseMessage(
        "Bitte wählen Sie einen Tempel oder die allgemeine Anfrage aus.",
      );
      return;
    }

    const registrationKind =
      topic === "retreat"
        ? "retreat"
        : topic === "meditation"
          ? "meditation"
          : topic === "event"
            ? "ceremony"
            : topic === "school" || topic === "visit"
              ? "school"
              : undefined;

    if (registrationKind) {
      const templeQuery =
        location === "general"
          ? ""
          : `&tempel=${encodeURIComponent(location)}`;

      window.location.assign(
        `/anmeldung?art=${registrationKind}${templeQuery}`,
      );
      return;
    }

    const payload: ContactApiPayload = {
      requestType: "contact",
      submittedAt: new Date().toISOString(),
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
      topic,
      location,
      message: getStringValue(
        formData,
        "message",
      ),
      privacyConsent:
        formData.get("privacy") === "on",
    };

    setStatus("submitting");
    setResponseMessage("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const responseBody =
        (await response.json()) as ContactApiResponse;

      if (
        !response.ok ||
        responseBody.success !== true
      ) {
        throw new Error(
          responseBody.message ||
            "Ihre Nachricht konnte nicht gesendet werden.",
        );
      }

      setStatus("success");
      setResponseMessage(
        responseBody.message ||
          "Ihre Nachricht wurde erfolgreich übermittelt.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        error instanceof Error
          ? error.message
          : "Beim Senden Ihrer Nachricht ist ein unerwarteter Fehler aufgetreten.",
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
          Vielen Dank für Ihre Nachricht
        </h3>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
          {responseMessage}
        </p>

        <p className="mx-auto mt-3 max-w-xl leading-8 text-slate-600">
          Sie erhalten eine Bestätigung per E-Mail. Wir melden uns so bald wie
          möglich persönlich bei Ihnen.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setResponseMessage("");
          }}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[#153B36] px-6 py-3 font-semibold text-[#153B36] transition-colors hover:bg-[#153B36] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D57]/20"
        >
          Weitere Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-[#153B36]"
          >
            Vorname
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Ihr Vorname"
            required
            disabled={status === "submitting"}
            className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-[#153B36]"
          >
            Nachname
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Ihr Nachname"
            required
            disabled={status === "submitting"}
            className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[#153B36]"
        >
          E-Mail-Adresse
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@beispiel.de"
          required
          disabled={status === "submitting"}
          className="mt-3 w-full rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block text-sm font-semibold text-[#153B36]"
        >
          Thema Ihrer Anfrage
        </label>

        <ContactTopicSelect />
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-semibold text-[#153B36]"
        >
          Welchen Tempel möchten Sie kontaktieren?
        </label>

        <ContactLocationSelect disabled={status === "submitting"} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[#153B36]"
        >
          Ihre Nachricht
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          placeholder="Wie können wir Ihnen helfen?"
          required
          disabled={status === "submitting"}
          className="mt-3 w-full resize-y rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base leading-7 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-4">
        <input
          type="checkbox"
          name="privacy"
          required
          disabled={status === "submitting"}
          className="mt-1 h-5 w-5 shrink-0 rounded border-[#C9CCC6] text-[#153B36] focus:ring-[#B08D57] disabled:cursor-not-allowed disabled:opacity-60"
        />

        <span className="text-sm leading-7 text-slate-600">
          Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung
          meiner Anfrage verwendet werden. Weitere Informationen finden Sie in
          der Datenschutzerklärung.
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
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#153B36] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#1C4A43] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D57]/25 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            Nachricht wird gesendet

            <LoaderCircle
              aria-hidden="true"
              className="h-4 w-4 animate-spin"
              strokeWidth={1.8}
            />
          </>
        ) : (
          <>
            Nachricht senden

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
