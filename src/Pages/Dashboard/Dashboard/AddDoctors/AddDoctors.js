import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from "@tanstack/react-query";
import Loading from '../../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddDoctors = (props) => {
      const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const imageHostingKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()


    const {data:specialties,isLoading} = useQuery({
      queryKey: ["specialty"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
        const data = await res.json();
        return data;
      },
    });
    
    const handleAddDoctors = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imagData => {
                if (imagData.success) {
                    console.log(imagData.data.display_url);
                    const doctor = {
                      name: data.name,
                      email: data.email,
                      specialty: data.specialty,
                      image: imagData.data.display_url
                    }
                    //save doctor info to database
                    fetch(`http://localhost:5000/doctors`, {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('accessToken')}` 
                },
                      // headers: {
                      //   "content-type": "application/json",
                      //   authorization: `bearer ${localStorage.getItem(
                      //     "accessToken"
                      //   )}`,
                      // },
                      body: JSON.stringify(doctor),
                    })
                      .then((res) => res.json())
                      .then((result) => {
                        console.log(result);
                        toast.success(`$(result?.name) is added successfully`);
                        navigate("/dashboard/managedoctors");
                      });
                }
        })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
      <div className="w-96 p-7">
        <h2>Add a Doctors</h2>
        <form onSubmit={handleSubmit(handleAddDoctors)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-400">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.img && (
              <p className="text-red-400">{errors.img?.message}</p>
            )}
          </div>
          <input
            className="btn mt-6 btn-accent w-full text-white"
            value="Add Doctor"
            type="submit"
          />
        </form>
      </div>
    );
}

export default AddDoctors;