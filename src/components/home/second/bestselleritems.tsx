'use client'

import ProductGridItem from "@/components/productgrid/ProductGridItem";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

function BestSeller() {
  const w = useTranslations("BestSeller"); // Get translations

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <section id="products" className="pt-[42px]">
      
      <div className="my-container flex justify-between items-center flex-col">
        <h2 className="font-federo font-normal text-centert text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          {w("bestseller")}
        </h2>

        <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] w-[100%] rounded-md mx-auto place-items-center">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <ProductGridItem key={index} index={index} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex} />
            ))}
        </div>
      </div>
      <div className="md:pb-[60px]"></div>
    </section>
  );
}

export default BestSeller;
