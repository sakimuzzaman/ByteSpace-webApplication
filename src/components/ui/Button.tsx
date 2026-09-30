import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";

const base =
  "inline-flex h-[46px] shrink-0 items-center justify-center gap-2 rounded-full px-6 text-body-l leading-none whitespace-nowrap transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-lime-400 text-neutral-950 hover:bg-lime-300 active:bg-lime-500",
  outline:
    "border border-neutral-200 bg-white text-neutral-950 hover:border-neutral-300 hover:bg-neutral-50",
};

export function buttonStyles(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & { variant?: Variant };

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, className)} {...props} />;
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles(variant, className)} {...props} />;
}