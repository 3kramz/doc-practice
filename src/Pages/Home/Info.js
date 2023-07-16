import React from 'react';
import InfoCard from './InfoCard';

import Clock from '../../assets/icons/clock.svg';
import Location from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';

const info = [
    {
        title:"Opening Hours",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon:Clock,
        background:"bg-gradient-to-r from-primary to-secondary "
    },
    {
        title:"Visit our location",
        description:"Brooklyn, NY 10003 USA",
        icon:Location,
        background:"bg-neutral"
    },  
    {
        title:"Contact us now",
        description:"+000 123 456789",
        icon:Phone,
        background:"bg-gradient-to-r from-primary to-secondary"
    }
]



const Info = () => {
    return (
        <div className='px-10 grid grid-cols-3 gap-4'>
            {
                info.map((item, index) => <InfoCard key={index} item={item}/>)
            }

        </div>
    );
};

export default Info;