import React, { useState } from "react";
import chair from '../../assets/images/chair.png'
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import appointment from "../../assets/images/appointment.png";



const ApoinmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <header
      className="my-6"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg lg:w-1/2 shadow-2xl"
            alt="dentist-chair"
          />
          <div className="mr-8 text-white">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            {/* <p className="text-center">You have selected date: {format(selectedDate, "PP")}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ApoinmentBanner;
