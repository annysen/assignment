import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 lg:grid-cols-4 gap-10 p-10 bg-gray-900 text-white mt-5 mx-auto">
      <section>
        <Link to="/" className="text-2xl font-bold">
          E-Commerce
        </Link>
        <p>Got Question? Call us 24/7</p>
        <h3 className="mt-2 font-bold text-xl">+880 1882 779729</h3>

        <p>
          Register now and get your 10% <br /> offer from first order
        </p>

        <h3 className="text-xl mt-3">Join Us</h3>
        <div className="flex space-x-4">
          <Link to="/">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link to="/">
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link to="/">
            <FaTwitter className="h-6 w-6" />
          </Link>
          <Link to="/">
            <FaLinkedinIn className="h-6 w-6" />
          </Link>
        </div>
      </section>
      <section className="flex flex-col">
        <h6 className="footer-title font-bold mb-4">Company</h6>
        <Link className="link link-hover">About Us</Link>
        <Link className="link link-hover">Career</Link>
        <Link className="link link-hover">Contact Us</Link>
        <Link className="link link-hover">Start Selling</Link>
        <Link className="link link-hover">Order History</Link>
      </section>
      <section className="flex flex-col">
        <h6 className="footer-title font-bold mb-4">My Account</h6>
        <a className="link link-hover">Take My Order</a>
        <a className="link link-hover">View Cart</a>
        <a className="link link-hover">Sign In</a>
        <a className="link link-hover">Help</a>
        <a className="link link-hover">Wish List</a>
      </section>
      <section className="flex flex-col">
        <h6 className="footer-title font-bold mb-4">Customer Services</h6>
        <a className="link link-hover">Payment Method</a>
        <a className="link link-hover">Money Return Policy</a>
        <a className="link link-hover">Product Return</a>
        <a className="link link-hover">Contact Seller</a>
        <a className="link link-hover">Term and Condition</a>
      </section>
    </footer>
  );
};

export default Footer;
