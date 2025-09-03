'use client';

import { blogs } from '@/components/assets/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



export default function BlogSlider() {
    const [index, setIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    const router = useRouter()

    // Responsive: detect screen width
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 640 ? 1 : 2); // Tailwind sm: breakpoint
        };

        handleResize(); // Set on load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const start = index * itemsPerPage;
    const currentBlogs = blogs.slice(start, start + itemsPerPage);

    return (
        <section className="py-20 px-4 sm:px-6 md:px-12 n">
            <HelmetProvider>
                <Helmet>
                    <title>Weight Loss Blog | Medication Insights & Programs | Neu Eu</title>
                    <meta
                        name="description"
                        content="Explore Neu Eu’s weight loss blog for insights on medication‑assisted programs, telehealth care, and expert advice on semaglutide, tirzepatide, and more."
                    />
                </Helmet>
            </HelmetProvider>
            <motion.h1
                className="text-4xl md:text-6xl text-center font-bold text-[#751010] mb-16"
                initial={ { y: 20, opacity: 0 } }
                animate={ { y: 0, opacity: 1 } }
                transition={ { type: 'spring', stiffness: 70 } }
            >
                Welcome to the Neu Eu Blog!
            </motion.h1>

            <div className="relative max-w-3xl mx-auto overflow-hidden" >

                <div className={ `grid grid-cols-1 sm:grid-cols-${itemsPerPage} gap-8 transition-all` }>
                    { currentBlogs.map((blog, i) => (
                        <motion.div
                            key={ i }
                            className="bg-white rounded-xl p-4 shadow_class cursor-pointer"
                            initial={ { opacity: 0, scale: 0.95, y: 20 } }
                            animate={ { opacity: 1, scale: 1, y: 0 } }
                            transition={ { duration: 0.5, delay: i * 0.2 } }
                            onClick={()=> router.push(`/blog/${blog.slug}`)}
                        >
                            <Link href={ `/blog/${blog.slug}` }>
                                <Image
                                    src={ blog.image }
                                    alt={ blog.title }
                                    width={ 500 }
                                    height={ 300 }
                                    className="rounded-lg w-full object-cover h-[200px]"
                                    quality={ 100 }
                                />
                            </Link>
                            <span className="text-sm bg-[#4B6BFB0D] px-3 rounded-md text-[#4B6BFB] font-semibold mt-4 inline-block">
                                { blog.category }
                            </span>
                            <h3 className="text-xl font-semibold mt-2 line-clamp-3">{ blog.title }</h3>
                            <p className="text-sm text-gray-500 mt-3">{ blog.date }</p>
                        </motion.div>
                    )) }
                </div>

                {/* Arrows */ }
                <div className="flex justify-center gap-6 mt-10 mb-5">
                    <button
                        onClick={ prevSlide }
                        className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
                    >
                        <FaArrowLeft className="text-[#751010]" />
                    </button>
                    <button
                        onClick={ nextSlide }
                        className="bg-[#751010] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
