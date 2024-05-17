import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 p-4 mx-auto  ">
      <div className="flex justify-between items-center">
        {/* icon and title  */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl text-white ml-2 font-bold ">
            E-Commerce
          </span>
        </Link>

        {/* nav item  */}
        <ul className="hidden md:flex space-x-8 font-bold text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-violet-400" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-violet-400" : "")}
            >
              Cart
            </NavLink>
          </li>
        </ul>

        <li className="hidden md:flex">
          <NavLink to="/login">
            <button className="btn btn-primary font-bold">Login</button>
          </NavLink>
        </li>

        {/* responsive nav section for mobile */}
        <div className="md:hidden">
          {/* dropdown btn  */}
          <button onClick={() => setIsOpen(true)}>
            <Bars3BottomRightIcon className="w-5 text-gray-500" />
          </button>

          {isOpen && (
            <div className=" top-0 left-0 w-full z-10 absolute  ">
              <div className="bg-gray-300  p-4">
                {/* logo and cross btn  */}
                <div className="flex justify-between items-center">
                  {/* icon and title  */}
                  <div>
                    <Link to="/" className="flex items-center">
                      <span className="text-2xl ml-2 font-bold ">
                        E-Commerce
                      </span>
                    </Link>
                  </div>
                  {/* drodown Cross btn  */}
                  <div>
                    <button onClick={() => setIsOpen(false)}>
                      <XMarkIcon className="w-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* nav item  */}
                <div className="mt-4">
                  <ul className="space-y-2 font-bold">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-violet-600" : ""
                        }
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                          isActive ? "text-violet-600" : ""
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">
                        <button className="btn btn-primary">Login</button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
    // <nav className="bg-base-100 shadow-lg p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     {/* Left section */}
    //     <div className="flex items-center">
    //       <Link to="/" className="text-lg font-bold">
    //         E-Commerce
    //       </Link>
    //     </div>

    //     {/* Center section */}
    //     <div className="hidden md:flex justify-center flex-grow">
    //       <Link to="/" className="mx-4">
    //         Products
    //       </Link>
    //       <Link to="/cart" className="mx-4">
    //         Cart
    //       </Link>
    //     </div>

    //     {/* Right section */}
    //     <div className="flex items-center">
    //       <Link to="/login" className="hidden md:block btn btn-primary">
    //         Login
    //       </Link>
    //       <button className="md:hidden btn btn-primary">☰</button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
