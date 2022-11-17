import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, {  useState } from "react";
import Loading from "../Shared/Loading/Loading";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "./BookingModal";

const AvailableApoinment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null)
  const date = format(selectedDate, 'PP')
  
  const { data: appoinmentOptions = [], refetch, isLoading} = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>
  }
    
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
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableApoinment;
