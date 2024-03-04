import React, { useState } from "react";
import axios from "axios";

const Waitlist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleButtonClick = async (event) => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setShowError(true);
    } else {
      setShowError(false);

      const postData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      try {
        const response = await axios.post(
          "https://sheetdb.io/api/v1/sdiq0easp6f5x",
          postData
        );

        console.log("Server Response:", response.data);

        setFirstName("");
        setLastName("");
        setEmail("");
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="py-12 bg-[#087f65] rounded hover:shadow-xl my-5 text-black"
    >
      <h1 className="text-5xl text-center font-bold font-serif mb-2">
        Join our waitlist
      </h1>
      <p className="text-center text-xl mb-7">
        * Sign up here with your email.
      </p>
      <div className="mt-5 flex flex-col items-center">
        <form
          className="flex flex-col gap-5 rounded p-5"
          onSubmit={handleButtonClick}
        >
          <div className="flex gap-5">
            <div className="flex-1">
              <label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-12 input-white rounded-xl w-full max-w-xs border-r-0 px-3 input input-bordered"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div className="flex-1">
              <label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 input-black rounded-xl w-full max-w-xs px-3 input input-bordered"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <label>
            <input
              type="text"
              placeholder="Email"
              className="h-12 input-black rounded-xl w-full max-w-m px-3 input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {showError && (
            <div className="text-center text-red-500 mt-2">
              Please enter a valid email.
            </div>
          )}
          <button className="bg-slate-700 h-12 text-slate-100 px-5 rounded-md">
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
{
  /* <button className="btn1 py-3 px-4 font-bold mb-7">
                Learn More{" "}
              </button> */
}

export default Waitlist;
