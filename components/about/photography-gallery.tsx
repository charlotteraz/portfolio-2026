"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "/images/about/photography/photo-01.jpg", width: 1776, height: 1184 },
  { src: "/images/about/photography/photo-02.jpg", width: 1776, height: 1184 },
  { src: "/images/about/photography/photo-03.jpg", width: 1496, height: 997 },
  { src: "/images/about/photography/photo-04.jpg", width: 1545, height: 1024 },
  { src: "/images/about/photography/photo-05.jpg", width: 1545, height: 1024 },
  { src: "/images/about/photography/photo-06.jpg", width: 1776, height: 1184 },
  { src: "/images/about/photography/photo-07.jpg", width: 1024, height: 1545 },
  { src: "/images/about/photography/photo-08.jpg", width: 1024, height: 1545 },
  { src: "/images/about/photography/photo-09.jpg", width: 1545, height: 1024 },
  { src: "/images/about/photography/photo-10.jpg", width: 1024, height: 1024 },
  { src: "/images/about/photography/photo-11.jpg", width: 1184, height: 1776 },
  { src: "/images/about/photography/photo-12.jpg", width: 2000, height: 1124 },
  { src: "/images/about/photography/photo-13.jpg", width: 2000, height: 1124 },
  { src: "/images/about/photography/photo-14.jpg", width: 2000, height: 1124 },
  { src: "/images/about/photography/photo-15.jpg", width: 2000, height: 1333 },
  { src: "/images/about/photography/photo-16.jpg", width: 2000, height: 1333 },
  { src: "/images/about/photography/photo-17.jpg", width: 2000, height: 1124 },
  { src: "/images/about/photography/photo-18.jpg", width: 2000, height: 1333 },
  { src: "/images/about/photography/photo-19.jpg", width: 2000, height: 1124 },
  { src: "/images/about/photography/photo-20.jpg", width: 2000, height: 1124 },
  { src: "/images/about/photography/photo-21.jpg", width: 2000, height: 1333 },
  { src: "/images/about/photography/photo-22.jpg", width: 2000, height: 1333 },
  { src: "/images/about/photography/photo-23.jpg", width: 2000, height: 1333 },
];

export function PhotographyGallery() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const openPhoto = PHOTOS.find((photo) => photo.src === openSrc);

  useEffect(() => {
    if (!openSrc) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSrc(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSrc]);

  return (
    <div className="flex w-full max-w-[1100px] flex-col items-start gap-8">
      <p className="font-sofia text-[28px] font-bold text-black sm:text-[32px]">Photography</p>
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PHOTOS.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenSrc(photo.src)}
            aria-label={`View larger photo ${index + 1}`}
            className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-[12px] shadow-[0px_8px_51.1px_-12px_rgba(0,0,0,0.25)]"
          >
            <Image
              src={photo.src}
              alt={`Photography sample ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10"
          onClick={() => setOpenSrc(null)}
        >
          <button
            type="button"
            onClick={() => setOpenSrc(null)}
            aria-label="Close image viewer"
            className="fixed right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-sofia text-[20px] text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
          <Image
            src={openPhoto.src}
            alt="Photography sample, enlarged"
            width={openPhoto.width}
            height={openPhoto.height}
            onClick={(e) => e.stopPropagation()}
            className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-[10px] object-contain"
          />
        </div>
      )}
    </div>
  );
}
