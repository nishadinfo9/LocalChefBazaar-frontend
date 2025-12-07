import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { error, loading, user, setUser } = useContext(AuthContext);
  return { error, loading, user, setUser };
};

export default useAuth;
