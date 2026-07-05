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
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-transparent text-bone"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/nichols-and-sons-construction-excavation-contractor-canton-ms-hero-img.png"
          alt="Nichols and Sons Construction excavation contractor serving Canton, Mississippi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlays — nav blend (top), left radial, bottom fade; single layer, no seam */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 6%, rgba(0,0,0,0.35) 14%, transparent 24%), radial-gradient(circle at left center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.18) 65%, transparent 100%), linear-gradient(180deg, transparent 45%, oklch(10% 0.012 50 / 0.45) 100%)",
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
          className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg"
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
          <Button asChild variant="primary" size="lg">
            <a href="#services">View Services</a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
