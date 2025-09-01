"use client";

import React from "react"; 
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Plans", href: "#plans" },
  { title: "FAQs", href: "#faqs" },
  { title: "Book Consultation", href: "#book" },
  { title: "Sign Up", href: "/eligibility" },
  { title: "Blogs", href: "/blog" },
];

const footerInfo = [
  { title: "Terms Of Service", href: "/terms-and-conditions" },
  { title: "Privacy Policy", href: "/privacy-policies" },
  { title: "© 2025. All Rights Reserved", href: null }, // No link
  { title: "Info@neueu.co", href: "mailto:Info@neueu.co" },
  { title: "19723325266", href: "tel:19723325266" },
];

export default function Footer() {
  return (
    <footer className="md:px-2 px-3 py-2   md:-mt-7 mt-10 relative z-10 ">
      <div className="bg-white py-5 rounded-2xl">
        {/* Top Row - Navigation */}
        <div className="flex flex-wrap justify-center md:gap-6 gap-3 font-medium mb-4">
          {navLinks.map((item, index) => (
            <div key={index}>
              <Link
                href={`${item.href}`}
                className="hover:text-[#FF8F7A] text-primary transition"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Row - Info */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-primary">
          {footerInfo.map((item, index) => (
            <div key={index}>
              <Link href={`${item.href}`} className="flex items-center gap-2">
                {index !== 0 && <span className="text-gray-300">|</span>}
                <span>{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
