import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {register,handleSubmit,formState: { errors },} = useForm();
  const { signIn } = useContext(AuthContext)
  const [loginError, setLoginError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
      console.log(data);
      setLoginError('')
      signIn(data.email, data.password)
        .then((result) => {
          const user = result.user;
          toast('User login successfully')
          console.log(user);
          navigate(from, {replace: true})
        })
        .catch((err) => {
          console.error(err.message)
          setLoginError(err.message);
        });
    }
    return (
      <div className="h-[500px] flex flex-col justify-center items-center">
        <div className="w-96 p-8">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
              <label className="label">
                <span className="label-text">Forget Password ?</span>
              </label>
            </div>
            <input
              className="btn btn-accent w-full text-white"
              value="Login"
              type="submit"
            />
            {
              loginError && <p>{loginError}</p>
            }
          </form>
          <p className="text-m pt-2">
            New to Doctors Portal?{" "}
            <Link to='/signup' className="text-secondary">Create new account</Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    );
};

export default Login;