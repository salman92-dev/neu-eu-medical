import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="md:pt-20 pb-10 py-14 relative z-20">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div>
          <h1 className="uppercase relative md:text-[8vw]  text-[46px] leading-[8vw] text-primary font-bold ">
            Weight loss
            <Image
              src="/images/textserm.png"
              alt="hero modal"
              width={100}
              height={110}
              className="absolute md:right-10 -right-1 md:bottom-0 -bottom-2 md:w-[120px] md:h-[130px] w-12 h-12"
            />
          </h1>
          <h2 className="uppercase  md:text-[8vw] mt-5 leading-[8vw] text-[44px] text-primary font-bold text-end md:hidden block">
            <Image
              src="/images/joinavatarsmoble.png"
              alt="hero modal"
              width={66}
              height={32}
              className="absolute left-5-bottom-2 "
            />{" "}
            that works!
          </h2>
          <div className="md:block hidden">
            <p className="mt-24">
              Prescribed Medication-Assisted Weight Loss Program for
              Sustainable, Long Lasting Results.
            </p>
            <div className="flex items-center gap-3 mt-5 ">
              <Link
                href="/eligibility"
                className="flex items-center gap-3 font-medium bg-primary hover:bg-[#814a4a] px-7 py-3 text-white rounded-full md:w-fit w-full text-sm"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/eligibility"
                className="flex items-center gap-3 font-medium bg-[#FFE5E5] hover:bg-[#814a4a] px-7 py-3 text-black hover:text-white rounded-full md:w-fit w-full text-sm"
              >
                 Get Started Now <BsArrowRightShort />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/heromodel.png"
            alt="hero modal"
            width={435}
            height={487}
          />
        </div>
       
        <div className="md:block hidden">
          <Image
            src="/images/joinavatars.png"
            alt="hero modal"
            width={164}
            height={50}
            className="ml-auto"
          />
          <p className="text-end mt-2">
            Join Over 5000 Patients On This <br /> Transformative Journey
          </p>
          <h2 className="uppercase text-[8vw] leading-[8vw] text-primary font-bold mt-32">
            that works!
          </h2>
        </div>
         <div className="md:hidden block">
          <p className="mt-10 text-center">
            Prescribed Medication-Assisted Weight Loss Program for Sustainable,
            Long Lasting Results.
          </p>
          <div className="flex flex-col justify-center items-center gap-3 mt-3 ">
            <Link
              href="/eligibility"
              className="flex items-center justify-center gap-3 font-bold bg-primary hover:bg-[#814a4a] px-10 py-5 text-center text-white rounded-full w-fit md:text-sm"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/eligibility"
              className="flex items-center justify-center gap-3 font-bold bg-[#FFE5E5] hover:bg-[#814a4a] px-7 py-5 text-center text-black hover:text-white rounded-full w-fit md:text-sm"
            >
               Get Started Now <BsArrowRightShort />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// import PlayIcon from "../assets/play-icon";
// import Eligible from "../assets/eligible";
// import Arrow from "../assets/arrow";
// import { IoIosCall, IoMdCall } from "react-icons/io";
// import { LuDot } from "react-icons/lu";
// import Star from "../assets/star";
// import { FiSearch } from "react-icons/fi";

// const staggerContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const fadeInFromRight = {
//   hidden: { opacity: 0, x: 50 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const tagContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const tagItem = {
//   hidden: { opacity: 0, x: -20 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
// };

// const heading = "Weight loss that works".split(" ");

// // Container animation
// const fadeInUpContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// // Child animation (word)
// const wordAnimation = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <div className=" rounded-b-3xl pt-20 px-3 md:px-10 grid grid-cols-1 lg:grid-cols-2 md:gap-5 items-center">
//       {/* Left Content */}
//       <motion.div
//         className="md:pb-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         {/* Main Heading */}
//         <motion.h1
//           className="text-5xl uppercase lg:text-7xl text-[#751010] font-extrabold lg:leading-[2.5rem] leading-[3rem] flex flex-wrap gap-2"
//           variants={fadeInUpContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <span className="font-light">Weight loss</span>
//           <br className="md:block hidden" /> that works!
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           className="text-base text-gray-800 my-8 md:w-[80%]"
//           variants={fadeInUp}
//           custom={2}
//         >
//           Prescribed Medication-Assisted Weight Loss Program for Sustainable,
//           Long Lasting Results.
//         </motion.p>

//         {/* CTA Button */}

//         <div className="flex items-center gap-4">
//           <div>
//             <Link
//               href="/eligibility"
//               className="flex items-center justify-center font-bold text-2xl cursor-pointer text-white hover:bg-black bg-primary 2xl:w-[60px] 2xl:h-[60px] w-12 h-12 rounded-full"
//             >
//               <IoMdCall />
//             </Link>
//           </div>
//           <Link
//             href="/eligibility"
//             className="flex items-center gap-3 font-bold bg-primary hover:bg-[#814a4a] px-8 py-3 text-white rounded-full md:w-fit w-full text-sm md:text-base"
//           >
//             Book Free Consultation
//           </Link>
//         </div>

//         {/* Features Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20 "
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {/* Left Box */}
//           <motion.div
//             variants={fadeInFromRight}
//             className="relative md:block hidden"
//           >
//             <Image
//               src="/images/doctor.png"
//               alt="doctor"
//               width={260}
//               height={206}
//               className="w-full rounded-xl"
//               quality={100}
//             />
//           </motion.div>

//           {/* Right Box */}
//           <motion.div
//             variants={fadeInFromRight}
//             className="relative bg-white rounded-3xl overflow-hidden md:block hidden"
//           >
//             <div className="absolute text-sm flex gap-6 flex-col h-full p-6">
//               <p className="font-semibold text-lg">Neu Eu Medical</p>
//               <p className="text-gray-600 text-sm mt-4 leading-snug w-[191px]">
//                 Achieve Your Weight Loss Goals with Neu Eu Medical's Telehealth
//                 Solutions
//               </p>
//             </div>
//             <Image
//               src="/images/box-2.png"
//               alt="doctor"
//               width={260}
//               height={206}
//               className="w-full"
//               quality={100}
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Right Avatar Image */}
//       <motion.div
//         className="relative w-full h-full"
//         initial={{ opacity: 0, scale: 1.1 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         {/* Main Image */}
//         <Image
//           src="/images/main-avatar.png"
//           alt="main avatar"
//           width={745}
//           height={1105}
//           className="w-full mx-auto 2xl:h-[1105px] lg:h-[850px] object-contain h-full md:h-[100vw] object-center"
//           quality={100}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
//         />
//       </motion.div>
//     </div>
//   );
// }
