export type ContentBlock =
  | { type: "part"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "paragraph";
      text: string;
      link?: { label: string; href: string };
      boldLabel?: boolean;
    }
  | { type: "list"; ordered?: boolean; label?: string; boldLabels?: boolean; items: string[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "embed"; src: string; title: string; width: number; height: number }
  | { type: "table"; columns: string[]; rows: string[][] }
  | {
      type: "persona";
      name: string;
      meta?: string;
      bio?: string;
      groups: { label: string; items: string[] }[];
    }
  | { type: "competitor"; name: string; strengths: string[]; weaknesses: string[] }
  | { type: "hmw"; rows: { insight: string; need: string; pov: string; hmw: string }[] }
  | { type: "divider" };

export type TocEntry = { id: string; text: string; level: "part" | "heading" };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Shared by the renderer (to set matching `id`s on headings) and the section
// nav (to build its links) so the two never drift out of sync.
export function getTocEntries(blocks: ContentBlock[]): TocEntry[] {
  const seen = new Map<string, number>();
  const entries: TocEntry[] = [];

  for (const block of blocks) {
    if (block.type !== "part" && block.type !== "heading") continue;

    const base = slugify(block.text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    entries.push({ id: count === 0 ? base : `${base}-${count}`, text: block.text, level: block.type });
  }

  return entries;
}

// A condensed table of contents: just the top-level "Part" sections, plus
// an "About" entry for whatever intro content (Objective, Background, etc.)
// comes before the first Part — so the nav stays short even on a page with
// dozens of headings. Falls back to the full list when there's no Part
// structure to condense (that page is short enough not to need condensing).
export function getMainTocEntries(blocks: ContentBlock[]): TocEntry[] {
  const all = getTocEntries(blocks);
  const parts = all.filter((entry) => entry.level === "part");
  if (parts.length === 0) return all;

  const entries: TocEntry[] = [];
  if (all[0] && all[0].level !== "part") {
    entries.push({ id: all[0].id, text: "About", level: "heading" });
  }
  entries.push(...parts);
  return entries;
}
