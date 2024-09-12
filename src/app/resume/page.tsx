import React from "react";

const page = () => {
  return (
    <div className=" w-full flex flex-col gap-2">
      <p className=" text-white text-[36px]">My Experiences</p>
      <p className=" text-[14px] text-slate-300">
        Under the hood, Next.js also abstracts and automatically configures
        tooling needed for React, like bundling, compiling, and more.
      </p>
      <div className=" h-[400px] w-full overflow-auto scrollbar-custom grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <p className=" text-[14px] text-slate-300 ">
            Stack: <span className=" text-green-400">MERN</span>
          </p>
          <div className=" flex items-center gap-2">
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <div className=" flex items-center gap-2">
            {" "}
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>{" "}
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <div className=" flex items-center gap-2">
            {" "}
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>{" "}
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <div className=" flex items-center gap-2">
            {" "}
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>{" "}
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <div className=" flex items-center gap-2">
            {" "}
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>{" "}
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <div className=" flex items-center gap-2">
            {" "}
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>{" "}
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2022- Present
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Full Stack Developer
          </p>
          <div className=" flex items-center gap-2">
            {" "}
            <div className=" min-h-2  min-w-2 rounded-full bg-green-500"></div>
            <p className=" text-[14px] text-slate-300 ">Ghuddy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
