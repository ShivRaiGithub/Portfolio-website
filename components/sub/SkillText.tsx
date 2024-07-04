"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={fadeIn(0.5)}
        className='text-[60px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Skills
        <motion.p
          variants={fadeIn(0.7)}
          className="text-2xl text-gray-400 my-5 max-w-[600px]"
        >
          Languages, Libraries and Frameworks <br />
          I have experience with
        </motion.p>
      </motion.div>
    </div>
  )
}

export default SkillText
