import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

const ActiveJobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/activeJobs");
        if (response.ok) {
          const data = await response.json();
          setJobList(data); // Set job postings state with fetched data
          //console.log("Job Postings:", data);
        } else {
          console.error("Failed to fetch job postings:", response.status);
        }
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      <div className="mt-5 w-full grid grid-cols-4 gap-4">
        <div className="h-screen bg-gray-300 px-5 flex flex-col">Filter Sidebar content</div>
        <div className="h-screen overflow-y-scroll col-span-3 flex flex-col items-center gap-4">
          {jobList.map((job) => (
            <JobCard job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ActiveJobs;
