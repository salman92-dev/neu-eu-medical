"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function BlogDetails({ blog }) {
    return (
        <div className='mb-10'>
              <HelmetProvider>
                                        <Helmet>
                                            <title>{ blog.meta_title }</title>
                                            <meta
                                                name="description"
                                                content={ blog.meta_description }
                                            />
                                        </Helmet>
                                    </HelmetProvider>
            <div className='bg-[#FFE6DF] rounded-b-3xl md:pt-20 pt-10 '>
                <div className='md:w-2/3 md:px-0 px-4 mx-auto'>
                    <motion.h1
                        className="text-2xl md:text-4xl font-bold text-[#751010] mb-5"
                        initial={ { y: 20, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { type: 'spring', stiffness: 70 } }
                    >
                        { blog.title }
                    </motion.h1>
                    <Image
                        src={ blog.image }
                        alt={ blog.title }
                        width={ 1014 }
                        height={ 1000 }
                        className="rounded-lg w-full object-cover md:h-[700px] [350px] translate-y-10"
                        quality={ 100 }
                    />
                </div>
            </div>
            <div
                className="prose md:w-2/3 md:px-0 px-4 mx-auto blog-content prose-lg dark:prose-invert max-w-none mt-20"
                dangerouslySetInnerHTML={ { __html: blog.content } }
            />
        </div>
    )
}



