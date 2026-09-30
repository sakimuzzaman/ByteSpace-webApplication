import { Suspense } from "react";
import { CourseBrowser, CourseExplorer } from "../../components/course/CourseExplorer";
import { Container } from "@/components/ui/Container";
import { sectionIds } from "@/data/Navigation";


export function CourseDiscovery() {
  return (
    <section
      id={sectionIds.courses}
      aria-labelledby="courses-heading"
      className="bg-white pt-16 lg:pt-[72px]"
    >
      <Container>
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            id="courses-heading"
            className="text-[32px] leading-[1.2] text-ink sm:text-[40px] lg:text-heading-m"
          >
            Discover Your Passion, <br className="max-sm:hidden" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-body-m text-neutral-500 sm:text-body-l lg:mt-[17px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        <Suspense fallback={<CourseBrowser />}>
          <CourseExplorer />
        </Suspense>
      </Container>
    </section>
  );
}