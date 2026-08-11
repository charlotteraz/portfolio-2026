"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CommentArrowIcon } from "../icons/comment-arrow-icon";

const EASE = [0.4, 0, 0.2, 1] as const;
const DRAG_TAP_THRESHOLD = 4;

export function NavBadge({
  href,
  letter,
  label,
  subtitle,
  accentColor,
  accentTextColor,
  expandedWidth,
  expandedHeight,
  idleSize,
  letterFontSize,
  left,
  top,
  dragConstraints,
  external,
}: {
  href: string;
  letter: string;
  label: string;
  subtitle: string;
  accentColor: string;
  accentTextColor: string;
  expandedWidth: number;
  expandedHeight: number;
  // Idle-circle diameter and its letter's font size — per Figma, these
  // differ by page (40px/16px on Work, 60px/20px on Home), so both are
  // caller-supplied rather than hardcoded.
  idleSize: number;
  letterFontSize: number;
  left: number;
  top: number;
  // Static offsets (not a live ref) — framer-motion recalculates a
  // ref-based dragConstraints box against the *current* element size on
  // every render, which fires a spurious corrective transform whenever
  // this badge's own width/height animate (e.g. on hover-expand). Passing
  // plain numbers sidesteps that live re-measurement entirely.
  dragConstraints: { left: number; right: number; top: number; bottom: number };
  // When true, href points outside the app (e.g. a static file) — clicks
  // fall through to the browser's native new-tab handling instead of the
  // SPA tap/click interception below.
  external?: boolean;
}) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragDistance = useRef(0);
  // Collapsed while dragging so the badge's footprint never grows past the
  // 40x40 circle mid-drag — otherwise the anchor used to re-expand after
  // release wouldn't match the point the user actually dropped it at.
  const expanded = hovered && !isDragging;

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${label} — ${subtitle}`}
      draggable={false}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.12}
      dragMomentum={false}
      onDragStart={() => {
        setIsDragging(true);
        dragDistance.current = 0;
      }}
      onDrag={(_, info) => {
        dragDistance.current += Math.abs(info.delta.x) + Math.abs(info.delta.y);
      }}
      onDragEnd={() => setIsDragging(false)}
      onClick={(event) => {
        // Navigation is driven by onTap (below), which framer-motion fires
        // on release regardless of whether a drag happened, so the drag
        // distance is checked there. The native click still fires
        // alongside it, so suppress it here to avoid a double-navigation —
        // except for modifier-clicks, which should fall through to the
        // browser's native "open in new tab" handling. External links skip
        // this entirely so the native target="_blank" behavior applies.
        if (!external && !event.metaKey && !event.ctrlKey && !event.shiftKey && event.button === 0) {
          event.preventDefault();
        }
      }}
      onTap={(event) => {
        const wasDragged = dragDistance.current > DRAG_TAP_THRESHOLD;
        dragDistance.current = 0;
        if (!external && !wasDragged && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
          router.push(href);
        }
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={false}
      animate={{
        width: expanded ? expandedWidth : idleSize,
        height: expanded ? expandedHeight : idleSize,
        borderTopLeftRadius: expanded ? 24 : idleSize / 2,
        borderTopRightRadius: expanded ? 24 : idleSize / 2,
        borderBottomRightRadius: expanded ? 24 : idleSize / 2,
      }}
      transition={{ duration: 0.3, ease: EASE }}
      style={{ borderBottomLeftRadius: 0, touchAction: "none", left, top }}
      className={`absolute cursor-grab overflow-hidden bg-[#303030] shadow-[0px_2px_4px_rgba(0,0,0,0.51)] active:cursor-grabbing ${expanded ? "z-20" : "z-10"}`}
    >
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <span
          className="flex size-[76%] items-center justify-center rounded-full font-sofia font-medium"
          style={{ backgroundColor: accentColor, color: accentTextColor, fontSize: letterFontSize }}
        >
          {letter}
        </span>
      </motion.span>
      <motion.span
        className="absolute inset-0 flex flex-col items-start justify-start gap-1 p-4"
        initial={false}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.15, delay: expanded ? 0.1 : 0 }}
      >
        <span
          className="flex h-[39px] shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 font-sofia text-[16px] font-medium"
          style={{ backgroundColor: accentColor, color: accentTextColor }}
        >
          {label}
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap font-sofia text-[13px] font-light text-white">
          {subtitle}
          <CommentArrowIcon className="-rotate-90" style={{ color: accentColor }} />
        </span>
      </motion.span>
    </motion.a>
  );
}
