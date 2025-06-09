import Image from "next/image";
import StarRating from "./star-rating";
import React from "react";

const reviews = [
  {
    name: "Floyd Miles",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.est sit aliqua dolor do amet sint.",
    img: "/imgs/face.png",
    rating: 3.5,
  },
  {
    name: "Ronald Richards",
    body: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img: "/imgs/face2.png",
    rating: 4,
  },
  {
    name: "Floyd Miles",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametest sit aliqua dolor do amet sint.",
    img: "/imgs/face.png",
    rating: 3.5,
  },
  {
    name: "Ronald Richards",
    body: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img: "/imgs/face2.png",
    rating: 4,
  },
];
const ReviewCard = ({ img, name, body, rating }: any) => {
  return (
    <figure className="relative h-[265px] w-[200px] md:h-[386px] md:w-[550px] rounded-[5px] border p-4 md:p-8 flex-shrink-0">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 md:gap-4">
          <Image
            width="60"
            height="60"
            alt=""
            src={img}
            className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
          />
          <figcaption className="text-[15px] md:text-[29px] font-gilroy font-semibold text-[#133240] w-full md:w-[229px] dark:text-white">
            {name}
          </figcaption>
        </div>
        <StarRating type="button" rating={rating} size={20} />
      </div>
      <blockquote className="pt-1 font-gilroy text-[12px] md:text-[21px] w-full md:w-[484px] font-normal leading-normal tracking-[0.428px]">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo({ offset }: any) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-4 md:gap-[30px] transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${offset}px)`,
          position: "relative", // Ensuring it's positioned correctly
          zIndex: 10, // Set z-index directly to ensure it stays in front
          minWidth: "calc(100% + 30px)", // Ensures content doesn’t overflow on mobile
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

