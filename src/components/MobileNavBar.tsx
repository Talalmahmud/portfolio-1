"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type Props = {
  close: boolean;
  setClose: (value: boolean) => void;
};
const MobileNavBar = ({ close, setClose }: Props) => {
  const pathName = usePathname();
  return (
    <div className=" fixed top-0 right-0 z-50 bg-slate-600 w-[320px] min-h-screen pt-10 px-4 flex flex-col gap-2 ">
      <div
        onClick={() => setClose(!close)}
        className=" text-black px-4 rounded-full w-[24px] h-[24px] text-[10px] flex justify-center items-center bg-white "
      >
        X
      </div>
      <Link
        onClick={() => setClose(false)}
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
        onClick={() => setClose(false)}
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
        onClick={() => setClose(false)}
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
        onClick={() => setClose(false)}
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
        onClick={() => setClose(false)}
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
  );
};

export default MobileNavBar;
