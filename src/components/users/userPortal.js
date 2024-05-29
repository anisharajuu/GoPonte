import React from "react";
import Body from "./Body";
import PortalHeader from "./PortalHeader";
import { ToastContainer } from "react-toastify";
import Footer from "../../sharedPage/Footer/Footer";

const UserPortal = () => {
  return (

      <div className="bg-portalBG p-10">
        <div className="mt-10 w-full">
          <PortalHeader />
          <Body />
          <Footer />
          <ToastContainer />
        </div>
      </div>

  );
};

export default UserPortal;
