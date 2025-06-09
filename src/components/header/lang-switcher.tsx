"use client";

import React, { useRef, useState } from "react";
import { Locale, usePathname, useRouter } from "../../../i18n.config";
import Image from "next/image";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { cn } from "@/lib/utils/cn";

interface LangSwitcherProps {
  locale: Locale;
  type: "default" | "auth";
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ locale, type }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<Locale>(locale);
  const pathName = usePathname();
  const router = useRouter();
  const langRef = useRef<any>(null);
  const langsList: Locale[] = ["uz", "en", "ru"];
  
  useClickOutside(langRef, () => setOpen(false));

  const handleOpenSelector = () => setOpen((prev) => !prev);

  const changeLocale = (newLocale: Locale) => {
    setLang(newLocale);
    router.replace(pathName, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div
      ref={langRef}
      tabIndex={0}
      role="button"
      aria-pressed={open}
      onClick={handleOpenSelector}
      onKeyDown={(event) => event.key === "Enter" && handleOpenSelector()}
      style={{ boxShadow: "0px 4px 4px rgba(0 0 0 0.1)" }}
      className="relative cursor-pointer"
    >
      <div className="flex items-center">
        <Image src="/svgs/globe.svg" width={28} height={28} alt="globe" />
        <Image src="/svgs/chevron-down.svg" width={20} height={20} alt="Dropdown" />
      </div>

      <ul
        className={cn(
          "absolute left-auto right-[-15px] top-[30px] transition-all ease-in-out bg-white flex flex-col gap-[6px] rounded-[8px] lg:text-[18px] lg:leading-[140%] text-md overflow-hidden shadow-lg z-50",
          {
            "h-auto max-h-[130px] px-[25px] py-[8px]": open,
            "max-h-0 px-[0px] py-[0px]": !open,
            "right-0 top-[30px]": type === "auth",
          }
        )}
      >
        {langsList.map((item, index) => (
          <li
            key={index}
            role="menuitem"
            tabIndex={0}
            className={cn("flex mr-2 ml-[-10px] items-center gap-2.5 uppercase pb-[5px] font-medium", {
              "font-bold text-accentColor border-b border-solid border-accentColor":
                lang === item,
            })}
            onClick={(event) => {
              event.stopPropagation();
              changeLocale(item);
            }}
            onKeyDown={(event) => event.key === "Enter" && changeLocale(item)}
          >
            <Image
              src={`/svgs/${item === "uz" ? "Uzbekistan" : item === "ru" ? "Russia" : "Usa"}.svg`}
              width={20}
              height={20}
              alt={`${item} flag`}
            />
            <span
              className={cn({
                "text-red-600": item === "en",
                "text-green-600": item === "uz",
                "text-blue-600": item === "ru",
                "font-interPrimary": true,
              })}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSwitcher;
