"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Layers, Image as ImageIcon } from "lucide-react";

export default function ProjectHeroCarousel({ images = [], title = "Project" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize images into objects with url and label
  const normalizedImages = images.map((img, idx) => {
    if (typeof img === "string") {
      return {
        url: img,
        label: idx === 0 ? "Project Poster" : "Architecture Workflow",
      };
    }
    return img;
  });

  const total = normalizedImages.length;
  if (total === 0) return null;

  const currentImg = normalizedImages[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full h-[65vh] md:h-[82vh] relative border-b border-hairline overflow-hidden flex items-center justify-center bg-ground select-none">
      {/* Ambient blurred backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-700">
        <img
          key={`ambient-${currentImg.url}`}
          src={currentImg.url}
          alt=""
          className="w-full h-full object-cover blur-3xl opacity-35 scale-110 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-ground/40 backdrop-blur-md" />
      </div>

      {/* Main image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8">
        <img
          key={`main-${currentImg.url}`}
          src={currentImg.url}
          alt={`${title} - ${currentImg.label}`}
          className="w-auto h-full max-h-[76vh] md:max-h-[82vh] max-w-[95%] object-contain drop-shadow-2xl rounded-lg transition-all duration-300"
        />
      </div>

      {/* Controls & Tabs if more than 1 image */}
      {total > 1 && (
        <>
          {/* Top Toggle Pills */}
          <div className="absolute top-6 right-4 md:right-8 z-30 flex items-center gap-2 bg-ground/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-hairline shadow-md">
            {normalizedImages.map((img, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={img.url}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    active
                      ? "bg-ink text-ground shadow-sm"
                      : "text-secondary-ink hover:text-ink"
                  }`}
                >
                  {idx === 0 ? <ImageIcon size={13} /> : <Layers size={13} />}
                  <span>{img.label}</span>
                </button>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-ground/80 hover:bg-ground text-ink border border-hairline flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-ground/80 hover:bg-ground text-ink border border-hairline flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight size={22} />
          </button>

          {/* Bottom Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-ground/70 backdrop-blur px-3 py-1 rounded-full border border-hairline">
            {normalizedImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-ink w-6" : "bg-hairline hover:bg-secondary-ink"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
