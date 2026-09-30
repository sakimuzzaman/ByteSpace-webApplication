import { happyStudents } from "../../data/Avatars";
import { cn } from "@/lib/cn";
import { StarIcon } from "../icons";
import { AvatarStack } from "../ui/AvatarStack";

/*
 * Small glassy stat cards that float over the photography in the hero and
 * the "growth" section. They are decorative summaries, so each card is a
 * self-contained figure with an accessible description.
 */

const cardBase = "rounded-2xl bg-white p-4 text-neutral-950 backdrop-blur-[10px]";

export function CategoryStatCard({
  title = "UI/UX Design",
  courses = "200 Courses",
  students = "1000+ Students",
  className,
}: {
  title?: string;
  courses?: string;
  students?: string;
  className?: string;
}) {
  return (
    <div className={cn(cardBase, "w-max pb-4.25", className)}>
      <p className="text-body-m leading-[1.3]">{title}</p>
      <p className="mt-px flex items-center gap-2.5 text-body-xs leading-[1.3] text-neutral-500">
        <span>{courses}</span>
        <span aria-hidden="true" className="size-0.75 rounded-full bg-current" />
        <span>{students}</span>
      </p>
    </div>
  );
}

export function LearningProgressCard({
  value = 55,
  className,
}: {
  value?: number;
  className?: string;
}) {
  return (
    <div className={cn(cardBase, "w-58", className)}>
      <p className="text-body-s leading-[1.3]">Learning Progress</p>
      <p className="mt-1.75 font-heading text-[48px] leading-[1.2] font-semibold tracking-heading">
        {value}%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-2 w-full max-w-50 overflow-hidden rounded-full bg-track"
      >
        <div className="h-full rounded-full bg-lime-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function HappyStudentsCard({
  className,
  tone = "white",
}: {
  className?: string;
  tone?: "white" | "lime";
}) {
  return (
    <div className={cn(cardBase, "w-64.5", tone === "lime" && "bg-lime-400", className)}>
      <p className="text-body-m leading-[1.3]">Happy Students</p>
      <p className="mt-px flex items-center gap-0.5 text-body-xs leading-[1.3]">
        <span>
          4.5 <span className="text-neutral-500">(240)</span>
          <span className="sr-only"> average rating from 240 reviews</span>
        </span>
        <StarIcon
          className={cn("size-3.25", tone === "lime" ? "text-primary-800" : "text-lime-400")}
        />
      </p>
      <AvatarStack
        size="md"
        avatars={happyStudents}
        extra="2K+"
        label="Over 2,000 happy students"
        className="mt-2.25"
        extraClassName={tone === "lime" ? "bg-neutral-950 text-white" : undefined}
      />
    </div>
  );
}