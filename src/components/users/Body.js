import React, { useState } from "react";
import ActiveJobs from "./ActiveJobs";
import SavedJobs from "./SavedJobs";
import Applications from "./Applications";

const Body = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabID) => {
    setActiveTab(tabID);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return <ActiveJobs />
      case "tab2":
        return <SavedJobs />
      case "tab3":
        return <Applications />
      case "tab4":
        return <div>Personal Info</div>
      case "tab5":
        return <div>Messages</div>
      default:
        return null;
    }
  };

  return (
    <div className="mt-5 flex flex-col w-full h-full">
      <div>
        <div class="tabs w-full bg-[linear-gradient(theme(colors.base-300),theme(colors.base-300))] bg-bottom bg-no-repeat bg-[length:100%_1px] flex justify-center">
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab1" ? "tab-active" : ""
            }`}
            id="tab1"
            onClick={() => handleTabClick("tab1")}
            style={{ color: "black" }}
          >
            Find Jobs
          </div>
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab2" ? "tab-active" : ""
            }`}
            id="tab2"
            onClick={() => handleTabClick("tab2")}
            style={{ color: "black" }}
          >
            Saved Jobs
          </div>
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab3" ? "tab-active" : ""
            }`}
            id="tab3"
            onClick={() => handleTabClick("tab3")}
            style={{ color: "black" }}
          >
            Applications
          </div>
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab4" ? "tab-active" : ""
            }`}
            id="tab4"
            onClick={() => handleTabClick("tab4")}
            style={{ color: "black" }}
          >
            Personal Info
          </div>
          <div
            className={`text-lg tab tab-bordered ${
              activeTab === "tab5" ? "tab-active" : ""
            }`}
            id="tab5"
            onClick={() => handleTabClick("tab5")}
            style={{ color: "black" }}
          >
            Messages
          </div>
        </div>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Body;
