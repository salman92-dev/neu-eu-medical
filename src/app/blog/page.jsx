import BlogSlider from '@/components/home/ui/BlogSlider'
import Navbar from '@/layout/navbar'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Navbar className="bg-[#FFE6DF] rounded-t-2xl" containerClass="md:px-8 px-3" />
            <div className='px-3 md:px-8 '>
                <div className='bg-[#FFE6DF] rounded-b-3xl md:py-20 py-10 '>
                    <BlogSlider />
                </div>
            </div>
        </div>
    )
}
