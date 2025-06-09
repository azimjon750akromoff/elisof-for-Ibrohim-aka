import ContactForm from "@/components/contactform/contactform";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "react-phone-input-2/lib/style.css";

function Request() {
  const r = useTranslations("Request");

  return (
    <section id="contacts" className="mt-8 md:pt-[65px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-[65px]">
          {/* Left Section - Image & Text */}
          <div className="w-full md:w-[80%] flex flex-col gap-4 md:gap-[25px] text-center md:text-start">
            <h2 className="font-federo text-2xl md:text-[42px] mb-3 font-normal md:leading-[0.856px] pb-[10px]">
              {r("reqs")}
            </h2>

            <p className="font-gilroy text-base md:text-[26px] font-normal text-[#133240] md: leading-[0.52px]">
              {r("contactsoon")}
            </p>

            {/* Image Container */}
            <div className="w-[100%] h-[100%]">
              <Image
                loading="lazy"
                src="/imgs/uniform.png"
                layout="responsive"
                width={625}
                height={549}
                alt="kiyim"
                className="object-contain rounded-[5px]"
              />
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-[50%] pt-8 md:pt-[92px]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="pb-[30px] md:pb-[46px]"></div>
    </section>
  );
}

export default Request;
