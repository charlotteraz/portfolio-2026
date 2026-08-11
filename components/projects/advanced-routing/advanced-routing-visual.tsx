import { ProjectCardStack, type StackLayer } from "../shared/project-card-stack";

const layers: StackLayer[] = [
  {
    id: "route",
    kind: "image",
    src: "/images/projects/advanced-routing.png",
    alt: "Advanced Routing app showing an optimized delivery route on a map with a destinations list",
  },
  { id: "mid", kind: "color", className: "bg-[#94d2cf]/58" },
  { id: "back", kind: "color", className: "bg-[#96bbb6]" },
];

const slots = [
  { className: "left-0 top-0 h-[87%] w-[90%]", shadow: true },
  { className: "left-[3%] top-[4%] h-[90%] w-[92%]" },
  { className: "left-[9%] top-[12%] h-[87%] w-[91%]" },
];

export function AdvancedRoutingVisual() {
  return (
    <ProjectCardStack
      layers={layers}
      slots={slots}
      aspectClassName="relative aspect-[614/480] w-full"
    />
  );
}
