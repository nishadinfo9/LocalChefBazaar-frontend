import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ title = "hidden" }) => {
  return (
    <Link
      to={"/"}
      className="text-xl font-bold flex items-center justify-center gap-2"
    >
      <img className="w-10" src="/images/logo.png" alt="" />
      <p className={`${title} md:flex`}>LocalChefBazaar</p>
    </Link>
  );
};

export default Logo;
