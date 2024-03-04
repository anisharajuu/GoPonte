import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{job.job_title}</h2>
        <h3>{job.BusName}</h3>
        <h3>Start Date: {job.startDate}</h3>
        <h3>Duration: {job.Duration} Weeks</h3>
        <p>{job.job_desc}</p>
        <div className="card-actions flex flex-row justify-center mt-3">
          <button className="btn btn-outline">View Applicants</button>
          <button className="btn btn-outline">Close Posting</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
