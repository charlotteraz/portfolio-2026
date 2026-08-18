import Image from "next/image";
import { getTocEntries, type ContentBlock } from "./case-study-content";

// Splits "Label: rest of text" so the label can render bold while the rest
// stays regular weight. Falls back to plain text when there's no leading
// "Word(s):" prefix to split on.
function splitLabel(text: string): [string, string] | null {
  const match = text.match(/^([A-Za-z][A-Za-z ]*:)(\s*)([\s\S]*)$/);
  if (!match) return null;
  return [match[1], match[2] + match[3]];
}

function List({
  ordered,
  label,
  boldLabels,
  items,
}: {
  ordered?: boolean;
  label?: string;
  boldLabels?: boolean;
  items: string[];
}) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col gap-2">
      {label && <p className="font-sofia text-[15px] font-semibold text-black">{label}</p>}
      <ListTag
        className={`flex flex-col gap-2 font-sofia text-[16px] font-light leading-6 text-[#626262] ${
          ordered ? "list-decimal pl-5" : "list-disc pl-5"
        }`}
      >
        {items.map((item, i) => {
          const split = boldLabels ? splitLabel(item) : null;
          return (
            <li key={i}>
              {split ? (
                <>
                  <span className="font-semibold text-black">{split[0]}</span>
                  {split[1]}
                </>
              ) : (
                item
              )}
            </li>
          );
        })}
      </ListTag>
    </div>
  );
}

