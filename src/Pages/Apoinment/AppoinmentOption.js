import React from "react";

const AppoinmentOption = ({ option, setTreatment }) => {
  const { name,price, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-center text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-xl text-bold">Price: { price}$</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            onClick={() => setTreatment(option)}
            className="btn btn-primary text-white"
          >Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
