import React from "react";
import Body from "./Body";
import PortalHeader from "./PortalHeader";
import Apply from "./Apply";

const StudentPortal = () => {
  return (
    <div className="mt-10">
      <PortalHeader />
      <Body />
      <Apply />
    </div>
  );
};

export default StudentPortal;
