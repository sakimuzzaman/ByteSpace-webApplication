import React from 'react';


export default function CourseBanner() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6">
      {/* Main Container - max-w-[1283px] & min-h-[185px] matching Figma */}
      <div className="w-full max-w-300 min-h-46.25 flex flex-col justify-between py-2 gap-6">
        
        {/* Top Row: Title, Subtitle, Author & Share Button */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          
          {/* Left Text Block */}
          <div className="flex flex-col space-y-1.5">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-white leading-tight">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            
            <p className="text-sm sm:text-base text-gray-300 font-normal">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            
            <div className="pt-1 text-xs sm:text-sm text-gray-300">
              by <span className="text-[#D4F938] font-medium hover:underline cursor-pointer">purepearl studio</span>
            </div>
          </div>

          {/* Right: Share Button */}
          <div className="shrink-0 self-start md:self-auto">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4F938] hover:bg-[#c2e82b] text-neutral-900 font-semibold text-sm transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
  <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
</svg>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Level */}
          <div className="inline-flex items-center gap-2 bg-white text-neutral-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
</svg>
            <span>Intermediate</span>
          </div>

          {/* Rating */}
          <div className="inline-flex items-center gap-2 bg-white text-neutral-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm">
           <svg className="w-4 h-4 text-blue-600 fill-blue-600" viewBox="0 0 24 24">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
            <span>4.8 (172 reviews)</span>
          </div>

          {/* Students */}
          <div className="inline-flex items-center gap-2 bg-white text-neutral-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
</svg>
            <span>199 Students</span>
          </div>
        </div>

      </div>
    </div>
  );
}