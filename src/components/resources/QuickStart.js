import React from "react";
import "../../sharedPage/customCss/Custom.css";
const QuickStart = () => {
  const services = [
    {
      name: "1. Create a Profile",
      details:
        "Complete your profile in our application portal with your education, experiences, skills, and preferred positions to help hiring managers connect with you.",
    },
    {
      name: "2. Update Resume",
      details:
        "Brush up and make sure to add any skills and experiences you have to your resume. Show off your capabilities and what you've learned!",
    },
    {
      name: "3. Apply",
      details:
        "Ponte streamlines job applications with a user-friendly platform, allowing you to effortlessly apply to positions, schedule interviews, and communicate with hiring managers. Utilize our job portal to secure your micro-internship!",
    },
  ];
  return (
    <div className="mt-10 border-blue rounded p-10">
      <header>
        <h2 className="blue-dark text-center text-[48px] font-bold font-serif">
          {" "}
          Get Started Today!{" "}
        </h2>
        <p className="text-center blue-dark mb-10 mt-3 text-2xl font-semibold">
          {" "}
          Join Ponte today to take advantage of our specialized services!
          Develop your skills and gain real-world experience with a
          micro-internship opportunity!{" "}
        </p>
      </header>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => {
          return (
            <div
              data-aos="flip-left"
              className="shadow1 shadow-2xl px-8 pt-[30px] pb-[50px] rounded-lg bg-[#FFFEFD]"
            >
              <h4 className="text-4xl font-serif blue-medium my-4">
                {service?.name}{" "}
              </h4>
              <p className="blue-medium">{service?.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickStart;
