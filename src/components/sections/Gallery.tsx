"use client";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

const AUTOPLAY_DELAY = 3200;
const RESUME_DELAY = 4000;

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const pausedRef = React.useRef(false);
  const resumeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = React.useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const pause = React.useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const scheduleResume = React.useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  }, []);

  const step = React.useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.82 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const goPrev = () => {
    pause();
    step(-1);
    scheduleResume();
  };

  const goNext = () => {
    pause();
    step(1);
    scheduleResume();
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollerRef.current;
      if (!el || pausedRef.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.55, behavior: "smooth" });
      }
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    pause();
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  }

  function onPointerUp() {
    drag.current.down = false;
    scheduleResume();
  }

  function handleCardClick(fullIndex: number) {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setLightboxIndex(fullIndex);
  }

  return (
    <section id="gallery" className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            className="mx-0"
            eyebrow="Featured Projects"
            title="Real Jobs, Real Dirt, Real Results"
            subtitle="Every project photo we have — land clearing, site prep, land leveling, pond building, and more from across Canton, Mississippi."
          />
          <div className="mb-1 hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Scroll gallery left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-heading transition hover:border-clay hover:text-clay"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Scroll gallery right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-heading transition hover:border-clay hover:text-clay"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={pause}
          onMouseLeave={scheduleResume}
          onTouchStart={pause}
          onTouchEnd={scheduleResume}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="no-scrollbar mt-10 flex cursor-grab gap-4 overflow-x-auto scroll-smooth pb-2 active:cursor-grabbing"
        >
          {galleryImages.map((image, fullIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => handleCardClick(fullIndex)}
              aria-label={`Open image: ${image.alt}`}
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
              className="group relative h-64 shrink-0 select-none overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bold)] sm:h-72 lg:h-80"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                loading="lazy"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 260px"
                className="pointer-events-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between gap-3 p-4">
                  <span className="text-left text-xs font-semibold uppercase tracking-wide text-bone">
                    {image.category}
                  </span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber text-ink">
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Container>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
