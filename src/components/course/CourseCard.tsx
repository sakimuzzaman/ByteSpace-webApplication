import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { RatingStarIcon, SignalIcon } from "@/components/icons";
import type { Course } from "@/data/courses";
import { courseLearners } from "@/data/Avatars";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  className?: string;
  /** Pass true for cards visible above the fold. */
  priority?: boolean;
};

function MetaChip({ children }: { children: ReactNode }) {
  return (
    <li className="flex h-[26px] shrink-0 items-center rounded-full bg-track/60 px-2 text-body-xs leading-none whitespace-nowrap text-body backdrop-blur-[4px] @min-[330px]:px-[13.5px]">
      {children}
    </li>
  );
}

export function CourseCard({ course, className, priority }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-card border border-neutral-200 bg-white p-[15px] pb-5 transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_rgba(4,8,25,0.18)]",
        className,
      )}
    >
      <div className="@container relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <ul
          aria-label="Course details"
          className="absolute inset-x-[13px] bottom-[19px] flex gap-2 overflow-hidden @min-[330px]:gap-3"
        >
          <MetaChip>{course.lessons} Lessons</MetaChip>
          <MetaChip>{course.duration}</MetaChip>
          <MetaChip>{course.comments} Comments</MetaChip>
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-heading-xs text-black">
            {/* stretched link makes the whole card clickable */}
            <Link
              href={`/register?course=${course.slug}`}
              className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary-800"
            >
              {course.title}
            </Link>
          </h3>
          <p className="mt-0.5 text-body-xs text-body">
            by <span className="text-primary-800">{course.creator}</span>
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1 pr-[5px] text-body-l leading-6 text-body">
          <span className="sr-only">Rated </span>
          {course.rating}
          <span className="sr-only"> out of 5</span>
          <RatingStarIcon className="size-4 text-neutral-200" />
        </p>
      </div>

      <div className="mt-3.5 flex items-center gap-3">
        <span className="flex h-8 items-center gap-2 rounded-full bg-neutral-50 px-4 text-body-xs leading-none text-neutral-700">
          <SignalIcon className="h-[13.3px] w-[12.5px]" />
          {course.level}
        </span>
        <AvatarStack
          avatars={courseLearners}
          extra={course.learners}
          label={`${course.learners} learners enrolled`}
        />
      </div>

      <p className="mt-4 flex items-baseline gap-0.5">
        <span className="font-heading text-heading-xs font-semibold tracking-heading text-primary-800">
          ${course.price}
        </span>
        <span className="text-body-xs text-body">/lifetime</span>
      </p>
    </article>
  );
}