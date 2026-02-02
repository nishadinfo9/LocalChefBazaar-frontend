import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ title = "hidden" }) => {
  return (
    <Link to={"/"} className="text-xl font-extrabold flex items-center justify-center gap-1">
      <img className="w-16" src="/images/logo.png" alt="logo" />
      <p className={`${title} md:flex text-primary  font-extrabold text-3xl `}>
        Chef<span className="text-secondary">bazaar</span>
      </p>
    </Link>
  );
};

export default Logo;
