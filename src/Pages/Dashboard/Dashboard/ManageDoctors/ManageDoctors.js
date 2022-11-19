import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const ManageDoctors = (props) => {

  const closeModal = () => {
    setDeletingDoctor(null)
  }
  
  const [deletingDoctor, setDeletingDoctor] = useState(null)
  const { data: doctors, isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  
  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast(`Doctor ${doctor.name} deleted successfully`);
          refetch()
        }
      });
  };

    if (isLoading) {
      return <Loading></Loading>;
    }
  return (
    <div>
      <h1 className="text-3xl">Manage Docotors: {doctors?.length}</h1>
      {/* /dashboard/managedoctors */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="Doctors" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <th>
                  <label
                    onClick={() => {
                      setDeletingDoctor(doctor);
                    }}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm  btn-error text-white"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure ?`}
          message={`If you delete  ${deletingDoctor.name}. It cannot be undone again`}
          successAction={handleDeleteDoctor}
          successButtonName='Delete'
          closeModal={closeModal}
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
