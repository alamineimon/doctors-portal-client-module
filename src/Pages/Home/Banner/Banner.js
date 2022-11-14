import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from "../../../assets/images/appointment.png";



const Banner = () => {
    return (
      <section className='py-16'
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="hero">
          <div className="hero-content text-white flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="rounded-lg lg:w-1/2 shadow-2xl"
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <PrimaryButton>Getting Started</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;