import React from "react";
import { FaStar, FaMedal } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const RankBadge = ({
  title = "Problem Solving",
  icon = <FaMedal className="text-2xl text-white" />,
  colorFrom = "from-orange-400",
  colorTo = "to-red-500",
  showStar = true,
}) => {
  return (
    <div
      className={twMerge(
        `w-[50px] h-[50px] p-1 rounded-full flex flex-col justify-center items-center shadow-xl bg-gradient-to-br text-center`,
        colorFrom,
        colorTo
      )}
    >
      {icon}
      {showStar && <FaStar className="mt-1 text-white text-xs" />}
    </div>
  );
};

export default RankBadge;
