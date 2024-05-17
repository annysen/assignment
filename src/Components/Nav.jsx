import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-base-100 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center">
          <Link to="/" className="text-lg font-bold">
            E-Commerce
          </Link>
        </div>

        {/* Center section */}
        <div className="hidden md:flex justify-center flex-grow">
          <Link to="/" className="mx-4">
            Products
          </Link>
          <Link to="/cart" className="mx-4">
            Cart
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center">
          <Link to="/login" className="hidden md:block btn btn-primary">
            Login
          </Link>
          <button className="md:hidden btn btn-primary">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
