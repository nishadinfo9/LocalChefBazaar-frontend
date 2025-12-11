import React from "react";
import useRole from "../hooks/useRole";
import Loader from "../utils/Loader";
import { Navigate } from "react-router-dom";
import Forbidden from "../pages/Forbidden/Forbidden";
import toast from "react-hot-toast";

const ChefProtected = ({ children }) => {
  const { role, status, loading } = useRole();

  if (loading) return <Loader />;

  if (role !== "chef") {
    toast.error("⚠️ Forbidden Access");
    return <Forbidden />;
  }
  if (status === "fraud") {
    return <Navigate to={"/banned"} />;
  }
  return children;
};

export default ChefProtected;
