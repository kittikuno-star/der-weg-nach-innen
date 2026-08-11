"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (height <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.max(
          0,
          Math.min(100, (scrollTop / height) * 100)
        )
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-1 bg-[#B08D57] transition-all duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}