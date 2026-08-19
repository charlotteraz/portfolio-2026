"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/work", label: "Work", external: false },
  { href: "/files/raz_resume_2026.pdf", label: "Resume", external: true },
  { href: "/about", label: "About", external: false },
] as const;

// Text-only stand-in for NavTabs' bookmark pills below `sm` — the pills'
// fixed-left placement has no room to sit flush against the page edge once
// content padding shrinks, so mobile gets a plain link row instead, living
// in the same sticky block as SiteHeader.
export function MobileTopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex w-full items-center justify-center gap-6 border-b border-[#ececec] px-6 py-3 sm:hidden"
    >
      {LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-current={isActive ? "page" : undefined}
            className={`font-sofia text-[13px] font-semibold uppercase tracking-wide transition-colors duration-150 ${
              isActive
                ? "text-black underline decoration-2 underline-offset-4"
                : "text-[#8c8c8c] hover:text-black"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
