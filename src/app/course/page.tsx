import { HeroSearch } from '@/components/hero/HeroSearch';
import { GridBackdrop } from '@/components/ui/GridBackdrop';
import { Container } from "../../components/ui/Container";

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseDiscovery } from '@/components/sections/CourseDiscovery';

const CoursePage = () => {
    return (<>
        <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-800 pt-34 sm:pt-38 lg:h-256 lg:pt-41.5"
    >
         <Header />
            <GridBackdrop />
            
                  <Container className="relative z-10 text-center">
                    <h3
                      id="hero-heading"
                      className="mx-auto max-w-220 text-[40px] leading-[1.15] text-balance text-white sm:text-[52px] md:text-[60px] lg:text-heading-l lg:leading-[1.2]"
                    >
                      Find Your Next Course
                    </h3>
                    
                    <HeroSearch className="mx-auto mt-8 max-w-145.25 text-left lg:mt-15.5" />

                    
                  
                  </Container>   

                           
        </section>

        <div className='pb-12'>
             <CourseDiscovery />
        </div>
        

         

        <Footer />
        </>
    );
};

export default CoursePage;