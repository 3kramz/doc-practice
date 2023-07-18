import React from 'react';
import quote from '../../assets/icons/quote.svg';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <div>
            <div className='flex justify-between mt-10 p-12'>
                <div>
                    <h1 className='text-secondary text-xl'>Testimonial</h1>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <img className='w-[192px]' src={quote} alt='' />
            </div>
<div className='flex justify-around items-center'>


            <TestimonialCard />

            <TestimonialCard />

            <TestimonialCard />
</div>




        </div>
    );
};

export default Testimonial;