import React from "react";
import { useBusiness } from "../../BusinessContext";
import { useNavigate } from "react-router-dom";

const PortalHeader = () => {
  const { setBusiness } = useBusiness();
  const navigate = useNavigate();

  const onSignOut = () => {
    setBusiness(null);
    navigate("/");
  };
  return (
    <div className="mt-5">
      <div className="flex flex-row justify-between align-items">
        <div className="text-3xl font-bold">Welcome</div>
        <button onClick={onSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default PortalHeader;
