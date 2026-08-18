import { ProjectCardStack, type StackLayer } from "../shared/project-card-stack";

// Matches the Figma composition (node 2078:160): three offset rounded-rect
// cards behind the phone mockups. Only the front image layer animates.
const layers: StackLayer[] = [
  {
    id: "phones",
    kind: "image",
    src: "/images/projects/rollkeeper-phones.png",
    alt: "Three RollKeeper app screens showing the film library, camera list, and roll status tracker",
  },
  { id: "cream", kind: "color", className: "bg-[#f5f0e9]" },
  { id: "peach", kind: "color", className: "bg-[#f9b09a]" },
  { id: "yellow", kind: "color", className: "bg-[#f9e19a]" },
];

const slots = [
  // Same box as the cream layer directly behind it, so any transparent gap
  // in the phones cutout reveals cream instead of the page background.
  { className: "left-[7%] top-[3%] h-[87%] w-[86%]", shadow: true },
  { className: "left-[7%] top-[3%] h-[87%] w-[86%]" },
  { className: "left-[11%] top-[9%] h-[87%] w-[86%]" },
  { className: "left-[2%] -top-[2%] h-[87%] w-[86%]" },
];

export function RollKeeperVisual() {
  return (
    <ProjectCardStack
      layers={layers}
      slots={slots}
      aspectClassName="relative aspect-[647/482] w-full"
    />
  );
}
