import React from "react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import BongaPointCircle from "./BongaPointCircle";

function BongaPointRow({ isActive, isComplete, index, isLast, heading, text }) {
  return (
    <div className="flex flex-col items-start justify-start mb-10">
      <div className="flex flex-row justify-start items-center w-full gap-4">
        <BongaPointCircle
          index={index}
          isActive={isActive}
          isComplete={isComplete}
          isLast={isLast}
        />
        <div className="flex flex-col w-full justify-start items-start gap-2">
          {/* Render the heading with dynamic content */}
          <Heading
            as="h1"
            className={`${!isActive || isComplete ? "text-gray-400" : ""}`}
          >
            {heading}
          </Heading>
          {/* Render the text with dynamic content */}
          <Text
            as="p"
            className={`${!isActive || isComplete ? "text-gray-400" : ""}`}
          >
            {text}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default BongaPointRow;
