"use client";

type ContactLocationSelectProps = {
  disabled?: boolean;
};

export default function ContactLocationSelect({
  disabled = false,
}: ContactLocationSelectProps) {
  return (
    <select
      id="location"
      name="location"
      defaultValue=""
      required
      disabled={disabled}
      className="mt-3 w-full appearance-none rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base text-slate-700 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <option value="" disabled>
        Bitte auswählen
      </option>
      <option value="general">
        Allgemeine Anfrage (kein bestimmter Tempel)
      </option>
      <option value="bavaria">
        Wat Phra Dhammakaya Bavaria (Königsbrunn, Bayern)
      </option>
      <option value="heilbronn">
        Wat Buddha Heilbronn (Wüstenrot, Baden-Württemberg)
      </option>
      <option value="rheinland">
        Wat Phra Dhammakaya Rheinland (Ingelheim, Rheinland-Pfalz)
      </option>
      <option value="hamburg">
        Dhammakaya Hamburg (Gerdau, Niedersachsen)
      </option>
      <option value="berlin">
        Wat Phra Dhammakaya Berlin (Blankenfelde-Mahlow, Brandenburg)
      </option>
      <option value="nrw">
        Wat Buddha Nordrhein-Westfalen (Moers, Nordrhein-Westfalen)
      </option>
      <option value="schwarzwald">
        Wat Phra Dhammakaya Schwarzwald (Kippenheim, Baden-Württemberg)
      </option>
    </select>
  );
}
