"use client";

import { useEffect, useState } from "react";

export default function EnglishContactTopicSelect() {
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const selectedTopic = new URLSearchParams(window.location.search).get(
      "topic",
    );

    if (selectedTopic === "unsure") {
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
        Please select
      </option>
      <option value="unsure">I am not sure yet</option>
      <option value="meditation">Meditation course</option>
      <option value="retreat">Retreat or meditation day</option>
      <option value="visit">Temple visit</option>
      <option value="school">School visit or group tour</option>
      <option value="event">Buddhist event</option>
      <option value="other">Other enquiry</option>
    </select>
  );
}
