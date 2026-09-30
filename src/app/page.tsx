import { Header } from "@/components/layout/Header";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";
import { GroupLogos } from "@/components/sections/GroupLogos";
import { Hero } from "@/components/sections/Hero";


export default function HomePage() {
  return (
    <>
      <Header />

      <Hero />
      
      <GroupLogos />
      
      <CourseDiscovery />

    </>
  );
}