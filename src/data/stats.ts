export type Stat = { value: string; label: string };

/** Headline platform numbers shown in the "professional growth" section. */
export const platformStats: Stat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

/** Benefits listed under "Create & Manage Courses Easily". */
export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;
