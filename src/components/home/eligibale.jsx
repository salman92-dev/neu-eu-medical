"use client";

import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const socialsData = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/neueumedical?igsh=cm93NXJvajNxenl2" },
  { icon: <CiFacebook />, link: "https://www.facebook.com/profile.php?id=61566649072474&mibextid=wwXIfr&rdid=OVrmXSbYKrpxHm5A&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BTkikvoWx%2F%3Fmibextid%3DwwXIfr" },
  { icon: <FaXTwitter />, link: "" },
  { icon: <FaPinterestP />, link: "" },
];

const socialVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
  }),
};

export default function Eligibale() {

  const router = useRouter()

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      {/* Left Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:block hidden"
      >
        <Image
          src={"/images/Eligibale1.png"}
          alt="Eligibale 1"
          width={585}
          height={652}
          className="w-full h-full"
        />
      </motion.div>

      {/* Center Content */}
      <div className="flex flex-col justify-center text-white 2xl:gap-10 gap-5 text-center items-center">
        {/* Heading */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="2xl:text-[44px] text-4xl mb-2 font-bold capitalize">
            kickstart your wellness journey Now!
          </h2>
          <p>
            Join our newsletter for exclusive health tips, weight loss insights
          </p>
        </motion.div>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#ffffff7c] rounded-full flex items-center w-[90%] mx-auto justify-center relative z-20" 
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="text-primary md:pl-5 pl-5 md:py-3 py-2 outline-0 placeholder:pl-5"
          />
          <button className="md:px-10 px-7 ml-auto md:py-3 py-2 relative z-20 rounded-full text-primary bg-white font-semibold cursor-pointer">
            Subscribe
          </button>
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 justify-center">
          {socialsData.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={socialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => router.push(`${item.link}`)}
              className="bg-[#9F3B3B] p-3 rounded-full text-xl hover:scale-110 transition cursor-pointer"
            >
                              {item.icon}
              
            </motion.div>
          ))}
        </div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/images/Eligibalelogo.png"}
            alt="Eligibalelogo"
            width={126}
            height={134}
          />
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:block hidden"
      >
        <Image
          src={"/images/Eligibale2.png"}
          alt="Eligibale 2"
          width={585}
          height={652}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
