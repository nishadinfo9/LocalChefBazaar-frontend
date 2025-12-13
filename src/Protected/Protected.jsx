import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utils/Loader";
import toast from "react-hot-toast";

const Protected = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <Loader />;

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"} />;
  }

  if (user?.status === "fraud") {
    return <Navigate to={"/banned"} />;
  }

  return children;
};

export default Protected;
