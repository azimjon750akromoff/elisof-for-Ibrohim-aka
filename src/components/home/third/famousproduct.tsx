"use client";

import MiniShirts from "@/components/minishirts/minishirts";
import MyButton from "@/components/my-button/my-button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

function FamousProduct() {
  // State to track selected image
  const [selectedImage, setSelectedImage] = useState("/imgs/shirt1.png");
  const [isImageChanging, setIsImageChanging] = useState(false);

  // Array of mini shirt images
  const miniShirtImages = [
    "/imgs/shirt1.png",
    "/imgs/shirt2.png",
    "/imgs/shirt1.png",
    "/imgs/shirt2.png",
  ];
  const b = useTranslations("Buttons"); // Get translations

  const handleImageChange = (img: string) => {
    setIsImageChanging(true);
    setTimeout(() => {
      setSelectedImage(img);
      setIsImageChanging(false);
    }, 300); // Matches animation duration
  };

  return (
    <section className="pt-[30px] md:pt-[60px]">
      <div className="famous-product">
        <div className="container">
          <div className="famous-product-main flex flex-col md:flex-row items-center gap-6">
            {/* Image Container */}
            <div className="w-[200px] h-[200px] md:w-[543px] md:h-[523px] flex items-center justify-center rounded-full bg-white shadow-lg">
              <Image
                loading="lazy"
                src={selectedImage}
                width={319}
                height={377}
                alt="shirt"
                className={`object-contain transition-opacity duration-300 ease-in-out ${
                  isImageChanging ? "opacity-0" : "opacity-100"
                } w-[150px] md:w-[319px] h-auto`}
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-start w-full max-w-[450px]">
              <button className="bg-primaryColor rounded-[5px] text-white w-[200px] md:w-[238px] py-2 md:py-[9px] px-4 md:px-[41px] font-gilroy text-base md:text-lg font-medium mx-auto md:mx-0">
                {b("fmsproduct")}
              </button>
              <p className="font-gilroy font-light text-base md:text-[20px] leading-[1.5] text-[#333] mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
                hendrerit odio, non ultrices lorem. Donec vel vestibulum eros.
                Curabitur fringilla arcu varius.
              </p>
              <MyButton />
              <div className="flex gap-[0.75rem] ml-[-5px] md:gap-[15px] pt-4 md:pt-[30px] justify-center md:justify-start mx-auto md:mx-0">
                {miniShirtImages.map((img, index) => (
                  <MiniShirts
                    key={index}
                    imgSrc={img}
                    onClick={() => handleImageChange(img)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamousProduct;
