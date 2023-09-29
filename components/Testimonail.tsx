import React from 'react';
import Image from 'next/image';
import TestimonialSlider from './TestimonialSlider';
function Testimonail() {
    return (
        <>
            <div className="padding-x   bg-[#171717] mt-10 py-10" id='testimonial'>
                <div className='flex items-center justify-center mb-3'>
                    <Image src='/Testimonials.png' alt='' width={120} height={60} />


                </div>
                <h1 className='globalHeading text-[#181F36] text-center mb-3'>What Our Client Says About US</h1>

<TestimonialSlider/>

            </div>

        </>
    )
}

export default Testimonail