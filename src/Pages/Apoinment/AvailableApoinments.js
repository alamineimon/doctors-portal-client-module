import { format } from 'date-fns';
import React from 'react';

const AvailableApoinments = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className='mt-16'>
      <p className="text-center text-xl text-bold text-secondary my-16">
        Available Appointments on: {format(selectedDate, 'PP')}
      </p>
    </section>
  );
};

export default AvailableApoinments;