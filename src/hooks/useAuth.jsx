import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { error, isError, loading, user, setUser } = useContext(AuthContext);
  return { error, isError, loading, user, setUser };
};

export default useAuth;
