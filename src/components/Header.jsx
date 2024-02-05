// Header.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/dang.png";

function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const loadcontent = props.load;

  return (
    <nav className="bg-white-800 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo with Website Name */}
          <div className="flex-shrink-0 items-center">
            <Link to="/" onClick={loadcontent} className="flex items-center">
              <img className="h-8 w-auto" src={logo} alt="RDC" />
              <span className="ml-2 text-lg font-bold text-[#0e21fe]">
                SkinLine AI
              </span>
            </Link>
          </div>
          {/* Navigation Links - Desktop */}
          <div className="hidden sm:flex space-x-4 ml-auto">
            <Link
              to="/"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              onClick={loadcontent}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              onClick={loadcontent}
            >
              Services
            </Link>
            <Link
              to="/vision"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              onClick={loadcontent}
            >
              Vision
            </Link>
            <Link
              to="/contact"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              onClick={loadcontent}
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              {/* ... (Same mobile menu button code) */}
            </button>
          </div>
          {/* Book Now and Sign In Buttons */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-2">
              {/* Book Now Button */}
              <div className="bg-[#0e21fe] book justify-center shadow-lg shadow-blue-700/60 px-5 rounded-full text-white py-2">
                <Link onClick={loadcontent} to="/book">
                  Book Now
                </Link>
              </div>
              {/* Sign In Button with adjusted styling */}
              <div className="bg-[#0e21fe] justify-center shadow-lg shadow-blue-700/60 px-5 rounded-full text-white py-2">
                {/* Add your sign-in/sign-up logic or route here */}
                <Link to="/signin" className="text-xl">
                  SignIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={loadcontent}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={loadcontent}
            >
              Services
            </Link>
            <Link
              to="/vision"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={loadcontent}
            >
              Vision
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={loadcontent}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
