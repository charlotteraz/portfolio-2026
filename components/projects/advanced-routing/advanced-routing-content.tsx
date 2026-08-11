import type { ContentBlock } from "../case-study/case-study-content";

export const ADVANCED_ROUTING_CONTENT: ContentBlock[] = [
  { type: "heading", text: "At a Glance" },
  {
    type: "list",
    boldLabels: true,
    items: [
      "Role: UX Research and Product Design",
      "Timeline: September 2025 - December 2025",
      "Status: Shipped",
      "Tools: Figma",
    ],
  },

  { type: "part", text: "Overview / Problem" },
  {
    type: "paragraph",
    text: "Our team was moving away from a legacy fleet routing tool that was expensive, slow to sync data, and locked us into long hardware contracts. The replacement plan was to integrate a modern, API-based routing service directly into our existing order management platform. My job was to design how operators would actually plan, adjust, and monitor routes inside that new flow.",
  },
  {
    type: "list",
    items: [
      "The existing routing solution using a third-party fleet routing tool was costly, outdated, and not built for how the business had grown",
      "Slow, non-real-time data syncing created friction between systems and downstream automation",
      "Locked into long hardware/software contracts that didn't fit a fast-moving SaaS product",
    ],
  },

  { type: "heading", text: "Goals" },
  {
    type: "list",
    items: [
      "Replace the legacy routing tool with a modern, API-driven solution",
      "Maintain or improve route efficiency (miles per stop, orders per hour)",
      "Improve user experience by reducing wait-time",
      "Cut down on operators switching between multiple tools to do one job",
    ],
  },

  { type: "heading", text: "Scope & Constraints" },
  {
    type: "list",
    items: [
      "Focused on route assignment + optimization, and mid-day add-on orders",
      "Explicitly did not include a full dashboard rewrite — had to work within existing UI patterns",
      "Needed to ship in frequent, incremental releases rather than a single big launch",
    ],
  },

  { type: "part", text: "Design Process" },
  {
    type: "paragraph",
    text: 'The design process covered the order/route dashboard redesign, a map popup for viewing routes per warehouse, re-sequencing orders within a route and moving orders between routes, real-time status treatment (completed, "on my way"), and manual add-on order entry with truck/driver assignment recommendations.',
  },

  { type: "heading", text: "Starting with open questions" },
  {
    type: "paragraph",
    text: "Before designing final screens, I put together a first draft and used it to surface the questions that would actually shape the interface. Some of these were about the system itself: what happens if the routing API can't optimize a route — does it fail silently, or explain why? Is optimization something operators trigger manually, or does it run automatically whenever an order gets added to a route? Each answer had real UI implications, so I treated the first draft less like a proposal and more like a way to get the right conversations started with engineering and product.",
  },
  {
    type: "image",
    src: "/images/projects/advanced-routing/open-questions-wireframe-v1.png",
    alt: "Early wireframe of the Route #16 popup showing the route map, a Destinations list with Optimize Route and Edit Sequence actions, and a warehouse-level Birmingham, AL map with multiple routes and driver status",
    width: 3142,
    height: 2191,
  },

  { type: "heading", text: "Solving a modal-on-modal problem" },
  {
    type: "paragraph",
    text: "Supporting order transfers between routes introduced a UX conflict: the route view was already a modal, and transferring an order needed its own confirmation UI. Stacking modals is a pattern I try to avoid, since it splits the user's attention and makes it unclear what they're actually confirming. I worked through a few options — a separate page, or a lighter-weight inline panel — and landed on keeping the transfer action inside the existing view using an in-place alert-style confirmation instead of a second modal.",
  },
  {
    type: "image",
    src: "/images/projects/advanced-routing/modal-transfer-v1.png",
    alt: "Route #17 destination list showing an Add-on stop before and after optimization, with a stop flagged \"Not in optimized route\" and inline transfer/remove actions instead of a stacked confirmation modal",
    width: 2019,
    height: 1131,
  },

  { type: "heading", text: "Designing for state, not just layout" },
  {
    type: "paragraph",
    text: "As the flow matured, the real complexity wasn't the screens themselves but the states behind them. A route could be unoptimized, optimized, manually edited, carrying an add-on order, or contain a stop that failed to make it into the optimized sequence. I built a status system to make each of these visible at a glance — badges for route state, and buttons that enabled or disabled depending on whether a route had already been optimized or edited since. On the warehouse-level map, I used color-coded lines to distinguish routes, working within the limits of our existing design system's palette, which didn't have enough distinct colors for every route in a busy warehouse — so I treated the assignment as arbitrary rather than trying to force meaning into color choice.",
  },
  {
    type: "image",
    src: "/images/projects/advanced-routing/state-status-v1.png",
    alt: "Route #37 with all stops Completed next to a Birmingham warehouse map showing color-coded Route #16, #17, and #37 lines with Unoptimized, Optimized, and Manually Updated status badges and On the way indicators",
    width: 2115,
    height: 1108,
  },

  { type: "heading", text: "Staying comfortable with the unresolved" },
  {
    type: "paragraph",
    text: "Not everything had an answer during design. I flagged open questions rather than guessing at them — whether route optimization was deterministic, whether the optimize button should reappear after a manual edit, what should happen if an operator never optimized a route at all. Surfacing these clearly kept the design honest about what still needed product or engineering input, instead of quietly making assumptions that might not hold up later.",
  },

  { type: "part", text: "Key Design Decisions & Challenges" },
  {
    type: "list",
    items: [
      'Balancing "bolt-on" enhancement constraints with a clean user experience',
      "Designing for operators who needed the new flow to be at least as fast as their old one",
      "Making complex logistics data (routes, sequencing, inventory status) scannable at a glance",
    ],
  },

  { type: "part", text: "Outcome / Impact" },
  {
    type: "paragraph",
    text: "By the final iteration, the design supported the full loop operators needed: viewing and optimizing a route, manually adjusting sequence via drag and drop, transferring or removing individual orders, and understanding route status at a glance — all without introducing a second layer of modals or new UI elements that duplicated existing data.",
  },
  {
    type: "list",
    items: [
      "Reduced tool-switching for dispatch/fleet users",
      "Faster data sync, lower backend strain",
      "Enabled licensing cost savings by retiring the legacy license",
    ],
  },
];
