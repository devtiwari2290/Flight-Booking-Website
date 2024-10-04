import React, { useState } from "react";
import rentalbanner from "../assets/banner/banner.webp";
import subscribe from "../assets/banner/banner-6.webp";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rental = [
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-1.jpg",
    title: "House",
    name: "Apogee Property Advisors",
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
    name: "Haven Group Real Estate",
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
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-4.jpg",
    title: "Condos",
    name: "Agile Real Estate Group",
    beds: "3Beds",
    baths: " 2Baths ",
    area: " 2100 sqft",
    price: "$492",
    discount: "15% Off",
    rating: "(142 Reviews)",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/property/img-5.jpg",
    title: "Building",
    name: "Found Property Group",
    beds: "3Beds",
    baths: " 2Baths ",
    area: " 2100 sqft",
    price: "$492",
    discount: "15% Off",
    rating: "(142 Reviews)",
  },
];

const destinations = [
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-8.png",
    name: "San Jose",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-7.png",
    name: "Houston",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-6.png",
    name: "San Francisco",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-4.png",
    name: "San Diego",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-12.png",
    name: "Los Angeles",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-9.png",
    name: "New Orleans",
  },
];

const domestic = [
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg",
    destination: "New York ⮀ Los Angeles",
    trip: "Round-trip",
    days: "3 days",
    price: "US$492",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg",
    destination: "New Orleans ⮀ Long Beach",
    trip: "Round-trip",
    days: "3 days",
    price: "US$492",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg",
    destination: "Jacksonville ⮀ San Antonio",
    trip: "Round-trip",
    days: "3 days",
    price: "US$492",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-4.jpg",
    destination: "New York ⮀ Los Angeles",
    trip: "Round-trip",
    days: "3 days",
    price: "US$492",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-5.jpg",
    destination: "Jacksonville ⮀ San Antonio",
    trip: "Round-trip",
    days: "3 days",
    price: "US$492",
  },

  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-10.jpg",
    destination: "Jacksonville ⮀ San Antonio",
    trip: "Round-trip",
    days: "3 days",
    price: "US$492",
  },
];

const articles = [
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/blog-1.jpg",
    title: "Destination",
    head: "Make Your Next Journey Delhi To Paris in Comfirtable And Best Price",
    description:
      "Think of a news blog that's filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/blog-2.jpg",
    title: "Journey",
    head: "Make Your Next Journey Delhi To Paris in Comfirtable And Best Price",
    description:
      "Think of a news blog that's filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/blog-3.jpg",
    title: "Business",
    head: "Make Your Next Journey Delhi To Paris in Comfirtable And Best Price",
    description:
      "Think of a news blog that's filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.",
  },
];

