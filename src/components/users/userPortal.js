import React from "react";

const CVReview = () => {
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
      <div className="mt-5 flex flex-col items-center">
        <form className="flex flex-col gap-5 border rounded p-5">
          <label>
            Full Name
            <input type="text" className="ml-2 rounded-md p-2"></input>
          </label>
          <label>
            Email
            <input type="text" className="ml-2 rounded-md p-2"></input>
          </label>
          <label>
            Experience Level (years)
            <select className="ml-2 rounded-md p-2">
              <option value="0-1">0-1</option>
              <option value="2-3">2-3</option>
              <option value="4+">4+</option>
            </select>
          </label>
          <label>
            <input type="file"></input>
          </label>
          <label>
            <input
              type="submit"
              className="pr-[25px] focus:outline-none transition duration-150 ease-in-out hover:bg-[#00ae87] hover:text-white rounded font-medium   px-5 py-2 "
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default CVReview;