import React from 'react';
import dc from '../../assets/images/people1.png'

const TestimonialCard = () => {
    return (
        <div className="card w-96  shadow-xl">

            <div className="card-body items-center text-center">

                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className="justify-center items-center card-actions mt-10">
                    <div className="avatar ">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={dc} alt='' />
                        </div>
                    </div>
                    <div className='pl-4'>
                        <h2 className='text-2xl text-left'>Winson Herry</h2>
                        <p className='text-xl text-left'>California</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;