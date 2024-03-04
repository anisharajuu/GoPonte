import React, { useState } from "react";
import axios from "axios";

const CVReview = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      file: file,
      additionalInfo: additionalInfo,
    };

    try {
      const response = await axios.post(
        "https://sheetdb.io/api/v1/i0qfi93mlqvuj",
        formData
      );

      console.log("Server response: ", response.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setFile("");
      setAdditionalInfo("");
    } catch {
      console.log("failed");
    }
  };

  return (
    <div className="mt-10">
      <header>
        <h2 className="fonts text-center text-[48px] font-bold font-serif">
          {" "}
          CV Review{" "}
        </h2>
        <p className="text-center text-slate-500 mb-10 mt-3 text-2xl font-semibold">
          {" "}
          At PONTE, we stand out by providing unparalleled services to our
          clients. Submit your resume below, and one of our experienced industry
          specialists will review it and leave feedback.{" "}
        </p>
      </header>
      <div
        data-aos="zoom-in"
        className="py-12 bg-[#087f65] rounded hover:shadow-xl my-5 text-black items-center"
      >
        <div className="mt-5 flex flex-col items-center">
          <form
            className="flex flex-col gap-5 rounded p-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex gap-5">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-12 input-white rounded-xl w-full max-w-xs border-r-0 px-3 input input-bordered"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 input-white rounded-xl w-full max-w-xs border-r-0 px-3 input input-bordered"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="h-12 input-black rounded-xl w-full max-w-m px-3 input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {/* <label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
            </label> */}
            <input
              type="text"
              placeholder="Resume Link"
              className="h-12 input-black rounded-xl w-full max-w-m px-3 input input-bordered"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            ></input>
            <label>
              <textarea
                placeholder="Additional info"
                type="text"
                className="h-24 input-white rounded-xl w-full max-w-m border-r-0 px-3 input input-bordered"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              ></textarea>
            </label>
            <button className="h-12 rounded-xl w-full max-w-m px-3 input input-bordered bg-slate-700 text-slate-100">
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CVReview;
