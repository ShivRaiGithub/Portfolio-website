import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="w-full h-full ">
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
