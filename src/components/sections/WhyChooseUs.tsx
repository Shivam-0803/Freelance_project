"use client";

import { Award, BadgeCheck, MapPin, ShieldCheck, Wrench } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Award,
    title: "Experience",
    description:
      "Hands-on excavation and land-clearing experience across Madison County and the greater Canton area, on every type of terrain Mississippi soil can throw at us.",
  },
  {
    icon: Wrench,
    title: "Reliable Equipment",
    description:
      "Dozers, tractors, and land-moving equipment kept in real working condition, serviced and ready for the next job.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Work",
    description:
      "Clean cuts, proper grading, and finished sites that hold up — we don't leave a job until it's done right.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Service",
    description:
      "Straightforward quotes, clear communication, and a crew that shows up when we say we will.",
  },
  {
    icon: MapPin,
    title: "Locally Trusted",
    description:
      "Based in Canton, Mississippi and proud to work for our neighbors — homeowners, builders, and landowners alike.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Nichols &amp; Sons"
          title="Dirt Work You Can Count On"
          subtitle="We're a small, hard-working Mississippi crew. No call centers, no middlemen — when you call, you talk to the people running the equipment."
        />

        <Stagger className="mt-14 flex flex-wrap justify-center gap-6" stagger={0.08}>
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={staggerItem}
                className="w-full rounded-2xl border border-ink/10 bg-white p-7 shadow-[var(--shadow-soft)] transition-colors duration-300 hover:border-amber-deep/40 sm:w-[46%] lg:w-[30%]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-deep/15 text-amber-deep">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
