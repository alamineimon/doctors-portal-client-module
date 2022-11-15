import React, { useState } from 'react';
import ApoinmentBanner from './ApoinmentBanner';
import AvailableApoinments from './AvailableApoinments';

const Apoinment = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
      <div>
        <ApoinmentBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></ApoinmentBanner>
        <AvailableApoinments
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AvailableApoinments>
      </div>
    );
}

export default Apoinment;