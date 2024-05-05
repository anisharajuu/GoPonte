import React, { useState } from "react";
import "../../sharedPage/customCss/Custom.css";
import bottomImg from "../../assets/wave (1).svg";
import Students from "./Students";
import Businesses from "./Businesses";

const Resources = () => {
  const [option, setOption] = useState("Students");

  const handleButtonClick = (selectedOption) => {
    setOption(selectedOption);
  };

  return (
    <div className="mt-5 relative">
      <div className="flex flex-col lg:flex-row md:flex-row gap-[5%] py-[15px] blue-darker">
        <button
          style={{
            textDecoration: option === "Students" ? "underline" : "none",
          }}
          onClick={() => handleButtonClick("Students")}
        >
          Students
        </button>
        <button
          style={{
            textDecoration: option === "Businesses" ? "underline" : "none",
          }}
          onClick={() => handleButtonClick("Businesses")}
        >
          Businesses
        </button>
      </div>
      <div>
        {option === "Students" && <Students />}
        {option === "Businesses" && <Businesses />}
      </div>
    </div>
  );
};

export default Resources;
