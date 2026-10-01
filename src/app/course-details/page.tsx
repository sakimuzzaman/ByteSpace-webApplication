import CourseAbout from "@/components/coursedetails/CourseAbout";
import CourseBanner from "@/components/coursedetails/CourseBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GridBackdrop } from "@/components/ui/GridBackdrop";
import CourseDetailBanner from "../../components/coursedetails/CourseDetailBanner";

const page = () => {
    return (


        <>
        <section
              aria-labelledby="hero-heading"
              className="relative isolate overflow-hidden bg-primary-800 pt-34 sm:pt-38 lg:h-256 lg:pt-41.5"
            >
                 <Header />
                    <GridBackdrop />
                    
                    <CourseBanner />

                    <CourseDetailBanner />
        
                            
                          
                          
        
                                   
                 </section>

                 <CourseAbout />

                 <Footer />
                </>
    );
};

export default page;