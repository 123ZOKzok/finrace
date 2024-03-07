import React from "react";
import { Img } from "../Img";
import { Button } from "../Button/Button";
import { Heading } from "../Heading";
import { Text } from "../Text";

export default function BannerPage() {
  return (
    <div className=" w-full relative">
      <div className="flex flex-col items-start justify-start w-full h-[174px] rounded-[20px] overflow-hidden relative">
        <div className="h-full w-full bg-[linear-gradient(90deg,#245BA0,#032758)] absolute left-0 top-0" />
        <Heading
          size="s"
          as="h1"
          className="mt-[17px] ml-2 !text-white absolute left-0 top-0 p-10"
        >
          Valentine Gate Away Trip to Nibiru
        </Heading>
      </div>
      <Img
        src="images/img_ellipse_1.svg"
        alt="image_one"
        className="h-[54px] bottom-[-17px] right-[20px] m-auto absolute"
      />
      <Button
        color="black"
        size="sm"
        shape="circle"
        className="absolute bottom-[-20px] right-[60px] flex flex-row items-center justify-center w-[47px] h-[47px] rounded-[999px]"
      >
        <Img
          src="images/img_group_13.svg"
          className="flex-grow-0 flex-shrink-0 h-[24px] w-[24px]"
        />
      </Button>
      <div className="flex flex-row justify-start items-center gap-[5px] ml-10 my-3 absolute">
        <Img
          src="images/img_fi_rr_clock.svg"
          alt="firrclock_one"
          className="h-[16px] w-[16px]"
        />
        <Text size="sm" as="p" className="!text-gray-500 text-center">
          7th March 2024
        </Text>
      </div>
    </div>
  );
}