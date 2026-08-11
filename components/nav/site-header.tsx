import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center bg-white px-9 py-[18px] uppercase">
      <Link href="/" className="font-sofia text-[20px] font-semibold text-black">
        Charlotte Raz
      </Link>
    </header>
  );
}
