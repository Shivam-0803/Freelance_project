import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  tone = "ink",
  reverse = false,
}: {
  items: string[];
  className?: string;
  tone?: "ink" | "amber";
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden py-2.5",
        tone === "ink" ? "bg-ink text-bone-dim" : "bg-amber-deep text-ink",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex w-max whitespace-nowrap group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2.5 font-heading text-[11px] font-semibold uppercase tracking-[0.28em]"
          >
            <span
              className={cn(
                "h-1 w-1 rounded-full",
                tone === "ink" ? "bg-amber" : "bg-ink"
              )}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
