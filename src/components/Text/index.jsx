import React from "react";

const sizes = {
  xs: "text-[10px] font-normal leading-3",
  s: "text-sm font-normal leading-[17px]",
  md: "text-lg font-normal leading-[30px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_72 font-vodafone ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
