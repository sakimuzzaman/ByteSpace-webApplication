"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TopicFilter } from "./TopicFilter";
import { CourseGrid } from "./CourseGrid";
import { courseParams, courses, featuredTopic, filterCourses, findTopic, type Topic } from "@/data/courses";

type CourseBrowserProps = {
  topicSlug?: string | null;
  query?: string;
};


function setParams(update: Record<string, string | null>) {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(update)) {
    if (value) params.set(key, value);
    else params.delete(key);
  }
  const search = params.toString();
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`,
  );
}

function selectTopic(topic: Topic) {
  setParams({ [courseParams.topic]: topic.slug === featuredTopic.slug ? null : topic.slug });
}

function clearQuery() {
  setParams({ [courseParams.query]: null });
}

function resetFilters() {
  setParams({ [courseParams.topic]: null, [courseParams.query]: null });
}

/** Topic chips + course grid for a given filter. Also used as the static fallback. */
export function CourseBrowser({ topicSlug, query = "" }: CourseBrowserProps) {
  const topic = findTopic(topicSlug);
  const term = query.trim();
  const results = filterCourses(courses, topic, term);
  const status = `${results.length} ${results.length === 1 ? "course" : "courses"}${
    topic.slug === featuredTopic.slug ? "" : ` in ${topic.label}`
  }${term ? ` matching “${term}”` : ""}`;

  return (
    <>
      <TopicFilter active={topic} onSelect={selectTopic} className="mt-10 lg:mt-10.5" />

      <p role="status" className="sr-only">
        Showing {status}
      </p>

      {term && (
        <p className="mt-10 text-center text-body-m text-neutral-500 lg:-mb-6">
          Showing results for <span className="text-neutral-950">“{term}”</span>
          <span aria-hidden="true"> · </span>
          <button
            type="button"
            onClick={clearQuery}
            className="rounded-sm text-primary-800 underline-offset-4 hover:underline"
          >
            Clear<span className="sr-only"> search</span>
          </button>
        </p>
      )}

      {results.length > 0 ? (
        <CourseGrid courses={results} className="mt-10 lg:mt-19.25" />
      ) : (
        <div className="mt-10 flex flex-col items-center rounded-card border border-dashed border-neutral-200 bg-surface px-6 py-14 text-center lg:mt-19.25 lg:py-20">
          <h3 className="text-heading-xs text-ink">
            {term ? `No courses match “${term}”` : `No ${topic.label} courses yet`}
          </h3>
          <p className="mt-3 max-w-110 text-body-m text-neutral-500">
            New classes are added every week. In the meantime, browse our featured courses.
          </p>
          <Button onClick={resetFilters} className="mt-6">
            Show featured courses
          </Button>
        </div>
      )}
    </>
  );
}

/** Reads the `topic` and `q` URL params. Render inside <Suspense> to keep the page static. */
export function CourseExplorer() {
  const searchParams = useSearchParams();
  return (
    <CourseBrowser
      topicSlug={searchParams.get(courseParams.topic)}
      query={searchParams.get(courseParams.query) ?? ""}
    />
  );
}