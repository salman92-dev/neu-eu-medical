"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const data = [
  {
    className: "bg-box1",
    imagePath: "/images/searm1.png",
    title: "Semaglutide",
    description:
      "A GLP-1 agonist, curbs appetite for 15–20% weight loss. Branded or compounded, it’s ideal for steady results.",
    height: "h-28 object-contain",
  },
  {
    className: "bg-box2",
    imagePath: "/images/searm2.png",
    title: "Tirzepatide",
    description:
      "A dual GLP-1/GIP agonist, promotes 20–25% weight loss. Branded or compounded, it’s great for fast results.",
    height: "h-28 object-contain",
  },
  {
    className: "bg-box3",
    imagePath: "/images/searm3.png",
    title: "Branded GLP-1s",
    description:
      "Branded GLP-1s promote steady weight loss and lower cravings. Have your provider send your prescription to a pharmacy of your choice.",
    height: "h-28 object-contain",
  },
];

export default function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5"
    >
      {/* Left Image */}
    
        <Link href={"#plans"} className="block">
          <Image
            src="/images/chose.png"
            alt="chose"
            width={520}
            height={550}
            className="w-full h-full object-cover 2xl:rounded-[30px] rounded-3xl"
          />
        </Link>

      {/* Animated Cards */}
      {data.map((item, idx) => (
        <motion.div
          key={idx}
          className={`${item.className} space-y-5 px-5 md:py-10 py-14 2xl:rounded-[30px] rounded-3xl 2xl:px-10 2xl:py-[86px]`}
          custom={idx}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div>
            <Image
              src={item.imagePath}
              alt={item.title}
              width={85}
              height={100}
              className={item.height}
            />
          </div>
          <div className="space-y-3 text-primary">
            <h3 className="2xl:text-[30px] text-2xl font-semibold">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
