import React from 'react'
import Navbar from '@/layout/navbar'
import Eligibility from '@/components/eligibility'

export default function Page() {
    return (
        <div>
            <Navbar className="bg-[#FFE6DF] rounded-t-2xl md:px-8 px-3 pt-3" containerClass="md:px-8 px-3" />
            <div className='md:px-8 px-3'>
                <Eligibility />
            </div>
        </div>
    )
}
