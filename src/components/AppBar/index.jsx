import React from "react";
import { Img } from "../Img/index";

export default function AppBarPage() {
  return (
    <div className="flex flex-row justify-start w-full bg-white">
      <div className="flex flex-row justify-between items-end p-[15px] w-full ">
        <Img
          src="images/img_icon_30px_menu.svg"
          alt="icon30pxmenu"
          className="h-[30px] w-[30px] ml-[5px]"
        />
        <div className="flex flex-row justify-between items-center  mt-[38px] mr-2.5">
          <div className="flex flex-row justify-between items-center">
            <div className="h-[25px] w-[25px] relative">
              <Img
                src="images/img_fi_rr_badge.svg"
                alt="firrbadge_one"
                className="justify-center h-[24px] w-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="h-[10px] w-[10px] right-0 top-0 m-auto bg-red-A700 absolute rounded-[50%]" />
            </div>
            <Img
              src="images/img_profile_picture.png"
              alt="profilepicture"
              className="w-[25%] object-cover"
            />
            <Img
              src="images/img_fi_rr_menu_dots_vertical.svg"
              alt="firrmenudots"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}