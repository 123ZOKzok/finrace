import React from "react";
import { Img } from "../Img";
import { Button } from "../Button/Button";
import { Heading } from "../Heading";
import { Text } from "../Text";



export default function RowItem01({
  title = "Activate a Safaricom Digital Service",
  timezone = "First, she must activate a Safaricom digital.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-full gap-4">
        <div className="flex flex-col items-center justify-start h-[32px] w-[32px]">
          <Button color="red_A700" size="xs" variant="outline" shape="circle" className="w-[32px]">
            <Img src="images/img_check.svg" />
          </Button>
        </div>
        <Heading as="h1" className="tracking-[-0.32px]">
          {title}
        </Heading>
      </div>
      <div className="flex flex-row justify-between w-full pl-4 mx-auto max-w-[167px]">
        <div className="flex flex-col items-end justify-start w-[1%] py-1.5 bg-red-A700">
          <div className="h-[24px] w-px bg-red-A700" />
        </div>
        <div className="flex flex-row justify-center py-1">
          <Text as="p" className="mb-[9px] tracking-[-0.28px]">
            {timezone}
          </Text>
        </div>
      </div>
    </div>
  );
}
