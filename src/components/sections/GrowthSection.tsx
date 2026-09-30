
import { GlowField, type Glow } from "../../components/growth/GlowField";
import { PathComposition } from "../../components/growth/PathComposition";
import { CheckCircleIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { sectionIds } from "@/data/Navigation";

import { creatorBenefits, platformStats } from "../../data/stats";
import { CreatorComposition } from "../growth/CreateComposition";

const glows: Glow[] = [
  { tone: "blue", x: 1290.5, y: 1356.5, radius: 568.5, opacity: 0.24 },
  { tone: "lime", x: 416.5, y: 102.5, radius: 568.5, opacity: 0.4 },
  { tone: "blue", x: 60.5, y: 751.5, radius: 568.5, opacity: 0.16 },
  { tone: "blue", x: 1379.5, y: 110.5, radius: 568.5, opacity: 0.08 },
  { tone: "lime", x: 49, y: 1282, radius: 336, opacity: 0.6 },
];

const headingClass = "text-[2rem]/[1.2] text-neutral-950 sm:text-[2.5rem]/[1.2] lg:text-heading-m";
const copyClass = "text-body-m text-neutral-700 sm:text-body-l";

export function GrowthSection() {
  return (
    <section
      id={sectionIds.about}
      aria-labelledby="growth-heading"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 xl:pt-30 xl:pb-15"
    >
      <GlowField glows={glows} />

      <Container className="relative">
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:items-start xl:justify-between xl:gap-0">
          <div className="w-full max-w-140 xl:pt-18.5">
            <h2 id="growth-heading" className={headingClass}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className={`mt-6 max-w-120 sm:mt-10 ${copyClass}`}>
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="mt-8 flex gap-10 sm:mt-10 sm:gap-14">
              {platformStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-m text-neutral-700 sm:text-body-l">{stat.label}</dt>
                  <dd className="font-heading text-[1.75rem]/[1.2] font-medium tracking-heading text-primary-800 sm:text-heading-s">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <PathComposition className="xl:-mr-19" />
        </div>

        <div className="mt-16 flex flex-col items-center gap-12 sm:mt-20 xl:mt-10.75 xl:flex-row-reverse xl:items-start xl:justify-between xl:gap-0">
          <div className="w-full max-w-145 xl:pt-18">
            <h2 className={`max-w-110 ${headingClass}`}>
              Create &amp; Manage Courses Easily.
            </h2>
            <p className={`mt-6 max-w-140 sm:mt-10 ${copyClass}`}>
              <strong className="font-bold text-neutral-950">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>
            <ul className="mt-8 flex flex-col gap-[11.2px] sm:mt-9.5">
              {creatorBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-body-l text-neutral-950"
                >
                  <CheckCircleIcon className="size-5 shrink-0 text-primary-800" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <CreatorComposition />
        </div>
      </Container>
    </section>
  );
}