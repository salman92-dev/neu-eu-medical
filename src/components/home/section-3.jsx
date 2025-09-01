"use client";

import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    imagePath: "/images/sec-3-box-1.png",
    text: "1. Complete a short survey to check your eligibility.",
  },
  {
    imagePath: "/images/sec-3-box-2.png",
    text: "2. Choose your weight loss plan.",
  },
  {
    imagePath: "/images/sec-3-box-3.png",
    text: "3. Meet with a provider to tailor your weight loss plan.",
  },
  {
    imagePath: "/images/sec-3-box-4.png",
    text: "4. Providers send prescription to pharmacy per your plan.",
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Section3() {
  return (
    <motion.div
      className="bg-stepbg p-5 sm:p-10 sm:pt-40 py-20  rounded-3xl mt-5 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      custom={0}
    >
        <Image src={"/images/line1.png"} alt="line" width={500} height={500} className="absolute top-0 left-[50%] z-10 md:block hidden" />
      {/* Header */}
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <div className="space-y-4 sm:space-y-6">
          {/* Title */}
          <h2 className="md:text-5xl text-3xl font-semibold text-primary">
            Your
            <span className="bg-[#F26969] px-2 text-white rounded-sm inline-block -translate-y-2 -rotate-6 mx-2 text-3xl">
              4 - STEP
            </span>
            <br className="md:block hidden" />
            Journey to Weight Loss
          </h2>
         
        </div>
        <Link
          href="/eligibility"
          className="flex items-center justify-center text-white min-w-[186px] text-center bg-burgundy px-5 py-2 rounded-full w-fit text-sm sm:text-base"
        >
        Check Eligibility 
        </Link>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 mt-10 sm:mt-20 ">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            className="sticky top-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={idx + 1}
          >
            <p className="inset-0 p-8 absolute w-3/4 sm:w-2/2 text-primary font-medium text-xl sm:text-base">
              {item.text}
            </p>
            <Image
              src={item.imagePath}
              alt={item.text}
              width={294}
              height={200}
              className="w-full object-cover rounded-2xl"
              quality={100}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
