import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Cookies = () => {
  const [isCookie, setIsCookie] = useState(
    sessionStorage.getItem("isCookie") || false,
  );

  const handleClose = () => {
    setIsCookie(true);
    sessionStorage.setItem("isCookie", true);
  };

  return (
    <div
      className={`fixed z-50 ${
        !isCookie ? "bottom-0" : "-bottom-[100%]"
      } left-0 right-0 bg-white py-4 px-6`}
      style={{
        transition: "0.4s bottom ease-in-out",
        boxShadow: "0 0 18px rgba(0,0,0,.2)",
      }}
    >
      <div className="flex w-full justify-between items-center gap-6 flex-wrap">
        <div className="flex md:items-center gap-3 justify-between">
          <p className="max-w-[680px] text-[13px]">
            This website uses cookies to enhance user experience and to analyze
            performance and traffic on our website. We also share information
            about your use of our site with our social media, advertising and
            analytics partners. By continuing to use this site, you consent to
            the placement of these cookies and our{" "}
            <a
              href="#"
              className="font-semibold underline text-[#0054A1]"
            >
              Privacy Policy
            </a>
          </p>
          <IoMdClose
            size={20}
            onClick={handleClose}
            className="cursor-pointer md:hidden min-w-[20px]"
          />
        </div>
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <a
            href="#"
            className="max-md:w-full text-center font-semibold text-[13px] underline text-[#6CC04A]"
          >
            Manage Cookies
          </a>
          <button
            onClick={handleClose}
            className="max-md:w-full text-center transition-all hover:opacity-70 text-[13px] p-[10px_12px] text-white bg-[#2D4452] rounded font-semibold"
          >
            Reject Cookies
          </button>
          <button
            onClick={handleClose}
            className="max-md:w-full text-center transition-all hover:opacity-70 text-[13px] p-[10px_12px] text-white bg-[#2D4452] rounded font-semibold"
          >
            Accept Cookies
          </button>
          <IoMdClose
            size={20}
            onClick={handleClose}
            className="ml-4 cursor-pointer max-md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Cookies;
