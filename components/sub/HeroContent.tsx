"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center text-center mt-40 w-full z-[20] p-10"
    >
      <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-center">
        <motion.div
          variants={fadeIn(0.5)}
          className="flex flex-col mt-6 text-8xl font-bold text-white w-auto h-auto text-center"
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
          className="text-gray-400 flex-col items-center mx-auto text-center text-2xl my-5 max-w-[1000px] ">
          I am a college student passionate about blockchain development with skills in web development, graphic design, video editing, etc.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroContent;
