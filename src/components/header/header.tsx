"use client";

import { useTranslations } from "next-intl";
import LangSwitcher from "./lang-switcher";
import { Locale } from "../../../i18n.config";
import BurgerMenu from "./burger-menu";
import ResponsiveLogo from "../responsivelogo/responsiveLogo";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import Link from "next/link";

const Navbar = ({ locale }: { locale: Locale }) => {
  const t = useTranslations("Header.Nav");
  const router = useRouter(); // ✅ Initialize Next.js Router

  const keysNav = [
    "Home",
    "Products",
    "AboutUs",
    "OurClients",
    "News",
    "ContactUs",
  ] as const;

  // Smooth scrolling function
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg shadow-black/">
  <nav className="my-container flex justify-between items-center py-1">
    {/* Left Logo */}
    <div className="left pt-2">
      <ResponsiveLogo />
    </div>

    {/* Navigation Links */}
    <ul className="flex gap-[48px] hidden md:flex">
      {keysNav.map((item, index) => {
        const sectionId = t(`${item}.link`);
        return (
          <li className="font-gilroy text-[16px] font-medium" key={index}>
            {item === "Home" ? (
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                  handleScroll(e, sectionId);
                }}
                className="cursor-pointer hover:text-accentColor"
              >
                {t(`${item}.name`)}
              </Link>
            ) : (
              <Link
                href={sectionId}
                onClick={(e) => handleScroll(e, sectionId)}
                className="cursor-pointer hover:text-accentColor"
              >
                {t(`${item}.name`)}
              </Link>
            )}
          </li>
        );
      })}
    </ul>

    {/* Lang Switcher & Burger Menu */}
    <div className="right flex items-center hidden md:flex">
      <LangSwitcher type="default" locale={locale} />
    </div>
    <div className="md:hidden">
      <BurgerMenu locale={locale} />
    </div>
  </nav>
</div>

  );
};

export default Navbar;
