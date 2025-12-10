import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utils/Loader";

const Protected = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) return <Loader />;
  if (user) return children;

  return <Navigate state={location.pathname} to={"/login"} />;
};

export default Protected;
