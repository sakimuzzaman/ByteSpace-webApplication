import Image from "next/image";
import { LearningProgressCard } from "@/components/cards/FloatingCards";
import { CourseCard } from "@/components/course/CourseCard";
import { Decor } from "@/components/ui/Decor";
import { courses } from "@/data/courses";
import { cn } from "@/lib/cn";
import { ScaledStage } from "./ScaledStage";

/** Course card, student photo, progress card and ornament (design box 638 x 613). */
export function PathComposition({ className }: { className?: string }) {
  return (
    <ScaledStage
      width={638}
      height={613}
      className={cn(
        "[--stage-scale:0.53] min-[400px]:[--stage-scale:0.56] sm:[--stage-scale:0.9] md:[--stage-scale:1]",
        className,
      )}
    >
      {/* Illustrative copy of a card already listed in the course grid: keep it out of the tab order and outline. */}
      <div inert className="absolute top-0 left-0 w-93.25">
        <CourseCard course={courses[0]} />
      </div>
      <Image
        src="/growthImg-1.png"
        alt="Smiling student with headphones holding a laptop"
        width={589}
        height={567}
        sizes="(min-width: 640px) 589px, 330px"
        className="absolute top-[45.5px] left-1.25 w-147.25 mask-[linear-gradient(to_bottom,#000_89%,transparent)]"
      />
      <LearningProgressCard className="absolute top-66.25 left-86.25" />
      <Decor name="squiggleLimeTall" className="top-[91.5px] left-112.75 w-[124.5px]" />
    </ScaledStage>
  );
}