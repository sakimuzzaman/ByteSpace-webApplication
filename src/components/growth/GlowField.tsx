import type { CSSProperties } from "react";

export type Glow = {
  tone: "lime" | "blue";
  /** Centre of the glow on the 1440px design stage, relative to the section. */
  x: number;
  y: number;
  radius: number;
  opacity: number;
};

const toneColor = {
  lime: "var(--color-lime-500)",
  blue: "var(--color-primary-800)",
} as const;

function glowStyle({ tone, x, y, radius, opacity }: Glow): CSSProperties {
  const color = toneColor[tone];
  const stop = (alpha: number) => `color-mix(in srgb, ${color} ${alpha}%, transparent)`;
  return {
    left: x - radius,
    top: y - radius,
    width: radius * 2,
    height: radius * 2,
    opacity,
    // Same stops as the Figma radial fills; they already fade to transparent,
    // so the extra layer blur from the design is visually redundant.
    backgroundImage: `radial-gradient(closest-side, ${color}, ${stop(23)} 53%, ${stop(6)} 75%, transparent)`,
  };
}

/**
 * Soft lime / blue light blobs behind a section. Positioned on a centred
 * 1440px stage so they line up with the design; the parent section must be
 * `relative` and clip its overflow.
 */
export function GlowField({ glows }: { glows: Glow[] }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 w-360 -translate-x-1/2"
    >
      {glows.map((glow) => (
        <span
          key={`${glow.x}-${glow.y}`}
          className="absolute rounded-full"
          style={glowStyle(glow)}
        />
      ))}
    </div>
  );
}