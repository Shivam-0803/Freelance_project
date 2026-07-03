"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { links, site } from "@/data/site";

const easing = [0.16, 1, 0.3, 1] as const;

const headlineWords = [
  "Professional",
  "Excavation",
  "&",
  "Land",
  "Clearing",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-bone"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, ease: "easeOut" }}
        >
          <Image
            src="/images/gallery/excavation-cat-dozer-cut-01.jpg"
            alt="Bulldozer cutting a grade bank on an excavation site in Canton, Mississippi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(110% 90% at 78% 20%, oklch(18% 0.02 55 / 0.35) 0%, oklch(10% 0.015 50 / 0.88) 55%, oklch(8% 0.01 50 / 0.97) 100%), linear-gradient(180deg, transparent 45%, var(--ink) 100%)",
        }}
      />

      {/* Soft film-grain texture, in place of a technical grid */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.22] mix-blend-overlay motion-safe:animate-drift"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.35" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <Container className="relative flex flex-col pb-20 pt-32 sm:pt-36">
        <motion.div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-bone-dim"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/10 px-3 py-1.5 text-amber">
            Family-Owned &amp; Operated
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {site.location.display}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Mon–Fri 8–5
          </span>
        </motion.div>

        <h1 className="mt-8 max-w-3xl font-heading font-bold uppercase leading-[1.08] tracking-tight text-bone [font-size:clamp(2.1rem,5.6vw,4rem)]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className={`mr-3 inline-block last:mr-0 ${
                word === "Land" || word === "Clearing" ? "text-amber" : ""
              }`}
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.07,
                ease: easing,
              }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 + headlineWords.length * 0.07, ease: easing }}
          >
            in Canton, Mississippi
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-bone-dim sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: easing }}
        >
          Land clearing, site preparation, dirt hauling, and land leveling for
          homeowners, builders, and landowners across Canton, Mississippi and
          the surrounding area.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.78, ease: easing }}
        >
          <Button asChild size="lg">
            <a href={links.tel}>
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={links.sms}>
              <MessageSquare className="h-4 w-4" />
              Text Us
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#services">View Services</a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
