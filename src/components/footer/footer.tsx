"use client";

import FooterNav from "./footernav";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <>
      <footer className="relative mt-8 md:pt-[46px] w-full h-auto md:h-[559px]">
        {/* Background Image & Overlay - OUTSIDE .my-container */}
        <div className="absolute inset-0 h-[90%] bg-[url('/imgs/footerback.png')] bg-no-repeat bg-cover z-0 md:h-[100%]" />
        <div className="absolute inset-0 bg-white/70" />

        {/* Content within .my-container */}
        <div className="relative z-10 my-container p-4 md:p-6">
          <FooterNav />

          {/* Mobile-Only Copyright */}
          <div className="block pb-0 w-100% md:hidden mt-6">
            <Copyright />
          </div>
        </div>
      </footer>

      {/* Desktop-Only Copyright */}
      <div className="hidden md:block w-full">
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
