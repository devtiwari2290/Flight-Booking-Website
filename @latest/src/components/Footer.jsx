import React from "react";
import logo from "../assets/logo.webp";
import payment from "../assets/payment.webp";
import mytrip from "../assets/mytrip.webp";
import trip from "../assets/tripadv.webp";
import goibio from "../assets/goibibo.webp";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" w-full pb-10 lg:min-h-[60vh]  pt-16 lg:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:px-20 ">
        <div className="flex flex-col">
          <img
            className="w-[180px] lg:w-[150px]  pb-5 px-3 lg:px-0"
            src={logo}
            alt=""
          />
          <p className="text-xs  font-bold  text-gray-500 px-3 lg:px-0">
            We make your dream more beautiful & enjoyful with lots of happiness.
          </p>
          <div className="flex justify-start mt-10 px-3  gap-3  lg:justify-center lg:px-0">
            <button className=" px-3 py-3 rounded bg-[#EDF3F7]">
              <IoLogoFacebook className="text-gray-500 hover:text-white transition all ease duration-00" />
            </button>
            <button className=" px-3 py-3 rounded bg-[#EDF3F7]">
              <FaLinkedin className="text-gray-500  hover:text-white transition all ease duration-00" />
            </button>
            <button className=" px-3 py-3 rounded bg-[#EDF3F7]">
              <FaGooglePlus className="text-gray-500 hover:text-white transition all ease duration-00" />
            </button>
            <button className=" px-3 py-3 rounded bg-[#EDF3F7]">
              <FaTwitter className="text-gray-500 hover:text-white transition all ease duration-00" />
            </button>
            <button className=" px-3 py-3 rounded bg-[#EDF3F7]">
              <IoBasketballOutline className="text-gray-500 hover:text-white transition all ease duration-00" />
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-10 mx-3 lg:mx-14 lg:pt-0">
          <h1 className="text-base font-bold text-gray-800 pb-4">
            The Navigation
          </h1>
          <p className="text-gray-600 font-semibold pb-4  text-sm">
            Talent Marketplace
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Payroll Services
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Direct Contracts
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Hire Worldwide
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Hire in the USA
          </p>
          <p className="text-gray-600 font-semibold pb-4  text-sm">
            How to Hire
          </p>
        </div>

        <div className="flex flex-col pt-10 mx-3 lg:mx-14 lg:pt-0">
          <h1 className="text-base font-bold text-gray-800 pb-4">
            Our Resources
          </h1>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Free Business tools
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Affiliate Program
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Success Stories
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">
            Upwork Reviews
          </p>
          <p className="text-gray-600 font-semibold pb-4 text-sm">Resources</p>
          <p className="text-gray-600 font-semibold pb-4  text-sm">
            Help & Support
          </p>
        </div>

        <div className="flex flex-col pt-10 mx-3 lg:mx-14 lg:pt-0">
          <h1 className="text-base font-bold text-gray-800 pb-4">
            The Company
          </h1>
          <p className="text-gray-600 font-semibold pb-4 text-sm">About Us</p>
          <p className="text-gray-600 font-semibold  pb-4 text-sm">
            Leadership
          </p>
          <p className="text-gray-600 font-semibold  pb-4 text-sm">
            Contact Us
          </p>
          <p className="text-gray-600 font-semibold  pb-4 text-sm">
            Investor Relations
          </p>
          <p className="text-gray-600 font-semibold  text-sm">
            Trust, Safety & Security
          </p>
        </div>

        <div className="flex flex-col pt-10 mx-3 lg:mx-0 lg:pt-0">
          <h1 className="text-base  font-bold text-gray-800 ">
            Payment Methods
          </h1>
          <img className="w-[320px] pt-5" src={payment} alt="" />
          <div className="pt-2">
            <h1 className="text-base  font-bold text-gray-800 pt-5">
              Our Partners
            </h1>
            <div className="flex gap-5 pt-3">
              <img className="h-[25px]" src={mytrip} alt="" />
              <img className="h-[20px]" src={trip} alt="" />
              <img className="h-[23px]" src={goibio} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
