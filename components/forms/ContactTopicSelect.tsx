"use client";

import { useEffect, useState } from "react";

export default function ContactTopicSelect() {
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const selectedTopic = new URLSearchParams(window.location.search).get(
      "thema",
    );

    if (selectedTopic === "unsicher") {
      setTopic("unsure");
    }
  }, []);

  return (
    <select
      id="topic"
      name="topic"
      value={topic}
      onChange={(event) => setTopic(event.target.value)}
      className="mt-3 w-full appearance-none rounded-2xl border border-[#DADCD7] bg-[#FAFAF8] px-5 py-4 text-base text-slate-700 outline-none transition-colors focus:border-[#B08D57] focus:bg-white focus:ring-4 focus:ring-[#B08D57]/10"
    >
      <option value="" disabled>
        Bitte auswählen
      </option>

      <option value="unsure">Ich bin noch unsicher</option>
      <option value="meditation">Meditationskurs</option>
      <option value="retreat">Retreat oder Meditationstag</option>
      <option value="visit">Tempelbesuch</option>
      <option value="school">Schulbesuch oder Gruppenführung</option>
      <option value="event">Buddhistische Veranstaltung</option>
      <option value="other">Anderes Anliegen</option>
    </select>
  );
}
