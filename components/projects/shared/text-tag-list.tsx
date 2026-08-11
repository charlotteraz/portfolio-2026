type TextTagListProps = {
  tags: { label: string }[];
};

export function TextTagList({ tags }: TextTagListProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {tags.map((tag, index) => (
        <div key={tag.label} className="flex items-center gap-4">
          {index > 0 && <span className="size-[6px] shrink-0 rounded-full bg-[#303030]" />}
          <span className="font-sofia text-[16px] font-medium text-[#303030]">{tag.label}</span>
        </div>
      ))}
    </div>
  );
}
