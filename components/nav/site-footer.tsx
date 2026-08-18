export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-8 text-center sm:px-10 lg:px-[90px]">
      <p className="font-sofia text-[13px] font-light text-[#8c8c8c]">
        © {year} Charlotte Raz
      </p>
    </footer>
  );
}
