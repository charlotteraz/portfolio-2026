"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "./case-study-content";

// A real table of contents pinned to the right margin — only shown once the
// viewport is wide enough (xl) that it doesn't crowd the ~900px-wide
// content column. Highlights the section currently in view via
// IntersectionObserver and jumps to a section on click.
export function CaseStudyNav({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(entries[0]?.id ?? null);

  useEffect(() => {
    if (entries.length === 0) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    const elements = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [entries]);

  if (entries.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="fixed right-4 top-32 z-10 hidden max-h-[70vh] w-[200px] flex-col gap-0.5 overflow-y-auto pr-1 xl:flex"
    >
      <p className="mb-2 font-sofia text-[11px] font-semibold uppercase tracking-wider text-[#a8a8a8]">
        On this page
      </p>
      {entries.map((entry) => {
        const isActive = entry.id === activeId;
        return (
          <a
            key={entry.id}
            href={`#${entry.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(entry.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              history.pushState(null, "", `#${entry.id}`);
            }}
            aria-current={isActive ? "location" : undefined}
            className={`border-l-2 py-1 font-sofia text-[13px] leading-snug transition-colors duration-150 ${
              entry.level === "part" ? "pl-3 font-semibold" : "pl-4 font-normal"
            } ${
              isActive ? "border-link text-black" : "border-transparent text-[#8c8c8c] hover:text-black"
            }`}
          >
            {entry.text}
          </a>
        );
      })}
    </nav>
  );
}
