import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div  style={
            {
              background:`url(${appointment})`,
            }
          }
          className='text-center py-10'>
            <h2 className='text-primary'>Contact Us</h2>
            <div className='my-5'>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
            </div>

            <div className='my-5'>
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
            </div>

            <div className='my-5'>
            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

            </div>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">SUBMIT</button>
       

        </div>
    );
};

export default ContactUs;