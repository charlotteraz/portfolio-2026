import type { ContentBlock } from "../case-study/case-study-content";

export const DFH_CONTENT: ContentBlock[] = [
  {
    type: "paragraph",
    text: "Component Design & Frontend Engineering — v1.0",
  },

  { type: "heading", text: "At a Glance" },
  {
    type: "list",
    boldLabels: true,
    items: [
      "Role: Component design (Buttons, Navigation, Tabs) and lead frontend engineer for the design system package",
      "Team: Hannah, Charlotte, Angela",
      "Timeline: April 2026 - July 2026",
      "Scope: Design tokens, foundational styles, and an 8-category component library spanning web and native",
    ],
  },

  { type: "heading", text: "Overview" },
  {
    type: "paragraph",
    text: "The Dragonfly Health Design System (DFH) is the shared design and code system behind Dragonfly Health's web and native product suite. It's built on a three-tier token architecture, a documented set of layout and typography foundations, and a component library covering buttons, form controls, navigation, cards, overlays, panels, and alerts — each shipped with variants, sizing specs, and usage guidance rather than static mockups.",
  },
  {
    type: "paragraph",
    text: "The system is versioned and actively maintained: every component page carries a status badge (Done, Needs Documentation, Needs Review, In Progress, To Do), and the changelog tracks two phases of work — an initial setup phase and an ongoing expansion phase — rather than treating the system as a one-time deliverable.",
  },

  { type: "heading", text: "My Role" },
  {
    type: "paragraph",
    text: "I contributed to DFH in two capacities:",
  },
  {
    type: "list",
    boldLabels: true,
    items: [
      "Component design: I owned the Buttons library, Navigation components (segmented control, stepper, breadcrumbs), and Tabs, defining their variants, states, sizing, and usage guidelines.",
      "Lead frontend engineer: I built the design system's frontend package, the code layer that consumes the token architecture and turns the Figma specs into production components, using Claude Code as my primary build tool.",
    ],
  },
  {
    type: "paragraph",
    text: "Sitting across both roles meant the components I designed were also the components I implemented — which shaped how I approached the token structure below: it had to work equally well as a naming convention in Figma and as a variable naming convention in CSS.",
  },

  { type: "heading", text: "System Architecture: Token Structure" },
  {
    type: "paragraph",
    text: "DFH is built on a three-tier token model — primitive, semantic, and component — documented with parallel naming conventions for Figma variables and CSS variables so a token means the same thing in design and in code.",
  },
  {
    type: "table",
    columns: ["Level", "Description", "Example"],
    rows: [
      [
        "Primitive",
        "Base properties and global values — the raw scale a brand style guide would define.",
        "Primitive Colors, Typography, scale & sizing primitives",
      ],
      [
        "Semantic",
        "Contextual meaning — how and where a value should be used, referencing primitives rather than raw values.",
        "Semantic Colors, spacing/margin roles, typography role",
      ],
      [
        "Component",
        "Component-specific tokens, applied directly and used sparingly — only when reuse is obvious.",
        "Button color/border, Panel spacing, Header padding",
      ],
    ],
  },
  {
    type: "paragraph",
    text: "Figma variable naming follows Collection / Property / Variant / Scale (e.g. Primitive Colors / Primary / 600); CSS variables follow category-property-variant-scale (e.g. color-primary-600). The guidelines are explicit about restraint: not every value needs its own token, most primitives use a numeric 100–900 scale, and component-level tokens are reserved for properties that clearly repeat across instances — the kind of judgment calls that keep a token system from sprawling.",
  },

  { type: "heading", text: "Foundations" },
  { type: "heading", text: "Layout & Spacing" },
  {
    type: "paragraph",
    text: "The desktop grid is 12 columns at 80px wide with 32px gutters, resulting in a 1,110px layout; the responsive grid drops to 6 columns at 40px wide with 16px gutters. Spacing throughout — typography, buttons, component padding — follows a 4/8pt scale, keeping rhythm consistent across every screen size.",
  },
  {
    type: "image",
    src: "/images/projects/dfh/layout-grid-v2.png",
    alt: "DFH layout grid documentation showing the 12-column desktop grid, 6-column responsive grid, and a spacing scale in multiples of 4 or 8",
    width: 1388,
    height: 1999,
  },
  { type: "heading", text: "Typography" },
  {
    type: "paragraph",
    text: "Type is platform-aware: Roboto and Roboto Mono on web, Roboto paired with SF Pro on native, sharing a common heading/body/caption scale so content reads consistently while still feeling native to each platform. A dedicated components page documents typography in context — label-value pairs, headings inside cards, tabular numerals — rather than leaving that translation to individual designers.",
  },
  {
    type: "image",
    src: "/images/projects/dfh/typography-web-v2.png",
    alt: "DFH web typography documentation showing the Roboto and Roboto Mono typefaces, weights, rem base size, and desktop vs. mobile type scale from Heading 1 down to Tabular Caption",
    width: 1999,
    height: 1601,
  },
  { type: "heading", text: "Color" },
  {
    type: "paragraph",
    text: "Color is layered from Brand Colors down through System Colors to Mapped (semantic) Colors, each with its own overview page and a dev-ready export — the same primitive-to-semantic discipline used in the token structure, applied specifically to color.",
  },
  {
    type: "image",
    src: "/images/projects/dfh/system-colors-v2.png",
    alt: "DFH System Colors documentation showing Error, Warning, Information, Success, Yellow, and Neutral color scales from 900 to 50, plus black/white and transparency scales",
    width: 1746,
    height: 2775,
  },

  { type: "heading", text: "Component Focus: Buttons" },
  {
    type: "paragraph",
    text: "The button library is the deepest component set in the system, covering Buttons, Links, Icon Buttons, Floating Action Buttons, Stateful Buttons, Alert Buttons, and Button Groups. Each variant is documented against sizing, specs, and “uses” guidance, so the choice between a stateful button and a standard one, or an icon button and a FAB, is answered in the library rather than left to individual judgment.",
  },
  {
    type: "image",
    src: "/images/projects/dfh/buttons-v2.png",
    alt: "DFH Buttons documentation showing variants, sizing, and states for Buttons, Links, Icon Buttons, Floating Action Buttons, Stateful Buttons, Alert Buttons, and Button Groups",
    width: 4472,
    height: 5176,
  },

  { type: "heading", text: "Component Focus: Navigation & Tabs" },
  {
    type: "paragraph",
    text: "Navigation covers Segmented Control, Stepper, Breadcrumbs, and Tabs. The segmented control documentation is a good example of the precision the library aims for: it includes explicit Do/Don't patterns distinguishing it from Tabs — use a segmented control when switching the presentation of the same content, use tabs when switching between related but distinct content — a distinction that's easy to blur without a documented rule.",
  },
  {
    type: "image",
    src: "/images/projects/dfh/segmented-control-v2.png",
    alt: "DFH Segmented Control documentation showing atoms, small/medium/large/icon-only sizes, and Do/Don't usage patterns distinguishing segmented control from stateful buttons, tabs, and steppers",
    width: 1344,
    height: 2244,
  },
  {
    type: "paragraph",
    text: "Status tracking on this page reflects the system's iterative reality: Segmented Control and Breadcrumbs are marked Done, while Stepper is flagged Needs Documentation — shipped in code, not yet fully written up in Figma.",
  },
  {
    type: "image",
    src: "/images/projects/dfh/stepper-v2.png",
    alt: "DFH Stepper documentation showing stepper atoms, linear and non-linear layouts, states (inactive, active, completed, disabled), mobile behavior, and horizontal vs. vertical orientations",
    width: 1555,
    height: 3164,
  },

  { type: "heading", text: "From Design to Code: the Frontend Package" },
  {
    type: "paragraph",
    text: "As lead frontend engineer, I built the package that implements DFH in production, consuming the same token structure documented in Figma. The parallel Figma-variable and CSS-variable naming conventions weren't an afterthought — they were designed together so a token renamed or re-scoped in one place maps predictably to the other, and so design changes propagate through variables instead of one-off code overrides.",
  },
  {
    type: "paragraph",
    text: "I built the package with Claude Code, including custom skills for Figma-to-code tasks that pull component specs and token values directly from the design file instead of transcribing them by hand. To keep the agent's output aligned with the system as it grew, I maintain a living AGENT.md with the rules it has to follow — always reference design tokens, never hardcode colors, spacing, or typography values, map new components to existing semantic tokens before introducing new ones — and update it continuously as the token library evolves, so the guardrails keep pace with the system instead of drifting out of sync with it.",
  },

  { type: "heading", text: "Process & Governance" },
  {
    type: "paragraph",
    text: "Every page in the system carries a status badge, and the changelog splits the work into two phases: Phase 1 (March 2026 – July 2026) established the token architecture, foundations, and first component wave; Phase 2 (July 2026 – ongoing) is deepening component coverage and documentation. Logo, for instance, is still marked To Do — an honest signal of what's shipped versus what's next, rather than a system presented as finished.",
  },
  {
    type: "table",
    columns: ["Phase", "Contributors", "Summary"],
    rows: [
      [
        "Phase 1 · March 2026 – July 2026",
        "Hannah, Charlotte, Angela",
        "Initial design system setup: tokens, foundations, and the first wave of components.",
      ],
      [
        "Phase 2 · July 2026 – ongoing",
        "Hannah, Charlotte, Angela",
        "Expanded coverage and deeper component definitions across the library.",
      ],
    ],
  },

  { type: "heading", text: "Outcomes & What's Next" },
  {
    type: "paragraph",
    text: "Buttons and Navigation are fully specified and shipped in the v1.0 frontend package. Phase 2 work is extending that same rigor — tokens documented in parallel with code, status-tracked components, explicit usage guidance — to Panels, Tables, and the remaining Form Controls.",
  },
];
