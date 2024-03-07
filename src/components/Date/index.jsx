import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";



export default function DatePage() {
  return (
    <>
      <div className="flex flex-row justify-start w-full py-1 bg-white-A700">
        <div className="flex flex-row justify-start items-center w-[8%] mb-[850px] gap-[5px]">
          <Img src="images/img_fi_rr_clock.svg" alt="firrclock_one" className="h-[16px] w-[16px]" />
          <Text size="xs" as="p" className="!text-gray-500 text-center">
            24th August 2024
          </Text>
        </div>
      </div>
    </>
  );
}
