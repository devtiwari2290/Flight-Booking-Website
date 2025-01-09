import React, { useRef, useState } from "react";
import { SquareX } from "lucide-react";
import { TbBackground } from "react-icons/tb";

const ModalCurrency = ({ onClose }) => {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false); // Tracks if the modal is closing

  const handleClose = () => {
    setIsClosing(true); // Trigger the fade-out animation
    setTimeout(() => {
      onClose(); // Call the parent onClose after the animation ends
    }, 400); // Match this timeout to the animation duration (0.4s)
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
          <h1 className="text-lg font-bold text-black">Select Your Currency</h1>
          <button onClick={handleClose} aria-label="Close modal">
            <SquareX size={25} />
          </button>
        </div>
        <hr className="bg-gray-400 w-full" />
        {/* Suggested Countries */}
        <div className="flex flex-col gap-4 px-3">
          <h2 className="text-base text-black font-bold">
            Suggested Currency For you
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {/* Currency Template */}
            {[
              { name: "United States Dollar", symbol: "USD" },
              { name: "Pound Sterling", symbol: "GBP" },
              { name: "Indian Rupees", symbol: "INR" },
              { name: "Euro Currency", symbol: "EUR" },
              { name: "Australian Dollar", symbol: "AUD" },
              { name: "Thai Baht Currency", symbol: "THB" },
            ].map((country, index) => (
              <div
                key={index}
                className="flex flex-col  px-2 py-3 hover:bg-gray-100 transition rounded-lg"
              >
                <h2 className="text-sm font-semibold">{country.name}</h2>
                <p className="text-sm text-gray-600 font-normal">
                  {country.symbol}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* All Currencies */}
        <div className="flex flex-col gap-3 px-3 mt-5">
          <h2 className="text-base text-black font-bold">All Currencies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {/* Repeat Currency Template */}
            {[
              { name: "United States Dollar", symbol: "USD" },
              { name: "Property currency", symbol: "GBP" },
              { name: "Argentine Peso", symbol: "EUR" },
              { name: "Azerbaijani Manat", symbol: "INR" },
              { name: "Australian Dollar", symbol: "AUD" },
              { name: "Bahraini Dinar", symbol: "THB" },
              { name: "Brazilian Real", symbol: "USD" },
              { name: "Bulgarian Lev", symbol: "GBP" },
              { name: "Canadian Dollar", symbol: "EUR" },
              { name: "Chilean Peso", symbol: "INR" },
              { name: "Colombian Peso", symbol: "AUD" },
              { name: "Danish Krone", symbol: "THB" },
              { name: "Egyptian Pound", symbol: "USD" },
              { name: "Hungarian Forint", symbol: "GBP" },
              { name: "Japanese Yen", symbol: "EUR" },
              { name: "Jordanian Dinar", symbol: "INR" },
              { name: "Kuwaiti Dinar", symbol: "AUD" },
              { name: "Malaysian Ringgit", symbol: "THB" },
              { name: "Singapore Dollar", symbol: "THB" },
            ].map((country, index) => (
              <div
                key={index}
                className="flex flex-col  px-2 py-3 hover:bg-gray-100 transition rounded-lg"
              >
                <h2 className="text-sm font-semibold">{country.name}</h2>
                <p className="text-sm text-gray-600 font-normal">
                  {country.symbol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCurrency;
