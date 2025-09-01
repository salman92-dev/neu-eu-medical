"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Join() {
  // Animation variants
  const textVariant = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
      transform: "skewY(5deg) scale(0.95)",
    },
    show: {
      clipPath: "inset(0 0% 0 0)",
      transform: "skewY(0deg) scale(1)",
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const popup = {
    hidden: { opacity: 0, scale: 0.3 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const bubble = {
    hidden: { opacity: 0, scale: 0.3 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="px-[20px] lg:px-[120px] md:px-[60px] py-16 overflow-hidden relative">
      <Image
        src="/images/bubbuls.png"
        alt="img1"
        width={200}
        height={200}
        className="absolute top-[8vw] right-[3vw]"
        quality={100}
      />

      <motion.h2
        className="text-2xl sm:text-5xl  text-primary capitalize font-bold text-center"
        variants={textVariant}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        Join Over 5000 Patients On This <br />
        <span className="text-burgundy">Transformative Journey</span>
      </motion.h2>
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="md:my-10 py-5"
      >
        <Link
          href="/"
          className="flex items-center mx-auto justify-center gap-3 font-medium bg-primary hover:bg-[#814a4a] px-14 py-3 text-white rounded-full w-fit text-sm md:text-base"
        >
          Join Community
        </Link>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col md:flex-row gap-10 justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left group */}
        <div className="flex justify-center items-center flex-col w-full md:w-[30%]">
          <motion.div variants={popup}>
            <Image
              src="/images/avatar-1.png"
              alt="img1"
              width={114}
              height={114}
              quality={100}
              className="-ml-5"
            />
          </motion.div>
          <div className="flex gap-5 mt-4">
            <motion.div variants={popup}>
              <Image
                src="/images/avatar-3.png"
                alt="img3"
                width={167}
                height={167}
                quality={100}
              />
            </motion.div>
            <motion.div variants={popup} className="-mt-5">
              <Image
                src="/images/avatar-2.png"
                alt="img2"
                width={172}
                height={172}
                quality={100}
              />
            </motion.div>
          </div>
          <motion.div variants={popup} className="-mt-10 ml-9">
            <Image
              src="/images/avatar-4.png"
              alt="img4"
              width={69}
              height={69}
              quality={100}
            />
          </motion.div>

          <motion.div variants={popup} className="lg:-mt-5 ml-auto">
            <Image
              src="/images/see-more-btn.png"
              alt="img4"
              width={142}
              height={142}
              quality={100}
            />
          </motion.div>
        </div>

        {/* Center group */}
        <div className="w-full md:w-[40%] relative">
          {/* Rating */}
          <motion.div
            variants={bubble}
            className="absolute lg:right-0 md:-left-7 left-0 lg:left-auto bg-gray-50 rounded-full p-5 lg:top-[5vw] top-0 text-center text-[#751010]"
          >
            <p className="text-3xl font-semibold">4.8</p>
            <p className=" text-xl">★★★★★</p>
            <p className="text-xs ">8K+ REVIEWS</p>
          </motion.div>

          <motion.div variants={popup} className="ml-32">
            <Image
              src="/images/avatar-6.png"
              alt="img6"
              width={160}
              height={160}
              quality={100}
            />
          </motion.div>
          <div className="flex gap-2 mt-5">
            <motion.div variants={popup} className="-ml-5">
              <Image
                src="/images/avatar-5.png"
                alt="img5"
                width={288}
                height={288}
                quality={100}
              />
            </motion.div>
            <motion.div variants={popup} className="mt-5">
              <Image
                src="/images/avatar-7.png"
                alt="img7"
                width={214}
                height={214}
                quality={100}
              />
            </motion.div>
          </div>
        </div>

        {/* Right group */}
        <motion.div
          variants={popup}
          className="w-full md:w-[30%] flex items-center justify-center"
        >
          <Image
            src="/images/avatar-8.png"
            alt="img8"
            width={337}
            height={337}
            className="my-auto rounded-full"
            quality={100}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
