import React from "react";
import useRole from "../hooks/useRole";
import Loader from "../utils/Loader";
import Forbidden from "../pages/Forbidden/Forbidden";
import toast from "react-hot-toast";

const AdminProtected = ({ children }) => {
  const { role, loading } = useRole();
  if (loading) return <Loader />;

  if (role !== "admin") {
    toast.error("⚠️ Forbidden Access");
    return <Forbidden />;
  }

  return children;
};

export default AdminProtected;
