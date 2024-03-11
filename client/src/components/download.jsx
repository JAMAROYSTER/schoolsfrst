import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const DownloadBar = () => {
  const [isClose, setIsClose] = useState(
    sessionStorage.getItem("isClose") || false,
  );

  return (
    <>
      {!isClose && (
        <div className="flex items-center justify-between bg-[#555555] p-2">
          <div className="flex items-center gap-2">
            <IoIosClose
              fill="#b4b4b4"
              size={22}
              className="cursor-pointer"
              onClick={() => [
                setIsClose(true),
                sessionStorage.setItem("isClose", true),
              ]}
            />
            <div className="bg-white grid place-items-center rounded-lg size-10 -ml-2">
              <img
                src="/favicon.ico"
                className="size-6"
                alt="SchoolsFirst FCU Mobile"
              />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-white text-sm mb-0 leading-3">
                SchoolsFirst FCU Mobile
              </p>
              <span className="text-[12px] text-white opacity-80">Finance</span>
            </div>
          </div>
          <a
            href="#"
            className="bg-[#0982fe] text-white rounded-full font-semibold text-sm px-6 py-1"
          >
            Get
          </a>
        </div>
      )}
    </>
  );
};

export default DownloadBar;
