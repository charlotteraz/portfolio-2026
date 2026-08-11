"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { NavBadge } from "@/components/nav/nav-badge";

const BADGE_SIZE = 40;
const LETTER_FONT_SIZE = 16;

type Placement = {
  left: number;
  top: number;
  dragConstraints: { left: number; right: number; top: number; bottom: number };
};

type Positions = {
  resume: Placement;
  about: Placement;
  work: Placement;
};

// Anchors a badge over the tail end of the target word, perched on its top
// edge with only a small sliver resting on the glyphs — like a pin stuck in
// the top-right corner of the word. A full-clearance float above isn't
// viable here: the paragraph's line height is well under the badge's
// height, so it would collide with the line above whenever the target word
// isn't on the first line.
function toPlacement(left: number, top: number, containerRect: DOMRect): Placement {
  return {
    left,
    top,
    dragConstraints: {
      left: -left,
      right: containerRect.width - left - BADGE_SIZE,
      top: -top,
      bottom: containerRect.height - top - BADGE_SIZE,
    },
  };
}

function anchorAboveWord(word: HTMLElement, container: HTMLElement): Placement {
  const wordRect = word.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const left = wordRect.right - containerRect.left - BADGE_SIZE / 2;
  const top = wordRect.top - containerRect.top - BADGE_SIZE - 4;
  return toPlacement(left, top, containerRect);
}

// Sits just below the word's baseline — used for words with open space
// underneath (e.g. the last line of the paragraph), where there's no
// following line to collide with.
function anchorBelowWord(word: HTMLElement, container: HTMLElement): Placement {
  const wordRect = word.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const left = wordRect.right - containerRect.left - BADGE_SIZE / 2;
  const top = wordRect.bottom - containerRect.top - 2;
  return toPlacement(left, top, containerRect);
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const charlotteRef = useRef<HTMLSpanElement>(null);
  const buildsRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);
  const [positions, setPositions] = useState<Positions | null>(null);

  useLayoutEffect(() => {
    function measure() {
      const main = mainRef.current;
      const charlotte = charlotteRef.current;
      const builds = buildsRef.current;
      const end = endRef.current;
      if (!main || !charlotte || !builds || !end) return;

      setPositions({
        about: anchorAboveWord(charlotte, main),
        work: anchorAboveWord(builds, main),
        resume: anchorBelowWord(end, main),
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-white">
      <header className="flex w-full shrink-0 items-center justify-between px-9 py-[18px]">
        <Link href="/" className="font-sofia text-[20px] font-semibold uppercase text-black">
          Charlotte Raz
        </Link>
      </header>
      <main ref={mainRef} className="relative min-h-0 flex-1">
        {positions && (
          <>
            <NavBadge
              href="/files/resume.pdf"
              external
              letter="R"
              label="Resume"
              subtitle="View my resume"
              accentColor="#2e9f51"
              accentTextColor="white"
              expandedWidth={190}
              expandedHeight={104}
              idleSize={BADGE_SIZE}
              letterFontSize={LETTER_FONT_SIZE}
              left={positions.resume.left}
              top={positions.resume.top}
              dragConstraints={positions.resume.dragConstraints}
            />
            <NavBadge
              href="/about"
              letter="A"
              label="About me"
              subtitle="Learn more about me"
              accentColor="#8c8c8c"
              accentTextColor="white"
              expandedWidth={230}
              expandedHeight={104}
              idleSize={BADGE_SIZE}
              letterFontSize={LETTER_FONT_SIZE}
              left={positions.about.left}
              top={positions.about.top}
              dragConstraints={positions.about.dragConstraints}
            />
            <NavBadge
              href="/work"
              letter="W"
              label="Work"
              subtitle="View my selected work"
              accentColor="#ffcf5e"
              accentTextColor="black"
              expandedWidth={215}
              expandedHeight={104}
              idleSize={BADGE_SIZE}
              letterFontSize={LETTER_FONT_SIZE}
              left={positions.work.left}
              top={positions.work.top}
              dragConstraints={positions.work.dragConstraints}
            />
          </>
        )}
        <div className="flex h-full items-center px-6 sm:px-16 lg:px-[14%]">
          <p className="max-w-[720px] font-sofia text-[18px] font-light leading-[28px] text-body sm:text-[22px] sm:leading-[32px] lg:text-[24px] lg:leading-[36px]">
            <span ref={charlotteRef}>Charlotte</span> is a{" "}
            <span className="font-medium">UI/UX Engineer</span> who designs and{" "}
            <span ref={buildsRef}>builds</span> digital products that feel as good as they
            look — bridging the gap between design thinking and frontend{" "}
            <span ref={endRef}>code.</span>
          </p>
        </div>
      </main>
    </div>
  );
}
