import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";
import bgVideo from "@/assets/videos/header_vdo.mp4";
import { getHomeContent } from "../providers/home.provider";
import type { HomeContent } from "../content/home.content";

export default function GridMotion() {
  const [content, setContent] = useState<HomeContent | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const autoAnimationsRef = useRef<(gsap.core.Tween | null)[]>([]);

  // Fetch content
  useEffect(() => {
    getHomeContent().then(setContent);
  }, []);

  // Preload images function
  function preloadImages(urls: string[]): Promise<void> {
    const promises = urls.map((url) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // resolve even if image fails
      });
    });
    return Promise.all(promises).then(() => {});
  }

  // GSAP animation effect
  useEffect(() => {
    if (!content) return;

    const { autoSpeed, gridItems } = content.grid;

    const screenWidth = window.innerWidth;
    const speedFactor = screenWidth < 640 ? 0.25 : screenWidth < 768 ? 0.5 : 0.75;

    // Extract image URLs only
    const imageUrls = gridItems.filter(
      (item) => typeof item === "string" && item.startsWith("http"),
    );

    preloadImages(imageUrls).then(() => {
      gsap.ticker.lagSmoothing(0);

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? 1 : -1;
        const baseSpeed = autoSpeed * direction * speedFactor;

        if (autoAnimationsRef.current[index]) {
          autoAnimationsRef.current[index]?.kill();
        }

        autoAnimationsRef.current[index] = gsap.to(row, {
          x: direction > 0 ? "+=1000" : "-=1000",
          duration: 10 / Math.abs(baseSpeed),
          ease: "none",
          repeat: 0,
          onComplete: () => {
            if (index === rowRefs.current.length - 1) {
              gsap.to(".gridMotion-container", {
                opacity: 0,
                duration: 6,
                onComplete: () => {
                  const el = document.querySelector(
                    ".gridMotion-container",
                  ) as HTMLElement | null;
                  if (el) el.style.display = "none";
                },
              });
            }
          },
        });
      });
    });

    return () => {
      autoAnimationsRef.current.forEach((anim) => anim?.kill());
    };
  }, [content]);

  // Render guard AFTER hooks
  if (!content) return null;

  const { heroTitle, heroTagline, gradientColor, gridItems } = content.grid;

  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, i) => `Item ${i + 1}`,
  );

  const combinedItems =
    gridItems.length > 0 ? gridItems.slice(0, totalItems) : defaultItems;

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden lg:h-[90vh]"
      ref={gridRef}
    >
      <section className="relative flex h-[40vh] w-full items-center justify-center overflow-hidden sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[100vh]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-[-1] h-full w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-[1] h-full w-[500%]"
          style={{
            background: `radial-gradient(circle, ${gradientColor} 0%, rgba(0,0,0,0.7) 100%)`,
          }}
        />

        {/* Hero */}
        <div className="absolute left-1/2 top-1/2 z-[3] w-4/5 max-w-[800px] -translate-x-1/2 -translate-y-1/2 text-center text-neutral-white">
          <h1 className="animated-title mb-4 text-[2.5rem] md:text-[6rem] lg:text-[8rem]">
            <span className="word">{heroTitle.split(" ")[0]}</span>
            <span className="word pl-4 sm:pl-8">{heroTitle.split(" ")[1]}</span>
          </h1>
          <h5 className="eiei-text text-[1rem] font-bold tracking-wider sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem]">
            {heroTagline}
          </h5>
        </div>

        {/* Grid */}
        <div className="gridMotion-container relative z-[2] grid h-full w-[200%] max-w-none origin-center rotate-[-15deg] grid-cols-1 grid-rows-4 gap-4">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row grid grid-cols-7 gap-1 will-change-transform sm:gap-3 md:gap-4 lg:gap-6"
              ref={(el) => {
                if (el) rowRefs.current[rowIndex] = el;
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const item = combinedItems[rowIndex * 7 + itemIndex];

                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#111]/60 text-h3 text-neutral-white backdrop-blur-[2px]">
                      {typeof item === "string" && item.startsWith("http") ? (
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-70"
                          style={{ backgroundImage: `url(${item})` }}
                        />
                      ) : (
                        <div className="z-[1] p-4 text-center">{item}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
