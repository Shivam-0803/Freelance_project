import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { links, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink text-bone-dim">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber font-heading text-sm font-bold tracking-tight text-ink">
              N&amp;S
            </span>
            <div>
              <div className="font-heading text-base font-bold uppercase leading-tight text-bone">
                {site.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-amber">
                {site.location.display}
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Family-owned excavation and land clearing contractor serving Canton,
            Mississippi and the surrounding area.
          </p>
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nichols and Sons Construction on Facebook"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition hover:border-amber hover:text-amber"
          >
            <FacebookIcon className="h-[1.125rem] w-[1.125rem]" />
          </a>
        </div>

        <div>
          <div className="font-heading text-sm font-bold uppercase tracking-wide text-bone">
            Services
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <a href="#services" className="transition hover:text-amber">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-heading text-sm font-bold uppercase tracking-wide text-bone">
            Service Area
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-heading text-sm font-bold uppercase tracking-wide text-bone">
            Contact
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-amber" />
              <a href={links.tel} className="transition hover:text-amber">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-amber" />
              <a href={links.mail} className="break-all transition hover:text-amber">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-amber" />
              {site.location.display}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-line">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.seoKeyword}</p>
        </Container>
      </div>
    </footer>
  );
}
