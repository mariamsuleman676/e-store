import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Shopping World
            </h2>

            <p className="text-slate-400 mt-4 leading-6">
              Your trusted online shopping destination.
              Find quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="flex items-center gap-3 text-slate-400">
              <FaEnvelope className="text-blue-500" />
              support@shoppingworld.com
            </p>

            <div className="flex gap-5 mt-6 text-xl">

              <FaFacebook className="text-slate-400 hover:text-blue-500 cursor-pointer transition" />

              <FaInstagram className="text-slate-400 hover:text-blue-500 cursor-pointer transition" />

              <FaTwitter className="text-slate-400 hover:text-blue-500 cursor-pointer transition" />

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center">

          <p className="text-slate-400 text-sm">
            © 2026 Shopping World. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;