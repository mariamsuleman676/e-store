import React, { useState } from "react";
import { useEffect } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error("error fetching :", error);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-5">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
          Shopping World
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
          Our Products
        </h1>

        <p className="text-slate-500 mt-3">
          Discover our latest products and amazing deals
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 max-w-7xl mx-auto">

        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <div className="relative bg-slate-100 p-4">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-56 object-contain group-hover:scale-105 transition duration-300"
                />

 

              

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Title */}
                <h2 className="text-lg font-bold text-slate-900 line-clamp-1">
                  {product.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-5">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">

                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <span className="text-sm font-semibold text-slate-700">
                      {product.rating}
                    </span>
                  </div>

                  <span className="text-slate-400 text-sm">
                    ({product.reviews.length} reviews)
                  </span>

                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-5">

                  <div>
                    <p className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </p>

                    <p className="text-xs text-green-600 font-semibold mt-1">
                      {product.discountPercentage}% OFF
                    </p>
                  </div>

                  {/* Stock */}
                  <span className="text-xs bg-green-50 text-green-600 px-3 py-1.5 rounded-full font-semibold">
                    {product.stock} in stock
                  </span>

                </div>

                {/* Review */}
                <div className="mt-4 bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-400">
                    Latest Review
                  </p>

                  <p className="text-sm text-slate-600 mt-1 line-clamp-1">
                    "{product.reviews[0].comment}"
                  </p>
                </div>

                {/* Button */}
                <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  <FaShoppingCart />
                  Add to Cart
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default ProductsApi;