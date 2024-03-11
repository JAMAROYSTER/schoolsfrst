import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const icons = [
  FaFacebookSquare,
  FaSquareXTwitter,
  FaInstagramSquare,
  FaPinterestSquare,
  FaLinkedin,
  FaYoutube,
];

const links1 = ["privacy", "SCHOOLSFIRST FCU ROUTING #322282001"];
const links2 = [
  "ABOUT US",
  "CAREERS",
  "HOMEOWNER HARDSHIP ASSISTANCE",
  "CONTACT US",
  "FIND A BRANCH/ATM",
];

const Footer = () => {
  return (
    <div className="bg-white px-6 py-4 md:px-8 md:py-6">
      <div className="flex justify-between gap-3 flex-wrap mb-3">
        <div className="flex items-center flex-wrap gap-6">
          {icons.map((Icon) => (
            <Icon
              fill="#3b6e8f"
              size={30}
              className="cursor-pointer"
            />
          ))}
        </div>
        <div>
          <div className="flex items-center md:justify-end gap-2 mb-2 flex-wrap">
            {links1.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="uppercase text-[#3b6e8f] text-[12px] hover:underline flex items-center"
              >
                {link}{" "}
                <IoIosArrowForward
                  fill="#af5607"
                  size={18}
                />
              </a>
            ))}
          </div>
          <div className="flex items-center md:justify-end gap-2 flex-wrap">
            {links2.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="uppercase text-[#3b6e8f] text-[12px] hover:underline flex items-center"
              >
                {link}{" "}
                <IoIosArrowForward
                  fill="#af5607"
                  size={18}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-3 flex-wrap">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex gap-2 items-center">
            <img
              src="/images/ncua-icon.png"
              alt="Federally Insured by NCUA"
            />
            <span className="text-[12px]">Federally Insured by NCUA</span>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/images/housing-lender-icon.png"
              alt="EQUAL HOUSING OPPORTUNITY"
            />
            <span className="hover:underline text-[12px]">
              EQUAL HOUSING OPPORTUNITY
            </span>
          </div>
        </div>
        <span className="text-[12px]">
          © Copyright {new Date().getFullYear()} SchoolsFirst FCU. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
