import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectTag } from "@/components/projects/shared/project-tag";
import { PrivateGate } from "@/components/projects/shared/private-gate";
import { PROJECTS, getProject } from "@/components/projects/project-data";
import { CaseStudyBlocks } from "@/components/projects/case-study/case-study-blocks";
import { CaseStudyNav } from "@/components/projects/case-study/case-study-nav";
import { getMainTocEntries } from "@/components/projects/case-study/case-study-content";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Charlotte Raz`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const Visual = project.HeroVisual ?? project.Visual;
  const toc = getMainTocEntries(project.content);
  const shippedTag = project.tags.find((tag) => tag.label === "Shipped");

  return (
    <PrivateGate active={project.private}>
      <div className="flex w-full max-w-[1728px] flex-col items-center gap-16 px-6 py-16 sm:px-10 lg:gap-24 lg:px-[90px] lg:py-20 xl:px-[212px]">
        <CaseStudyNav entries={toc} />
        <BackToTopButton />

        <div className="w-full">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-sofia text-[16px] font-medium text-[#757575] transition-colors duration-200 hover:text-link"
          >
            <span aria-hidden className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to Work
          </Link>
        </div>

        <div className="flex w-full flex-col items-center gap-8 text-center">
          <p className="font-sofia text-[40px] font-bold leading-[42px] text-black sm:text-[56px] sm:leading-[58px]">
            {project.title}
          </p>
          {shippedTag && <ProjectTag {...shippedTag} />}
        </div>

        <div className="w-full max-w-[900px]">
          <Visual />
        </div>

        <CaseStudyBlocks blocks={project.content} />
      </div>
    </PrivateGate>
  );
}
