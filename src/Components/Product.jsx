import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Product = ({ product }) => {
  const { title, price, description, image, rating } = product;

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="card bg-gray-100 border rounded border-gray-500 ">
      <figure>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title">
          {title.length > 100 ? `${title.substring(0, 100)}...` : title}
        </h2>
        <div className="flex justify-between items-center mt-2  ">
          {/* rating section  */}
          <div className="flex flex-col ">
            <Rating
              placeholderRating={rating.rate}
              readonly
              emptySymbol={<FaRegStar style={{ color: "gray" }} />}
              placeholderSymbol={<FaStar style={{ color: "#ffc107" }} />}
            ></Rating>
            <p className="text-gray-500">{`(${rating.count} View)`}</p>
          </div>
        </div>

        <div className="flex mt-auto justify-between items-center">
          <p className="text-primary">${price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
