import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sharedPage/customCss/Custom.css";
import signupImg from "../../assets/signup.png";

const BusinessSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (!isValidEmail) {
      setShowError(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/businessSignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log("Signup successful:");

        // Reset the form after successful signup
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        console.error("Error signing up:", response.status);
        // Handle error, display a message, etc.
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle error, display a message, etc.
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left rounded-lg">
            <img alt="" src={signupImg} />
          </div>
          <div className="card flex-shrink-0 sm:w-full lg:max-w-lg shadow-xl bg-[#e6eaed] rounded-sm">
            <div className="card-body xl:py-[65px] xl:px-[40px]">
              <div className="form-control">
                <h1 className="text-5xl blue-medium font-serif font-bold mb-3">
                  {" "}
                  Business Sign Up{" "}
                </h1>
                <div className="mb-5">
                  <Link to="/Signup" className="blue-medium text-md underline">
                    Switch to Student
                  </Link>
                </div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="input input-bordered"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Business Email"
                  className="input input-bordered"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {showError && (
                  <div className="text-center text-red-500 mt-2">
                    Please enter a valid email.
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 label-text-alt link link-hover text-[15px]"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <label className="label">
                  <a href="." className="">
                    Already signed up?
                  </a>
                  <Link
                    to="/login"
                    className="link link-hover"
                    style={{ textDecoration: "underline" }}
                  >
                    Log in
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn1 py-3 text-xl" onClick={handleSignup}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignup;
