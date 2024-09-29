import React, { useState } from "react";
import logo from "../assets/logo.webp";
import flag from "../assets/flag.webp";
import { NavLink } from "react-router-dom";
import { FaUmbrellaBeach, FaPlane, FaRegUserCircle } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { SlMenu } from "react-icons/sl";
import { RiHotelFill, RiHome2Fill } from "react-icons/ri";
import { IoCarSharp } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar fixed z-10 bg-white flex justify-between px-3 md:px-16 items-center w-full h-[10vh]">
        {/* Hamburger icon for mobile */}
        <button
          className="text-2xl text-gray-500 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <LiaTimesSolid /> : <SlMenu />}
        </button>

        <img className="w-[110px] lg:w-[130px] mr-9" src={logo} alt="Logo" />

        {/* Main nav items */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-10 lg:items-center absolute md:static top-[10vh] left-0 pl-12 lg:pl-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
        >
          <NavLink
            style={(e) => ({
              color: e.isActive ? "#384BFF" : "black",
            })}
            to="/"
            className="text-black font-semibold hover:text-[#5766FF] text-sm flex gap-2 items-center"
          >
            <FaUmbrellaBeach className="text-black hover:text-[#5766FF] text-base" />
            Stays
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "#384BFF" : "black",
            })}
            to="/flights"
            className="text-black font-semibold text-sm hover:text-[#5766FF] flex gap-2 items-center"
          >
            <FaPlane className="text-black hover:text-[#5766FF] text-base" />
            Flights
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "#384BFF" : "black",
            })}
            to="/hotels"
            className="text-black font-semibold text-sm hover:text-[#5766FF] flex gap-2 items-center"
          >
            <RiHotelFill className="text-black hover:text-[#5766FF] text-base" />
            Hotels
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "#384BFF" : "black",
            })}
            to="/rentals"
            className="text-black font-semibold text-sm hover:text-[#5766FF] flex gap-2 items-center"
          >
            <RiHome2Fill className="text-black hover:text-[#5766FF] text-base" />
            Rentals
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "#384BFF" : "black",
            })}
            to="/cars"
            className="text-black font-semibold text-sm hover:text-[#5766FF] flex gap-2 items-center"
          >
            <IoCarSharp className="text-black hover:text-[#5766FF] text-base" />
            Cars
          </NavLink>
        </div>

        {/* Right-side buttons */}
        <div className="flex justify-center gap-2 lg:gap-2 items-center">
          <button className="text-black text-sm font-semibold bg-[#EBEFF2] px-3 lg:px-4 py-[13px] lg:py-4 rounded">
            INR
          </button>

          <button className="text-black bg-[#EBEFF2] px-3 lg:px-4  py-[13px] lg:py-4  rounded">
            <img className="w-[20px]" src={flag} alt="Flag" />
          </button>

          <button className="text-white text-base font-semibold lg:flex items-center gap-2 bg-[#384BFF] px-4  py-[15px] lg:py-4  rounded">
            <FaRegUserCircle className="text-white" />
            {<span className="hidden md:block">Sign In / Register</span>}
          </button>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed bg-black opacity-25 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
