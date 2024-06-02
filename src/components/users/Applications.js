import React, { useState, useEffect } from "react";
// import JobCard from "./JobCard";
import { useUser } from "../../hooks/UserContext";

const Applications = () => {
  const { user } = useUser();
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/studentApplications/${user.id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    }
  };

  // Effect to fetch applications when the component mounts or userId changes
  useEffect(() => {
    if (user.id) {
      fetchApplications();
    }
  }, [user.id]);

  return (
    <>
      <div className="mt-5 w-full grid grid-cols-4 gap-4">
        <div className="h-screen bg-gray-300 px-5 flex flex-col">
          Filter Sidebar content
        </div>
        <div className="h-screen overflow-y-scroll col-span-3 flex flex-col items-center gap-4">
          {applications.map((app, index) => (
            <div className="card w-full bg-base-100 shadow-xl px-20 py-10">
              <div className="flex flex-col gap-3">
                <h2 className="card-title">{app.job_title}</h2>
                <div className="flex flex-row gap-2 justify-left">
                  <h3>{app.BsName}</h3>
                  <h3>| Start Date: {app.startDate}</h3>
                  <h3>| Duration: {app.Duration} Weeks</h3>
                </div>
                <p>{app.job_desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Applications;
