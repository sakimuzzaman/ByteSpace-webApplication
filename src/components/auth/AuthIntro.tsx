import Image from "next/image";
import { HappyStudentsCard } from "../cards/FloatingCards";

type AuthIntroProps = {
  title: string;
  description: string;
};

/** Left-hand column of the auth pages: page title, pitch and course illustration. */
export function AuthIntro({ title, description }: AuthIntroProps) {
  return (
    <div className="flex flex-col">
      <h1 className="font-heading text-heading-xs font-semibold tracking-heading">{title}</h1>
      <p className="mt-3 max-w-120 text-body-m text-neutral-50 sm:text-body-l lg:mt-3.75">
        {description}
      </p>
      

         <div className="absolute top-76.25 left-24.25 h-146.25 w-137">
     
      <Image
        src="/authImg/Course_Card_2.png"
        alt="Build Digital Asset course card"
        width={373}
        height={384}
        className="absolute left-0 top-22.25 z-10 h-auto w-93.25 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
      />

      
      <Image
        src="/authImg/Course_Card_1.png"
        alt="The Power of Big Data course card"
        width={373}
        height={384}
        priority
        className="absolute left-28 top-0 z-20 h-auto w-93.25 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
      />
      <div className="absolute left-56.25 top-108.75 z-30 h-27.5 w-64.5 rounded-[10px] bg-[#D4F70F] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <HappyStudentsCard />
      </div>
      
    </div>


    </div>
  );
}