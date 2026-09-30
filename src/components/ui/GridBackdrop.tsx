import { cn } from "@/lib/cn";

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.12]",
        "bg-[linear-gradient(to_right,#fff_2px,transparent_2px),linear-gradient(to_bottom,#fff_2px,transparent_2px)]",
        "bg-size-[120px_120px] bg-position-[calc(50%-660px)_-2px]",
        className,
      )}
    />
  );
}
