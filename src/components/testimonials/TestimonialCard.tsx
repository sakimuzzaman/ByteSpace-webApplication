import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const { name, role, avatar, quote } = testimonial;

  return (
    <figure className={cn("flex flex-col rounded-card bg-white p-6", className)}>
      <Image
        src={avatar.src}
        alt=""
        width={80}
        height={80}
        sizes="80px"
        className="size-20 rounded-full object-cover"
      />
      <figcaption className="mt-6">
        <p className="font-heading text-heading-xs font-semibold tracking-heading text-black">
          {name}
        </p>
        <p className="text-body-l text-primary-800">{role}</p>
      </figcaption>
      <blockquote className="mt-6 text-body-m text-body sm:text-body-l">
        <p>&quot;{quote}&quot;</p>
      </blockquote>
    </figure>
  );
}