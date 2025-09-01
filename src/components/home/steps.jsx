"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundDown,
  IoIosArrowRoundForward,
  IoIosArrowRoundUp,
} from "react-icons/io";
import { motion } from "framer-motion";

const stepsData = [
  {
    img: "/images/step-1.png",
    text: "Fill out our short survey to determine eligibility for services.",
    name: "Jessica S.",
    prfation: "Neu Eu Patient",
  },
  {
    img: "/images/step-2.png",
    text: "Meet with your provider to assess your diet, fitness, & health, & customize a personalized weight loss plan.",
    name: "Adam K.",
    prfation: "Neu Eu Patient",
  },
  {
    img: "/images/step-3.png",
    text: "On your appointment day, your provider will order your medication, & a U.S. pharmacy will process & ship it.",
    name: "Victoria J.",
    prfation: "Neu Eu Patient",
  },
  {
    img: "/images/step-4.png",
    text: "Take your medication as prescribed & follow your treatment plan—many patients lose up to 10 lbs in the first month!",
    name: "John P.",
    prfation: "Neu Eu Patient",
  },
];

const mobilesteps = [
  {
    mobileimg: "/images/mobile-step-1.png",
    text: "My provider helped me understand the difference between, hunger, being bored, and food addiction..",
    name: "Jessica S.",
    prfation: "Neu Eu Patient",
  },
  {
    mobileimg: "/images/mobile-step-2.png",
    text: "Meet with your provider to assess your diet, fitness, & health, & customize a personalized weight loss plan.",
    name: "Adam K.",
    prfation: "Neu Eu Patient",
  },
  {
    mobileimg: "/images/mobile-step-3.png",
    text: "On your appointment day, your provider will order your medication, & a U.S. pharmacy will process & ship it.",
    name: "Victoria J.",
    prfation: "Neu Eu Patient",
  },
  {
    mobileimg: "/images/mobile-step-4.png",
    text: "Take your medication as prescribed & follow your treatment plan—many patients lose up to 10 lbs in the first month!",
    name: "John P.",
    prfation: "Neu Eu Patient",
  },
];

export default function Steps() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stepsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stepsData.length) % stepsData.length);
  };

  return (
    <div className="steps py-20 md:px-10 px-4 relative overflow-hidden md:-mt-20 mt-10">
      {/* Arrow Buttons */}
      <div className="md:flex hidden flex-col md:gap-10 gap-3 absolute md:top-[50%] top-[38%] md:-translate-y-[50%] -translate-y-[30%] md:left-20 left-5 z-50">
        <button
          onClick={handlePrev}
          className="bg-white rounded-full md:p-3 p-1 md:text-2xl text-sm cursor-pointer shadow-lg"
        >
          <IoIosArrowRoundUp />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#B16464] text-white rounded-full md:p-3 p-1 md:text-2xl text-sm cursor-pointer shadow-lg"
        >
          <IoIosArrowRoundDown />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-center md:text-5xl text-3xl font-semibold text-[#751010]">
        Hear from Our <br /> Weight
        <span className="bg-[#F26969] px-2 text-white rounded-sm inline-block  mx-2 text-3xl">
          Heroes
        </span>
        .
      </h2>

      {/* Steps Layered */}
      <div className="md:block hidden relative md:mt-10 mt-6 md:h-[380px] h-[150px]">
        {stepsData.map((step, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.div
              key={index}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[841px] flex items-center justify-center"
              style={{
                zIndex: isActive ? 30 : 20 - index,
                pointerEvents: isActive ? "auto" : "none",
              }}
              animate={{
                opacity: isActive ? 1 : 0.5,
                y: isActive ? -20 : 0,
                scale: isActive ? 1 : 0.95,
                rotate: isActive ? "0deg" : index % 2 === 0 ? "-2deg" : "2deg",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="relative w-full">
                <div className="absolute md:w-2/6 w-2/5 md:left-[8vw] left-[10vw] md:top-[5vw] top-[9vw]  text-[#7A3333]">
                  <p className="md:text-xl text-[10px] font-medium">
                    {step.text}
                  </p>
                  <h2 className="text-lg mt-2 font-bold">{step.name}</h2>
                  <p className="text-sm">{step.prfation}</p>
                </div>

                <Image
                  src={step.img}
                  alt=""
                  width={841}
                  height={325}
                  className="mx-auto w-full"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="md:hidden block mt-10 relative text-center">
        <div className="relative text-primary ">
          <div className="absolute p-8 top-16 z-10 w-full">
            <p className="text-base font-medium">
              {mobilesteps[currentIndex].text}
            </p>
            <h2 className="text-lg mt-2 font-bold">
              {mobilesteps[currentIndex].name}
            </h2>
            <p className="text-sm">{mobilesteps[currentIndex].prfation}</p>
          </div>

          <Image
            src={mobilesteps[currentIndex].mobileimg}
            alt=""
            width={841}
            height={325}
            className="mx-auto w-full h-full shadowcustom rounded-full "
            quality={100}
          />

          {/* Arrows */}
          <div className="flex justify-center items-center gap-5 z-10 mt-10">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-primary text-primary hover:text-white rounded-full p-2 shadow-md"
            >
              <IoIosArrowRoundBack className=" text-2xl" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-primary text-primary hover:text-white rounded-full p-2 shadow-md"
            >
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
