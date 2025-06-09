"use client";

import { useScrollFixed } from "@/lib/hooks/useScrollFixed";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Locale, usePathname } from "../../../i18n.config";
import { useTranslations } from "next-intl";
import LangSwitcher from "./lang-switcher";

const BurgerMenu = ({ locale }: { locale: Locale }) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  useScrollFixed(open);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    if (pathName) {
      setOpen(false);
    }
  }, [pathName]);

  const t = useTranslations("Header.Nav");
  const keysNav = [
    "Home",
    "Products",
    "AboutUs",
    "OurClients",
    "News",
    "ContactUs",
  ] as const;

  return (
    <div className="block md:hidden">
      {/* Hamburger Button */}
      <button type="button" onClick={() => setOpen(true)}>
        <Image
          className="lg:w-[84px] lg:h-[76px] w-[45px] h-[41px]"
          priority
          alt="Menu"
          width={24}
          height={24}
          src={"/svgs/burger.svg"}
        />
      </button>

      {/* Menu Overlay (Always in DOM) */}
      <div
        className={`fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)} // Clicking outside closes menu
      >
        {/* Menu Panel */}
        <div
          className={`transition-transform duration-500 bg-white w-[100vw] h-full fixed right-0 top-0 p-[16px] flex flex-col justify-between ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
        >
          {/* Close Button */}
          <div className="flex justify-end mb-[30px]">
            <button type="button" onClick={() => setOpen(false)}>
              <Image
                priority
                alt="Close"
                width={24}
                height={24}
                src={"/svgs/close.svg"}
              />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-[24px] items-center">
            {keysNav.map((item, index) => {
              const sectionId = t(`${item}.link`); // e.g., "#home", "#products"
              return (
                <li className="text-lg font-medium" key={index}>
                  <a
                    href={sectionId}
                    onClick={() => setOpen(false)} // Close menu on click
                    className="cursor-pointer hover:text-accentColor"
                  >
                    {t(`${item}.name`)}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="flex justify-center mb-[100px]">
            <LangSwitcher type="default" locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
