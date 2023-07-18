import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'


const Appointment = () => {
  return (
    <section style={
      {
        background:`url(${appointment})`,
      }
    } className='flex justify-center items-center'>
      <div className='hidden lg:block flex-1 mt-[-200px]'>
        <img src={doctor} alt="" />
      </div>

      <div className='flex-1'>
        <h1 className='text-xl text-primary'>Appointment</h1>
        <h3 className='text-3xl text-white'>Make an Appointment Today</h3>
        <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <button className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'>Learn More</button>
      </div>

    </section>
  );
};

export default Appointment;