import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="text-xl font-bold flex items-center justify-center gap-2"
    >
      <img className="w-10" src="/images/logo.png" alt="" />
      <p>LocalChefBazaar</p>
    </Link>
  );
};

export default Logo;
