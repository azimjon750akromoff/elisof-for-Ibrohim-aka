import { useTranslations } from "next-intl";
import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const FooterNav = () => {
  const t = useTranslations("Footer.FooterNav");

  return (
    <footer className="text-black font-sans py-8 flex flex-col items-center">
      <div className="w-full mt-28 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Home Section */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h3 className="text-[20px] md:text-[24px] font-sans mb-3">{t("Home.name")}</h3>
            <ul className="space-y-2 flex flex-col gap-4 text-gray-800 text-[16px] md:text-[20px] font-sans">
              <li>
                <a href={t("AboutUs.link")} className="hover:text-green-700  cursor-pointer">
                  {t("AboutUs.name")}
                </a>
              </li>
              <li>
                <a href={t("Products.link")} className="hover:text-green-700  cursor-pointer">
                  {t("Products.name")}
                </a>
              </li>
            </ul>
          </div>

          {/* Our Clients Section */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h3 className="text-[20px] md:text-[24px] font-sans mb-3">{t("OurClients.name")}</h3>
            <ul className="space-y-2 flex flex-col gap-4 text-gray-800 text-[16px] md:text-[20px] font-sans">
              <li>
                <a href={t("News.link")} className="hover:text-green-700  cursor-pointer">
                  {t("News.name")}
                </a>
              </li>
              <li>
                <a href={t("ContactUs.link")} className="hover:text-green-700  cursor-pointer">
                  {t("ContactUs.name")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h3 className="text-[20px] md:text-[24px] font-sans mb-3">{t("FollowUs.name")}</h3>
            <ul className="space-y-2 flex flex-col gap-4 text-gray-800 text-[16px] md:text-[20px] font-sans">
              <li>
                <a href="https://instagram.com" target="_blank" className="flex items-center gap-2 hover:text-green-700   cursor-pointer">
                  <FaInstagram className="text-gray-800 text-xl" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://t.me" target="_blank" className="flex items-center gap-2 hover:text-green-700  cursor-pointer">
                  <FaTelegramPlane className="text-gray-800 text-xl" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h3 className="text-[20px] md:text-[24px] font-sans mb-3">{t("Location.name")}</h3>
            <ul className="space-y-2 flex flex-col gap-4 text-gray-800 text-[16px] md:text-[20px] font-sans">
              <li className="hover:text-green-700  cursor-pointer">+998 99 123 45 67</li>
              <li className="hover:text-green-700  cursor-pointer">{t("Address.name")}</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterNav;