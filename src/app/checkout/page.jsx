import CheckoutPage from '@/components/checkout'
import Footer2 from '@/layout/footer-2'
import Navbar from '@/layout/navbar'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Navbar className="bg-[#FFE6DF] rounded-t-2xl" containerClass="md:px-8 px-3" />
            <div className='md:px-8 px-3'>
                <CheckoutPage />
            </div>
            <Footer2 className="bg-[#F2E1D0] mt-5" />
        </div>
    )
}
