import React, { useState } from "react";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiMiniListBullet } from "react-icons/hi2";

const Products = () => {
  const loadedProducts = useLoaderData();
  const [isGridView, setIsGridView] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // Determine the number of products to show
  const displayedProducts = showAll
    ? loadedProducts
    : loadedProducts.slice(0, 6);

  return (
    <div>
      <h1 className="text-2xl font-bold mt-5">Our All Products</h1>

      {/* Toggle buttons */}
      <div className="flex justify-center my-4">
        <button onClick={() => setIsGridView(true)}>
          <HiOutlineViewGrid
            className={`${
              isGridView ? "text-primary" : "text-gray-900"
            } mx-2 font-bold h-6 w-6`}
          />
        </button>
        <button onClick={() => setIsGridView(false)}>
          <HiMiniListBullet
            className={`${
              !isGridView ? "text-primary" : "text-gray-900"
            } mx-2 font-bold h-6 w-6`}
          />
        </button>
      </div>

      {/* Products and Cart */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full lg:w-3/5 p-2">
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {displayedProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Show All / Hide Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              {showAll ? "Hide" : "Show All"}
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5 p-2">
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
