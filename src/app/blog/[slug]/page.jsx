import { blogs } from '@/components/assets/data'
import BlogDetails from '@/components/home/blog-details'
import Footer2 from '@/layout/footer-2'
import Navbar from '@/layout/navbar'
import React from 'react'

export default async function Page({ params }) {

    const { slug } = await params
    const blogData = blogs.find((item) => item.slug === slug)

    return (
        <div>
            <Navbar className="bg-[#FFE6DF] rounded-t-2xl" containerClass="md:px-8 px-3" />
            <div className='px-3 md:px-8 '>
                <BlogDetails blog={ blogData } />
            </div>
            <Footer2 />
        </div>
    )
}
