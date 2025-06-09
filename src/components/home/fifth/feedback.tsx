"use client";

import { MarqueeDemo } from "@/components/products/comments";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";

function Feedback() {
  const f = useTranslations("Feedback");
  const b = useTranslations("Buttons");

  const totalCards = 3; // Adjust based on the total number of feedback cards
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(570); // Default width
  const [startX, setStartX] = useState<number | null>(null);
  const marqueeRef = useRef(null); // Reference to the marquee container

  // Dynamically update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 768 ? 200 : 570);
    };

    updateCardWidth(); // Set initial value
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const maxOffset = -(cardWidth * (totalCards - 1)); // Max left movement

  const handleNext = () => {
    setOffset((prev) => (prev - cardWidth < maxOffset ? 0 : prev - cardWidth));
  };

  const handlePrev = () => {
    setOffset((prev) => (prev + cardWidth > 0 ? maxOffset : prev + cardWidth));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX as number);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return;
  
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
  
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // Swipe left
      } else {
        handlePrev(); // Swipe right
      }
      setStartX(null); // Reset startX after handling the swipe
    }
  };
  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleTouchEnd = (_: React.TouchEvent<HTMLDivElement>) => {
  setStartX(null);
};

  

  return (
    <section id="clients" className="relative mt-8 md:pt-[65px]">
      <div className="my-container px-4 relative">
        {/* Top Section - Heading and Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="font-federo text-2xl md:text-[42px] font-normal leading-[56px] pb-[10px]">
              {f("feedback")}
            </h2>
            <p className="font-gilroy text-base md:text-[26px] font-normal text-[#133240]">
              {f("trust")}
            </p>
          </div>

          <div className="flex gap-2 md:gap-[10px]">
            <button
              onClick={handlePrev}
              className="border border-[var(--main,#1D5147)] w-[100px] md:w-[130px] h-[42px] 
              rounded-[5px] text-black px-3 md:px-4 font-gilroy text-sm md:text-lg font-medium 
              flex items-center justify-center leading-none"
            >
              {b("prev")}
            </button>
            <button
              onClick={handleNext}
              className="bg-primaryColor w-[100px] md:w-[130px] h-[42px] 
              rounded-[5px] text-white px-3 md:px-4 font-gilroy text-sm md:text-lg font-medium 
              flex items-center justify-center leading-none"
            >
              {b("next")}
            </button>
          </div>
        </div>

        {/* Marquee Section with Touch Events */}
        <div
          className="relative mt-6 md:mt-[40px] overflow-hidden"
          ref={marqueeRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative z-20">
            <MarqueeDemo offset={offset} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;