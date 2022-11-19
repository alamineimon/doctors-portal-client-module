import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = (props) =>{
    return (
      <section
        className="p-8 sm:p-6"
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="text-center sm:my-6 sm:w-full lg:my-16 lg:w-2/5 mx-auto">
          <div className='my-4'>
            <h1 className="text-primary sm:text-xl lg:text-4xl">Contact Us</h1>
            <h1 className="lg:text-5xl sm:4xl sm:mb-6 lg:mb-12 text-white">Stay connected with us</h1>
          </div>
          <div className="flex flex-col mb-12">
            <input
              className=" p-2 rounded-lg"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="my-6 p-2 rounded-lg"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className=" p-2 rounded-lg"
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Your message"
            ></textarea>
            </div>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
      </section>
    );
}

export default ContactUs;