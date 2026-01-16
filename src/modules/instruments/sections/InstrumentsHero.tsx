import { urlFor } from "../../../core/services/client";
import "../pages/instruments.css";

export default function InstrumentsHero({ title, intro, image, visible }: { title: string; intro: string; image: any[]; visible: boolean }) {
    return (
        <section className="relative py-8 overflow-hidden" data-animate id="hero">
  {/* Hero Background - Kept geometric shapes for legacy CSS styling */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="geometric-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
    </div>
  </div>

  <div className="relative z-10 max-w-[1200px] mx-auto mt-[100px] px-5 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2.5 md:gap-5 items-center">
    {/* Hero Text */}
    <div className={`space-y-3 ${visible ? 'animate-in' : ''}`}>
      <h1 className="text-[28px] md:text-[42px] font-bold text-[#e66a1c] leading-[1.05]">
        {title}
      </h1>
      <p className="text-[15px] md:text-lg text-white/90 max-w-[760px] text-justify leading-relaxed">
        {intro}
      </p>
    </div>

    {/* Hero Visual */}
    <div className={`relative flex items-center justify-center ${visible ? 'animate-in' : ''}`}>
      {image?.[0] ? (
        <div className="relative z-10">
          <img 
            src={urlFor(image[0]).width(1200).url()} 
            alt="instruments-hero" 
            className="w-full max-w-[320px] md:max-w-[360px] h-[200px] md:h-[240px] object-cover rounded-[14px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5"
          />
        </div>
      ) : (
        <div className="relative z-10 opacity-95">
          <svg viewBox="0 0 64 64" width="96" height="96" aria-hidden>
            <rect x="6" y="10" width="52" height="32" rx="4" fill="#ffffff11" />
            <circle cx="20" cy="26" r="4" fill="#eaaf2fff" />
            <rect x="36" y="20" width="16" height="12" rx="2" fill="#f97316" />
          </svg>
        </div>
      )}
      
      {/* Complex Animations kept as legacy classes */}
      <div className="pulse-ring"></div>
      <div className="pulse-ring delayed"></div>
    </div>
  </div>
</section>
    );
}