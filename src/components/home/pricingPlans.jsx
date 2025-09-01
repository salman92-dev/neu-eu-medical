"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";

import { BsPatchCheckFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { productData } from "../data";

 

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function PricingPlans() {
  return (
    <motion.div
      className="bg-brandbg md:px-10 px-5 md:py-32 pt-32 pb-10 mt-20 rounded-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="plans"
    >
      <motion.div
        className="flex items-center md:flex-row flex-col md:justify-between justify-center gap-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl text-primary capitalize font-semibold">
          Personalized Solutions for <br className="md:block hidden" />
          <span className="text-burgundy">Lasting Results</span>
        </h2>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/eligibility"
              className="flex items-center gap-3 w-full font-bold bg-burgundy hover:bg-primary px-8 py-3 hover:text-white text-white rounded-full md:w-fit text-sm md:text-base"
            >
              Book Free Consultation
            </Link>
          </motion.div>
          <motion.div
            className="md:flex hidden"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/"
              className="flex items-center justify-center font-bold text-2xl cursor-pointer text-white hover:bg-black bg-primary 2xl:w-[60px] 2xl:h-[60px] w-12 h-12 rounded-full"
            >
              <IoMdCall />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-8 md:gap-5 gap-10 mt-20"
      >
        {productData.map((plan, index) => {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-2xl w-full pb-5 overflow-hidden shadow-md bg-white flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ${
                index === 3 ? "text-white" : "text-primary"
              }`}
            >
              <div>
                <div className="text-sm text-center bg-primary2 p-2 text-white">
                  {plan.type}
                </div>

                <div className={`${plan.bgClass} md:p-5 p-8`}>
                  <div className="flex justify-center">{plan.icon}</div>
                  <h3 className="text-lg font-bold text-center my-3">
                    {plan.title}
                  </h3>
                  <div className={`text-4xl font-bold text-center`}>
                    {plan.price}
                  </div>
                </div>

                {/* Desktop version */}
                <div className="md:p-5 p-8 pt-10 hidden md:block">
                  <h3 className="font-medium mb-4 text-[#CA6464]">
                    Features you’ll get:
                  </h3>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700"
                        variants={listItemVariants}
                        custom={i}
                      >
                        <span className="text-primary">
                          <BsPatchCheckFill />
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mobile collapsible */}
                <div className="md:p-5 p-8 pt-10 md:hidden">
                  <h3
                    className="font-medium mb-4 text-[#CA6464] cursor-pointer flex items-center justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Features you’ll get:
                    <span
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        className="space-y-4 mb-10"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="text-primary">
                              <BsPatchCheckFill />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Join Now Button */}
                <motion.div
                  className="md:px-5 px-8 w-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Link
                    href="/eligibility"
                    onClick={() => {
                      const product = {
                        img: productData[index].img,
                        title: productData[index].title,
                        price: productData[index].price,
                        type: productData[index].type,
                        features: productData[index].features,
                        calander: productData[index].calander,
                      };
                      localStorage.setItem(
                        "selectedProduct",
                        JSON.stringify(product)
                      );
                    }}
                    className="block text-center w-full border border-primary text-primary font-semibold py-2 rounded-full hover:bg-primary hover:text-white transition"
                  >
                    Join Now!
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
