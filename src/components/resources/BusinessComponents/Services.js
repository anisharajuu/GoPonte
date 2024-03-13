import React from "react";
import "../../../sharedPage/customCss/Custom.css";
const ServiceType = () => {
  const services = [
    {
      name: "Qualified Candidates",
      details:
        "Ponte gives businesses an opportunity to source qualified and determined university students pursuing degrees in their respective fields",
    },
    {
      name: "Short-Term Employees",
      details:
        "Ponte allows businesses to connect with interested students for short-term internship programs, providing support on projects at a moment's notice",
    },
    {
      name: "Easy Apply",
      details:
        "Ponte streamlines job applications with a user-friendly platform, allowing you to effortlessly upload new available positions, and schedule interviews, ensuring a stress-free and efficient experience",
    },
  ];
  return (
    <div className="mt-10 p-10 border-blue rounded">
      <header>
        <h2 className="blue-dark text-center text-[48px] font-bold font-serif">
          {" "}
          What We Offer{" "}
        </h2>
        <p className="text-center blue-dark mb-10 mt-3 text-2xl font-semibold">
          {" "}
          At Ponte, we stand out by providing unparalleled services to our
          clients. Our commitment revolves around delivering trustworthy and
          superior-quality microinternships.{" "}
        </p>
      </header>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services?.map((service) => {
          return (
            <div
              data-aos="flip-left"
              className="shadow1 shadow-2xl px-8 pt-[30px] pb-[50px] rounded-lg bg-[#FFFEFD]"
            >
              <h4 className="text-4xl font-serif blue-medium my-4 text-center">
                {service?.name}{" "}
              </h4>
              <p className="blue-medium text-center">{service?.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceType;
