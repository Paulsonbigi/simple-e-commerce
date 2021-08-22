import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleBtn = () => setNavOpen(!navOpen);
  
  return (
    <nav className="bg-primary fixed top-0 right-0 left-0 shadow-lg z-30" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="#" className="flex items-center py-4 px-2">
              {/* <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" /> */}
              <span className="font-semibold text-gray-500 text-lg">
                E-commerce
              </span>
            </Link>
          </div>
          {/* <!-- Primary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to=""
              className="py-4 px-2 text-green-500 border-b-4 border-accent font-semibold "
            >
              Home
            </Link>
            <Link
              to=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Services
            </Link>
          </div>

          {/* <!-- Secondary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link
              to=""
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              to=""
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleBtn}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className={`${!navOpen ? 'hidden' : 'block' } mobile-menu`}>
        <ul className="">
          <li className="active">
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white hover:bg-accent font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white hover:bg-accent font-semibold transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white hover:bg-accent font-semibold transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white hover:bg-accent font-semibold transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
