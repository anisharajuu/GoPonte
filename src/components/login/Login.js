import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../sharedPage/customCss/Custom.css";
import loginImg from "../../assets/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (!isValidEmail) {
      setShowError(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/studentLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log("Login successful:");
        navigate("/userPortal");
      } else {
        console.error("Error logging in:", response.status);
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ">
          <img alt="" src={loginImg} />
          <a
            href="https://www.vecteezy.com/free-vector/login"
            className="absolute mt-[-30px] ml-[10px] flex-1"
          >
            Login Vectors by Vecteezy
          </a>
        </div>
        <div className="card flex-shrink-0 sm:w-full lg:max-w-md shadow-xl bg-[#e6eaed] rounded-sm">
          <div className="card-body xl:py-[65px] xl:px-[40px]">
            <div className="form-control">
              <h1 className="text-5xl blue-medium font-serif font-bold mb-5">
                Log In
              </h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
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
                  placeholder="Your password"
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
                  New?
                </a>
                <Link
                  to="/signup"
                  className="link link-hover"
                  style={{ textDecoration: "underline" }}
                >
                  Sign Up
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn1 py-3 text-xl" onClick={handleLogin}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
