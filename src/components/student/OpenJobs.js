import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Apply from "./Apply";

const OpenJobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/activeJobs");
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
      <div className="mt-5">
        <div className="flex flex-wrap justify-center gap-4">
          {jobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OpenJobs;
