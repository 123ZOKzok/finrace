import React from "react";
import { Img } from "../Img";
import { Button } from "./Button";


export default function ButtonPage() {
  return (
    <>
  
      <Button
        leftIcon={
          <Img
            src="images/img_container_prime_accent_8px_rounded_corners.svg"
            alt="Container / Prime Accent / 8px rounded corners"
            className="mr-[-169px]"
          />
        }
        className="w-full font-futura font-medium"
      >
        Done
      </Button>
    </>
  );
}
