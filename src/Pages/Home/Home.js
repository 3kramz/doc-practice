import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import Appointment from './Appointment';

const Home = () => {
    return (
        <div>
            <Banner/>   
            <Info/>
            <Service/>
            <Appointment/>
            
        </div>
    );
};

export default Home;