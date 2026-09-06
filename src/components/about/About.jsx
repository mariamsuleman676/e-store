
import React from "react";
import {
  FaShoppingBag,
  FaTruck,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">

          <p className="text-blue-100 font-semibold tracking-widest uppercase mb-3">
            Welcome To
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shopping World
          </h1>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-8">
            Discover quality products, amazing prices, and a shopping
            experience made just for you.
          </p>

        </div>
      </section>


      {/* ================= ABOUT US ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <img
              src="/img.png"
              alt="Shopping World"
              className="w-full h-[430px] object-cover rounded-3xl shadow-xl"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-blue-600 text-white rounded-2xl px-6 py-5 shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-blue-100">
                Customer Focused
              </p>
            </div>

          </div>


          {/* Content */}
          <div>

            <p className="text-blue-600 font-bold tracking-widest uppercase mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Making Your
              <span className="text-blue-600"> Shopping Experience </span>
              Better
            </h2>

            <p className="text-slate-500 leading-7 mb-5">
              Welcome to Shopping World, your trusted online shopping
              destination. We bring a wide range of products together
              in one convenient place.
            </p>

            <p className="text-slate-500 leading-7 mb-7">
              Our goal is simple — provide quality products at great
              prices while making online shopping easy, enjoyable,
              and reliable.
            </p>


            {/* Features */}
            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-slate-700 font-medium">
                  Quality products at affordable prices
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-slate-700 font-medium">
                  Simple and secure shopping experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-slate-700 font-medium">
                  Customer satisfaction is our priority
                </span>
              </div>

            </div>


            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition shadow-md"
            >
              Explore Products
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <p className="text-blue-600 font-bold tracking-widest uppercase mb-2">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Everything You Need
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              We focus on providing a better shopping experience from
              browsing products to receiving your order.
            </p>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-9 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaShoppingBag />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3">
                Quality Products
              </h3>

              <p className="text-slate-500 leading-7">
                We carefully select products so you can shop with
                confidence and find great value.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white p-9 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaTruck />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3">
                Fast Delivery
              </h3>

              <p className="text-slate-500 leading-7">
                We aim to make your shopping experience convenient
                with reliable delivery.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-white p-9 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaHeart />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3">
                Customer First
              </h3>

              <p className="text-slate-500 leading-7">
                Your satisfaction matters to us. We always try to
                provide the best possible experience.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= OUR MISSION ================= */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6">
            <FaHeart />
          </div>

          <p className="text-blue-600 font-bold tracking-widest uppercase mb-3">
            Our Mission
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Making Online Shopping Simple
          </h2>

          <p className="text-slate-500 text-lg leading-8 max-w-3xl mx-auto">
            Our mission is to create a trusted and user-friendly online
            shopping platform where customers can easily discover
            products, make confident choices, and enjoy a smooth
            shopping experience.
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl px-8 py-14 md:px-16 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Explore our collection and discover products you'll love.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
          >
            Shop Now
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;
