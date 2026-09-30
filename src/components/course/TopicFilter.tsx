import { useId, useState } from "react";
import { moreTopics, topicRows, type Topic } from "../../data/courses";
import { cn } from "@/lib/cn";

type TopicFilterProps = {
  active: Topic;
  onSelect: (topic: Topic) => void;
  className?: string;
};

/** Chips visible on phones before the list is expanded with "+ More". */
const MOBILE_VISIBLE = 6;
const chipOrder = new Map(topicRows.flat().map((topic, index) => [topic.slug, index]));

function TopicChip({
  topic,
  active,
  hidden,
  onSelect,
}: {
  topic: Topic;
  active: boolean;
  hidden: boolean;
  onSelect: (topic: Topic) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(topic)}
      className={cn(
        "h-10.75 shrink-0 rounded-full px-4 text-body-m leading-none whitespace-nowrap transition-colors duration-200 lg:px-[17.5px]",
        active
          ? "bg-lime-400 text-neutral-950"
          : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
        hidden && "max-md:hidden",
      )}
    >
      {topic.label}
    </button>
  );
}


export function TopicFilter({ active, onSelect, className }: TopicFilterProps) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const lastRow = topicRows.length - 1;

  return (
    <div
      id={listId}
      role="group"
      aria-label="Filter courses by topic"
      className={cn(
        "flex flex-wrap justify-center gap-x-3 gap-y-3 sm:gap-x-4 lg:flex-col lg:items-center lg:gap-y-5.25",
        className,
      )}
    >
      {topicRows.map((row, rowIndex) => (
        <div key={rowIndex} className="contents lg:flex lg:flex-wrap lg:justify-center lg:gap-4">
          {row.map((topic) => {
            const isActive = topic.slug === active.slug;
            const collapsed =
              !expanded && !isActive && (chipOrder.get(topic.slug) ?? 0) >= MOBILE_VISIBLE;
            return (
              <TopicChip
                key={topic.slug}
                topic={topic}
                active={isActive}
                hidden={collapsed}
                onSelect={onSelect}
              />
            );
          })}

          {rowIndex === lastRow && (
            <>
              {moreTopics.map(
                (topic) =>
                  (expanded || topic.slug === active.slug) && (
                    <TopicChip
                      key={topic.slug}
                      topic={topic}
                      active={topic.slug === active.slug}
                      hidden={false}
                      onSelect={onSelect}
                    />
                  ),
              )}
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={listId}
                onClick={() => setExpanded((value) => !value)}
                className="h-10.75 rounded-full px-2 text-body-m leading-none text-primary-800 underline-offset-4 hover:underline lg:px-0"
              >
                {expanded ? "− Less" : "+ More"}
                <span className="sr-only"> topics</span>
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}