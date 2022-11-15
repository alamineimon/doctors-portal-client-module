import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data);
    }
    return (
      <div className="h-[500px] flex flex-col justify-center items-center">
        <div className="w-96 p-8">
          <h2 className="text-xl text-center">Login</h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Forget Password ?</span>
              </label>
            </div>
            <input
              className="btn btn-accent w-full text-white"
              value="Login"
              type="submit"
            />
          </form>
          <p className="text-m pt-2">
            New to Doctors Portal?{" "}
            <Link className="text-secondary">Create new account</Link>
          </p>
          <div className="divider">OR</div>
          <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    );
};

export default Login;