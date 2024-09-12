import React from "react";

const page = () => {
  return (
    <div className=" w-full flex flex-col gap-4 bg-slate-800 rounded-[8px] p-4">
      <p className=" text-[36px] text-slate-200 font-bold border-b-[1px] border-dashed border-slate-500">
        About Me
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin  ">Name </span>
          Talal Mahmud
        </p>

        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin  ">Email </span>
          Email:mahmtalal2@gmail.com
        </p>
        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin ">Experience </span>
          2+ years
        </p>
        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin ">Phone </span>
          +8801795257742, +8801635894153
        </p>
        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin ">Nationality </span>
          Bangladeshi
        </p>
        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin ">Languages </span>
          Banglai, English
        </p>

        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin  "> Present Address </span>
          K-32/5, Gulsan, Dhaka-1212, Bangladesh
        </p>

        <p className=" text-[14px] text-white font-bold ">
          <span className="text-slate-300 font-thin text-[14px] ">
            {" "}
            Permanent Address{" "}
          </span>
          Targoan, Kapasia, Gazipur, Dhaka , Bangladesh
        </p>
      </div>
    </div>
  );
};

export default page;
