import type { ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { ProjectTag } from "../shared/project-tag";
import { TextTagList } from "../shared/text-tag-list";
import type { ProjectTagData } from "../project-data";

type FeaturedProjectProps = {
  href: string;
  title: string;
  description: ReactNode;
  tags: ProjectTagData[];
  isPrivate?: boolean;
  visual: ReactNode;
  reverse?: boolean;
  // Per Figma, the first project's row is wider (109px gap vs the usual
  // 76px) so it fills the full content width edge-to-edge.
  wide?: boolean;
};

export function FeaturedProject({
  href,
  title,
  description,
  tags,
  isPrivate,
  visual,
  reverse,
  wide,
}: FeaturedProjectProps) {
  const shippedTag = tags.find((tag) => tag.label === "Shipped");
  const restTags = tags.filter((tag) => tag.label !== "Shipped");

  return (
    <div
      className={`flex w-full flex-col items-center gap-10 ${
        wide ? "lg:gap-[109px]" : "lg:gap-[76px]"
      } ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="flex w-full max-w-[505px] flex-col items-center gap-8 text-center">
        <Link href={href} className="group inline-block">
          <p className="font-sofia text-[40px] font-bold leading-[42px] text-black transition-colors duration-200 group-hover:text-link sm:text-[48px]">
            {title}
          </p>
          <span className="mx-auto block h-[2px] w-0 rounded-full bg-link transition-[width] duration-200 group-hover:w-full" />
        </Link>
        {(shippedTag || isPrivate) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {shippedTag && <ProjectTag {...shippedTag} />}
            {isPrivate && (
              <span className="group/lock relative inline-flex">
                <FontAwesomeIcon
                  icon={faLock}
                  tabIndex={0}
                  aria-label="Private: requires an access code"
                  className="h-4 w-4 text-[#757575] outline-none"
                />
                <span
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max max-w-[200px] -translate-x-1/2 rounded-md bg-[#303030] px-3 py-1.5 text-center font-sofia text-[13px] font-normal text-white opacity-0 transition-opacity duration-150 group-hover/lock:opacity-100 group-focus-within/lock:opacity-100"
                >
                  This project is private and requires an access code
                  <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#303030]" />
                </span>
              </span>
            )}
          </div>
        )}
        <div className="flex flex-col items-center gap-4">
          <p className="font-sofia text-[20px] font-light leading-8 text-black">
            {description}
          </p>
          <TextTagList tags={restTags} />
        </div>
      </div>
      <Link href={href} className="block w-full max-w-[614px] shrink-0">
        {visual}
      </Link>
    </div>
  );
}
