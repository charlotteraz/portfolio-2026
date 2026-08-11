import Image from "next/image";

export function BookTreeHeroVisual() {
  return (
    <div className="relative aspect-[5470/2917] w-full">
      <Image
        src="/images/projects/booktree-hero.png"
        alt="Four BookTree app screens showing the home feed, a book's details page, read-together progress with a friend, and the in-app reading view"
        fill
        sizes="(min-width: 900px) 900px, 100vw"
        className="object-contain"
      />
    </div>
  );
}
