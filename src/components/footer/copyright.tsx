import { useTranslations } from "next-intl";
import React from "react";

function Copyright() {
  const t = useTranslations("Footer");

  return (
    <>
      <div className="pb-5 pt-5">
        <div className="bg-white bg-contain text-center font-sans z-20 ">
          <p className="text-[#7A7A7A] text-[16px] font-sans md:text-[20px]">
            &copy;{t("Copyright")} 2025 | Dynamic Soft | {t("AllRights")}
          </p>
        </div>
      </div>
    </>
  );
}

export default Copyright;
