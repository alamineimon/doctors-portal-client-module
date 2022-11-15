import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "./BookingModal";

const AvailableApoinment = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const[treatment, setTreatment] = useState(null)

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
            setTreatment={setTreatment}
          ></AppoinmentOption>
        ))}
      </div>

      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableApoinment;
