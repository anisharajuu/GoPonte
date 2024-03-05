import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        company: company,
        email: email,
        message: message,
      };

      try {
        const response = await axios.post(
          "https://sheetdb.io/api/v1/qitikqjlehv47",
          postData
        );

        console.log("Server Response:", response.data);

        setFirstName("");
        setLastName("");
        setCompany("");
        setEmail("");
        setMessage("");
        toast.success("Thank you for joining!");
      } catch (error) {
        console.error("Error:", error.message);
        toast.error("Error submitting the form. Please try again.");
      }
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="py-12 bg-[#0077b6] rounded hover:shadow-xl my-5 text-white"
    >
      <h1 className="text-5xl text-center font-bold font-serif mb-2">
        Partner with us!
      </h1>
      <p className="text-center text-xl mb-7">
        Gain access to top tier talent at a moment's notice
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
              placeholder="Company"
              className="h-12 input-black rounded-xl w-full max-w-m px-3 input input-bordered"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Email"
              className="h-12 input-black rounded-xl w-full max-w-m px-3 input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Message"
              className="h-12 input-black rounded-xl w-full max-w-m px-3 input input-bordered"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

  /*
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showError, setShowError] = useState(false);

    const handleButtonClick = async (event) => {
      event.preventDefault();

      console.log("Form submitted");

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValidEmail) {
        console.log("Invalid email");
        setShowError(true);
      } else {
        setShowError(false);

        const postData = {
          name: name,
          company: company,
          email: email,
          message: message,
        };

        try {
          const response = await axios.post(
              "https://sheetdb.io/api/v1/qitikqjlehv47",
              postData
          );

          console.log("Server Response:", response.data);

          setName("");
          setCompany("");
          setEmail("");
          setMessage("");
          toast.success("Thank you for joining!");
        } catch (error) {
          console.error("Error:", error.message);
          toast.error("Error submitting the form. Please try again.");
        }
      }
    };

    return (
      <div
        data-aos="zoom-in"
        className="py-[130px] bg-[#087f65;] rounded hover:shadow-xl my-5"
      >
        <h1 className=" text-5xl text-center text-gray-50 font-bold font-serif">
          Partner With Us{" "}
        </h1>
        <p className="text-center text-slate-300 text-xl mt-2 mb-7">
          {" "}
          Send us a message to learn more!{" "}
        </p>
        <form
            className="flex flex-col items-center"
            onSubmit={handleButtonClick}
        >
          <input
            type="text"
            placeholder="Name"
            className="h-[48px] input-[white] rounded-xl w-full max-w-md border-r-0 px-3 input input-bordered mb-4"
            value = {name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="h-[48px] input-[white] rounded-xl w-full max-w-md border-r-0 px-3 input input-bordered mb-4"
            value = {company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="h-[48px] input-[white] rounded-xl w-full max-w-md border-r-0 px-3 input input-bordered mb-4"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            className="h-[48px] input-[white] rounded-xl w-full max-w-md border-r-0 px-3 input input-bordered mb-4"
            value = {message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {showError && (
              <div className="text-center text-red-500 mt-2">
                Please enter a valid email.
              </div>
          )}
          <button className="bg-slate-700 h-[48px] w-full max-w-xs text-slate-100 px-5 rounded-xl">
            Message{" "}
          </button>
        </form>
      </div>
    );

   */
};

export default Contacts;
