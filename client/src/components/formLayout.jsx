import React from "react";
import { useLocation } from "react-router-dom";

const FormLayout = ({ children, children2, handleSubmit, title, subTitle }) => {
  const location = useLocation();

  return (
    <div
      className={`w-full grid  p-8 md:p-12 ${
        location.pathname !== "/" && "place-items-center"
      }`}
    >
      <div
        className={`bg-white p-4 md:p-8 form w-full ${
          location.pathname !== "/" && "max-w-[400px]"
        }`}
      >
        <form
          className={`w-full max-w-[400px] ${
            location.pathname !== "/" && "mx-auto"
          }`}
          onSubmit={handleSubmit}
        >
          {title && <h1 className="mb-6 font-[600] text-3xl">{title}</h1>}
          {subTitle && <p className="mb-5 text-sm">{subTitle}</p>}
          <div>{children}</div>
        </form>
        {children2 && children2}
      </div>
    </div>
  );
};

export default FormLayout;
