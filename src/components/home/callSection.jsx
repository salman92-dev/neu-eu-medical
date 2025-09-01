"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function CallSection() {
  const zoomOut = {
    hidden: { scale: 1.2, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="md:block hidden pt-32 pb-20 space-y-5 overflow-hidden calltoaction md:px-8 px-3"
      id="book"
    >
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-4xl text-primary capitalize font-bold mb-5 text-center">
        Convenient Online Consultation with <br className="md:block hidden" />
        <span className="text-burgundy">Licensed 👩🏻‍⚕️ Providers</span>
      </h2>

      <Link
        href="/eligibility"
        className="md:mt-10 mt-3 relative z-10 mx-auto flex items-center justify-center px-8 border md:w-fit w-full border-primary text-primary font-semibold py-3 rounded-full hover:bg-primary hover:text-white transition"
      >
        Book Free Consultation
      </Link>

      <motion.div
        variants={zoomOut}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:-mt-20"
      >
        <Image
          src="/images/Video-consultation.png"
          alt="call-sec"
          width={1320}
          height={816}
          className="w-full h-full object-center"
          quality={50}
        />
      </motion.div>
    </div>
  );
}
