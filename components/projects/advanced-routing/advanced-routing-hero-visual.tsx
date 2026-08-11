import Image from "next/image";

export function AdvancedRoutingHeroVisual() {
  return (
    <div className="relative aspect-[2116/1319] w-full">
      <Image
        src="/images/projects/advanced-routing-hero-v1.png"
        alt="Two Route #17 popups side by side: one showing a manually updated route with a remove-order confirmation, the other showing an optimized route with a stop flagged as not in the optimized sequence"
        fill
        sizes="(min-width: 900px) 900px, 100vw"
        className="object-contain"
      />
    </div>
  );
}
