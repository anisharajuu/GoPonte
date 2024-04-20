import React from "react";
import Services from "./BusinessComponents/Services";
import BusinessContact from "./BusinessComponents/BusinessContact";
import BusinessHeader from "./BusinessComponents/BusinessHeader";

const Businesses = () => {
  return (
    <div>
      <BusinessHeader />
      <Services />
      <BusinessContact />
    </div>
  );
};

export default Businesses;
