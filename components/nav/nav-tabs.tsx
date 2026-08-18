"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.4, 0, 0.2, 1] as const;
const MotionLink = motion.create(Link);

const TABS = [
  {
    href: "/work",
    letter: "W",
    label: "Work",
    bgColor: "#ffcf5e",
    textColor: "#1e1e1e",
    idleWidth: 56,
    expandedWidth: 98,
    external: false,
  },
  {
    href: "/files/resume.pdf",
    letter: "R",
    label: "Resume",
    bgColor: "#2e9f51",
    textColor: "white",
    idleWidth: 56,
    expandedWidth: 118,
    external: true,
  },
  {
    href: "/about",
    letter: "A",
    label: "About",
    bgColor: "#8c8c8c",
    textColor: "white",
    idleWidth: 56,
    expandedWidth: 106,
    external: false,
  },
] as const;

// Flush-left navigation tabs pinned to the page edge, per the Figma "Work"
// frame (node 2055:184). Idle shows just the letter; hovering — or being
// the active page — expands the tab to its full label.
export function NavTabs() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <div className="hidden sm:fixed sm:left-0 sm:top-[148px] sm:z-10 sm:flex sm:flex-col sm:items-start sm:gap-5">
      {TABS.map((tab) => {
        const isActive = pathname === tab.href;
        const expanded = isActive || hoveredHref === tab.href;

        return (
          <MotionLink
            key={tab.href}
            href={tab.href}
            target={tab.external ? "_blank" : undefined}
            rel={tab.external ? "noopener noreferrer" : undefined}
            aria-current={isActive ? "page" : undefined}
            onMouseEnter={() => setHoveredHref(tab.href)}
            onMouseLeave={() => setHoveredHref(null)}
            onFocus={() => setHoveredHref(tab.href)}
            onBlur={() => setHoveredHref(null)}
            initial={false}
            animate={{ width: expanded ? tab.expandedWidth : tab.idleWidth }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{
              backgroundColor: tab.bgColor,
              color: tab.textColor,
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)",
            }}
            className="relative flex h-[31px] shrink-0 items-center justify-center overflow-hidden font-sofia text-[16px] font-medium drop-shadow-[0px_2px_3.4px_rgba(0,0,0,0.25)]"
          >
            <motion.span
              className="absolute"
              initial={false}
              animate={{ opacity: expanded ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            >
              {tab.letter}
            </motion.span>
            <motion.span
              className="absolute whitespace-nowrap"
              initial={false}
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.15, delay: expanded ? 0.1 : 0 }}
            >
              {tab.label}
            </motion.span>
          </MotionLink>
        );
      })}
    </div>
  );
}
