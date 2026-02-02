import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ title = "hidden" }) => {
  return (
    <Link
      to={"/"}
      className="text-xl font-semibold flex items-center justify-center"
    >
      <img className="w-16" src="/images/logo.png" alt="logo" />
      <p className={`${title} md:flex text-primary  font-bold text-3xl `}>
        Chef<span className="text-secondary">bazaar</span>
      </p>
    </Link>
  );
};

export default Logo;
