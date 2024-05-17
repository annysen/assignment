import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="px-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
