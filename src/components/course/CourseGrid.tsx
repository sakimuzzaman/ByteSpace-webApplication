import { CourseCard } from "@/components/course/CourseCard";
import type { Course } from "../../data/courses";
import { cn } from "@/lib/cn";

type CourseGridProps = {
  courses: Course[];
  className?: string;
};

/** Responsive course list: 1 column on mobile, 2 on tablet, 3 on desktop. */
export function CourseGrid({ courses, className }: CourseGridProps) {
  return (
    <ul className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10", className)}>
      {courses.map((course) => (
        <li key={course.slug} className="flex min-w-0">
          <CourseCard course={course} className="w-full" />
        </li>
      ))}
    </ul>
  );
}