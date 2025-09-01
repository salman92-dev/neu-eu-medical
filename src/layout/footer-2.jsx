"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Footer2({ className }) {
  return (
    <div className="md:px-10 px-4 mb-5">
      {/* Footer Bottom */}
      <div
        className={`flex flex-col md:flex-row items-center justify-between ${
          className ? className : "bg-[#F2E1D0]"
        } p-5 rounded-3xl gap-4 text-sm`}
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          width={107}
          height={40}
          quality={100}
        />
        <div className="flex flex-wrap gap-4 md:gap-8 text-[#333] opacity-80">
          <Link href="/terms-and-conditions">Terms of Service</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policies">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
