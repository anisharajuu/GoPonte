import React, { useState } from "react";

const Apply = ({ isVisible, onClose, jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    gradYear: "",
    university: "",
    experience: "",
    jobId: jobId,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8000/apply/${jobId}", {
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
          name: "",
          gradYear: "",
          university: "",
          experience: "",
          jobId: jobId,
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
          <h className="text-xl">Apply</h>
          <button className="text-xl" onClick={() => onClose()}>
            X
          </button>
        </div>
        <div className="flex flex-col m-5 gap-2.5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="input input-bordered w-full rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Graduation Date (ex. June 2025)"
            name="gradYear"
            className="input input-bordered w-full rounded-md"
            value={formData.gradYear}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="University"
            name="university"
            className="input input-bordered w-full rounded-md"
            value={formData.university}
            onChange={handleChange}
          />
          <textarea
            className="textarea textarea-bordered rounded-md min-h-[175px] max-h-[175px]"
            placeholder="Experience"
            name="jobDesc"
            value={formData.experience}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-5 mr-5 ml-5">
          <button className="btn btn-block btn-outline" onClick={handleSubmit}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
