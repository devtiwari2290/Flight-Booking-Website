import React, { useState } from "react";
import carbanner from "../assets/banner/car-bg.webp";
import { FaSearch, FaPlay } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const discount = [
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-6.png",
    title: "Los Angeles",
    days: "Round-trip  |  3D/4N  |  3 Person ",
    price: "$849 - $999",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-5.png",
    title: "United Kingdom",
    days: "Round-trip  |  3D/4N  |  2 Person ",
    price: "$399 - $599",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-1.png",
    title: "France",
    days: "Round-trip  |  3D/4N  |  3 Person ",
    price: "$569 - $799",
  },
];

const vechiles = [
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/car.jpg",
    title: "Carmy Accord",
    specifications: "SEDAN  |  AC  |  5 Seats",
    policy: "Free Cancellation Till 10 Aug 23",
    feature1: "Manual",
    feature2: "1 Large bag",
    feature3: "1 Small beg",
    feature4: "Diesel",
    discount: "15% Off",
    price: "US$59",
    reviews: "3,014 reviews",
    rating: "4.8",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/car.jpg",
    title: "Audi, BMW",
    specifications: "Hatchback  |  AC  |  5 Seats",
    policy: "Free Cancellation Till 10 Aug 23",
    feature1: "Manual",
    feature2: "1 Large bag",
    feature3: "1 Small beg",
    feature4: "Diesel",
    discount: "15% Off",
    price: "US$59",
    reviews: "3,014 reviews",
    rating: "4.8",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/car.jpg",
    title: "Ertiga, Xylo",
    specifications: "LUX  |  AC  |  5 Seats",
    policy: "Free Cancellation Till 10 Aug 23",
    feature1: "Manual",
    feature2: "1 Large bag",
    feature3: "1 Small beg",
    feature4: "Diesel",
    discount: "15% Off",
    price: "US$59",
    reviews: "3,014 reviews",
    rating: "4.8",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/car.jpg",
    title: "SUV, Innova Crysta",
    specifications: "SUV  |  AC  |  5 Seats",
    policy: "Free Cancellation Till 10 Aug 23",
    feature1: "Manual",
    feature2: "1 Large bag",
    feature3: "1 Small beg",
    feature4: "Diesel",
    discount: "15% Off",
    price: "US$59",
    reviews: "3,014 reviews",
    rating: "4.8",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/car.jpg",
    title: "Toyota Aygo",
    specifications: "SEDAN  |  AC  |  5 Seats",
    policy: "Free Cancellation Till 10 Aug 23",
    feature1: "Manual",
    feature2: "1 Large bag",
    feature3: "1 Small beg",
    feature4: "Diesel",
    discount: "15% Off",
    price: "US$59",
    reviews: "3,014 reviews",
    rating: "4.8",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/car.jpg",
    title: "Ford Focus",
    specifications: "LUX  |  AC  |  5 Seats",
    policy: "Free Cancellation Till 10 Aug 23",
    feature1: "Manual",
    feature2: "1 Large bag",
    feature3: "1 Small beg",
    feature4: "Diesel",
    discount: "15% Off",
    price: "US$59",
    reviews: "3,014 reviews",
    rating: "4.8",
  },
];

const destination = [
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-8.png",
    title: "Chicago",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-7.png",
    title: "San Diego",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-1.png",
    title: "San Jose",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-2.png",
    title: "New York",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-3.png",
    title: "San Francisco",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-4.png",
    title: "Los Angeles",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-5.png",
    title: "New Orleans",
    cars: "10 Destinations | 5 Cars",
  },
  {
    image:
      "https://shreethemes.net/geotrip-live/geotrip/assets/img/city/c-6.png",
    title: "Long Beach",
    cars: "10 Destinations | 5 Cars",
  },
];

