"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoArrowDown } from "react-icons/go";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

const docterData = [
  {
    ImageUrl: "/images/heroDoctor1.png",
    socials: [
      { url: "", icon: <FaFacebookSquare /> },
      { url: "", icon: <AiFillTikTok /> },
      { url: "", icon: <AiFillInstagram /> },
      { url: "", icon: <FaSquareXTwitter /> },
    ],
  },
  {
    ImageUrl: "/images/heroDoctor2.png", // You can change this for second doctor
    socials: [
      { url: "", icon: <FaFacebookSquare /> },
      { url: "", icon: <AiFillTikTok /> },
      { url: "", icon: <AiFillInstagram /> },
      { url: "", icon: <FaSquareXTwitter /> },
    ],
  },
];

export default function ScrollSection() {
  const router = useRouter();

  return (
    <div className="Subtractbg relative flex md:flex-row flex-col gap-5 items-center justify-between md:px-8 px-0 md:pt-5 pt-0  pb-5 md:mt-0 mt-10">
      <div className="space-y-1 pt-12 pl-5 md:hidden flex-col gap-2 items-center justify-center flex">
        <div className="p-2 flex items-center justify-center mx-auto rounded-full bg-white text-primary">
          <GoArrowDown />
        </div>
        <p className="md:text-base text-xs">
          Scroll down to
          <br />
          check eligibility
        </p>
      </div>
      <Image
        src="/images/NeuEUMedicalCard.png"
        alt="NeuEUMedicalCard"
        width={341}
        height={200}
      />
      <Image
        src="/images/arrow button.png"
        alt="scroll"
        width={74}
        height={74}
        className="xl:left-[45vw] left-[37.5vw] absolute md:top-0 -top-[50px]"
      />

      <div
        onClick={() => router.push("#plans")}
        className="space-y-3 cursor-pointer pt-20 md:left-[66px] md:flex flex-col gap-2 items-center justify-center hidden"
      >
        <div className="p-2 mx-auto rounded-full bg-white text-primary text-2xl block w-fit">
          <GoArrowDown />
        </div>
        <p>
          Scroll down to
          <br />
          check eligibility
        </p>
      </div>
      <div className="relative block w-[341px]">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {docterData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <Image
                  src="/images/box.png"
                  alt="NeuEUMedicalCard"
                  width={341}
                  height={200}
                />
                <div className="absolute p-5 top-0 left-0 flex items-end gap-3">
                  <Image
                    src={item.ImageUrl}
                    alt="heroDoctor1"
                    width={160}
                    height={174}
                  />
                  <div className="pb-3">
                    <h3 className="font-bold text-xl text-primary leading-5">
                      Licensed <br /> Providers
                    </h3>
                    <div className="flex justify-center gap-4 mt-2 text-[#E99292] ">
                      {item.socials.map(({ url, icon }, idx) => (
                        <Link
                          key={idx}
                          href={url || "#"} // fallback if URL is empty
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition text-xl hover:text-primary"
                        >
                          {icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
