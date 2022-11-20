import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = (props) => {
    const  booking  = useLoaderData()
    const {price,slot,treatment,appoinment} = booking
    return (
      <div>
        <h1 className="text-4xl mb-4">Payment for {treatment}</h1>
        <p className="text-xl">
          Please pay: <strong>${price}</strong> for appontment on {appoinment}{" "}
          at {slot}
        </p>
      </div>
    );
}

export default Payment;