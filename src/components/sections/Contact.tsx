import { Clock, Mail, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";

import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { links, site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-20 text-bone sm:py-28"
    >
      <div className="absolute inset-0 opacity-[0.16]">
        <Image
          src="/images/gallery/land-leveling-graded-field-01.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--ink) 0%, oklch(16% 0.015 50 / 0.85) 40%, var(--ink) 100%)",
        }}
      />

      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Get In Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Ready to Get Your Project Moving?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-bone-dim sm:text-lg">
            Call or text us directly and tell us about your property.
            We&apos;ll walk the site and give you an honest, straightforward
            quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-4">
            <a
              href={links.tel}
              className="flex items-center gap-4 rounded-lg border border-white/15 bg-ink-soft/60 p-5 transition hover:border-amber"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-bone-dim">
                  Call or Text
                </div>
                <div className="font-heading text-xl font-bold">{site.phone.display}</div>
              </div>
            </a>

            <a
              href={links.mail}
              className="flex items-center gap-4 rounded-lg border border-white/15 bg-ink-soft/60 p-5 transition hover:border-amber"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-bone-dim">
                  Email
                </div>
                <div className="break-all text-lg font-bold">{site.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-white/15 bg-ink-soft/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-bone-dim">
                  Hours
                </div>
                {site.hours.map((h) => (
                  <div key={h.days} className="font-bold">
                    {h.days}: {h.time}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-white/15 bg-ink-soft/60 p-5 transition hover:border-amber"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                <FacebookIcon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-bone-dim">
                  Facebook
                </div>
                <div className="text-lg font-bold">
                  Nichols &amp; Sons Trucking
                </div>
              </div>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
