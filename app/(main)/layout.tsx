import type { ReactNode } from "react";
import { SiteHeader } from "@/components/nav/site-header";
import { NavTabs } from "@/components/nav/nav-tabs";
import { MobileTopNav } from "@/components/nav/mobile-top-nav";
import { SiteFooter } from "@/components/nav/site-footer";

// Shared across Work/About so NavTabs stays mounted while navigating
// between them — that's what lets its active-tab width animate smoothly
// instead of snapping (a fresh NavTabs instance per page can't animate a
// transition it wasn't present for).
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full flex-1 flex-col items-center bg-white">
      <div className="sticky top-0 z-20 w-full bg-white">
        <SiteHeader />
        <MobileTopNav />
      </div>
      <NavTabs />
      {children}
      <SiteFooter />
    </div>
  );
}
