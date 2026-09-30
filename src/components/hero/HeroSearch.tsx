import Form from "next/form";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { sectionIds } from "@/data/Navigation";
import { SearchIcon } from "../icons";


export function HeroSearch({ className }: { className?: string }) {
  return (
    <Form
      action={`/#${sectionIds.courses}`}
      role="search"
      aria-label="Courses"
      className={cn("flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4", className)}
    >
      <div className="relative min-w-0 flex-1">
        <label htmlFor="hero-search" className="sr-only">
          Search for a course, topic or creator
        </label>
        <SearchIcon className="pointer-events-none absolute top-1/2 left-6.75 size-[17.5px] -translate-y-1/2 text-neutral-400" />
        <input
          id="hero-search"
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          autoComplete="off"
          enterKeyHint="search"
          className={cn(
            "h-13 w-full rounded-[24px] bg-white pr-5 pl-14 text-body-m text-neutral-950 sm:text-body-l",
            "placeholder:text-neutral-400 [&::-webkit-search-cancel-button]:cursor-pointer",
            "focus-visible:outline-lime-400",
          )}
        />
      </div>
      <Button type="submit" className="w-full focus-visible:outline-lime-400 sm:w-auto">
        Search
      </Button>
    </Form>
  );
}