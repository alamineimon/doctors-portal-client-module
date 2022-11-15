import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Apoinment from "../../Pages/Apoinment/Apoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Apoinment></Apoinment>
      },
    ],
  },
]);

export default router;