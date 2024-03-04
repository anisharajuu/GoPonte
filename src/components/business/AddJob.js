import React, { useState } from "react";

const AddJob = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    busName: "",
    startDate: "",
    duration: "",
    jobDesc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8000/addJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log("Job posting successful:");

        // Reset the form after successful signup
        setFormData({
          jobTitle: "",
          busName: "",
          startDate: "",
          duration: "",
          jobDesc: "",
        });
      } else {
        console.error("Error adding job:", response.status);
        // Handle error, display a message, etc.
      }
    } catch (error) {
      console.error("Error adding job:", error.message);
      // Handle error, display a message, etc.
    }
  };

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] bg-white flex flex-col justify-center rounded-2xl">
        <div className="flex flex-row justify-between m-5">
          <h className="text-xl">Post New Job</h>
          <button className="text-xl" onClick={() => onClose()}>
            X
          </button>
        </div>
        <div className="flex flex-col m-5 gap-2.5">
          <input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            className="input input-bordered w-full rounded-md"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Business Name"
            name="busName"
            className="input input-bordered w-full rounded-md"
            value={formData.busName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Start Date (ex. Feb 23, 2024)"
            name="startDate"
            className="input input-bordered w-full rounded-md"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Duration (weeks)"
            name="duration"
            className="input input-bordered w-full rounded-md"
            value={formData.duration}
            onChange={handleChange}
          />
          <textarea
            className="textarea textarea-bordered rounded-md min-h-[175px] max-h-[175px]"
            placeholder="Job Description"
            name="jobDesc"
            value={formData.jobDesc}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-5 mr-5 ml-5">
          <button className="btn btn-block btn-outline" onClick={handleSubmit}>
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
