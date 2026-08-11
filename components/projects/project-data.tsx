import type { ComponentType, ReactNode } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { BookTreeVisual } from "./booktree/booktree-visual";
import { BookTreeHeroVisual } from "./booktree/booktree-hero-visual";
import { DfhVisual } from "./dfh/dfh-visual";
import { DfhHeroVisual } from "./dfh/dfh-hero-visual";
import { AdvancedRoutingVisual } from "./advanced-routing/advanced-routing-visual";
import { AdvancedRoutingHeroVisual } from "./advanced-routing/advanced-routing-hero-visual";
import type { ContentBlock } from "./case-study/case-study-content";
import { BOOKTREE_CONTENT } from "./booktree/booktree-content";
import { DFH_CONTENT } from "./dfh/dfh-content";
import { ADVANCED_ROUTING_CONTENT } from "./advanced-routing/advanced-routing-content";

export type ProjectTagData = {
  label: string;
  icon?: { src: string; size?: number };
  faIcon?: IconDefinition;
};

const SHIPPED_TAG: ProjectTagData = { label: "Shipped", faIcon: faCircleCheck };

export type Project = {
  slug: string;
  title: string;
  description: ReactNode;
  tags: ProjectTagData[];
  // Shown on the /work list card.
  Visual: ComponentType;
  // Shown at the top of the case study page; falls back to Visual when unset.
  HeroVisual?: ComponentType;
  // Gates the case study page behind an access-code modal.
  private?: boolean;
  content: ContentBlock[];
};

export const PROJECTS: Project[] = [
  {
    slug: "dfh-design-system",
    title: "DFH Design System",
    description:
      "A token-based design system and component library for Dragonfly Health — designed the Buttons, Navigation, and Tabs, and built the frontend package that ships it.",
    tags: [{ label: "Dragonfly Health" }, { label: "2026" }, SHIPPED_TAG],
    Visual: DfhVisual,
    HeroVisual: DfhHeroVisual,
    private: true,
    content: DFH_CONTENT,
  },
  {
    slug: "advanced-routing",
    title: "Advanced Routing",
    description:
      "Modernizing Route Optimization in a Healthcare Logistics Platform",
    tags: [{ label: "Dragonfly Health" }, { label: "2025" }, SHIPPED_TAG],
    Visual: AdvancedRoutingVisual,
    HeroVisual: AdvancedRoutingHeroVisual,
    private: true,
    content: ADVANCED_ROUTING_CONTENT,
  },
  {
    slug: "booktree",
    title: "BookTree",
    description: "An End-to-end Mobile App for Book Lovers",
    tags: [{ label: "Side project" }, { label: "2024" }],
    Visual: BookTreeVisual,
    HeroVisual: BookTreeHeroVisual,
    content: BOOKTREE_CONTENT,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