function PersonaCard({ block }: { block: Extract<ContentBlock, { type: "persona" }> }) {
  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col gap-4 rounded-[16px] bg-[#f7f7f7] p-6">
      <div>
        <p className="font-sofia text-[18px] font-bold text-black">{block.name}</p>
        {block.meta && <p className="font-sofia text-[14px] text-[#757575]">{block.meta}</p>}
      </div>
      {block.bio && (
        <p className="font-sofia text-[15px] font-light leading-6 text-[#626262]">{block.bio}</p>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {block.groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <p className="font-sofia text-[14px] font-semibold text-black">{group.label}</p>
            <ul className="flex flex-col gap-1.5 font-sofia text-[15px] font-light leading-6 text-[#626262]">
              {group.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-[#a8a8a8]">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompetitorCard({ block }: { block: Extract<ContentBlock, { type: "competitor" }> }) {
  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col gap-4 rounded-[16px] bg-[#f7f7f7] p-6">
      <p className="font-sofia text-[18px] font-bold text-black">{block.name}</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="font-sofia text-[14px] font-semibold text-black">Strengths</p>
          <ul className="flex flex-col gap-1.5 font-sofia text-[15px] font-light leading-6 text-[#626262]">
            {block.strengths.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden className="text-[#a8a8a8]">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sofia text-[14px] font-semibold text-black">Weaknesses</p>
          <ul className="flex flex-col gap-1.5 font-sofia text-[15px] font-light leading-6 text-[#626262]">
            {block.weaknesses.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden className="text-[#a8a8a8]">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function HmwGrid({ block }: { block: Extract<ContentBlock, { type: "hmw" }> }) {
  return (
    <div className="mx-auto grid w-full max-w-[820px] grid-cols-1 gap-6 md:grid-cols-2">
      {block.rows.map((row, i) => (
        <div key={i} className="flex flex-col gap-3 rounded-[16px] bg-[#f7f7f7] p-5">
          <div>
            <p className="font-sofia text-[12px] font-semibold uppercase tracking-wide text-[#9a9a9a]">
              Insight
            </p>
            <p className="font-sofia text-[14px] font-light leading-5 text-[#626262]">{row.insight}</p>
          </div>
          <div>
            <p className="font-sofia text-[12px] font-semibold uppercase tracking-wide text-[#9a9a9a]">
              Need
            </p>
            <p className="font-sofia text-[14px] font-light leading-5 text-[#626262]">{row.need}</p>
          </div>
          <div>
            <p className="font-sofia text-[12px] font-semibold uppercase tracking-wide text-[#9a9a9a]">
              POV
            </p>
            <p className="font-sofia text-[14px] font-light leading-5 text-[#626262]">{row.pov}</p>
          </div>
          <div>
            <p className="font-sofia text-[12px] font-semibold uppercase tracking-wide text-link">
              How might we
            </p>
            <p className="font-sofia text-[16px] font-medium leading-6 text-black">{row.hmw}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyBlocks({ blocks }: { blocks: ContentBlock[] }) {
  const toc = getTocEntries(blocks);
  let headingCursor = 0;

  return (
    <div className="flex w-full flex-col items-center gap-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "part": {
            const id = toc[headingCursor++].id;
            return (
              <div
                key={index}
                id={id}
                className="w-full max-w-[820px] scroll-mt-24 border-t border-[#ececec] pt-10"
              >
                <p className="font-sofia text-[28px] font-bold text-black sm:text-[32px]">
                  {block.text}
                </p>
              </div>
            );
          }
          case "heading": {
            const id = toc[headingCursor++].id;
            return (
              <p
                key={index}
                id={id}
                className="w-full max-w-[820px] scroll-mt-24 text-left font-sofia text-[22px] font-bold text-black"
              >
                {block.text}
              </p>
            );
          }
          case "paragraph": {
            const split = block.boldLabel ? splitLabel(block.text) : null;
            return (
              <div key={index} className="mx-auto flex w-full max-w-[820px] flex-col gap-2">
                <p className="font-sofia text-[17px] font-light leading-7 text-[#626262]">
                  {split ? (
                    <>
                      <span className="font-semibold text-black">{split[0]}</span>
                      {split[1]}
                    </>
                  ) : (
                    block.text
                  )}
                </p>
                {block.link && (
                  <a
                    href={block.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-1 font-sofia text-[15px] font-medium text-link underline underline-offset-2 transition-opacity hover:opacity-70"
                  >
                    {block.link.label} ↗
                  </a>
                )}
              </div>
            );
          }
          case "list":
            return (
              <List
                key={index}
                ordered={block.ordered}
                label={block.label}
                boldLabels={block.boldLabels}
                items={block.items}
              />
            );
          case "image":
            return (
              <div key={index} className="mx-auto w-full max-w-[900px] overflow-hidden rounded-[16px] shadow-[0px_8px_51.1px_-12px_rgba(0,0,0,0.15)]">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  sizes="(min-width: 900px) 900px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            );
          case "image-row":
            return (
              <div
                key={index}
                className="mx-auto flex w-full flex-col gap-4 sm:flex-row"
                style={{ maxWidth: block.images.length > 1 ? 560 : 270 }}
              >
                {block.images.map((image, i) => (
                  <div key={i} className="flex-1">
                    {/* These screenshots already have transparent, device-rounded
                        corners baked in — a box radius/shadow would clip them to a
                        mismatched rectangle, so use a silhouette-following drop-shadow
                        instead of a box-shadow. */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 560px) 270px, 100vw"
                      className="h-auto w-full drop-shadow-[0px_8px_30px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                ))}
              </div>
            );
          case "embed":
            return (
              <div
                key={index}
                className="mx-auto w-full max-w-[900px] overflow-hidden rounded-[16px] shadow-[0px_8px_51.1px_-12px_rgba(0,0,0,0.15)]"
                style={{ aspectRatio: `${block.width} / ${block.height}` }}
              >
                <iframe
                  src={block.src}
                  title={block.title}
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            );
          case "table":
            return (
              <div key={index} className="mx-auto w-full max-w-[820px] overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse font-sofia text-[15px]">
                  <thead>
                    <tr className="border-b border-[#ececec]">
                      {block.columns.map((column) => (
                        <th
                          key={column}
                          className="px-3 py-2 text-left text-[13px] font-semibold uppercase tracking-wide text-[#9a9a9a]"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-[#ececec] align-top">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`px-3 py-3 font-light leading-6 text-[#626262] ${
                              cellIndex === 0 ? "font-medium text-black" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "persona":
            return <PersonaCard key={index} block={block} />;
          case "competitor":
            return <CompetitorCard key={index} block={block} />;
          case "hmw":
            return <HmwGrid key={index} block={block} />;
          case "divider":
            return <hr key={index} className="w-full max-w-[820px] border-[#ececec]" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
