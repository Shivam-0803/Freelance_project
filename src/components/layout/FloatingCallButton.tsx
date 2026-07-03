"use client";

import { Phone } from "lucide-react";
import * as React from "react";

import { links } from "@/data/site";

export function FloatingCallButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={links.tel}
      aria-label="Call Nichols and Sons Construction now"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-4 font-heading text-sm font-bold uppercase tracking-wide text-ink shadow-[var(--shadow-accent)] transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
