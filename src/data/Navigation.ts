export type NavLink = { label: string; href: string };

/** Section anchors on the landing page, shared by the header, footer and CTAs. */
export const sectionIds = {
  courses: "courses",
  categories: "categories",
  about: "about",
  creators: "creators",
  testimonials: "testimonials",
  newsletter: "newsletter",
} as const;

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: `/#${sectionIds.courses}` },
  { label: "Creators", href: `/#${sectionIds.creators}` },
];

export const authNav = {
  signIn: { label: "Sign In", href: "/login" },
  join: { label: "Join Us", href: "/register" },
} satisfies Record<string, NavLink>;

export const footerNav: NavLink[][] = [
  [
    { label: "Featured Courses", href: `/#${sectionIds.courses}` },
    { label: "Featured Categories", href: `/#${sectionIds.categories}` },
    { label: "Business", href: `/#${sectionIds.categories}` },
    { label: "IT", href: `/#${sectionIds.categories}` },
    { label: "Design", href: `/#${sectionIds.categories}` },
  ],
  [
    { label: "Development", href: `/#${sectionIds.categories}` },
    { label: "Marketing", href: `/#${sectionIds.categories}` },
    { label: "Photography", href: `/#${sectionIds.categories}` },
    { label: "Finance", href: `/#${sectionIds.categories}` },
    { label: "Sport", href: `/#${sectionIds.categories}` },
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "/register" },
    { label: "Contact", href: "mailto:hello@bytespace.example" },
    { label: "Help", href: "mailto:support@bytespace.example" },
    { label: "About", href: `/#${sectionIds.about}` },
  ],
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: `/#${sectionIds.newsletter}` },
  { label: "Terms of Service", href: `/#${sectionIds.newsletter}` },
  { label: "Cookies Settings", href: `/#${sectionIds.newsletter}` },
];