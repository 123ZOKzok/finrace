import React from "react";

const sizes = {
  s: "text-xl font-bold leading-6",
  xs: "text-base font-bold leading-[19px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_d8 font-vodafone ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
