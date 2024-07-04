"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-start">
        <motion.div
          variants={fadeIn(0.5)}
          className="flex flex-col gap-6 mt-6 text-8xl font-bold text-white max-w-[1000px] w-auto h-auto"
        >
          <span>
            Hello! <br />
            I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Shiv{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={fadeIn(0.8)}
          className="text-gray-400 text-2xl my-5 max-w-[600px]">
          I am a college student passionate about blockchain development with skills in web development, graphic design, video editing, etc.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroContent;
