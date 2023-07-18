import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import Appointment from './Appointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>   
            <Info/>
            <Service/>
            <Appointment/>
            <Testimonial/>
            
        </div>
    );
};

export default Home;