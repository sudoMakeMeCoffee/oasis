import React from "react";

const Loading = ({head, subHead}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-gray-700 w-full">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full" />
        <h2 className="text-xl font-semibold tracking-wide">
          {head}
        </h2>
        <p className="text-sm text-gray-500">
         {subHead}
        </p>
      </div>
    </div>
  );
};

export default Loading;
