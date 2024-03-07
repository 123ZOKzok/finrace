import React from "react";
import { Img } from "../Img";
import { Button } from "../Button/Button";
import { Heading } from "../Heading";
import BannerContainer from "../BannerContainer";

export default function BannerPage() {
  return (
    <>
      
      <div className=" w-full pb-[682px] pr-[682px] bg-white-A700 relative">
        <div className="flex flex-col items-end justify-start w-[30%] h-full left-0 bottom-0 top-0 m-auto absolute">
          <div className="flex flex-col items-start justify-start w-full gap-[38px] p-6 bg-gradient rounded-[20px]">
            <Heading size="s" as="h1" className="w-[73%] mt-[17px] ml-2 !text-white-A700">
              Valentine Gate Away Trip to Nibiru
            </Heading>
            <div className="flex flex-row justify-start w-[58%] ml-2">
              <div className="h-[17px] w-full relative">
                <Img
                  src="images/img_container_dark.svg"
                  alt="containerdark"
                  className="justify-center h-[2px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-row justify-start items-center w-[88%] h-full left-0 bottom-0 top-0 m-auto absolute">
                  <BannerContainer className="flex flex-row justify-start w-[89%]" />
                  <div className="flex flex-col items-center justify-start h-[17px] w-[17px] shadow-xs rounded-lg">
                    <div className="h-[17px] w-[17px] bg-white-A700 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start h-[47px] w-[47px] mt-[-24px] mr-[42px] z-[1]">
            <Button color="black_900" size="sm" shape="round" className="w-[47px]">
              <Img src="images/img_group_13.svg" />
            </Button>
          </div>
        </div>
        <Img
          src="images/img_ellipse_1.svg"
          alt="image_one"
          className="h-[54px] bottom-[78%] right-[70%] m-auto absolute"
        />
      </div>
    </>
  );
}
