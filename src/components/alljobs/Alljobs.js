import React, { useEffect, useState } from "react";
import "../../sharedPage/customCss/Custom.css";
import { RxReader, RxTimer, RxTrackNext } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";
import DetailModal from "./DetailModal";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alljobs = () => {
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
            className="py-12 bg-[#087f65] rounded hover:shadow-xl my-5 text-black"
        >
            <h1 className="text-5xl text-center font-bold font-serif mb-2">
                Join our waitlist
            </h1>
            <p className="text-center text-xl mb-7">
                Secure your spot to unlock exclusive access to our first micro-internship postings!
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
    /*
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  const skills = [
    { name: "Teamwork" },
    { name: "Self starter" },
    { name: "Collaboration" },
  ];

  //   console.log("all jobs are ...",jobs);
  return (
    <div className="my-16">
      <h1 className="fonts text-center text-[48px] font-bold font-serif">
        Micro-Internships Available Now
      </h1>
      <p className="text-center text-slate-500 mb-10 mt-3 text-xl font-semibold">
        Start searching for your dream micro-internship with <br /> PONTE{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-5">
        {jobs?.map((job) => {
          const {
            name,
            place,
            img,
            time,
            company,
            type,
            details,
            salary,
            source,
          } = job;

          return (
            <div className="py-[15px] px-5 shadow-xl  jobs">
              <header className="flex justify-between mb-12">
                <img
                  className="h-[100px] w-[140px]  rounded-[10px] shadow-xl"
                  src={img}
                  alt=""
                />
                <aside className="ml-3">
                  <h3 className="text-slate-500 text-2xl font-bold ">
                    {company}{" "}
                  </h3>
                  <p className="flex items-center font-mono text-slate-700 f gap-2 py-2">
                    <HiLocationMarker /> <span>{place}</span>
                  </p>
                </aside>
              </header>
              <main>
                <div className="">
                  <h2 className="  font-serif text-3xl text-slate-600  hover:text-[#00ae87]  font-bold mb-4">
                    {" "}
                    {name}
                  </h2>

                  <p className="text-slate-500 font-mono flex items-center gap-1">
                    <RxReader /> <span> {type}</span>
                  </p>
                  <p className="text-slate-500 font-mono flex items-center gap-1">
                    <RxTimer /> <span> {time} minute ago</span>
                  </p>
                </div>
                <p className="text-slate-600 text-sm font-medium my-2">
                  {details} And it is dolor sit, amet consectetur adipisicing
                  elit. Veritatis, commodi.
                </p>
                <p className="mt-5 flex gap-2 text-slate-700">
                  {skills?.map((skill) => (
                    <span className="shadow-lg py-3 text-sm font-normal hover:text-[#00ae87] px-2 bg-slate-200 ">
                      {skill?.name}{" "}
                    </span>
                  ))}
                </p>
              </main>
              <footer className="mt-10 flex justify-between">
                <p>
                  <span className="fonts text-4xl font-bold">${salary}</span>
                  <span className="text-slate-500">/Month</span>
                </p>

                <label
                  htmlFor={name}
                  className="bg-slate-200 apply cursor-pointer fonts p-2 rounded-md text-slate-700 font-medium flex items-center gap-3"
                >
                  Quick Apply <RxTrackNext />
                </label>
              </footer>
              <DetailModal job={job} />
            </div>
          );
        })}
      </div>
    </div>
  );

     */

};

export default Alljobs;