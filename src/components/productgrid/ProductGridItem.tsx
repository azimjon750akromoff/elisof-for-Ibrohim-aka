"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Props {
  index: number;
  clickedIndex: number | null;
  setClickedIndex: (index: number | null) => void;
}

export default function ProductGridItem({ index, clickedIndex, setClickedIndex }: Props) {
  const w = useTranslations("BestSeller");

  const handleClick = () => {
    setClickedIndex(clickedIndex === index ? null : index); // Toggle state
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-[254px] h-[342px] cursor-pointer perspective-1000 rounded-[5px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          clickedIndex === index ? "rotate-y-180" : "rotate-y-0"
        } rounded-[5px]`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white shadow-[0px_0px_1px_1px_rgba(0,0,0,0.10)] rounded-[5px] flex flex-col items-center justify-center gap-4 p-4">
          <Image
            loading="lazy"
            src={`/imgs/shirt${(index % 2) + 1}.png`}
            width={223}
            height={223}
            alt="shirt"
          />
          <span className="text-[#2A2A2B] font-gilroy text-center font-medium text-[16px] leading-normal tracking-[-0.56px]">
            {w("shirt")}
          </span>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden shadow-[0px_0px_1px_1px_rgba(0,0,0,0.10)] rounded-[5px] flex items-center bg-primaryColor justify-center p-4 rotate-y-180">
          <div className="flex flex-col gap-[15px]">
            <p className="font-gilroy text-[20px] font-semibold not-italic text-white text-center tracking-[-0.7px] leading-normal mb-[5px]">
              {w("shirt")}
            </p>
            <p className="font-gilroy text-[16px] font-medium text-white tracking-[-0.56px] text-center">
              {w("material")}
            </p>
            <p className="font-gilroy text-[16px] font-medium text-white tracking-[-0.56px] text-center">
              {w("sizes")}
            </p>
            <p className="font-gilroy text-[16px] font-medium text-white tracking-[-0.56px] text-center">
              {w("unisex")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
