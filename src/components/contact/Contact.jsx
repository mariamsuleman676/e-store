
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-700 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">

          <p className="uppercase tracking-widest text-blue-100 font-semibold mb-3">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Contact Us
          </h1>

          <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-7">
            Have a question about our products or your order?
            We are always here to help you.
          </p>

        </div>
      </section>


      {/* ================= CONTACT CARDS ================= */}
      <section className="px-6 -mt-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              <FaEnvelope />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Email Us
            </h3>

            <p className="text-slate-500 mt-2">
              support@shoppingworld.com
            </p>

          </div>


          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              <FaPhone />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Call Us
            </h3>

            <p className="text-slate-500 mt-2">
              +92 300 1234567
            </p>

          </div>


          {/* Location */}
          <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

            <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Our Location
            </h3>

            <p className="text-slate-500 mt-2">
              Pakistan
            </p>

          </div>

        </div>
      </section>


      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">


          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
              Let's Connect
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              We Would Love To
              <span className="text-blue-600"> Hear From You!</span>
            </h2>

            <p className="text-slate-500 leading-7 mb-8">
              Whether you have a question, feedback, or need help with
              your order, our team is ready to assist you. Simply send
              us a message and we will get back to you as soon as possible.
            </p>


            {/* Information Box */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">

              <h3 className="text-2xl font-bold mb-5">
                Shopping World
              </h3>

              <p className="text-slate-400 leading-6 mb-6">
                Your trusted online shopping destination. Find quality
                products at great prices.
              </p>


              <div className="flex items-center gap-4 mb-5">

                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <p className="font-medium">
                    support@shoppingworld.com
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Phone
                  </p>

                  <p className="font-medium">
                    +92 300 1234567
                  </p>
                </div>

              </div>


              {/* Social Icons */}
              <div className="flex gap-4 mt-8">

                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <FaFacebookF />
                </button>

                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <FaInstagram />
                </button>

                <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <FaTwitter />
                </button>

              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Send Us a Message
            </h2>

            <p className="text-slate-500 mb-7">
              Fill out the form below and we'll get back to you.
            </p>


            <form className="space-y-5">

              {/* Name */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* Email */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* Subject */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* Message */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition resize-none"
                ></textarea>

              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-slate-100 py-16 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need Help With Your Order?
          </h2>

          <p className="text-slate-500 text-lg">
            Our support team is always ready to help you with your
            shopping experience.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Contact;
