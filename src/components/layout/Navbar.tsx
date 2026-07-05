"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { links, site } from "@/data/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-line bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85"
          : "border-transparent bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <Container className="flex min-h-[3.75rem] items-center justify-between pt-2 pb-2.5 sm:h-20 sm:py-3">
        <a
          href="#top"
          className="flex min-w-0 flex-1 items-center gap-2.5 sm:flex-initial sm:gap-3"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber font-heading text-sm font-bold tracking-tight text-ink shadow-[var(--shadow-accent)] sm:h-12 sm:w-12">
            N&amp;S
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-sm font-bold uppercase leading-tight tracking-tight text-bone sm:text-base">
              Nichols &amp; Sons
            </span>
            <span className="block text-[9px] uppercase tracking-[0.22em] text-amber sm:text-[10px] sm:tracking-[0.25em]">
              Construction
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wide text-bone-dim transition hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <a href={links.tel}>
              <Phone className="h-4 w-4" />
              {site.phone.display}
            </a>
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink-line bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 font-heading text-sm font-bold uppercase tracking-wide text-bone-dim transition hover:bg-white/5 hover:text-amber"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href={links.tel}>
                  <Phone className="h-4 w-4" />
                  Call {site.phone.display}
                </a>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
