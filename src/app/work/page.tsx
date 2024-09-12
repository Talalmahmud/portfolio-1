import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className=" flex justify-between flex-col md:flex-row ">
          <div className=" flex flex-col gap-2 w-full xl:w-[575px]">
            <p className="  text-8xl font-extrabold text-slate-300 text-outline">
              01
            </p>
            <p className=" text-[48px] text-green-500 font-bold">
              Social Media
            </p>
            <p className=" text-[16px] text-slate-400">
              {" "}
              Under the hood, Next.js also abstracts and automatically
              configures tooling needed for React, like bundling, compiling, and
              more.
            </p>
            <p className=" text-[16px] text-slate-400">
              Stack:{" "}
              <span className=" text-green-600 font-bold italic">
                HTML, CSS, Tailwind CSS, Material UI, React Js, Next Js
              </span>
            </p>
            <div className=" w-full border-b-[1px] border-dashed border-slate-600 my-8"></div>
            <div className=" flex items-center gap-2">
              {" "}
              <Link
                href={"https://github.com/Talalmahmud/social-media.git"}
                target="_blank"
              >
                <div className=" h-[32px] w-[32px]  flex justify-center items-center border-[1px] border-green-300 hover:border-green-800 cursor-pointer shadow-md rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green" // This makes the icon white
                    width="24" // You can adjust width and height as needed
                    height="24"
                  >
                    <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.304 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.083-.729.083-.729 1.205.086 1.84 1.24 1.84 1.24 1.07 1.836 2.806 1.306 3.492.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.123-.305-.535-1.532.117-3.193 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.4 3.008-.405 1.02.005 2.047.138 3.007.405 2.29-1.552 3.298-1.23 3.298-1.23.653 1.661.241 2.888.118 3.193.77.84 1.235 1.913 1.235 3.222 0 4.61-2.805 5.624-5.475 5.92.43.372.814 1.102.814 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.217.694.825.576C20.565 22.09 24 17.594 24 12.297 24 5.67 18.627.297 12 .297z" />
                  </svg>
                </div>
              </Link>
              <Link
                href={"https://social-media-2023.netlify.app/"}
                target="_blank"
              >
                <div className=" h-[32px] w-[32px] bg-white relative flex justify-center items-center border-[1px] border-green-300 hover:border-green-800 cursor-pointer shadow-md rounded-full p-1">
                  <Image src={"/earth.svg"} fill alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="  w-[475px] h-[400px] relative">
            <Image src={"/social.png"} fill alt="" priority sizes="" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
