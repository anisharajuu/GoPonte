import React, { useState } from "react";
import OpenJobs from "./OpenJobs";
import AppliedJobs from "./AppliedJobs";

const Body = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabID) => {
    setActiveTab(tabID);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <OpenJobs />;
      case "tab2":
        return <AppliedJobs />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5">
      <div>
        <div class="tabs bg-[linear-gradient(theme(colors.base-300),theme(colors.base-300))] bg-bottom bg-no-repeat bg-[length:100%_1px] flex justify-center">
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab1" ? "tab-active" : ""
            }`}
            id="tab1"
            onClick={() => handleTabClick("tab1")}
            style={{ color: "black" }}
          >
            Open Jobs
          </div>
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab2" ? "tab-active" : ""
            }`}
            id="tab2"
            onClick={() => handleTabClick("tab2")}
            style={{ color: "black" }}
          >
            Applied Jobs
          </div>
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab4" ? "tab-active" : ""
            }`}
            id="tab4"
            onClick={() => handleTabClick("tab4")}
            style={{ color: "black" }}
          >
            Message Center
          </div>
        </div>
      </div>
      <div>{renderTabContent()};</div>
    </div>
  );
};

export default Body;
