"use client";

import { useEffect, useState } from "react";

export function BackToTopButton({ threshold = 480 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-link lg:right-10 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span aria-hidden className="text-[18px] leading-none">
        ↑
      </span>
    </button>
  );
}
