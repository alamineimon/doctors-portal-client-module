import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, upDateUser } = useContext(AuthContext);
  const { signupError, setSignupError } = useState("");

  const navigate = useNavigate()
   
  const handleSignUp = (data) => {
      console.log(data);
    // setSignupError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        upDateUser(userInfo)
          .then(() => {
            navigate('/')
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
        setSignupError(err.message);
      });
  };

  return (
    <div className="h-[500px] flex flex-col justify-center items-center">
      <div className="w-96 p-8">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecter or more",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn mt-6 btn-accent w-full text-white"
            value="Sign Up"
            type="submit"
          />
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p className="text-m pt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
