import React from 'react';

import ServiceCard from './ServiceCard';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceHero from './ServiceHero';


const Service = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluride Treatment',
            img: fluride,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        }
    ]

    return (
        <div className='mt-20'>
            <h3 className='text-center text-3xl text-secondary font-semibold'>OUR SERVICES</h3>
            <h4 className='text-center text-5xl ' >Services We Provide</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {serviceData.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
            <ServiceHero/>

        </div>
    );
};

export default Service;