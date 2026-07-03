import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-amber text-ink shadow-[var(--shadow-accent)] hover:-translate-y-0.5 hover:bg-amber-deep focus-visible:ring-offset-ink",
        outline:
          "rounded-md border border-white/25 bg-transparent text-bone hover:-translate-y-0.5 hover:border-amber hover:text-amber focus-visible:ring-offset-ink",
        outlineDark:
          "rounded-md border border-heading/15 bg-transparent text-heading hover:-translate-y-0.5 hover:border-clay hover:text-clay",
        ghost: "rounded-md text-heading hover:text-clay",
        dark: "rounded-md bg-ink text-bone hover:-translate-y-0.5 hover:bg-ink-soft",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "rounded-md px-4 py-2.5 text-xs",
        lg: "px-7 py-4",
        icon: "h-11 w-11 rounded-full p-0",
      },
    },
    compoundVariants: [
      { variant: "primary", size: "default", class: "cut-corner-sm" },
      { variant: "primary", size: "lg", class: "cut-corner" },
      { variant: "outline", size: "default", class: "cut-corner-sm" },
      { variant: "outline", size: "lg", class: "cut-corner" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
