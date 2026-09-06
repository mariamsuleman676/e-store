
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const getProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          to="/products"
          className="inline-block text-blue-600 font-medium hover:text-blue-800"
        >
          ← Back to Products
        </Link>
      </div>

      {/* Product Details Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">

          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-md h-96 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg">
                ⭐ {product.rating}
              </span>

              <span className="text-gray-500">
                {product.stock} items available
              </span>
            </div>

            {/* Price */}
            <div className="mb-7">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>

              <span className="ml-3 text-red-500 font-medium">
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold
                hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>

              <button
                className="px-6 py-3 border-2 border-gray-300 rounded-xl
                hover:bg-gray-100 transition duration-300"
              >
                ♡
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
