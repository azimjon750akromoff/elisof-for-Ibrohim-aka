import Image from "next/image";
import React from "react";

function MiniShirts({ imgSrc, onClick }: any) {
  return (
    <div
      onClick={onClick} // Handle click event
      className="py-[6px] px-[7px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[5px] border-[0.1px] border-black bg-white 
                 cursor-pointer hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
    >
      <Image
        loading="lazy"
        src={imgSrc} // Dynamically set image source
        width={75}
        height={68}
        alt="shirt"
        className="transition-opacity duration-300"
      />
    </div>
  );
}

export default MiniShirts;