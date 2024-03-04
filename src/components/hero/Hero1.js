import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/pngwing.com.png";
import "../../sharedPage/customCss/Custom.css";
import bottomImg from "../../assets/wave (1).svg";

const Hero1 = () => {
  return (
    <div className="mt-5 relative">
      <img className="topImg" src={bottomImg} alt="" />
      <div className="flex flex-col lg:flex-row md:flex-row gap-[10%] py-[75px]">
        <div className="" data-aos="fade-left">
          <img
            src={image}
            className=" w-[500px] h-[400px] rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div data-aos="fade-right" className="lg:mt-[100px]">
          <h1 className="text-6xl font-bold fonts mt-3">Ponte</h1>
          <p className="py-5 text-2xl font-semibold fonts underline">
            Find your next micro-internship here!
          </p>
          <div className="shadow-2xl px-10 py-[10px] mt-5 rounded-xl bg-[#FFFEFD] max-w-screen-md mx-auto">
            <p className="py-6 text-slate-600">
              {" "}
              <h1 className="text-2xl font-bold fonts mt-0 mb-3">
                → What are micro-internships?{" "}
              </h1>
              Micro-internships are short-term, project-based work opportunities that typically last anywhere from a few hours to several
              weeks. These initiatives provide students and individuals
              with hands-on, practical experience in specific industries
              or fields, allowing them to gain valuable skills, explore
              various career paths, and build their professional network.
            </p>
            <Link to="/signup">
              <button className="btn1 py-3 px-4 font-bold mb-7">
                Sign Up Now{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
