import React from "react";

import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl  w-80 overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">

      {/* Image */}
      <div className="relative bg-gray-100 h-60 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain p-5"
        />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          -{product.discountPercentage}%
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category + Rating */}
        <div className="flex justify-between">
          <span className="text-xs font-semibold text-amber-600 uppercase">
            {product.category}
          </span>

          <span className="text-sm">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mt-2">
          {product.title}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500 mt-1">
          Brand: {product.brand}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <h3 className="text-2xl font-bold text-gray-900 mt-4">
          ${product.price}
        </h3>

        {/* Stock */}
        <p className="text-sm text-gray-500 mt-2">
          Stock: {product.stock}
        </p>

        {/* Availability */}
        <p className="text-sm text-green-600 font-semibold mt-1">
          {product.availabilityStatus}
        </p>

        {/* Shipping */}
        <p className="text-xs text-gray-500 mt-2">
          🚚 {product.shippingInformation}
        </p>

        {/* Warranty */}
        <p className="text-xs text-gray-500 mt-1">
          🛡️ {product.warrantyInformation}
        </p>

        {/* Button */}
        <Link to={`/products/${product.id}`}  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">View Products</Link>

      </div>
    </div>
  );
};

export default Card;