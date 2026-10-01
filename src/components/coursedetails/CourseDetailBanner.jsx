import React from 'react';
import Image from 'next/image';

export default function CourseDetailBanner() {
  const lessons = [
    { id: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { id: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { id: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
  ];

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 py-6">
      {/* Container holding both elements */}
      <div className="w-full max-w-320.75 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-15.75">
        
        
        <div className="relative w-full lg:w-180 h-75 sm:h-100 lg:h-119.75 rounded-[24px] overflow-hidden  shadow-sm shrink-0 group">
          {/* Background Course Image */}
          <Image
            src="/courseAbout/course-banner-middle-img.jpg"
            alt="Course preview video thumbnail"
            fill
            priority
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Frosted Glass Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play video"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] bg-black/35 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              {/* White circle with Play Arrow */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center pl-1 shadow-md">
                <svg
                  className="w-5 h-5 text-neutral-800 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        
        <div className="w-full lg:w-103 min-h-119.75 rounded-[24px] border border-neutral-200/90 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-sm shrink-0">
          
          {/* Top Section: Title & Lessons List */}
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-[22px] font-bold text-neutral-900 tracking-tight mb-5">
              112 Lessons (24 hours)
            </h2>

            {/* Lesson Items */}
            <div className="flex flex-col gap-3">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-start justify-between text-xs sm:text-[13px] leading-snug"
                >
                  <div className="flex items-start gap-2.5 text-neutral-800 font-medium pr-2">
                    <span className="text-neutral-400 font-normal">{lesson.id}</span>
                    <span>{lesson.title}</span>
                  </div>
                  <span className="text-blue-600 font-medium whitespace-nowrap">
                    {lesson.duration}
                  </span>
                </div>
              ))}

              {/* Remaining videos indicator */}
              <p className="text-xs text-neutral-400 font-normal mt-1">
                99 more videos
              </p>
            </div>
          </div>

          {/* Bottom Section: Call to action, Price, and Button */}
          <div className="flex flex-col pt-6">
            {/* Promo text */}
            <p className="text-xs text-neutral-500 font-normal leading-relaxed mb-4">
              Ready to Dive In? Enroll Now and Start Building Your Digital Future!
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold text-blue-600 tracking-tight">
                $25
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                /lifetime
              </span>
            </div>

            {/* Enroll Button */}
            <button
              type="button"
              className="w-full py-3.5 rounded-full bg-[#D4F938] hover:bg-[#c3e828] text-neutral-900 font-semibold text-sm tracking-wide transition-all duration-200 shadow-sm active:scale-[0.98] cursor-pointer"
            >
              Enroll Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}