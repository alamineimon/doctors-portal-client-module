import React from "react";

const AppoinmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-center text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>{slots.length} { slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary text-white">Book Appoinment</button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
