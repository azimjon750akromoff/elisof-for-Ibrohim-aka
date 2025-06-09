"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

function About() {
  const a = useTranslations("About");
  const b = useTranslations("Buttons");
  const [selectedImage, setSelectedImage] = useState("/imgs/scissors.jpeg");
  const [leftMiniImages, setLeftMiniImages] = useState([
    "/imgs/card-image.png",
    "/imgs/img3.png",
    "/imgs/img4.png",
  ]);
  const [rightMiniImage, setRightMiniImage] = useState("/imgs/img5.png");
  const [isImageChanging, setIsImageChanging] = useState(false);

  const handleImageSwap = (index: any, position: any) => {
    setIsImageChanging(true);
    setTimeout(() => {
      if (position === "left") {
        // Swap the clicked left mini image with the center image
        const newMiniImages = [...leftMiniImages];
        const clickedImage = newMiniImages[index];

        newMiniImages[index] = selectedImage;
        setSelectedImage(clickedImage);
        setLeftMiniImages(newMiniImages);
      } else if (position === "right") {
        // Swap the right mini image with the center image
        const temp = rightMiniImage;
        setRightMiniImage(selectedImage);
        setSelectedImage(temp);
      }

      setIsImageChanging(false);
    }, 300);
  };

  return (
    <section id="about" className="pt-8 md:pt-[65px]">
      <div className="my-container">
        <div className="mt-6 md:mt-[50px]">
          {/* Heading */}
          <div className="flex justify-center text-center">
            <h2 className="font-federo text-3xl md:text-[40px] font-normal">
              {a("aboutus")}
            </h2>
          </div>

          {/* Mobile Layout - 2x2 Grid */}
          <div className="md:hidden">
            <div className="text-center mt-4">
              <h2 className="text-primaryColor font-gilroy text-[22px] md:text-[32px] font-[600]">
                ELISOF
              </h2>
              <p className="mt-2 text-sm md:text-[26px] leading-6 font-normal font-gilroy">
                {a("text1")}
              </p>
            </div>

            {/* 2x2 Image Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[...leftMiniImages, rightMiniImage].map((img, index) => (
                <div key={index} className="w-full h-auto px-3">
                  <Image
                    loading="lazy"
                    src={img}
                    width={180}
                    height={180}
                    alt={`Image ${index + 1}`}
                    className="object-cover rounded-lg w-100% h-100%"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between gap-8">
            {/* LEFT SIDE - 3 Mini Images */}
            <div>
              <h2 className="text-primaryColor font-gilroy text-[32px] font-[600] mt-[50px]">
                ELISOF
              </h2>
              <p className="mt-[24px] text-[18px] leading-7 font-normal font-gilroy w-[519px]">
                {a("text1")}
              </p>

              <div className="mt-[89px] flex gap-8">
                {leftMiniImages.map((img, index) => (
                  <Image
                    key={index}
                    loading="lazy"
                    src={img}
                    width={150}
                    height={220}
                    alt="shirt"
                    className="object-contain rounded-[5px] cursor-pointer transition-transform hover:scale-105"
                    onClick={() => handleImageSwap(index, "left")}
                  />
                ))}
              </div>
            </div>

            {/* CENTER - Big Image */}
            <div className="mt-[50px] flex gap-8 items-end">
              <Image
                loading="lazy"
                src={selectedImage}
                width={340}
                height={540}
                alt="scissors"
                className={`object-contain transition-opacity rounded-[5px] duration-300 ease-in-out ${
                  isImageChanging ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* RIGHT SIDE - 1 Clickable Mini Image */}
              <div className="flex flex-col gap-28">
                <div className="transform -rotate-90 translate-x-14 flex justify-end">
                  <button className="bg-primaryColor rounded-[5px] text-white py-2 px-4 font-gilroy text-lg font-medium text-center flex justify-end">
                    <a href="#contacts">{b("contactuss")}</a>
                  </button>
                </div>
                <Image
                  loading="lazy"
                  src={rightMiniImage}
                  width={150}
                  height={220}
                  alt="shirt"
                  className="object-contain rounded-[5px] cursor-pointer transition-transform hover:scale-105"
                  onClick={() => handleImageSwap(null, "right")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pb-[65px]"></div>
    </section>
  );
}

export default About;
