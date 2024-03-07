import React from "react";
import { Img } from "../../components/Img";

function BongaPointCircle({ isActive, isComplete, index, isLast }) {
  return (
    <div
      className={`w-[32px] h-[32px] rounded-[999px] flex-grow-0 flex-shrink-0 flex flex-row items-center justify-center relative ${
        isActive
          ? "bg-red-500 text-white"
          : "bg-white text-gray-400 border border-solid border-gray-400"
      }
      ${isComplete ? "border border-solid border-red-500" : ""}
        `}
    >
      {isComplete && (
        <Img
          src="images/img_check.svg"
          className="w-[16px] h-[16px] flex-grow-0 flex-shrink-0"
        />
      )}
      {!isComplete && index}
      {!isLast && (
        <div
          className={`w-[1px] h-[36px] flex-grow-0 flex-shrink-0 absolute top-[40px] left-[50%] ${isComplete || isActive ? "bg-red-500" : "bg-gray-500"}`}
        />
      )}
    </div>
  );
}

export default BongaPointCircle;