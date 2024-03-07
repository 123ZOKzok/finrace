import React from "react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import BongaPointCircle from "./BongaPointCircle";

function BongaPointRow({ isActive, isComplete, index, isLast }) {
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
          <Heading
            as="h1"
            className={`${!isActive || isComplete ? "text-gray-400" : ""}`}
          >
            Redeem 100 Bonga Points.
          </Heading>
          <Text
            as="p"
            className={`${!isActive || isComplete ? "text-gray-400" : ""}`}
          >
            Redeem 100 bonga points for airtime or minutes.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default BongaPointRow;