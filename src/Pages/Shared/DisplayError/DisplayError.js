import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = (props) => {

    const {logOut } = useContext(AuthContext);

    const error = useRouteError()

    const handleLogout = () => {
      logOut()
        .then(() => {
          toast("Logout successfully");
          Navigate("/");
        })
        .catch((err) => console.log(err));
    };
    return (
      <div>
        <p className="text-red-600">Something went wrong!!!</p>
        <p className="yext-red-400">{error.statusText || error.message}</p>
        <h4 className="text-3xl">
          Please <button onClick={handleLogout}>Sign out</button> and Log bank
          in
        </h4>
      </div>
    );
}

export default DisplayError;

//1326546565