import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ProjectTagProps = {
  label: string;
  icon?: { src: string; size?: number };
  faIcon?: IconDefinition;
};

export function ProjectTag({ label, icon, faIcon }: ProjectTagProps) {
  const size = icon?.size ?? 28;

  return (
    <span className="inline-flex h-9 items-center gap-[10px] whitespace-nowrap rounded-[20px] bg-[#f5f5f5] px-[10px] font-sofia text-[16px] font-normal text-[#626262]">
      {label}
      {icon && (
        <Image src={icon.src} alt="" width={size} height={size} className="shrink-0 object-contain" />
      )}
      {faIcon && <FontAwesomeIcon icon={faIcon} className="h-4 w-4 shrink-0" />}
    </span>
  );
}
