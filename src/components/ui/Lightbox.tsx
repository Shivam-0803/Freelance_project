"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import type { GalleryImage } from "@/data/gallery";

export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: GalleryImage[];
  index: number | null;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const isOpen = index !== null;
  const current = index !== null ? images[index] : null;

  const goPrev = React.useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = React.useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  React.useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goPrev, goNext]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && current && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-0 z-[101] flex flex-col items-center justify-center px-4 py-10 sm:px-10"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Dialog.Title className="sr-only">{current.alt}</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-soft text-bone transition hover:border-amber hover:text-amber sm:right-8 sm:top-8"
                    aria-label="Close image"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>

                <button
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-soft text-bone transition hover:border-amber hover:text-amber sm:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-soft text-bone transition hover:border-amber hover:text-amber sm:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="relative flex max-h-[80vh] w-full max-w-5xl items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative max-h-[80vh] w-full"
                      style={{ aspectRatio: `${current.width} / ${current.height}` }}
                    >
                      <Image
                        src={current.src}
                        alt={current.alt}
                        fill
                        sizes="100vw"
                        className="rounded-lg object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-5 max-w-2xl text-center">
                  <p className="text-sm text-bone-dim">{current.alt}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-amber">
                    {index !== null ? index + 1 : 0} / {images.length}
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
