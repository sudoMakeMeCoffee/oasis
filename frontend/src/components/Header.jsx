import React from "react";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { IoIosArrowDropright } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";

const Header = ({title, subTitle}) => {
  return (
    <div className="w-full bg-white shadow-md py-[20px] mb-6">
      <div className="wrapper">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-light text-gray-500">{subTitle}</span>
          <h1 className="text-2xl font-normal">{title}</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
