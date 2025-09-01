'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";


const imageData = [
    "/images/brand-1.png",
    "/images/brand-2.png",
    "/images/brand-3.png",
    "/images/brand-4.png",
    "/images/brand-1.png",
    "/images/brand-2.png",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Brands() {
    return (
        <motion.div
            className='bg-brandbg py-8 px-4 flex flex-wrap justify-center gap-8 items-center mt-14 rounded-3xl'
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.3 } }
            variants={ containerVariants }
        >
            <Marquee direction="left">
                <div className='flex justify-between w-full'>
                    { imageData.map((item, idx) => (
                        <div className='w-40 sm:w-52 md:w-[210px] relative z-40' key={ idx }>
                            <Image
                                src={ item }
                                alt={ `Brand ${idx + 1}` }
                                width={ 210 }
                                height={ 32 }
                                className='w-full h-8 object-contain'
                                quality={ 100 }
                            />
                        </div>
                    )) }
                </div>
            </Marquee>

        </motion.div>
    );
}
