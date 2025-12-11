import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utils/Loader";
import toast from "react-hot-toast";

const Protected = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <Loader />;

  if (user?.status === "fraud") {
    toast.error("⚠️ Your account is banned or inactive.");
    return <Navigate to={"/banned"} />;
  }

  if (user) return children;

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default Protected;
