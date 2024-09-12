import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className=" w-[375px] sm:w-[640px] md:w-[768px] xl:w-[1100px] px-4 xl:px-0 mx-auto">
      {children}
    </div>
  );
};

export default PageWrapper;
