import { Clock } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function BusinessHours() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Hours" title="When We're On the Job" />

        <Reveal className="mx-auto mt-10 max-w-xl" delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
            {site.hours.map((entry, i) => (
              <div
                key={entry.days}
                className={`flex items-center justify-between gap-4 px-7 py-5 ${
                  i !== site.hours.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-amber">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-sm font-bold uppercase tracking-wide text-heading sm:text-base">
                    {entry.days}
                  </span>
                </div>
                <span className="text-sm font-semibold text-muted sm:text-base">
                  {entry.time}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
