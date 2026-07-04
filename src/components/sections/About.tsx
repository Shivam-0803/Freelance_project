import { CircleCheck } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Nichols family on every job — no subcontractors",
  "Well-maintained dozers, tractors & equipment",
  "Honest quotes, straightforward communication",
];

export function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal y={24}>
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[var(--shadow-bold)]">
              <Image
                src="/images/gallery/land-clearing-dozer-treeline-01.jpg"
                alt="Bulldozer clearing land along a tree line on a Nichols and Sons Construction project"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-48 overflow-hidden rounded-xl border-4 border-paper shadow-[var(--shadow-bold)] sm:block">
              <Image
                src="/images/gallery/land-survey-excavation-team-01.jpg"
                alt="Nichols and Sons Construction crew surveying an excavation site near the Canton water tower"
                width={480}
                height={270}
                sizes="192px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="A Family-Owned Excavation Company Built on Trust"
            align="left"
            tone="dark"
            className="mx-0"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Family-owned excavation and land clearing in Canton, Mississippi.
              We run the equipment ourselves and treat every property like
              it&apos;s our own.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-8 space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-deep" />
                  <span className="text-sm text-heading/90 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
