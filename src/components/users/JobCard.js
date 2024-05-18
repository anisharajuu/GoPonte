import React, { useState } from "react";
import { useUser } from '../../UserContext';

const JobCard = ({ job }) => {
  const { user } = useUser();
  // street city state zip
  const [formData, setFormData] = useState({
    name: '',
    gradYear: '',
    university: '',
    experience: '',
    jobId: job.job_id, 
    userId: user.id, 
    resume: null,   
  });


  const [toggleApply, setToggleApply] = useState(false);
  const [responce, setResponse] = useState("");
  const [student, setStudent] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };


  const saveJob  = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/updateStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Succesfully saved job");
        setToggleApply(false);
        setResponse("Job Saved!");
      } else {
        console.error("Failed to save job:", response.status);
      }
    } catch (error) {
      console.error("Error saving job:", error);
    }
  }


  const apply = async (e) => {
    e.preventDefault();
    const data = new FormData();
    // Append each part of formData to the FormData object
    data.append('name', formData.name);
    data.append('gradYear', formData.gradYear);
    data.append('university', formData.university);
    data.append('experience', formData.experience);
    data.append('jobId', formData.jobId);
    data.append('userId', formData.userId);
    data.append('resume', formData.resume);  // Handle the resume file upload
    /*
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
    */
   console.log(job);
    try {
        const response = await fetch("http://localhost:8000/apply", {
            method: "POST",
            body: data,
        });

        if (response.ok) {
            console.log("Successfully applied");
            setToggleApply(false); 
            setResponse("Application Submitted!"); 
        } else {
            console.error("Failed to apply to job posting:", response.status);
            setResponse("Failed to submit application."); 
        }
    } catch (error) {
        console.error("Error applying to job posting:", error);
    }
}



  const saveResponces  = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/updateStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Succesfully saved responces");
        setToggleApply(false);
        setResponse("Application Saved!")
      } else {
        console.error("Failed to save responces:", response.status);
      }
    } catch (error) {
      console.error("Error saving responces:", error);
    }
  }

  const fetchLast  = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/fetchStudent");
      if (response.ok) {
        console.log("Fetched last application");
        const data = await response.json();
        setStudent(data); 
      } else {
        console.error("Failed to fetch responces:", response.status);
      }
    } catch (error) {
      console.error("Error fetching responces:", error);
    }
  }

  //<button className="btn btn-outline w-20" onClick={saveJob}>Save</button>

  return (
    <div className="card w-full bg-base-100 shadow-xl px-10">
      <div className="card-body">
        <h2 className="card-title">{job.job_title}</h2>
        <div className="flex flex-row gap-2 justify-left">
          <h3>{job.BusName}</h3>
          <h3>| Start Date: {job.startDate}</h3>
          <h3>| Duration: {job.Duration} Weeks</h3>
        </div>
        <p>{job.short_desc}</p>
        {(responce !== "") && <>{responce}</>}
        {toggleApply ? 
          <>
            <h2 className="card-title mt-10">Application:</h2>
            <div className="flex flex-row justify-between">
              <button className="btn btn-outline w-50" onClick={fetchLast}>Use default applicaiton</button>
              <button className="btn btn-outline w-12" onClick={() => setToggleApply(false)}>X</button>
            </div>
            <div className="form-control ">
              <div className="flex flex-col gap-5">
                <label className="label">
                  <span className="label-text text-md">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">University</span>
                    </label>
                    <input
                      type="text"
                      placeholder="University"
                      className="input input-bordered w-full"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">Graduation Year</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Graduation Year"
                      className="input input-bordered w-full"
                      name="gradYear"
                      value={formData.gradYear}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label className="label">
                  <span className="label-text">Relevent Experience</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Relevent Experience"
                  className="textarea textarea-bordered h-64"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
                <label className="label">
                  <span className="label-text">Resume/CV Upload:</span>
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={e => setFormData({ ...formData, resume: e.target.files[0] })}
                />

              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline w-50" onClick={saveResponces}>
                Save responces as default
              </button>
              <button className="btn1 py-3 text-xl" onClick={apply}>
                Apply!
              </button>
            </div>
          </>
        :
          <div className="card-actions flex flex-row justify-center mt-3">
            <button className="btn btn-outline">View Job</button>
            <button className="btn btn-outline" onClick={() => setToggleApply(true)}>Apply to job</button>
          </div>
        }
      </div>
    </div>
  );
};

export default JobCard;
