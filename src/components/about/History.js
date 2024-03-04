import React from "react";
import award from "../../assets/peoples-choice.png";
import dollar from "../../assets/dollar-sign.png";
import work from "../../assets/work.png";
import rocket from "../../assets/rocket.png";

const History = () => {
  return (
    <div className="py-[10px] mt-[40px]">
      <h1 className="text-[48px] text-center mb-[10px] fonts font-bold font-serif">
        History
      </h1>

      <div className="py-[10px] grid grid-cols-3 gap-[30px]">
        <div className="mb-10 bg-[#FFFFFF] rounded-lg shadow-2xl py-[30px] px-[40px] flex flex-col items-center">
          <div className="flex-none w-full">
            <h2 className="text-center mb-[5px] font-bold text-2xl font-serif text-slate-600">
              The Beginning
            </h2>
            <hr className="mb-[10px]" />
          </div>

          <div className="grid grid-cols-3 justify-center gap-[15px] flex-1">
            <div className="flex items-center h-full">
              <img
                src={work}
                className="col-span-1 w-[100px] h-[auto] mx-auto mt-2 mb-auto"
              ></img>
            </div>
            <p className="col-span-2 text-slate-600 text-l items-center my-auto py-1">
              Ponte was founded by ex-Google and ex-Mastercard employees after navigating the
              complexities and issues around internships
            </p>
          </div>
        </div>
        <div className="mb-10 bg-[#FFFFFF] rounded-lg shadow-2xl py-[30px] px-[40px] flex flex-col">
          <div className="flex-none w-full">
            <h2 className="text-center mb-[5px] font-bold text-2xl font-serif text-slate-600">
              Gaining Momentum
            </h2>
            <hr className="mb-[10px]" />
          </div>
          <div className="grid grid-cols-3 gap-[15px] h-full flex-1">
            <div className="flex">
              <img
                src={dollar}
                className="col-span-1 w-[100px] h-[auto] mx-auto mt-2 mb-auto"
              ></img>
            </div>

            <p className="col-span-2 text-slate-600 text-l items-center my-autos py-1">
              The company captured the attention of investors who
              helped fund the platform as well as participating in selective accelerators
            </p>
          </div>
        </div>
        <div className="mb-10 bg-[#FFFFFF] rounded-lg shadow-2xl py-[30px] px-[40px] flex flex-col items-center">
          <div className="flex-none w-full">
            <h2 className="text-center mb-[5px] font-bold text-2xl font-serif text-slate-600">
              The Launch
            </h2>
            <hr className="mb-[10px]" />
          </div>
          <div className="grid grid-cols-3 justify-center gap-[15px] h-full flex-1">
            <div className="flex items-center">
              <img
                src={rocket}
                className="col-span-1 w-[70px] h-[auto] mx-auto mt-2 mb-auto"
              ></img>
            </div>

            <p className="col-span-2 text-slate-600 text-l ml-0 items-center">
              After months of planning and work behind the scenes,
              Ponte officially launched in February 2024
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-[48px] text-center mb-[20px] mt-[0px] fonts font-bold font-serif">

        Achievements
      </h1>

      <div className="bg-[#FFFFFF] rounded-lg shadow-2xl py-[50px] px-[140px]">
        {/* <h1 className=" text-[38px] text-center mb-[10px] fonts font-bold font-serif">
          Achievements
        </h1> */}
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
          <img
            src={award}
            className="h-[180px] w-[180px] col-span-1 rounded-full object-cover"
          ></img>
          <div className="col-span-3 pl-[20px]">
            <h2 className="text-slate-600 text-2xl font-serif text-center font-bold">
              People's Choice Award
            </h2>
            <h3 className="text-slate-500 text-md font-serif text-center font-bold mb-[15px]">
              Startup OU Startup Showcase
            </h3>
            <p className="text-slate-600 leading-normal text-md text-center col-span-3">
              Ponte was awarded the People's Choice Award at the Startup OU
              Startup Showcase competition, where early-stage ventures were
              invited to pitch their product or service in front of 150+
              investors, as well as share their progress and future growth
              trajectory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
