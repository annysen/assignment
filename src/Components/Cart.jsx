import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  console.log(cart);

  return (
    <div className="w-1/2 mx-auto bg-base-100 border border-gray-900 p-4  rounded-lg h-full overflow-y-auto">
      <h1 className="text-xl mb-4 rounded-lg bg-gray-900 text-white text-center px-3 py-2">
        Selected Products
      </h1>

      <div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="card bg-white shadow-md flex flex-row"
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </figure>

              <div className="card-body flex-grow flex flex-col">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl">{item.title}</h2>
                    <p className="text-red-500 font-bold">${item.price}</p>

                    {/* rating  */}
                    {console.log(item.rating.rate)}
                    <div className="flex flex-col ">
                      <Rating
                        placeholderRating={item.rating.rate}
                        readonly
                        emptySymbol={<FaRegStar style={{ color: "gray" }} />}
                        placeholderSymbol={
                          <FaStar style={{ color: "#ffc107" }} />
                        }
                      ></Rating>
                      <p className="text-gray-500">{`(${item.rating.count} View)`}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)}>
                    <FaRegTrashCan className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-right">
            <h2 className="text-lg font-bold">
              Total Price: ${calculateTotalPrice()}
            </h2>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              <div className="text-left">
                <p className="text-sm">
                  I have read and agreed to the terms and
                  <br />
                  conditions, refound policy and privacy policy
                </p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-gray-900 text-white">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
