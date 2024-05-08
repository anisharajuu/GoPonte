import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

const ActiveJobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/jobPostings");
        if (response.ok) {
          const data = await response.json();
          setJobList(data); // Set job postings state with fetched data
          console.log("Job Postings:", data);
        } else {
          console.error("Failed to fetch job postings:", response.status);
        }
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };
    fetchJobs(); // Call fetchJobPostings function when component mounts
  }, []);

  return (
    <>
      <div className="mt-5 w-full grid grid-cols-4 gap-4">
        <div className="h-screen bg-gray-300 px-5 flex flex-col">Filter Sidebar content</div>
        <div className="col-span-3 h-screen flex flex-col justify-center gap-4 overflow-y-scroll">
          {jobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ActiveJobs;
