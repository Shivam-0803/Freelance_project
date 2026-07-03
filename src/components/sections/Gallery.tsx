"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/data/gallery";

export function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState<GalleryCategory | "All">(
    "All"
  );
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filtered = React.useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="gallery" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Real Jobs, Real Dirt, Real Results"
          subtitle="A look at land clearing, site prep, land leveling, pond building, and more from projects across Canton, Mississippi."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {(["All", ...galleryCategories] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300",
                activeCategory === category
                  ? "border-ink bg-ink text-bone"
                  : "border-border bg-card text-muted hover:border-clay hover:text-clay"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((image) => {
              const fullIndex = galleryImages.indexOf(image);
              return (
                <motion.button
                  layout
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setLightboxIndex(fullIndex)}
                  className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bold)]"
                  aria-label={`Open image: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
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
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
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
