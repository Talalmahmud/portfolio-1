import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className=" flex flex-col md:flex-row justify-between py-6 md:py-10 xl:py-20 items-start xl:items-center gap-8 xl:gap-16">
          <div className=" flex flex-col w-full md:w-[475px]">
            <p className=" text-[14px] text-slate-300">Software Developer</p>
            <p className=" text-[36px] font-semibold">
              Hello I<span className=" text-green-400">&apos;</span>m
            </p>
            <p className=" py-1 text-[48px] font-medium text-green-500">
              Talal Mahmud
            </p>
            <p className=" text-[13px] text-slate-200">
              Under the hood, Next.js also abstracts and automatically
              configures tooling needed for React, like bundling, compiling, and
              more. This allows you to focus on building your application
              instead of spending time with configuration. configures tooling
              needed for React, like bundling, compiling, and more. This allows
              you to focus on building your application instead of spending time
              with configuration.
            </p>
            <div className=" py-4 flex items-center gap-4">
              <Link
                href="/talal.pdf"
                target="_blank"
                className=" text-[13px] flex justify-center items-center gap-1 font-bold text-green-500 border-[1px] border-green-300 hover:border-green-500 shadow-md rounded-[16px] px-4 py-1"
              >
                Download CV{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 16l4-4h-3V4h-2v8H8l4 4zm9 2v2H3v-2h18z"></path>
                  </g>
                </svg>
              </Link>

              <div className=" h-[32px] w-[32px]  flex justify-center items-center border-[1px] border-green-300 hover:border-green-500 shadow-md rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="24"
                  height="24"
                >
                  <circle cx="12" cy="12" r="12" fill="green" />{" "}
                  {/* Circle background */}
                  <path
                    fill="white"
                    d="M16.08 12h-2.72v8h-3.36v-8h-2.08V9.05h2.08V7.6c0-1.92 1.18-2.96 2.91-2.96.83 0 1.55.06 1.76.09v2.04h-1.21c-.95 0-1.14.45-1.14 1.12v1.16h2.28L16.08 12z"
                  />
                </svg>
              </div>
              <div className=" h-[32px] w-[32px]  flex justify-center items-center border-[1px] border-green-300 hover:border-green-500 shadow-md rounded-full p-1">
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

              <div className=" h-[32px] w-[32px]  flex justify-center items-center border-[1px] border-green-300 hover:border-green-500 shadow-md rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  width="24"
                  height="24"
                >
                  <circle cx="12" cy="12" r="12" fill="green" />{" "}
                  {/* Circle background */}
                  <path
                    fill="white"
                    d="M9.354 17.823H7.029v-7.41h2.325v7.41zm-1.165-8.431a1.346 1.346 0 01-1.354-1.354c0-.753.601-1.353 1.354-1.353.752 0 1.354.6 1.354 1.353 0 .753-.602 1.354-1.354 1.354zm7.616 8.431h-2.324v-3.871c0-.927-.018-2.118-1.292-2.118-1.294 0-1.491 1.01-1.491 2.055v3.934H9.354v-7.41h2.229v1.013h.031c.31-.589 1.067-1.208 2.197-1.208 2.348 0 2.782 1.544 2.782 3.547v4.057h.001z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" rounded-full border-2 border-dashed border-green-500 flex justify-center items-center animate-dash">
            <div className=" h-[336px] w-[336px] md:h-[390px] md:w-[390px] relative bg-transparent">
              <Image
                src="/talal.jpg"
                priority
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Home;
