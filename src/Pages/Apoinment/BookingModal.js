import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      appoinment: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null)
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-secondary text-center my-6 font-bold">
            {name}
          </h3>

          <form
            onSubmit={handleBooking}
            className="grid gap-3 grid-cols-1"
            action=""
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              required
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="w-full btn btn-secondary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
