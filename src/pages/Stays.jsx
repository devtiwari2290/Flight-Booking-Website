import React, { useState } from "react";
import staybanner from "../assets/banner/banner-8.webp";
import discount from "../assets/banner/ct-3.webp";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Stays = () => {
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
        "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-1.jpg",
      title: "House",
      name: "Brick Lane Realty",
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
      name: "Heaven Group RealEstate",
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
      name: "Excelsior Real Estate",
      beds: "3Beds",
      baths: " 2Baths ",
      area: " 2100 sqft",
      price: "$492",
      discount: "15% Off",
      rating: "(142 Reviews)",
    },
  ];

  return (
    <>
      <div className="w-full min-h-[100vh] pt-16">
        {/* Banner */}
        <div
          className="w-full min-h-[100vh] lg:min-h-[90vh]  relative"
          style={{
            backgroundImage: `url(${staybanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Color shadow overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute inset-0 flex mt-14 flex-col lg:mt-52">
            <div className="text-center">
              <h1 className="text-white  text-4xl lg:text-5xl font-bold">
                Starts Your Trip with GeoTrip
              </h1>
              <p className="text-white text-xl font-light lg:font-normal mt-5 px-2 leading-9 lg:leading-0">
                Take a little break from the work strss of everyday. Discover
                plan trip and explore beautiful destinations.
              </p>
            </div>
            <div class="w-[90%] mx-auto mt-10">
              <div class="bg-white rounded-lg p-3 pt-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {/* <!-- Left Section --> */}
                  <div class="col-span-2">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {/* <!-- Location Dropdown --> */}
                      <div class="relative">
                        <label class="block mb-1">Where</label>
                        <div class="form-group border rounded-md p-4">
                          <select class="w-full border-0 bg-white rounded-md">
                            <option>Select</option>
                            <option value="ny">New York</option>
                            <option value="sd">San Diego</option>
                            <option value="sj">San Jose</option>
                            <option value="ph">Philadelphia</option>
                            <option value="nl">Nashville</option>
                            <option value="sf">San Francisco</option>
                            <option value="hu">Houston</option>
                            <option value="sa">San Antonio</option>
                          </select>
                        </div>
                      </div>

                      {/* <!-- Date Picker --> */}

                      <div className="date-picker-component">
                        <div className="form-group">
                          <label className="block mb-1">Choose Date</label>
                          <div className="relative">
                            <input
                              type="date"
                              className="w-full border rounded-md p-4 text-left bg-gray-50"
                              placeholder="Select Date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right Section --> */}
                  <div class="col-span-1">
                    <div class="grid grid-cols-2 gap-3">
                      {/* <!-- Guests Picker --> */}
                      <div>
                        <div class="form-group">
                          <label class="block mb-1">Members</label>
                          <div class="relative">
                            <button
                              class="w-full border rounded-md p-4 text-left bg-gray-50"
                              id="guests-input-btn"
                            >
                              1 Adult
                            </button>
                            {/* <!-- Guests Options --> */}
                            <div
                              id="guests-input-options"
                              class="absolute bg-white shadow-lg rounded-md mt-2 hidden"
                            >
                              <div class="flex justify-between p-2">
                                <span class="text-gray-700">Adults</span>
                                <div class="flex space-x-2 items-center">
                                  <button
                                    class="text-gray-500"
                                    id="adults-subs-btn"
                                  >
                                    -
                                  </button>
                                  <span id="guests-count-adults">1</span>
                                  <button
                                    class="text-gray-500"
                                    id="adults-add-btn"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div class="flex justify-between p-2">
                                <span class="text-gray-700">Children</span>
                                <div class="flex space-x-2 items-center">
                                  <button
                                    class="text-gray-500"
                                    id="children-subs-btn"
                                  >
                                    -
                                  </button>
                                  <span id="guests-count-children">0</span>
                                  <button
                                    class="text-gray-500"
                                    id="children-add-btn"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div class="flex justify-between p-2">
                                <span class="text-gray-700">Rooms</span>
                                <div class="flex space-x-2 items-center">
                                  <button
                                    class="text-gray-500"
                                    id="room-subs-btn"
                                  >
                                    -
                                  </button>
                                  <span id="guests-count-room">0</span>
                                  <button
                                    class="text-gray-500"
                                    id="room-add-btn"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Stays --> */}
        <div className="px-5 lg:px-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="w-full h-[20vh]  border rounded-2xl border-gray-300 flex justify-center items-center gap-5">
            <img
              src={discount}
              alt=""
              className="w-[140px] h-[19vh] p-3 object-cover rounded-2xl"
            />
            <div>
              <h2 className="text-xl text-wrap whitespace-nowrap font-bold mb-3">
                30% Off On Summer Vacation
              </h2>

              <p className="text-gray-500 text-sm font-semibold">
                Valid 31 March 2023
              </p>
            </div>
          </div>

          <div className="w-full h-[20vh]  border rounded-2xl border-gray-300 flex justify-center items-center gap-5">
            <img
              src={discount}
              alt=""
              className="w-[140px] h-[19vh] p-3 object-cover rounded-2xl"
            />
            <div>
              <h2 className="text-xl text-wrap whitespace-nowrap font-bold mb-3">
                20% Off On Domestic Holiday
              </h2>

              <p className="text-gray-500 text-sm font-semibold">
                Valid 31 March 2023
              </p>
            </div>
          </div>
          <div className="w-full h-[20vh]  border rounded-2xl border-gray-300 flex justify-center items-center gap-5">
            <img
              src={discount}
              alt=""
              className="w-[140px] h-[19vh] p-3 object-cover rounded-2xl"
            />
            <div>
              <h2 className="text-xl text-wrap whitespace-nowrap font-bold mb-3">
                40% Off On winter Vacation
              </h2>

              <p className="text-gray-500 text-sm font-semibold">
                Valid 31 March 2023
              </p>
            </div>
          </div>
        </div>

        {/* Explore Top Domestic Routes */}
        <div className="mt-16">
          <div className="flex justify-between items-center px-8 lg:px-20">
            <h1 className="text-sm lg:text-base font-bold text-nowrap">
              Explore Top Domestic Routes
            </h1>
            <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
              More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {domestic?.map((i, index) => (
              <div
                className="w-[320px]  shadow-md shadow-slate-200	 my-3 mx-auto rounded-md overflow-hidden lg:w-[320px] "
                key={index}
              >
                <div className="w-full h-52" key={index}>
                  <img
                    className="w-full h-full object-cover   hover:scale-105 duration-300 transition all ease-in-out"
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
                  className="w-full h-96  hover:scale-105 duration-300 transition all ease-in-out "
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
                  <span className="text-red-600 font-semibold">WELCOME</span>{" "}
                  and get{" "}
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
          <div className="flex justify-between items-center px-5 lg:px-16">
            <h1 className="text-sm lg:text-base font-bold text-nowrap">
              Featured Rental In Australia
            </h1>
            <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
              More
            </button>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rental?.map((i, index) => (
              <div
                className="w-[340px]  shadow-md shadow-slate-200	my-3 mx-auto rounded-md overflow-hidden lg:w-[340px] "
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
    </>
  );
};

export default Stays;
