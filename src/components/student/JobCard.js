import React, { useState } from "react";
import { Link } from "react-router-dom";
import Apply from "./Apply";

const JobCard = ({ job }) => {
  const jobId = job.id;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{job.job_title}</h2>
          <h3>{job.BusName}</h3>
          <h3>Start Date: {job.startDate}</h3>
          <h3>Duration: {job.Duration} Weeks</h3>
          <p>{job.job_desc}</p>
          <div className="card-actions flex flex-row justify-center mt-3">
            <Link
              to={{ pathname: `/description/${jobId}`, state: { job } }}
              className="btn btn-outline"
            >
              Read More
            </Link>
            <button
              className="btn btn-outline mr-10"
              onClick={() => setShowModal(true)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <Apply isVisible={showModal} jobId={jobId} onClose={() => setShowModal(false)} />
    </>
  );
};

export default JobCard;
