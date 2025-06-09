import React from "react";
import Hero from "../home/first/hero";
import BestSeller from "../home/second/bestselleritems";

const MainComponent = () => {
  return (
    <div className="relative">
      {/* Grey Background Image Section */}
      <div
  className="absolute inset-[340px] w-[80%] h-[500px] bg-contain px-12 z-0 hidden md:block"
  style={{ backgroundImage: "url('/imgs/grey.png')", backgroundPosition: "70% center",marginLeft:"13.5%"}}
></div>

      {/* Hero Component */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* BestSeller Component */}
      <div className="relative z-10">
        <BestSeller />
      </div>
    </div>
  );
};

export default MainComponent;
