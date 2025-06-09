'use client';

import React from "react";
import CardSwiper from "./cardswiper";
import { useTranslations } from "next-intl";

function News() {
  const b = useTranslations("Newz");
  return (
    <section id="news" className="pt-[2rem] md:pt-[4rem]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center">
          <h2 className="font-federo text-3xl md:text-4xl lg:text-5xl font-normal">
            {b('new')}
          </h2>
        </div>
        <div className="mt-8 md:mt-12 w-full">
          <CardSwiper />
        </div>
      </div>
      <div className="pb-8 md:pb-16"></div>
    </section>
  );
}

export default News;