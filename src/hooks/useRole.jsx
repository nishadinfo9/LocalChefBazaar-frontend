import React from "react";
import useAuth from "./useAuth";

const useRole = () => {
  const { user, loading } = useAuth();
  return { role: user.role, status: user.status, loading };
};

export default useRole;
