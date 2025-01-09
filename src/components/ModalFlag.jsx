import React, { useRef, useState } from "react";
import { SquareX } from "lucide-react";

const ModalFlag = ({ onClose }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false); // Tracks if the modal is closing

  const handleClose = () => {
    setIsClosing(true); // Trigger the fade-out animation
    setTimeout(() => {
      onClose(); // Call the parent onClose after the animation ends
    }, 300); // Match this timeout to the animation duration (0.4s)
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-4"
    >
      <div
        className={`bg-white w-full max-w-3xl max-h-screen h-[95%] overflow-auto p-5 rounded-xl flex flex-col gap-5 ${
          isClosing ? "modal-fade-out" : "modal-fade-in"
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-black">Select Your Country</h1>
          <button onClick={handleClose} aria-label="Close modal">
            <SquareX size={25} />
          </button>
        </div>
        <hr className="bg-gray-400 w-full" />
        {/* Suggested Countries */}
        <div className="flex flex-col gap-4 px-3">
          <h2 className="text-base text-black font-bold">
            Suggested Countries For You
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {/* Country Template */}
            {[
              { name: "United States Dollar", img: "united-states.png" },
              { name: "Pound Sterling", img: "united-kingdom.png" },
              { name: "Indian Rupees", img: "flag.png" },
              { name: "Euro Currency", img: "belgium.png" },
              { name: "Australian Dollar", img: "brazil.png" },
              { name: "Thai Baht Currency", img: "china.png" },
            ].map((country, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-3 px-2 py-3 hover:bg-gray-100 transition rounded-lg"
              >
                <img
                  src={`https://shreethemes.net/geotrip-live/geotrip/assets/img/flag/${country.img}`}
                  alt={country.name}
                  className="h-8 w-8"
                />
                <p className="text-sm text-gray-600 font-semibold">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* All Countries */}
        <div className="flex flex-col gap-3 px-3 mt-5">
          <h2 className="text-base text-black font-bold">All Countries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {/* Repeat Country Template */}
            {[
              { name: "United States Dollar", img: "united-states.png" },
              { name: "Property currency", img: "vietnam.png" },
              { name: "Argentine Peso", img: "turkey.png" },
              { name: "Azerbaijani Manat", img: "spain.png" },
              { name: "Australian Dollar", img: "japan.png" },
              { name: "Bahraini Dinar", img: "flag.png" },
              { name: "Brazilian Real", img: "portugal.png" },
              { name: "Bulgarian Lev", img: "italy.png" },
              { name: "Canadian Dollar", img: "germany.png" },
              { name: "Chilean Peso", img: "france.png" },
              { name: "Colombian Peso", img: "european.png" },
              { name: "Danish Krone", img: "china.png" },
              { name: "Egyptian Pound", img: "brazil.png" },
              { name: "Hungarian Forint", img: "belgium.png" },
              { name: "Japanese Yen", img: "turkey.png" },
              { name: "Jordanian Dinar", img: "spain.png" },
              { name: "Kuwaiti Dinar", img: "germany.png" },
              { name: "Malaysian Ringgit", img: "france.png" },
              { name: "Singapore Dollar", img: "brazil.png" },
            ].map((country, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2 px-2 py-3 hover:bg-gray-100 transition rounded-lg"
              >
                <img
                  src={`https://shreethemes.net/geotrip-live/geotrip/assets/img/flag/${country.img}`}
                  alt={country.name}
                  className="h-8 w-8"
                />
                <p className="text-sm text-gray-600 font-semibold">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFlag;
