import { ProjectCardStack, type StackLayer } from "../shared/project-card-stack";

const layers: StackLayer[] = [
  {
    id: "mockup",
    kind: "image",
    src: "/images/projects/dfh-design-system.png",
    alt: "Dragonfly Health design system documentation — color palette, typography, and buttons",
  },
  { id: "mid", kind: "color", className: "bg-[#e7efff]" },
  { id: "back", kind: "color", className: "bg-[#8ea9de]" },
];

const slots = [
  { className: "left-[6%] top-0 h-[85.5%] w-[88.5%]", shadow: true },
  { className: "left-0 top-[4.5%] h-[89%] w-[90.5%]" },
  { className: "left-[11%] top-[13.5%] h-[86.5%] w-[89%]" },
];

export function DfhVisual() {
  return (
    <ProjectCardStack
      layers={layers}
      slots={slots}
      aspectClassName="relative aspect-[626/485] w-full"
    />
  );
}
