import React from "react";
import Header from "../components/Home/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Home/Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#FFF1E1]">
      <header className="md:mx-auto md:w-6xl">
        <Header />
      </header>

      <main className="md:mx-auto md:w-6xl">
        <Outlet />
      </main>

      <div className="md:mx-auto md:w-6xl">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
