import { FeaturedProject } from "./featured-project";
import { PROJECTS } from "../project-data";

export function FeaturedProjects() {
  return (
    <section
      id="work"
      className="flex w-full scroll-mt-24 flex-col items-center gap-[120px] lg:gap-[200px]"
    >
      {PROJECTS.map((project, index) => (
        <FeaturedProject
          key={project.slug}
          href={`/work/${project.slug}`}
          reverse={index % 2 === 1}
          wide={index === 0}
          title={project.title}
          description={project.description}
          tags={project.tags}
          isPrivate={project.private}
          visual={<project.Visual />}
        />
      ))}
    </section>
  );
}
