import { Header } from "@/components/layout/Header";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { GroupLogos } from "@/components/sections/GroupLogos";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { Testimonials } from "@/components/sections/Testimonials";


export default function HomePage() {
  return (
    <>
      <Header />

      <Hero />
      
      <GroupLogos />
      
      <CourseDiscovery />

      <LearningPaths />

      <GrowthSection />

      <CreatorCta />

      <Testimonials />

    </>
  );
}