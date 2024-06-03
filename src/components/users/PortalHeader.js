import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../UserContext';

const PortalHeader = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();


  const onSignOut = () => {
    setUser(null);
    navigate("/");
  }
  return (
    <div className="mt-5">
      <div className="flex flex-row justify-between align-items">
        <div className="text-3xl font-bold">Welcome {user.firstName}!</div>
        <button onClick={onSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default PortalHeader;
