import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className="uppercase my-5 px-4 sm:px-8 py-[6px] bg-[#af5607] font-[500] text-center text-[#ffffff] w-full"
    >
      {title}
    </button>
  );
};

export default Button;
