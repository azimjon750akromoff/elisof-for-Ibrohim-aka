'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const CardSwiper = () => {
  const newsItems = [
    {
      id: '1',
      title: 'С 1 мая будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ',
      content: 'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в ...',
      date: 'Jan 16, 2025',
      image: '/imgs/gaz.png',
    },
    {
      id: '2',
      title: 'С 3 ноября будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ',
      content: 'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в ...',
      date: 'Jan 17, 2025',
      image: '/imgs/gaz.png',
    },
    {
      id: '3',
      title: 'С 21 ноября будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ',
      content: 'огласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в ...',
      date: 'Jan 18, 2025',
      image: '/imgs/gaz.png',
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {newsItems.map((news) => (
        <SwiperSlide key={news.id}>
          <Link href={`/uz/news/${news.id}`} passHref>
          <div className="
  flex flex-col items-center 
  rounded-[8px] border border-[#E1E4ED] bg-[#FFF] 
  shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] cursor-pointer
  w-full max-w-[338px] h-[554px] mx-auto
  max-[420px]:max-w-[310px] max-[420px]:h-[500px]
">

              <Image
                loading="lazy"
                src={news.image}
                width={338}
                height={228}
                alt={news.title}
                className="object-contain rounded-[8px] max-[420px]:w-[310px] max-[420px]:h-[180px]"
              />
              <p className="text-[#0F1E3D] mt-4 font-gilroy text-[18px] leading-[25px] w-[310px] font-medium
                max-[420px]:text-[16px] max-[420px]:w-[250px] max-[420px]:leading-[22px]">
                {news.title}
              </p>
              <p className="font-gilroy text-[16px] text-[#6D758F] w-[310px] font-normal leading-6 mt-4
                max-[420px]:text-[14px] max-[420px]:w-[250px] max-[420px]:leading-[21px]">
                {news.content}
              </p>
              <hr className="w-[310px] border-t-2 border-[#E1E4ED] my-3 max-[420px]:w-[250px]" />
              <p className="font-gilroy mt-4 text-[14px] text-[#6D758F] w-[310px] font-normal leading-6
                max-[420px]:text-[13px] max-[420px]:w-[250px] max-[420px]:mt-2">
                {news.date}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
