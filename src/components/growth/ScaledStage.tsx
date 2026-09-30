import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ScaledStageProps = {
  /** Design size of the composition in px. */
  width: number;
  height: number;
  /**
   * Set `--stage-scale` per breakpoint here, e.g.
   * `[--stage-scale:0.55] sm:[--stage-scale:1]`. Defaults to 1.
   */
  className?: string;
  children: ReactNode;
};

/**
 * A fixed-size, absolutely laid out composition (photo + floating cards) that
 * scales down uniformly on small screens while reserving the scaled size in
 * the layout, so the collage keeps its proportions instead of reflowing.
 */
export function ScaledStage({ width, height, className, children }: ScaledStageProps) {
  const outer: CSSProperties = {
    width: `calc(${width}px * var(--stage-scale, 1))`,
    height: `calc(${height}px * var(--stage-scale, 1))`,
  };
  const inner: CSSProperties = {
    width,
    height,
    transform: "scale(var(--stage-scale, 1))",
  };

  return (
    <div className={cn("relative shrink-0", className)} style={outer}>
      <div className="absolute top-0 left-0 origin-top-left" style={inner}>
        {children}
      </div>
    </div>
  );
}