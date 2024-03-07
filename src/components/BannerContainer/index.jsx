import React from "react";
import { Img } from "../Img";

export default function BannerContainer({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[2px] w-full bg-red-A700 rounded-[1px]" />
        <div className="flex flex-col items-center justify-start w-full mt-[-2px]">
          <div className="h-[2px] w-full shadow-bs rounded-[1px]" />
          <Img
            src="images/img_noise_texture_transparent.png"
            alt="image"
            className="w-full mt-[-2px] object-cover rounded-[1px]"
          />
        </div>
      </div>
    </div>
  );
}
