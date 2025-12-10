import React from "react";
import useRole from "../hooks/useRole";
import Loader from "../utils/Loader";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const { role, loading } = useRole();

  if (loading) <Loader />;
  if (role === "admin") return children;
  return <Navigate to={"forbidden"} />;
};

export default AdminProtected;
