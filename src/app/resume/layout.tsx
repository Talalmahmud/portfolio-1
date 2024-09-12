import PageWrapper from "../../components/PageWrapper";
import ResumeLeftNav from "../../components/ResumeLeftNav";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ResumeLayout = ({ children }: Props) => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className="  flex flex-col md:flex-row gap-14 py-6">
          {/* <div className=" flex flex-col gap-4 w-[375px]">
            <p className=" text-[48px] text-white font-semibold">
              Why hire me?
            </p>
            <p className=" text-[14px] text-slate-300">
              Under the hood, Next.js also abstracts and automatically
              configures tooling needed for React, like bundling, compiling, and
              more.
            </p>

            <div className=" flex flex-col gap-3">
              <Link
                href={"/resume"}
                className=" w-full rounded-[8px] text-white bg-slate-500 py-1 flex justify-center items-center hover:bg-green-500 hover:text-black"
              >
                Experience
              </Link>

              <Link
                href={"/resume/education"}
                className=" w-full rounded-[8px] text-white bg-slate-500 py-1 flex justify-center items-center hover:bg-green-500 hover:text-black"
              >
                Education
              </Link>
              <Link
                href={"/resume//skills"}
                className=" w-full rounded-[8px] text-white bg-slate-500 py-1 flex justify-center items-center hover:bg-green-500 hover:text-black"
              >
                Skills
              </Link>
              <Link
                href={"/resume/about-me"}
                className=" w-full rounded-[8px] text-white bg-slate-500 py-1 flex justify-center items-center hover:bg-green-500 hover:text-black"
              >
                About Me
              </Link>
            </div>
          </div> */}
          <ResumeLeftNav />
          <div className=" w-full">{children}</div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default ResumeLayout;
