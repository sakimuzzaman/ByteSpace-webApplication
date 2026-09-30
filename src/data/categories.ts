import { findTopic, type Topic } from "@/data/courses";

export type CategoryIcon =
  | "design"
  | "development"
  | "software"
  | "business"
  | "marketing"
  | "photography";

export type Category = {
  label: string;
  icon: CategoryIcon;
  /** Topic chip the category card filters the course list by. */
  topic: Topic;
};

export const categories: Category[] = [
  { label: "Design", icon: "design", topic: findTopic("graphic-design") },
  { label: "Development", icon: "development", topic: findTopic("web-development") },
  { label: "IT & Software", icon: "software", topic: findTopic("data-science") },
  { label: "Business", icon: "business", topic: findTopic("freelance-entrepreneurship") },
  { label: "Marketing", icon: "marketing", topic: findTopic("marketing") },
  { label: "Photography", icon: "photography", topic: findTopic("photography") },
];
