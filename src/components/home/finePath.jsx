"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const wellnessItems = [
  {
    icon: "/images/scale.svg",
    text: "Achieve 15–20% Weight Loss With Expert Care",
  },
  {
    icon: "/images/energy.svg",
    text: "Feel Energized With Weight Loss Support",
  },
  {
    icon: "/images/wellness.svg",
    text: "Improve Wellness Through Guidance",
  },
  {
    icon: "/images/plan.svg",
    text: "Sustain Weight Loss With Ongoing Plans",
  },
  {
    icon: "/images/clothes.svg",
    text: "Fit Favorite Clothes & Regain Confidence",
  },
  {
    icon: "/images/smile.svg",
    text: "Simplify Your Weight Loss Journey",
  },
];

export default function FinePath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
      },
    },
  };

  return (
    <div
      className="md:flex items-center justify-center flex-col py-32 hidden"
      ref={ref}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-4xl text-primary capitalize font-bold mb-5 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Tired of Weight Loss Struggles? <br className="md:block hidden" />
        We’ll Find <span className="text-burgundy">Your Path</span>
      </motion.h2>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/eligibility"
          className="flex items-center gap-3 font-medium bg-burgundy hover:bg-primary px-8 py-3 hover:text-white text-white rounded-full w-fit text-sm md:text-base"
        >
          Book Free Consultation
        </Link>
      </motion.div>

      {/* Grid with animations */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 2xl:mt-28 lg:mt-20 md:mt-14 mt-10"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {wellnessItems.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative bg-brandbg rounded-xl text-center p-6 flex flex-col items-center justify-center transition duration-300"
          >
            <span className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 z-0"></span>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <Image src={itemData.icon} alt="icon" width={80} height={80} />
              <p className="text-[13px] text-primary mt-3">{itemData.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
