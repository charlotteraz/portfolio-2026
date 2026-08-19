import type { ContentBlock } from "../case-study/case-study-content";

export const ROLLKEEPER_CONTENT: ContentBlock[] = [
  { type: "heading", text: "At a Glance" },
  {
    type: "list",
    boldLabels: true,
    items: [
      "Role: Designer & Builder",
      "Platform: iOS",
      "Tools: Figma Make, Claude Code",
      "Timeline: June 2026 - ongoing",
      "Status: Personal project",
    ],
  },

  { type: "heading", text: "Overview" },
  {
    type: "paragraph",
    text: "RollKeeper is a mobile app that helps film photographers track which cameras they own, what film is loaded in each one, and the full history of every roll they've shot — from loading, to finishing, to the lab, to the final scan. It solves a small but persistent problem: unlike digital cameras, most film cameras give no indication of what's inside them, so shooters who own more than one camera (or who set a camera down for a few weeks) lose track of what stock, ISO, or push/pull setting they're working with.",
  },

  { type: "heading", text: "The Problem" },
  {
    type: "paragraph",
    text: "Film photography has crept back into daily use for a lot of people, often across several cameras at once — an SLR for everyday shooting, a point-and-shoot for travel, maybe a medium format body for portraits. Each camera can be loaded with a different stock, and there's no digital trace of any of it. The result is a familiar set of frustrations:",
  },
  {
    type: "list",
    items: [
      "Forgetting what film is loaded in a camera that's been sitting for weeks",
      "Losing track of ISO after pushing or pulling a roll, and shooting the rest at the wrong setting",
      "No record of which lab developed a roll, when, or what it cost",
      "Scanned negatives scattered across folders with no link back to the camera or roll that produced them",
    ],
  },
  {
    type: "paragraph",
    text: "Existing solutions are ad hoc — sticky notes on the camera back, notes apps, or just memory — none of which scale past one or two cameras.",
  },

  { type: "heading", text: "Target User" },
  {
    type: "paragraph",
    text: "Hobbyist and semi-serious film photographers who own multiple cameras and shoot different stocks depending on mood, light, or subject. They're comfortable with apps but want something that feels as tactile and unfussy as the hobby itself — not a bloated inventory system.",
  },

  { type: "heading", text: "Process" },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Scoping the core loop: The first design decision was identifying the actual repeating loop a user goes through: add a camera once, then repeatedly load film, shoot, finish, develop, and scan. Everything in the app hangs off that loop rather than treating cameras and rolls as separate, disconnected records.",
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Drafting the concept in Figma Make: Rather than starting from a blank canvas, I wrote a structured design brief — screens, data model, feature list, and visual direction — and used Figma Make to generate the first UI pass. This let me iterate on structure and content hierarchy quickly before refining details by hand.",
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Defining the data model early: Because the app is fundamentally about state changes over time (a roll moves from loaded → shot → sent to lab → developed → scanned), the camera / roll / develop-record structure was defined before any screen was designed, so every screen could reference the same underlying fields consistently.",
  },

  { type: "heading", text: "Key Features" },
  {
    type: "paragraph",
    boldLabel: true,
    text: 'Camera Library: A home grid of every camera the user owns, each card showing a thumbnail, name, and a live badge for whatever film is currently loaded — so checking "what\'s in this camera" never requires opening it.',
  },
  {
    type: "image-row",
    images: [
      {
        src: "/images/projects/rollkeeper/camera-library-grid2.png",
        alt: "RollKeeper Cameras screen in grid view, showing camera cards with photo, name, film stock, ISO, and a status badge",
        width: 640,
        height: 1391,
      },
      {
        src: "/images/projects/rollkeeper/camera-library-list2.png",
        alt: "RollKeeper Cameras screen in list view, showing the same cameras as compact rows with thumbnail, name, film stock, ISO, and status",
        width: 640,
        height: 1391,
      },
    ],
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Load Film: A quick-entry flow for logging film stock, ISO (editable for pushed/pulled rolls), date loaded, and expected frame count, tied to a searchable stock database.",
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Camera Detail & History: Every roll ever shot in a camera, in order, with dates, thumbnails, and status — turning each camera into its own shooting log.",
  },
  {
    type: "image-row",
    images: [
      {
        src: "/images/projects/rollkeeper/load-film-detail2.png",
        alt: "RollKeeper camera detail screen for the Minolta Riva Zoom 90, showing the Load Film action and its roll history",
        width: 640,
        height: 1391,
      },
      {
        src: "/images/projects/rollkeeper/load-film-form2.png",
        alt: "RollKeeper Load Film form with fields for film stock, ISO, push/pull, frame count, notes, and date loaded",
        width: 640,
        height: 1391,
      },
    ],
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Develop Tracking: A status pipeline (Loaded → Finished → Sent to Lab → Developed → Scanned) with fields for lab name, cost, and processing notes, so nothing falls through the cracks between shooting and scanning.",
  },
  {
    type: "image-row",
    images: [
      {
        src: "/images/projects/rollkeeper/develop-tracking.png",
        alt: "RollKeeper roll detail screen showing the status pipeline from Loaded to Scanned, camera and film stock info, and an empty scans gallery with an Add photos action",
        width: 640,
        height: 1391,
      },
    ],
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Image Upload per Roll: A dedicated gallery for each roll's scanned negatives, keeping images tied to the exact camera and stock that produced them instead of a generic camera-roll folder.",
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: 'Cross-Camera Timeline: A single feed of every roll in progress across all cameras — the fastest way to answer "what do I currently have loaded, everywhere?"',
  },
  {
    type: "image-row",
    images: [
      {
        src: "/images/projects/rollkeeper/image-upload-scans.png",
        alt: "RollKeeper roll detail screen showing a scans gallery of 4 scanned negatives with an Add action",
        width: 640,
        height: 1391,
      },
      {
        src: "/images/projects/rollkeeper/image-upload-timeline.png",
        alt: "RollKeeper Timeline screen listing rolls by month, each with status and scan thumbnails",
        width: 640,
        height: 1391,
      },
    ],
  },
  {
    type: "paragraph",
    text: "I treated the film stock field as a searchable database rather than free text, prefilling ISO and stock type, because accurate defaults matter more than flexibility for a log the user is filling out quickly, often standing next to the camera.",
  },

  { type: "heading", text: "Challenges & Solutions" },
  {
    type: "paragraph",
    boldLabel: true,
    text: "Modeling state without overwhelming the user: A roll passes through several stages, but most users just want to log two or three moments (loaded, finished, developed). The pipeline UI shows all stages but only requires input at the ones the user actually reaches, so the model stays complete without forcing every field.",
  },
  {
    type: "paragraph",
    boldLabel: true,
    text: "One camera, many rolls, one gallery each: Early sketches attached photos to the camera rather than the roll, which quickly became a mess once a camera had a long shooting history. Moving the image gallery down to the roll level kept every scan traceable to the exact stock and date that produced it.",
  },

  { type: "heading", text: "Outcome" },
  {
    type: "paragraph",
    text: "RollKeeper is still in active development — usage results, feedback from other shooters, and any release metrics will be added here once available.",
  },

  { type: "heading", text: "Reflection & Next Steps" },
  {
    type: "paragraph",
    text: "Building RollKeeper reinforced that the highest-value feature for a niche logging app isn't more fields — it's making the current state (what's loaded, right now, in every camera) impossible to miss. Future directions include a barcode scan for film boxes to speed up the load-film flow, a lab directory for frequently used developers, and a home-screen widget surfacing loaded film without opening the app at all.",
  },
];
