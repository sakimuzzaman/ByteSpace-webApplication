"use client";

import Image from "next/image";
import { useState } from "react";



export type CourseTab = "about" | "lessons" | "reviews";

export interface SneakPeekImage {
  src: string;
  alt: string;
}

export interface CourseAboutProps {
  title?: string;
  description?: string[]; 
  sneakPeek?: SneakPeekImage[];
  keyPoints?: string[];
  activeTab?: CourseTab; 
  onTabChange?: (tab: CourseTab) => void;
  className?: string;
}



const DEFAULT_DESCRIPTION = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

const DEFAULT_SNEAK_PEEK: SneakPeekImage[] = [
  { src: "/courseAbout/ca-img-1.png", alt: "Sketching a layout on paper" },
  { src: "/courseAbout/ca-img-2.png", alt: "Design tool open on a laptop" },
  { src: "/courseAbout/ca-img-3.png", alt: "Workspace with plant and monitor" },
  { src: "/courseAbout/ca-img-4.png", alt: "Mobile app design on a phone" },
];

const DEFAULT_KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio"
];

const TABS: { id: CourseTab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "lessons", label: "Lessons" },
  { id: "reviews", label: "Reviews" },
];



function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
    >
      <circle cx="12" cy="12" r="12" className="fill-blue-600" />
      <path
        d="M7 12.5l3.2 3.2L17 8.8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold leading-7 text-neutral-900 sm:text-2xl">
      {children}
    </h2>
  );
}

/* -------------------------------- Component ------------------------------- */

export default function CourseAbout({
  title = "Description",
  description = DEFAULT_DESCRIPTION,
  sneakPeek = DEFAULT_SNEAK_PEEK,
  keyPoints = DEFAULT_KEY_POINTS,
  activeTab,
  onTabChange,
  className = "",
}: CourseAboutProps) {
  // Works both uncontrolled (internal state) and controlled (props)
  const [internalTab, setInternalTab] = useState<CourseTab>("about");
  const tab = activeTab ?? internalTab;

  const handleTab = (next: CourseTab) => {
    setInternalTab(next);
    onTabChange?.(next);
  };

  return (
    <section
      className={`mx-auto flex w-full max-w-181.25 flex-col gap-10 px-4 py-6 sm:px-0 ${className}`}
    >
      {/* Tabs */}
      <div role="tablist" aria-label="Course sections" className="flex gap-3">
        {TABS.map(({ id, label }) => {
          const isActive = tab === id;
          return (
            <button
              key={id}
              role="tab"
              type="button"
              id={`course-tab-${id}`}
              aria-selected={isActive}
              aria-controls={`course-panel-${id}`}
              onClick={() => handleTab(id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                isActive
                  ? "bg-lime-300 text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* About panel */}
      {tab === "about" && (
        <div
          role="tabpanel"
          id="course-panel-about"
          aria-labelledby="course-tab-about"
          className="flex flex-col gap-10"
        >
          {/* Description */}
          <div className="flex flex-col gap-4">
            <SectionTitle>{title}</SectionTitle>
            <div className="flex flex-col gap-6 text-sm leading-6 text-neutral-700 sm:text-base sm:leading-7">
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sneak Peek */}
          <div className="flex flex-col gap-4">
            <SectionTitle>Sneak Peek</SectionTitle>
            {/* Mobile: horizontal snap scroll. sm+: 4-column grid */}
            <ul className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              {sneakPeek.map((img) => (
                <li
                  key={img.src}
                  className="relative aspect-4/3 w-40 shrink-0 snap-start overflow-hidden rounded-2xl bg-neutral-200 sm:w-auto"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 170px, 160px"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Key Points */}
          <div className="flex flex-col gap-4">
            <SectionTitle>Key Points</SectionTitle>
            <ul className="flex flex-col gap-3">
              {keyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-neutral-800 sm:text-base"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Placeholders for the other tabs — swap in your own content */}
      {tab === "lessons" && (
        <div role="tabpanel" id="course-panel-lessons" aria-labelledby="course-tab-lessons">
          <p className="text-neutral-500">Lessons content goes here.</p>
        </div>
      )}
      {tab === "reviews" && (
        <div role="tabpanel" id="course-panel-reviews" aria-labelledby="course-tab-reviews">
          <p className="text-neutral-500">Reviews content goes here.</p>
        </div>
      )}
    </section>
  );
}