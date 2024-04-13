import React from "react";

const Chip = ({data}) => {
  return (
    <div
      className="__chips__card hover:bg-[#111111] transition-all hover:text-[#fff] uppercase cursor-pointer py-[14px] max-sm:py-2 px-[32px] max-sm:px-[20px] border-2 border-[#111111] w-fit text-[16px] max-sm:text-xs font-semibold rounded-[30px]"
    >
      {data?.tagName}
    </div>
  );
};

export default Chip;
