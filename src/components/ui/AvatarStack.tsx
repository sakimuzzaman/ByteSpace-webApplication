import Image from "next/image";
import { cn } from "@/lib/cn";
import { Avatar } from "@/data/Avatars";


type AvatarStackProps = {
  avatars: Avatar[];
  /** Label for the trailing counter bubble, e.g. "2K+". */
  extra: string;
  /** Accessible summary, e.g. "Over 2,000 happy students". */
  label: string;
  size?: "sm" | "md";
  extraClassName?: string;
  className?: string;
};

const sizes = {
  sm: { box: "size-8 -ml-2 first:ml-0", px: 32, text: "text-body-xs" },
  md: { box: "size-[43px] -ml-4 first:ml-0", px: 43, text: "text-body-xs font-bold" },
};

export function AvatarStack({
  avatars,
  extra,
  label,
  size = "sm",
  extraClassName,
  className,
}: AvatarStackProps) {
  const s = sizes[size];
  return (
    <div role="img" aria-label={label} className={cn("flex items-center", className)}>
      {avatars.map((avatar) => (
        <Image
          key={avatar.src}
          src={avatar.src}
          alt=""
          width={s.px}
          height={s.px}
          sizes={`${s.px}px`}
          className={cn(s.box, "rounded-full object-cover")}
        />
      ))}
      <span
        aria-hidden="true"
        className={cn(
          s.box,
          s.text,
          "flex items-center justify-center rounded-full bg-lime-400 leading-none text-neutral-950",
          extraClassName,
        )}
      >
        {extra}
      </span>
    </div>
  );
}