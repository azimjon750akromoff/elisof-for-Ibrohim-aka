"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MyButton from "../my-button/my-button";
import { useTranslations } from "next-intl";

const images = ["/imgs/uniform.png", "/imgs/uniform.png", "/imgs/uniform.png"];

const Carousel: React.FC = () => {
  const t = useTranslations("ScriptsBeautiful");
  const slideTexts = [t("firsttext"), t("secondtext"), t("thirdtext")];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);

  const [navSize, setNavSize] = useState("44px"); // Default navigation size

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only runs in the browser
      const updateNavSize = () => {
        setNavSize(window.innerWidth < 768 ? "30px" : "44px");
      };

      updateNavSize(); // Set initial value
      window.addEventListener("resize", updateNavSize);

      return () => window.removeEventListener("resize", updateNavSize);
    }
  }, []);

  return (
    <div className="swiper_wrapper max-container">
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={
          {
            "--swiper-navigation-size": navSize,
            "--swiper-navigation-color": "black",
          } as React.CSSProperties
        }
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[100px] p-4">
                {/* Image Container */}
                <div className="rounded-lg w-full max-w-[625px]">
                  <Image
                    src={src}
                    width={625}
                    height={450}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>

                {/* Text and Button Container */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-4 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
                    {slideTexts[index]}
                  </h1>

                  <MyButton />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
