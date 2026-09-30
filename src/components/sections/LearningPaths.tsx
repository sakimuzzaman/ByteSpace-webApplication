import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  LaptopIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { categories, type Category, type CategoryIcon } from "../../data/categories";
import { topicHref } from "@/data/courses";
import { sectionIds } from "@/data/Navigation";


/** Icons at their design sizes. */
const icons: Record<CategoryIcon, { Icon: ComponentType<SVGProps<SVGSVGElement>>; size: string }> =
  {
    design: { Icon: DesignIcon, size: "size-[27px]" },
    development: { Icon: DevelopmentIcon, size: "h-[33px] w-6" },
    software: { Icon: LaptopIcon, size: "h-6 w-9" },
    business: { Icon: BusinessIcon, size: "h-[27px] w-[30px]" },
    marketing: { Icon: MarketingIcon, size: "size-[30px]" },
    photography: { Icon: PhotographyIcon, size: "h-[27px] w-[30px]" },
  };

function CategoryCard({ category }: { category: Category }) {
  const { Icon, size } = icons[category.icon];
  return (
    <Link
      href={topicHref(category.topic)}
      className="group flex aspect-square flex-col items-center justify-center rounded-card border border-neutral-200 bg-white px-2 pt-1 text-center transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-primary-800 hover:shadow-[0_16px_40px_-16px_rgba(4,8,25,0.18)]"
    >
      <span className="flex size-15 items-center justify-center rounded-full bg-lime-400 text-neutral-950 transition-colors duration-300 group-hover:bg-lime-300">
        <Icon className={size} />
      </span>
      <span className="mt-3.75 text-heading-xs font-normal text-neutral-950">
        {category.label}
      </span>
    </Link>
  );
}

export function LearningPaths() {
  return (
    <section
      id={sectionIds.categories}
      aria-labelledby="categories-heading"
      className="bg-white pt-20 pb-20 lg:pt-18 lg:pb-30"
    >
      <Container>
        <div className="mx-auto max-w-230 text-center">
          <h2
            id="categories-heading"
            className="text-[28px] leading-[1.2] text-ink sm:text-[32px] lg:text-heading-s"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-body-m text-neutral-500 sm:text-body-l lg:mt-3.5">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-17.75 lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <li key={category.label}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}