const Rentals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(new Date()); // Initialize date value with current date

  const toggleCalendar = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };

  const onChange = (date) => {
    setValue(date); // Update the selected date
    setIsOpen(false); // Close the calendar after date selection
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings3 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings4 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-[100vh] pt-16">
      {/*-------- Banner--------- */}
      <div
        className="w-full min-h-[100vh] lg:min-h-[90vh]  relative"
        style={{
          backgroundImage: `url(${rentalbanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Color shadow overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex mt-14 flex-col lg:mt-52">
          <div className="text-center">
            <h1 className="text-white  text-4xl lg:text-5xl font-bold">
              Starts Your Trip with GeoTrip
            </h1>
            <p className="text-white text-xl font-light lg:font-normal mt-5 px-2 leading-9 lg:leading-0">
              Take a little break from the work strss of everyday. Discover plan
              trip and explore beautiful destinations.
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
                        <div className="relative w-full border py-4 bg-white rounded-md text-center">
                          <button
                            type="button"
                            className="date-picker-toggle-button"
                            onClick={toggleCalendar}
                          >
                            {value ? value.toLocaleDateString() : "Select Date"}
                          </button>

                          {isOpen && (
                            <div className="calendar-container absolute">
                              <Calendar onChange={onChange} value={value} />
                            </div>
                          )}
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
                                <button class="text-gray-500" id="room-add-btn">
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

      {/* -------Offer----------- */}
      <div className="mt-10  w-full min-h-[90vh] lg:min-h-[40vh] lg:px-12 grid grid-cols-1 gap-7 lg:gap-0 lg:flex flex-row lg:justify-evenly">
        <div className="w-[300px] bg-[#D4EEE3]  h-[300px] rounded-lg mx-auto lg:mx-0">
          <div className="w-[150px] h-[50px] ml-8  mt-10">
            <img
              src="https://shreethemes.net/geotrip-live/geotrip/assets/img/flt-3.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p className="text-lg text-black font-semibold pt-7 ml-8">Flat</p>
          <h3 className="text-2xl text-green-600 font-bold ml-8">$899 off</h3>
          <h4 className="text-sm text-black font-semibold ml-8">
            On Domestic Flights
          </h4>
          <button className="text-xl ml-8 text-green-600 px-6 py-1 border-2 border-green-600  border-dashed	 font-bold rounded-lg mt-5">
            LOG125F
          </button>
        </div>

        <div className="w-[300px] bg-[#E3E3FF]  h-[300px] rounded-lg mx-auto lg:mx-0">
          <div className="w-[150px] h-[50px] ml-8  mt-10">
            <img
              src="https://shreethemes.net/geotrip-live/geotrip/assets/img/goibibo.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p className="text-lg text-black font-semibold pt-7 ml-8">Flat</p>
          <h3 className="text-2xl text-[#6363F5] font-bold ml-8">$899 off</h3>
          <h4 className="text-sm text-black font-semibold ml-8">
            On Domestic Flights
          </h4>
          <button className="text-xl ml-8 text-[#6363F5] px-6 py-1 border-2 border-[#6363F5]  border-dashed	 font-bold rounded-lg mt-5">
            INT285
          </button>
        </div>

        <div className="w-[300px] bg-[#FFE2E0]  h-[300px] rounded-lg mx-auto lg:mx-0 ">
          <div className="w-[150px] h-[50px] ml-8  mt-10">
            <img
              src="https://shreethemes.net/geotrip-live/geotrip/assets/img/flt-2.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p className="text-lg text-black font-semibold pt-7 ml-8">Flat</p>
          <h3 className="text-2xl text-[#CE3526] font-bold ml-8">$899 off</h3>
          <h4 className="text-sm text-black font-semibold ml-8">
            On Domestic Flights
          </h4>
          <button className="text-xl ml-8 text-[#CE3526] px-6 py-1 border-2 border-[#CE3526]  border-dashed	 font-bold rounded-lg mt-5">
            LOG125F
          </button>
        </div>

        <div className="w-[300px] bg-[#FFF3CD]  h-[300px] rounded-lg mx-auto lg:mx-0">
          <div className="w-[150px] h-[50px] ml-8  mt-10">
            <img
              src="https://shreethemes.net/geotrip-live/geotrip/assets/img/flt-1.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p className="text-lg text-black font-semibold pt-7 ml-8">Flat</p>
          <h3 className="text-2xl text-[#FFC008] font-bold ml-8">$899 off</h3>
          <h4 className="text-sm text-black font-semibold ml-8">
            On Domestic Flights
          </h4>
          <button className="text-xl ml-8 text-[#FFC008] px-6 py-1 border-2 border-[#FFC008]  border-dashed	 font-bold rounded-lg mt-5">
            LOG125F
          </button>
        </div>
      </div>

      {/* Explore Hot Rental Properties */}
      <div className="mt-16  mx-7 lg:mx-0">
        <div className="flex justify-between items-center px-3 lg:px-16">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Explore Hot Rental Properties
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>
        <div className=" px-0 lg:px-14">
          <Slider {...settings}>
            {rental?.map((i, index) => (
              <div
                className="  shadow-md shadow-slate-200	my-3 mx-auto rounded-md overflow-hidden"
                key={index}
              >
                <div className="w-full h-72" key={index}>
                  <img
                    className="w-full h-full object-cover  hover:scale-105 duration-300 transition all ease-in-out   "
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
          </Slider>
        </div>
      </div>

      {/* Explore Top Destinations*/}
      <div className="mt-16  mx-7 lg:mx-0">
        <div className="flex justify-between items-center px-3 lg:px-16">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Explore Top Destinations
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>

        <div className=" px-0 lg:px-14">
          <Slider {...settings2}>
            {destinations?.map((i, index) => (
              <div
                className="shadow-md shadow-slate-200	 my-3 mx-auto  lg:mx-auto rounded-md overflow-hidden"
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
          </Slider>
        </div>
      </div>

      {/* Explore Top Domestic Routes */}
      <div className="mt-16  mx-7 lg:mx-0">
        <div className="flex justify-between items-center px-3 lg:px-16">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Explore Top Domestic Routes
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>
        <div className="px-0 lg:px-14">
          {/* ------Card------ */}
          <Slider {...settings3}>
            {domestic?.map((i, index) => (
              <div
                className="w-full mx-auto border-2 border-dashed shadow-md shadow-slate-200	 my-3 lg:mx-auto rounded-lg overflow-hidden lg:w-[400px] "
                key={index}
              >
                <div className="w-full h-52 rounded-lg" key={index}>
                  <img
                    className="w-full h-full object-cover   hover:scale-105 duration-300 transition all ease-in-out "
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
                  <p className="text-lg text-nowrap whitespace-nowrap text-black font-bold ml-40 lg:ml-44 mt-5">
                    <span className="text-gray-500 text-sm font-semibold">
                      From
                    </span>{" "}
                    {i.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
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

      {/* Featured Rental In Australia*/}
      <div className="mt-16  mx-7 lg:mx-0">
        <div className="flex justify-between items-center px-3 lg:px-16">
          <h1 className="text-sm lg:text-base font-bold text-nowrap">
            Featured Rental In Australia
          </h1>
          <button className="text-sm text-white font-semibold bg-[#384BFF] rounded py-3 px-7">
            More
          </button>
        </div>
        <div className="px-0 lg:px-14">
          <Slider {...settings4}>
            {rental?.map((i, index) => (
              <div
                className="  shadow-md shadow-slate-200	my-3 mx-auto rounded-md overflow-hidden"
                key={index}
              >
                <div className="w-full h-72" key={index}>
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
          </Slider>
        </div>
      </div>

      {/* Trending & Popular Articles */}
      <div className="mt-16">
        <h1 className="text-2xl text-center lg:text-4xl text-black font-bold">
          Trending & Popular Articles
        </h1>
        <p className="text-center text-gray-500 mt-3 lg:mt-4">
          Cicero famously orated against his political opponent Lucius Sergius
          Catilina.
        </p>
        <div className="lg:px-12 mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles?.map((i, index) => (
            <div
              className="w-[340px] my-3 mx-auto rounded-md overflow-hidden lg:w-[420px]"
              key={index}
            >
              <div className="w-full h-80 " key={index}>
                <img
                  className="w-full h-full object-cover rounded-lg "
                  src={i.image}
                />
              </div>
              <div className="w-full mt-3 h-60 bg-[#FFFFFF]">
                <button className="px-4 py-2 text-xs font-semibold text-green-600  bg-[#D4EEE3] rounded">
                  {i.title}
                </button>
                <h3 className="text-base text-black font-bold text-wrap pt-2 leading-6">
                  {i.head}
                </h3>
                <p className="text-sm text-gray-600 text-wrap pt-3 font-medium  leading-7">
                  {i.description}
                </p>
                <h4 className="text-base text-red-600 pt-3 font-semibold">
                  Read More
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Section */}
      <div
        className="mt-16 w-full h-[80vh] lg:h-[65vh]  relative "
        style={{
          backgroundImage: `url(${subscribe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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

export default Rentals;
