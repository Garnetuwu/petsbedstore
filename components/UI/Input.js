import React from "react";

const Input = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full bg-inherit outline-none p-2 ${className}`}
      {...rest}
    />
  );
});

Input.displayName === "Input";

export default Input;
