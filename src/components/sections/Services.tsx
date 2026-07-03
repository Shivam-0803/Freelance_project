"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Full-Service Excavation & Land Work"
          subtitle="From the first cut to the finished grade, Nichols and Sons Construction handles every dirt-moving job for homeowners, builders, and landowners in and around Canton, Mississippi."
        />

        <Stagger
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.slug}
                id={`service-${service.slug}`}
                variants={staggerItem}
                className="group scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-bold)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Nichols and Sons Construction, Canton MS`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                </div>
                <div className="relative px-6 pb-6 pt-8">
                  <div className="absolute -top-6 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber text-ink shadow-md ring-4 ring-card">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="pr-10 font-heading text-base font-bold uppercase tracking-tight text-heading">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
