import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SquareX } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ModalRegister = ({ onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false); // Tracks if the modal is closing

  // Form Data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    navigate("/");
    onClose();
    console.log(formData);

    // Reset form data
    setFormData({
      username: "",
      password: "",
    });
  };
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
        className={`bg-white w-full max-w-lg max-h-screen md:h-auto p-5 rounded-xl flex flex-col gap-5 ${
          isClosing ? "modal-fade-out" : "modal-fade-in"
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-black">Sign In / Register</h1>
          <button onClick={handleClose} aria-label="Close modal">
            <SquareX size={25} />
          </button>
        </div>
        <hr className="bg-gray-400 w-full" />

        {/* Form Section */}
        <div className="mt-0 md:mt-3 p-3">
          <form className="flex flex-col gap-5" onSubmit={handleSumbit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-blue-300"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-blue-300"
              required
            />

            <button
              type="submit"
              className="bg-red-600 text-white w-full py-4 rounded-lg font-bold text-center"
            >
              Log In
            </button>

            <div className="flex justify-between items-center text-sm">
              <div>
                <input
                  type="checkbox"
                  id="savepassword"
                  name="savepassword"
                  className="mr-2 accent-blue-600"
                />
                <label
                  htmlFor="savepassword"
                  className="text-gray-600 font-semibold"
                >
                  Save Password
                </label>
              </div>

              <button
                type="button"
                className="text-red-600 font-semibold underline"
              >
                Forget Password?
              </button>
            </div>
          </form>

          {/* Alternative Sign-In Methods */}
          <div className="mt-10 lg:mt-5">
            <h1 className="text-sm font-semibold text-gray-500 text-center">
              Sign In with More Methods
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-3 md:mt-6">
              <button className="border border-dashed border-gray-300 p-4 rounded-lg flex justify-center">
                <FaFacebook size={30} className="text-blue-600" />
              </button>
              <button className="border border-dashed border-gray-300 p-4 rounded-lg flex justify-center">
                <FaWhatsapp size={30} className="text-green-600" />
              </button>
              <button className="border border-dashed border-gray-300 p-4 rounded-lg flex justify-center">
                <FaLinkedin size={30} className="text-blue-500" />
              </button>
              <button className="border border-dashed border-gray-300 p-4 rounded-lg flex justify-center">
                <CiMail size={30} className="text-red-600" />
              </button>
              <button className="border border-dashed border-gray-300 p-4 rounded-lg flex justify-center">
                <FaTwitter size={30} className="text-sky-500" />
              </button>
            </div>
            <hr className="bg-gray-400 mt-5 md:mt-10 w-full" />
          </div>

          {/* Sign-Up Section */}
          <p className="text-sm font-semibold text-gray-500 text-center mt-3">
            Don't have an account yet?{" "}
            <button type="button" className="text-red-600 underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
