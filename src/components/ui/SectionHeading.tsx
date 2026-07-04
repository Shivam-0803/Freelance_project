import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em]",
            tone === "dark"
              ? "border-amber/30 bg-amber/10 text-amber"
              : "border-amber-deep/30 bg-amber-deep/10 text-amber-deep"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              tone === "dark" ? "bg-amber" : "bg-amber-deep"
            )}
          />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-heading text-3xl font-bold uppercase leading-[1.05] tracking-tight text-balance sm:text-4xl",
            tone === "dark" ? "text-bone" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              tone === "dark" ? "text-bone-dim" : "text-ink/65"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
