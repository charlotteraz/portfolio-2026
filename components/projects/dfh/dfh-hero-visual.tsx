import Image from "next/image";

export function DfhHeroVisual() {
  return (
    <div className="relative aspect-[8255/3106] w-full">
      <Image
        src="/images/projects/dfh-hero-v2.png"
        alt="Dragonfly Health design system documentation showing System Colors, web typography, the Buttons library, and Segmented Control"
        fill
        sizes="(min-width: 900px) 900px, 100vw"
        className="object-contain"
      />
    </div>
  );
}
