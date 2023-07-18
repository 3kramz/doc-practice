import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import Appointment from './Appointment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner/>   
            <Info/>
            <Service/>
            <Appointment/>
            <Testimonial/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;