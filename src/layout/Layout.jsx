import React from "react";
import Header from "../components/Home/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Home/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="w-full  md:max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
