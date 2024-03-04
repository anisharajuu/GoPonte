import React from "react";
import Body from "./Body";
import PortalHeader from "./PortalHeader";
import AddJob from "./AddJob";

const BusinessPortal = () => {
  return (
    <div className="mt-10">
      <PortalHeader />
      <Body />
      <AddJob />
    </div>
  );
};

export default BusinessPortal;
