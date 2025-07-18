import React from "react";
import { FaCrown, FaStar } from "react-icons/fa";
import RankBadge from "./RankBadge";

const ProgressCard = () => {
  return (
    <div className="p-6 rounded-2xl max-w-4xl mx-auto relative">
      <h2 className="text-xl font-semibold mb-6">Your Progress</h2>

      <div className="bg-white shadow-md rounded-2xl p-6 relative overflow-hidden">
        <div className="text-sm text-gray-500 mb-2">PREPARE BY TOPICS</div>
        <h3 className="text-2xl font-bold text-gray-800">Problem Solving</h3>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mt-4 mb-2">
          <div className="h-2 bg-black rounded-full w-[3%]"></div>
        </div>

        <p className="text-sm text-gray-600">
          <span className="font-semibold text-black">3%</span>{" "}
          <span className="text-gray-400">(68 points to next star)</span>
        </p>

        <button className="mt-6 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProgressCard;
