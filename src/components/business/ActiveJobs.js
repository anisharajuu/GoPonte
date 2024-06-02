import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import AddJob from "./AddJob";
import { useBusiness } from "../../BusinessContext";

const ActiveJobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobList, setJobList] = useState([]);
  const { business } = useBusiness();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/jobPostings/${business.id}`
        );

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
  }, [business.id]);

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row justify-end mt-5 mb-5">
          <button
            className="btn btn-outline mr-10"
            onClick={() => setShowModal(true)}
          >
            Post New Job
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {jobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
      <AddJob isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ActiveJobs;
