import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 md:px-10 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        Shopping World
      </Link>

      {/* Search */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px]">
        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search products..."
          className="outline-none px-3 w-full"
        />
      </div>

      {/* Links & Icons */}
      <div className="flex items-center gap-5">

        <Link
          to="/"
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-blue-600 transition"
        >
          Products
        </Link>

        <FaHeart className="cursor-pointer hover:text-red-500 transition" />

        <FaShoppingCart className="cursor-pointer hover:text-blue-600 transition" />

        <FaUser className="cursor-pointer hover:text-blue-600 transition" />

      </div>

    </nav>
  );
};

export default Navbar;