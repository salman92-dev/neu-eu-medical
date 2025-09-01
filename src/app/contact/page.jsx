import ContactUsPage from '@/components/contact'
import Navbar from '@/layout/navbar'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Navbar className="bg-[#FFE4D1] rounded-t-2xl" containerClass="md:px-8 px-3" />
            <div className='md:px-8 px-3'>
                <ContactUsPage />
            </div>
        </div>
    )
}
