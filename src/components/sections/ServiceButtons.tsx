"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { featuredServices } from "@/data/services";

export function ServiceButtons() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.slug}
                href={`#service-${service.slug}`}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bold)] sm:p-7"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 100% 0%, oklch(80% 0.17 78 / 0.12), transparent 60%)",
                  }}
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-amber transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <div className="mt-8">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-heading">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-amber-deep">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.a>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
