
import Image from "next/image";

import { cn } from "@/lib/cn";

/** 3D ornaments rendered from the Figma file (2x transparent PNG). */

export const decor = {
  squiggleLimeLg: { src: "/bannerImages/bannerImg1.png", width: 253.5, height: 269  },

  squiggleLimeMd: { src: "/bannerImages/bannerImg1.png", width: 141, height: 150 },

  squiggleLimeTall: { src: "/bannerImages/bannerImg1.png", width: 192, height: 251 },

  squiggleWhiteLg: { src: "/bannerImages/bannerImg6.png", width: 192, height: 251 },

  squiggleWhiteSm: { src: "/bannerImages/bannerImg6.png", width: 116.5, height: 123.5 },

  torusWhite: { src: "/bannerImages/bannerImg3.png", width: 240, height: 219.5 },

  torusLime: { src: "/bannerImages/bannerImg3.png", width: 240, height: 219},

  cylinderLime: { src: "/bannerImages/bannerImg4.png", width: 274, height: 300 },

  cylinderWhite: { src: "/bannerImages/bannerImg6.png", width: 274, height: 300 },

  pyramidWhite: { src: "/bannerImages/bannerImg5.png", width: 126.5, height: 138.5 },

  pyramidLime: { src: "/bannerImages/bannerImg5.png", width: 126.5, height: 138.5 },

  coneWhite: { src: "/bannerImages/bannerImg3.png", width: 129.5, height: 154 },
} as const;

export type DecorName = keyof typeof decor;

type DecorProps = {
  name: DecorName;
  /** Positioning / sizing classes. Width defaults to the design size. */
  className?: string;
  priority?: boolean;
};

/** Purely decorative, absolutely positioned 3D shape. */

export function Decor({ name, className, priority }: DecorProps) {
  const { src, width, height} = decor[name];

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={Math.round(width)}
      height={Math.round(height)}
      priority={priority}
      sizes={`${Math.round(width)}px`}
      quality={90}
      className={cn("pointer-events-none absolute select-none", className)}
    />
  );
}