const customers = [
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/team-1.jpg",
    name: "Aman Diwakar",
    country: "India",
    about:
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/team-2.jpg",
    name: "Kunal M. Thakur",
    country: "India",
    about:
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/team-3.jpg",
    name: "Divya Talwar",
    country: "India",
    about:
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/team-4.jpg",
    name: " Karan Maheshwari",
    country: "India",
    about:
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt",
  },
  {
    image: "https://shreethemes.net/geotrip-live/geotrip/assets/img/team-5.jpg",
    name: "Ritika Mathur",
    country: "India",
    about:
      "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt",
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

const Cars = () => {
  return (
    <div className="w-full min-h-[100vh] pt-16">
      {/*-------- Banner--------- */}
      <div
        className="w-full min-h-[100vh] lg:min-h-[90vh]  relative"
        style={{
          backgroundImage: `url(${carbanner})`,
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

      {/*-------- Car Discount ----------- */}
      <div className="px-3 lg:px-20 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {discount?.map((i, index) => (
          <div className="w-full h-[19vh]  rounded-2xl border-gray-300 flex start border-2 border-gray-300 border-dashed gap-2">
            <img
              src={i.image}
              alt="Image"
              className="w-[140px] h-[19vh] p-3 object-cover rounded-2xl"
            />
            <div className="mt-5">
              <h2 className="text-xl text-wrap whitespace-nowrap font-bold mb-1">
                {i.title}
              </h2>

              <p className="text-gray-500 text-sm font-semibold ">{i.days}</p>

              <h3 className="text-xl text-wrap whitespace-nowrap font-bold pt-2 lg:pt-4">
                <span className="text-sm text-gray-500 font-semibold">
                  From
                </span>{" "}
                {i.price}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ------Our Awesome Vehicles--------*/}
      <div className="mt-16">
        <h1 className="text-2xl text-center lg:text-4xl text-black font-bold">
          Our Awesome Vehicles
        </h1>
        <p className="text-center  text-gray-500 mt-3 lg:mt-4">
          Cicero famously orated against his political opponent Lucius Sergius
          Catilina.
        </p>

        <div className="mt-7 mx-auto gap-2 lg:gap-0 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {vechiles?.map((i, index) => (
            <div
              className="w-[340px]  shadow-md shadow-slate-200	my-3 mx-auto rounded-md overflow-hidden lg:w-[420px]"
              key={index}
            >
              <div className="w-full h-64" key={index}>
                <img
                  className="w-full h-full  hover:scale-105 duration-300 transition all ease-in-out  "
                  src={i.image}
                />
              </div>
              <div className="w-full p-3 h-64 bg-[#FFFFFF]">
                <h3 className="text-2xl text-black font-bold mb-2">
                  {i.title}
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  {i.specifications}
                </p>
                <button className="mt-5 px-4 py-1 text-xs font-normal text-green-700  bg-[#BBF7D0] rounded">
                  {i.policy}
                </button>
                <div className="flex start gap-2 mt-4">
                  <button className="px-3 py-2 border border-dashed border-gray-300	 text-xs font-normal text-gray-600  rounded">
                    {i.feature1}
                  </button>
                  <button className="px-3 py-2 border border-dashed border-gray-300 text-xs font-normal text-gray-600  rounded">
                    {i.feature2}
                  </button>

                  <button className="px-2 py-2 border border-dashed border-gray-300 text-xs font-noraml text-gray-600  rounded">
                    {i.feature3}
                  </button>

                  <button className="px-2 py-2 border border-dashed border-gray-300 text-xs font-normal text-gray-600  rounded">
                    {i.feature4}
                  </button>
                </div>

                <div className="flex justify-between mt-8 items-center">
                  <div>
                    <button className="px-3 py-1 text-xs font-semibold bg-red-200 text-red-600  rounded">
                      {i.discount}
                    </button>
                    <p
                      className="text-lg text-nowrap whitespace-nowrap text-black font-bold tracking-normal"
                      style={{ wordSpacing: "3px" }}
                    >
                      <span className="text-gray-600 text-sm font-semibold">
                        From
                      </span>
                      {i.price}
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <div>
                      <p className="text-sm text-black font-semibold">
                        Exceptional
                      </p>
                      <span className="text-gray-600 text-xs font-semibold">
                        {i.reviews}
                      </span>
                    </div>

                    <button className="text-sm text-nowrap whitespace-nowrap text-white font-semibold bg-red-600 px-3 py-3 rounded">
                      4.8
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------Trending Destination For Stay----------- */}
      <div className="mt-16 bg-[#F1F5F8] pb-16">
        <div className="pt-16">
          <h1 className="text-2xl text-center lg:text-3xl text-black font-bold">
            Trending Destination For Stay
          </h1>
          <p className="text-center  text-gray-600 mt-3 lg:mt-4">
            Cicero famously orated against his political opponent Lucius Sergius
            Catilina.
          </p>
        </div>

        {/* ------Card------ */}
        <div className="mt-3 lg:mt-7 mx-auto gap-2 lg:gap-0 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {destination?.map((i, index) => (
            <div
              className="bg-white w-[310px] h-[65vh] rounded-lg shadow-md shadow-slate-200 my-3 mx-auto lg:w-[310px]  lg:mx-5 lg:px-0 overflow-hidden"
              key={index}
            >
              <div className="w-full h-[55vh] p-3 " key={index}>
                <img
                  className="w-full h-full object-cover  hover:scale-105 duration-300 transition all ease-in-out "
                  src={i.image}
                />
              </div>
              <div className="w-full text-center">
                <h3 className="text-xl text-black font-bold mb-1">{i.title}</h3>
                <p
                  className="text-sm text-gray-700 font-normal"
                  style={{ wordSpacing: "3px" }}
                >
                  {i.cars}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*-------Video Section--------*/}
      <section class="w-full h-[73vh] bg-cover bg-center relative bg-no-repeat bg-[url('https://shreethemes.net/geotrip-live/geotrip/assets/img/bg-3.jpg')] relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-55"></div>
        <div class="container mx-auto px-4">
          <div class="flex flex-col items-center justify-center">
            <div class="w-full flex justify-center  absolute inset-0  mt-52">
              <div class="video-play-wrap text-center">
                <div class="video-play-btn flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=A8EI6JaFbv4"
                    class="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-white text-primary text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPlay className="text-red-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*------Loving Reviews By Our Customers-------*/}
      <div className="bg-[#F1F5F8] pb-16 ">
        <div className="pt-16">
          <h1 className="text-xl text-center lg:text-4xl text-black font-bold">
            Loving Reviews By Our Customers
          </h1>
          <p className="text-center text-base  text-gray-600 mt-3 lg:mt-4">
            Cicero famously orated against his political opponent Lucius Sergius
            Catilina.
          </p>
        </div>

        {/*-------- Cards ----------- */}
        <div className="px-3 lg:px-16 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 lg:mt-10">
          {customers?.map((i, index) => (
            <div className="bg-white w-full h-[31vh] lg:h-[27vh] rounded-lg border border-gray-300 shadow-md">
              <div className="flex justify-between pr-3">
                <div className="flex justify-start gap-1">
                  <img
                    src={i.image}
                    alt="Image"
                    className="w-[110px] h-[15vh] p-3 object-cover rounded-2xl"
                  />
                  <div className="mt-5">
                    <h2 className="text-base font-bold ">{i.name}</h2>
                    <p className="text-gray-500 text-sm font-semibold mb-1">
                      {i.country}
                    </p>
                    <p className="text-xs ">⭐⭐⭐⭐</p>
                  </div>
                </div>
                <div className="flex  mt-4 w-[40px] h-[40px] rounded-full items-center bg-[#384BFF]">
                  <FaQuoteRight className="text-white text-sm mx-auto" />
                </div>
              </div>

              <p className="text-sm font-normal px-3 text-gray-500 leading-6">
                {i.about}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Attractive Experience And Services For you! */}
      <section class="mx-auto px-4  w-full lg:pb-10">
        <div class="flex flex-col lg:flex-row lg:justify-between pt-16 px-0 lg:px-14 ">
          <div class="md:w-1/2 lg:w-2/5">
            <div class="relative">
              <img
                src="https://shreethemes.net/geotrip-live/geotrip/assets/img/img-2.png"
                class="rounded-3 relative z-10 w-full"
                alt=""
              />
              <div class="absolute bottom-0 left-0 z-20 mb-4 ml-2">
                <div class="bg-white flex  items-center rounded-3 p-3 shadow-lg">
                  {/* <!-- Avatar group --> */}
                  <div class="mr-4">
                    <h6 class="font-normal">Client</h6>
                    {/* <!-- Avatar group --> */}
                    <ul class="flex -space-x-2">
                      <li class="avatar">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://shreethemes.net/geotrip-live/geotrip/assets/img/team-1.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://shreethemes.net/geotrip-live/geotrip/assets/img/team-2.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://shreethemes.net/geotrip-live/geotrip/assets/img/team-3.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://shreethemes.net/geotrip-live/geotrip/assets/img/team-4.jpg"
                          alt="avatar"
                        />
                      </li>
                      <li class="avatar">
                        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <span class="text-white text-sm">1K+</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Rating --> */}
                  <div>
                    <h6 class="font-normal mb-1">Rating</h6>
                    <h6 class="text-lg font-semibold">4.5 ⭐</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-[45%]  mb-8 md:mb-0  lg:mt-0">
            <div class="text-left">
              <p class="text-[#384BFF] font-medium uppercase text-sm mb-1">
                Memories
              </p>
              <h2 class="leading-9 lg:leading-10 text-xl text-wrap lg:text-3xl  font-bold mb-4">
                Our Attractive Experience And <br /> Services For you!
              </h2>
              <p class="leading-7 lg:leading-8 text-sm text-wrap lg:text-base text-gray-500 mb-6">
                Using dummy content or fake information in the Web design
                process can Fake data can ensure a nice looking layout but it
                doesn’t reflect what a living, breathing application must
                endure. Real data does. result in products with unrealistic
                assumptions and potentially serious design flaws. A seemingly
                elegant design can quickly begin to bloat with unexpected
                content or break under the weight of actual activity.
              </p>
              <div class="flex flex-wrap justify-center md:justify-start gap-3 ">
                <div class="flex flex-col items-center bg-gray-100 py-3 px-4 rounded ">
                  <h6 class="text-3xl font-bold">33</h6>
                  <p class="text-xs text-gray-500 text-wrap">
                    Years Experience
                  </p>
                </div>
                <div class="flex flex-col items-center bg-gray-100 py-3 px-4 rounded">
                  <h6 class="text-3xl font-bold">78</h6>
                  <p class="text-xs text-gray-500">Destination Collaboration</p>
                </div>
                <div class="flex flex-col items-center bg-gray-100 py-3 px-4 rounded">
                  <h6 class="text-3xl font-bold">25K</h6>
                  <p class="text-xs text-gray-500">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Cars;
