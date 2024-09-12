"use client";
import React from "react";
import PageWrapper from "./PageWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className=" flex items-center justify-between py-4">
          <Link href={"/"} className=" text-[24px] font-bold  text-sc">
            Talal Mahmud<span className=" text-green-500">.</span>
          </Link>
          <div className=" sm:flex hidden  items-center gap-4">
            <Link
              href={"/"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Home
            </Link>
            <Link
              href={"/service"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/service"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Services
            </Link>
            <Link
              href={"/resume"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName.startsWith("/resume")
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Resume
            </Link>
            <Link
              href={"/work"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/work"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Work
            </Link>
            <Link
              href={"/contact"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/contact"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Contact
            </Link>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default NavBar;
