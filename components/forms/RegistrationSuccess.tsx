type RegistrationSuccessProps = {
  onReset: () => void;
};

export default function RegistrationSuccess({
  onReset,
}: RegistrationSuccessProps) {
  return (
    <section
      aria-live="polite"
      aria-labelledby="registration-success-title"
      className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center shadow-sm sm:px-10"
    >
      <div
        aria-hidden="true"
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-700"
      >
        ✓
      </div>

      <h2
        id="registration-success-title"
        className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
      >
        Vielen Dank für Ihre Anmeldung
      </h2>

      <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
        Ihre Anmeldung wurde erfolgreich übermittelt. Wir senden Ihnen die
        weiteren Informationen per E-Mail zu.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Weitere Anmeldung
      </button>
    </section>
  );
}