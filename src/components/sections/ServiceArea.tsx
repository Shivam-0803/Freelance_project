import { MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Where We Work"
          title="Proudly Serving Canton, Mississippi"
          subtitle={`Based in ${site.location.display} — we take on land clearing, excavation, and dirt work throughout ${site.location.region} and the surrounding communities.`}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]"
            >
              <MapPin className="h-4 w-4 text-amber-deep" />
              <span className="text-sm font-semibold text-heading">{area}</span>
            </div>
          ))}
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-bold)]">
            <iframe
              title={`Map of ${site.location.display}`}
              src="https://www.google.com/maps?q=Canton,+Mississippi&output=embed"
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full brightness-[0.87] invert-[0.92] hue-rotate-180"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
