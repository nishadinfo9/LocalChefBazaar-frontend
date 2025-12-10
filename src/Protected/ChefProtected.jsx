import React from "react";
import useRole from "../hooks/useRole";
import Loader from "../utils/Loader";
import { Navigate } from "react-router-dom";

const ChefProtected = ({ children }) => {
  const { role, loading } = useRole();

  if (loading) return <Loader />;
  if (role === "chef") return children;

  return <Navigate to={"/forbidden"} />;
};

export default ChefProtected;
