import { GlowField, type Glow } from "@/components/growth/GlowField";
import { Container } from "@/components/ui/Container";
import { sectionIds } from "../../data/Navigation";
import { testimonials } from "../../data/testimonials";
import { TestimonialCard } from "../testimonials/TestimonialCard";

const glows: Glow[] = [
  { tone: "lime", x: 1410.5, y: 327.5, radius: 568.5, opacity: 0.4 },
  { tone: "lime", x: 731, y: 198, radius: 336, opacity: 0.6 },
  { tone: "blue", x: 126.5, y: 717.5, radius: 568.5, opacity: 0.24 },
];

export function Testimonials() {
  return (
    <section
      id={sectionIds.testimonials}
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 xl:pt-18.5 xl:pb-16"
    >
      <GlowField glows={glows} />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-10">
          <h2
            id="testimonials-heading"
            className="text-[2rem]/[1.2] text-black sm:text-[2.5rem]/[1.2] lg:text-heading-m"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-m text-body sm:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}