import React, { useState } from "react";

const Input = ({ title, children, value, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="w-full relative cursor-pointer mb-5">
      <label
        className={`z-10 absolute text-[#74777b] text-[12px] ${
          !isFocus && !value ? "top-[8px] text-base" : "-top-[12px] text-[12px]"
        }`}
        style={{ transition: "0.2s all ease-in-out" }}
      >
        {title}
      </label>
      <input
        type="text"
        value={value}
        className={`relative z-20 pt-2 pb-1 text-[#333333] bg-transparent w-full border-b-[1.5px] ${
          !isError
            ? "border-b-[#a8a8a8] focus:border-b-[#af5607]"
            : "border-b-[#a61c23]"
        } `}
        required
        onFocus={() => {
          setIsFocus(true);
          setIsError(value ? false : true);
        }}
        onBlur={() => {
          setIsFocus(false);
          setIsError(value ? false : true);
        }}
        {...rest}
      />
      {isError && !value && (
        <span className="text-[12px] text-[#a61c23]">Please enter {title}</span>
      )}
      {children ? children : null}
    </div>
  );
};

export default Input;
