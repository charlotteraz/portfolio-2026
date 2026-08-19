import type { ReactNode } from "react";
import Image from "next/image";

export type StackLayer =
  | { id: string; kind: "image"; src: string; alt: string }
  | { id: string; kind: "color"; className: string }
  | { id: string; kind: "custom"; content: ReactNode };

type SlotGeometry = { className: string; shadow?: boolean };

// A static stack of cards (front to back) — the two rear layers are flat
// color placeholders. Only the front card holds a real image, so only it
// scales up on hover; the back layers stay put.
export function ProjectCardStack({
  layers,
  slots,
  aspectClassName,
  eager,
}: {
  layers: StackLayer[];
  slots: SlotGeometry[];
  aspectClassName: string;
  // The front image of a card near the top of /work can end up being the
  // page's Largest Contentful Paint — set for rows likely above the fold
  // so Next doesn't lazy-load past their natural paint time.
  eager?: boolean;
}) {
  return (
    <div className={`group ${aspectClassName}`}>
      {layers.map((layer, rank) => {
        const slot = slots[rank];
        if (!slot) return null;
        const isFront = rank === 0;

        return (
          <div
            key={layer.id}
            style={{ zIndex: slots.length - rank }}
            className={`absolute overflow-hidden rounded-[20px] ${slot.className} ${
              slot.shadow ? "shadow-[0px_8px_51.1px_-12px_rgba(0,0,0,0.25)]" : ""
            } ${layer.kind === "color" ? layer.className : ""}`}
          >
            <div
              className={`relative h-full w-full ${
                isFront ? "transition-transform duration-300 ease-out group-hover:scale-105" : ""
              }`}
            >
              {layer.kind === "image" && (
                <Image
                  src={layer.src}
                  alt={layer.alt}
                  fill
                  sizes="(min-width: 1024px) 614px, 100vw"
                  loading={isFront && eager ? "eager" : undefined}
                  className="pointer-events-none object-cover"
                />
              )}
              {layer.kind === "custom" && layer.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
