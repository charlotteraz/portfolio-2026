import { FeaturedProjects } from "@/components/projects/list/featured-projects";

export default function Work() {
  return (
    <div className="flex w-full max-w-[1728px] flex-col items-center gap-24 px-6 py-16 sm:px-10 lg:gap-32 lg:px-[90px] lg:py-20 xl:px-[212px]">
      <FeaturedProjects />
    </div>
  );
}
