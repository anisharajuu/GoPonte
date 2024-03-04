import React from "react";

const Values = () => {
  return (
    <div className="lg:mt-2 mb-[100px] py-5 mb-20">

      <h1 className="text-[48px] text-center mb-[25px] mt-[20px] fonts font-bold font-serif">
        Values
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div className="mt-10 shadow-2xl px-10 py-[30px] rounded-lg bg-[#FFFEFD]">
          <h4 className="text-4xl font-serif font-bold fonts text-center mt-4 mb-4">
            Empowering Students
          </h4>
          <p className="text-slate-600 mb-5">
            {" "}
            Empowering students through practical, real-world internships that enhance skills
            and contribute to professional growth
          </p>
        </div>
        <div className="lg:mb-10 shadow-2xl px-10 py-[30px] rounded-lg bg-[#FFFEFD]">
          <h4 className="text-4xl font-serif font-bold fonts text-center mt-4 mb-4">
            Agile Collaboration
          </h4>
          <p className="text-slate-600 mb-5">
            Facilitating swift and effective collaboration between businesses
            and students for dynamic project execution and innovative outcomes
          </p>
        </div>
        <div className="lg:mt-10 shadow-2xl px-10 py-[30px] rounded-lg bg-[#FFFEFD]">
          <h4 className="text-4xl font-serif font-bold fonts text-center mt-4 mb-4">
            Inclusive Opportunities
          </h4>
          <p className="text-slate-600 mb-5">
            Ensuring equal access to diverse micro-internship opportunities,
            fostering an inclusive community that values every student's contribution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
