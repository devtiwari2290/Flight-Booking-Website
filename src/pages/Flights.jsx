import React, { useState } from "react";
import flightbanner from "../assets/banner/banner-7.webp";
import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Flights = () => {
  const flights = [
    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/air-4.png",
      discount: "30% Off",
      route: "On Domestic Flight For USA",
      valid: "Valid 31 March 2023",
    },
    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/air-2.png",
      discount: "40% Off",
      route: "On International Routes",
      valid: "Valid 31 March 2023",
    },
    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/air-5.png",
      discount: "15% Off",
      route: "On National Routes",
      valid: "Valid 31 March 2023",
    },
  ];

  const domestic = [
    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg",
      destination: "New York ⮀ Los Angeles",
      trip: "Round-trip",
      days: "3 days",
      price: "US$ 492",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg",
      destination: "New Orleans ⮀ Long Beach",
      trip: "Round-trip",
      days: "3 days",
      price: "US$ 492",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg",
      destination: "Jacksonville ⮀ San Antonio",
      trip: "Round-trip",
      days: "3 days",
      price: "US$ 492",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-6.jpg",
      destination: "New York ⮀ Los Angeles",
      trip: "Round-trip",
      days: "3 days",
      price: "US$ 492",
    },
  ];

  const destinations = [
    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-12.png",
      name: "Los Angeles",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-6.png",
      name: "Chicago",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-8.png",
      name: "Las Vegas",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-9.png",
      name: "New Orleans",
    },
  ];

  const rental = [
    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-8.jpg",
      title: "House",
      name: "Pagoda Partners Realty",
      beds: "3Beds",
      baths: " 2Baths ",
      area: " 2100 sqft",
      price: "$492",
      discount: "15% Off",
      rating: "(142 Reviews)",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-1.jpg",
      title: "House",
      name: "Strive Partners Realty",
      beds: "3Beds",
      baths: " 2Baths ",
      area: " 2100 sqft",
      price: "$492",
      discount: "15% Off",
      rating: "(142 Reviews)",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-2.jpg",
      title: "Villa",
      name: "Larkspur Partners Realty",
      beds: "3Beds",
      baths: " 2Baths ",
      area: " 2100 sqft",
      price: "$492",
      discount: "15% Off",
      rating: "(142 Reviews)",
    },

    {
      image:
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-3.jpg",
      title: "Apartment",
      name: "Agile Real Estate Group",
      beds: "3Beds",
      baths: " 2Baths ",
      area: " 2100 sqft",
      price: "$492",
      discount: "15% Off",
      rating: "(142 Reviews)",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(new Date()); // Initialize date value with current date

  const toggleCalendar = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };

  const onChange = (date) => {
    setValue(date); // Update the selected date
    setIsOpen(false); // Close the calendar after date selection
  };

  return (
    <div className="w-full min-h-[100vh] pt-16">
      {/* Banner */}
      <div
        className="w-full min-h-[100vh]  lg:min-h-[90vh]  relative "
        style={{
          backgroundImage: `url(${flightbanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Color shadow overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="absolute inset-0 flex mt-14 flex-col  lg:mt-48">
          <div className="text-center">
            <h1 className="text-white  text-4xl lg:text-5xl font-bold">
              Starts Your Trip with GeoTrip
            </h1>
            <p className="text-white text-xl font-light lg:font-normal mt-5 px-2 leading-9 lg:leading-0">
              Take a little break from the work strss of everyday. Discover plan
              trip and explore beautiful destinations.
            </p>
          </div>

          {/* --------------------------------- */}
          <div className="w-[85%] mx-4  md:w-[80%] lg:w-[60%] xl:w-[80%] xl:mx-auto lg:mx-auto p-3 bg-white mt-10 lg:mt-10 rounded-lg">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex space-x-4">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="trip"
                      id="return"
                      defaultValue="option1"
                      className="form-radio"
                      defaultChecked
                    />
                    <span className="ml-2">Return</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="trip"
                      id="oneway"
                      defaultValue="option2"
                      className="form-radio"
                    />
                    <span className="ml-2">One Way</span>
                  </label>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="relative">
                  <button
                    id="guests-input-btn"
                    className="text-sm border border-gray-300 rounded-md px-3 py-2 flex items-center"
                  >
                    <FaUser className="text-gray-500 mr-2" />1 Adults
                  </button>
                  <div
                    id="guests-input-options"
                    className="absolute hidden mt-2 bg-white shadow-lg rounded-lg p-3 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <button
                        id="adults-subs-btn"
                        className="disabled:text-gray-400"
                      >
                        -
                      </button>
                      <span className="mx-4">1 Adults</span>
                      <button id="adults-add-btn">+</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        id="children-subs-btn"
                        className="disabled:text-gray-400"
                      >
                        -
                      </button>
                      <span className="mx-4">0 Children</span>
                      <button id="children-add-btn">+</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        id="room-subs-btn"
                        className="disabled:text-gray-400"
                      >
                        -
                      </button>
                      <span className="mx-4">0 Rooms</span>
                      <button id="room-add-btn">+</button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <button className="text-sm border border-gray-300 rounded-md px-3 py-2 flex items-center">
                    <FaBasketShopping className="text-gray-500 mr-2" />
                    Economy
                  </button>
                  <ul className="absolute hidden mt-2 bg-white shadow-lg rounded-lg p-3">
                    <li className="py-1">Economy</li>
                    <li className="py-1">Premium Economy</li>
                    <li className="py-1">Business</li>
                    <li className="py-1">First</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="flex space-x-4">
                <div className="relative w-full">
                  <select
                    className="w-full text-sm border border-gray-300 rounded-md p-5"
                    name="leaving"
                  >
                    <option value>Leaving From</option>
                    <option value="ny">New York</option>
                    <option value="sd">San Diego</option>
                    {/* Other options... */}
                  </select>
                  <button className="absolute top-2 right-2 text-primary">
                    <i className="fa-solid fa-right-left" />
                  </button>
                </div>
                <div className="w-full">
                  <select
                    className="w-full text-sm border border-gray-300 rounded-md p-5"
                    name="goingto"
                  >
                    <option value>Going To</option>
                    <option value="lv">Las Vegas</option>
                    <option value="la">Los Angeles</option>
                    {/* Other options... */}
                  </select>
                </div>
              </div>
              <div className="flex space-x-4 ">
                <div class="relative">
                  <input
                    type="date"
                    class="w-full border border-gray-300 rounded-md p-4 lg:text-base text-xs"
                    id="date-input"
                    placeholder="Arrival"
                  />
                </div>
                <div class="relative">
                  <input
                    type="date"
                    class="w-full border  border-gray-300 rounded-md p-4 lg:text-base  text-xs"
                    id="date-input"
                    placeholder="Departure "
                  />
                </div>
              </div>

              {/* <!-- Search Button --> */}
              <div class="flex  items-end">
                <button
                  type="button"
                  class="w-full bg-blue-500 text-white font-semibold py-5 gap-2 rounded-md flex justify-center items-center"
                >
                  <FaSearch className="text-white  text-base" /> Search
                </button>
              </div>
            </div>
          </div>

          {/*--------------------------  */}
        </div>
      </div>

      {/* <!-- Flights --> */}
      <div className="px-5 lg:px-16 gap-10 lg:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {flights.map((i, index) => (
          <div
            className="w-full h-[21vh] lg:h-[18vh]  border rounded-2xl border-gray-300 flex start p-3 gap-5  border-dashed	border-2"
            key={index}
          >
            <div className="w-[100px] h-[105px] bg-[#EDF3F7] p-3">
              <img
                src={i.image}
                alt=""
                className="w-full h-full  object-cover rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-xl text-wrap whitespace-nowrap font-bold mb-3">
                {i.discount}
              </h2>
              <p className="text-gray-500 text-sm font-semibold mb-5">
                {i.route}
              </p>
              <p className="text-gray-500 text-sm font-semibold">{i.valid}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Top Domestic Routes */}
      <div className="mt-16">
        <div className="flex justify-between items-center px-8 lg:px-16">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Explore Top Domestic Routes
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {domestic?.map((i, index) => (
            <div
              className="w-[320px] mx-auto  shadow-md shadow-slate-200	 my-3 lg:mx-auto rounded-md overflow-hidden lg:w-[310px] "
              key={index}
            >
              <div className="w-full h-52" key={index}>
                <img
                  className="w-full h-full object-cover  hover:scale-105 duration-300 transition all ease-in-out "
                  src={i.image}
                />
              </div>
              <div className="w-full p-3 h-36 bg-[#FFFFFF]">
                <h1 className="text-xl text-nowrap whitespace-nowrap text-black font-semibold mb-2">
                  {i.destination}
                </h1>
                <p className="text-sm text-gray-500 font-semibold">
                  {i.trip} | {i.days}
                </p>
                <p className="text-lg text-nowrap whitespace-nowrap text-black font-bold ml-44 mt-5">
                  <span className="text-gray-500 text-sm font-semibold">
                    From
                  </span>{" "}
                  {i.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse Popular Destinations  */}
      <div className="mt-16">
        <div className="flex justify-between items-center px-6 lg:px-16">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Browse Popular Destinations
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>

        <div className="mx-auto lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {destinations?.map((i, index) => (
            <div
              className="w-[330px] shadow-md shadow-slate-200	 my-3 mx-auto  lg:mx-auto rounded-md overflow-hidden lg:w-[310px] "
              key={index}
            >
              <div
                className="w-full h-96  hover:scale-105 duration-300 transition all ease-in-out  "
                style={{
                  backgroundImage: `url(${i.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={index}
              >
                <h1 className="text-3xl text-center text-nowrap whitespace-nowrap text-white font-bold pt-80 ">
                  {i.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download App Now*/}
      <div className="mt-16 px-5  w-full lg:mx-auto lg:w-[90%] h-auto lg:h-[35vh] bg-[#4858FF] flex flex-col lg:flex-row lg:justify-between rounded-lg ">
        <div>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-5 mt-5 lg:ml-5">
            <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]">
              <img
                className="w-full h-full"
                src="https://shreethemes.net/geotrip-live/geotrip/assets/img/app-link.png"
                alt=""
              />
            </div>

            <div>
              <h1 className="text-lg lg:text-4xl text-nowrap whitespace-nowrap text-white font-bold pb-2 lg:pb-3">
                Download App Now!
              </h1>
              <p className="text-white text-sm lg:text-base">
                Use Code{" "}
                <span className="text-red-600 font-semibold">WELCOME</span> and
                get{" "}
                <span className="text-green-600 font-semibold">Flat 20%</span>{" "}
                OFF* on your first domestic flight booking
              </p>
            </div>
          </div>

          {/* Input and Button Form */}
          <div className="mt-8 lg:mt-10 ml-0">
            <form>
              <div className="flex flex-wrap items-center justify-start">
                <div className="w-full lg:w-10/12">
                  <div className="ml-0 lg:ml-5 bg-white border border-dashed rounded-lg p-3">
                    <div className="flex flex-wrap items-center gap-0">
                      <div className="w-full md:w-8/12 sm:w-8/12">
                        <div className="relative ">
                          <input
                            type="text"
                            className="form-control-md  outline-0	 font-semibold  pl-14 w-full py-2"
                            placeholder="Enter Mobile Number"
                          />
                          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 font-medium text-dark">
                            +91 -
                          </span>
                        </div>
                      </div>
                      <div className="w-full md:w-4/12 sm:w-4/12 mt-2 md:mt-0">
                        <button
                          type="button"
                          className="btn-md bg-red-500 text-white w-full font-medium py-3"
                        >
                          Get App Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col items-center py-8 lg:py-10 gap-4 lg:gap-5">
          <div className="w-[200px] lg:w-[230px] h-[80px] lg:h-[160px] bg-red-600 rounded-lg flex justify-center gap-4 lg:gap-5">
            <IoLogoGooglePlaystore className="text-4xl lg:text-5xl text-white mt-4 lg:mt-5" />
            <div className="mt-4 lg:mt-5">
              <h1 className="text-base lg:text-lg text-white">GET IT ON</h1>
              <h2 className="text-lg lg:text-xl text-white font-bold">
                Google Play
              </h2>
            </div>
          </div>

          <div className="w-[220px] lg:w-[250px] h-[80px] lg:h-[150px] bg-white rounded-lg flex justify-center gap-3 lg:gap-4">
            <FaApple className="text-4xl lg:text-5xl text-black mt-4 lg:mt-5" />
            <div className="mt-4 lg:mt-5">
              <h1 className="text-sm lg:text-base text-black">
                DOWNLOAD ON THE
              </h1>
              <h2 className="text-lg lg:text-xl text-black font-bold">
                App Store
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Rental In Australia */}
      <div className="mt-16">
        <div className="flex justify-between items-center px-5 lg:px-12">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Featured Rental In Australia
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>
        <div className=" mx-auto gap-2 lg:gap-0 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {rental?.map((i, index) => (
            <div
              className="w-[340px]  shadow-md shadow-slate-200	my-3 mx-auto rounded-md overflow-hidden lg:w-[320px]"
              key={index}
            >
              <div className="w-full h-52" key={index}>
                <img
                  className="w-full h-full object-cover  hover:scale-105 duration-300 transition all ease-in-out  "
                  src={i.image}
                />
              </div>
              <div className="w-full p-3 h-52 bg-[#FFFFFF]">
                <button className="px-4 py-1 text-xs font-semibold text-green-600  bg-green-200 rounded">
                  {i.title}
                </button>
                <p className="text-base text-black font-bold">{i.name}</p>
                <div className="flex start gap-2 mt-4">
                  <button className="px-3 py-2 border border-dashed border-gray-300	 text-xs font-semibold text-black  rounded">
                    {i.beds}
                  </button>
                  <button className="px-3 py-2 border border-dashed border-gray-300 text-xs font-semibold text-black  rounded">
                    {i.baths}
                  </button>

                  <button className="px-2 py-2 border border-dashed border-gray-300 text-xs font-semibold text-black  rounded">
                    {i.area}
                  </button>
                </div>

                <div className="flex justify-between mt-8 items-center">
                  <div>
                    <button className="px-3 py-1 text-xs font-semibold bg-red-200 text-red-600  rounded">
                      {i.discount}
                    </button>
                    <p className="text-lg text-nowrap whitespace-nowrap text-black font-bold">
                      <span className="text-gray-600 text-sm font-semibold">
                        From
                      </span>
                      {i.price}
                    </p>
                  </div>

                  <div>
                    ⭐⭐⭐⭐⭐
                    <p className="text-gray-600 text-xs font-semibold ">
                      <span className="text-black text-base font-semibold mr-1">
                        4.6
                      </span>
                      {i.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-16 w-full h-[80vh] lg:h-[65vh]  relative bg-[url(https://shreethemes.net/geotrip-live/geotrip/assets/img/bg.jpg)] bg-center bg-no-repeat  bg-cover">
        {/* Color shadow overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-55">
          <div className="flex justify-center items-center mt-36">
            <div className="flex flex-col gap-3  items-center">
              <h1 className="text-2xl text-center lg:text-3xl text-white font-bold">
                Subscribe & Get
              </h1>
              <p className="text-white text-center text-wrap lg:text-3xl text-2xl font-bold">
                Special Discount with GeoTrip.com
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mx-auto lg:justify-between px-3 lg:items-center mt-10 w-[80%]  lg:w-[57%] bg-[#FFFFFF] rounded-lg h-[20vh] lg:h-20">
            <input
              className="w-[60%] h-[9vh] outline-none lg:px-3 rounded-lg"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#5766FF] py-5 px-20 text-white font-semibold  rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
