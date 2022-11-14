import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = (props) =>{
    return (
      <section
        className="p-8"
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="text-center my-16 w-2/5 mx-auto">
          <div className='my-4'>
            <h1 className="text-primary text-2xl">Contact Us</h1>
            <h1 className="text-5xl mb-12 text-white">Stay connected with us</h1>
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