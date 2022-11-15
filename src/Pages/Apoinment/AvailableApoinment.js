import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentOption from "./AppoinmentOption";

const AvailableApoinment = ({ selectedDate, setSelectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);
    
  return (
    <section className="my-36">
      <p className="text-center text-xl text-bold text-secondary">
        Available Appointments on: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appoinmentOptions.map((option) => (
          <AppoinmentOption
            key={option._id}
            option={option}
          ></AppoinmentOption>
        ))}
      </div>
    </section>
  );
};

export default AvailableApoinment;
