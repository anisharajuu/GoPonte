import React, { useState } from "react";

// TO DO: This page would be used to save the users information so they dont have to enter it every time

const PersonalInfo = ({ user }) => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    education: "",
    experience: "",
    resume: "",
  });
  const [toggleApply, setToggleApply] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apply = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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
  }


  return (
    <>
      <div className="form-control ">
        <div className="flex flex-col gap-5">
          <label className="label">
            <span className="label-text text-md">Address</span>
          </label>
          <input
            type="text"
            placeholder="Address"
            className="w-full input input-bordered"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            placeholder="Education"
            className="input input-bordered"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
          <label className="label">
            <span className="label-text">Experience</span>
          </label>
          <input
            type="text"
            placeholder="Education"
            className="input input-bordered"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-control mt-6">
        <button className="btn1 py-3 text-xl" onClick={apply}>
          Update Profile
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
