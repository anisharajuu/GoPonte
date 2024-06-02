import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import routes from "../routes/Routes";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="max-w-[100%] mx-auto App">
          <Outlet />
          <RouterProvider router={routes}/>
        </div>
        
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;
