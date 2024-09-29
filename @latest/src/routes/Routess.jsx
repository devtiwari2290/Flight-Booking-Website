import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Stays from "../pages/Stays";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Rentals from "../pages/Rentals";
import Cars from "../pages/Cars";

const Routess = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
};

export default Routess;
