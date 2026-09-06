import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white">

            <p className="uppercase tracking-widest text-blue-100 font-semibold mb-4">
              Welcome To Shopping World
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Shop Smart.
              <br />
              Shop <span className="text-slate-900">Better.</span>
            </h1>

            <p className="text-blue-100 text-lg leading-8 max-w-xl mb-8">
              Discover amazing products at great prices and enjoy a
              simple, convenient and reliable shopping experience.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-semibold transition shadow-lg"
              >
                Shop Now
                <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-7 py-3.5 rounded-xl font-semibold transition"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <img
              src="/img.png"
              alt="Shopping World"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 md:left-6 bg-white rounded-2xl shadow-xl px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                  <FaShoppingBag />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Quality Shopping
                  </p>

                  <p className="text-sm text-slate-500">
                    Everything in one place
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-blue-600 font-bold uppercase tracking-widest mb-2">
              Why Shop With Us
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Shopping Made Easy
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              We make online shopping simple, convenient and enjoyable.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <FaShoppingBag />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-5 mb-3">
                Quality Products
              </h3>

              <p className="text-slate-500 leading-6">
                Find great products selected with quality and value in mind.
              </p>

            </div>


            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <FaTruck />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-5 mb-3">
                Fast Delivery
              </h3>

              <p className="text-slate-500 leading-6">
                Get your favorite products delivered conveniently to you.
              </p>

            </div>


            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <FaShieldAlt />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-5 mb-3">
                Secure Shopping
              </h3>

              <p className="text-slate-500 leading-6">
                Enjoy a smooth and secure online shopping experience.
              </p>

            </div>


            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <FaHeadset />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-5 mb-3">
                Customer Support
              </h3>

              <p className="text-slate-500 leading-6">
                We are always ready to help with your questions and orders.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SHOPPING CTA ================= */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl px-8 py-16 md:px-16 text-center">

          <p className="text-blue-500 font-semibold uppercase tracking-widest mb-3">
            Start Shopping Today
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Find Something You'll Love
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-7 mb-8">
            Explore our products and discover amazing items at great prices.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition shadow-lg"
          >
            Explore Products
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;