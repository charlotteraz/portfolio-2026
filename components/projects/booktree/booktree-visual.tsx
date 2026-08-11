import { ProjectCardStack, type StackLayer } from "../shared/project-card-stack";

const layers: StackLayer[] = [
  { id: "cover", kind: "image", src: "/images/projects/booktree-cover.png", alt: "BookTree app screens" },
  { id: "mid", kind: "color", className: "bg-[#99aba8]" },
  { id: "back", kind: "color", className: "bg-[#23592b]/33" },
];

const slots = [
  { className: "left-0 top-0 h-[87%] w-[90%]", shadow: true },
  { className: "left-[3%] top-[3.5%] h-[90%] w-[92%]" },
  { className: "left-[9%] top-[12.5%] h-[87.5%] w-[91%]" },
];

export function BookTreeVisual() {
  return (
    <ProjectCardStack
      layers={layers}
      slots={slots}
      aspectClassName="relative aspect-[614/479] w-full"
    />
  );
}
