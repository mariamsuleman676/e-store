
import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 md:px-10 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          Shopping World
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] focus-within:border-blue-600 transition">
          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            className="outline-none px-3 w-full text-gray-700"
          />
        </div>

        {/* Navigation Links & Icons */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Home */}
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            About
          </Link>

          {/* Products */}
          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Products
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Contact
          </Link>

          {/* Heart */}
          <button className="text-gray-600 hover:text-red-500 transition text-lg">
            <FaHeart />
          </button>

          {/* Cart */}
          <button className="text-gray-600 hover:text-blue-600 transition text-lg">
            <FaShoppingCart />
          </button>

          {/* User */}
          <button className="text-gray-600 hover:text-blue-600 transition text-lg">
            <FaUser />
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
