import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useApi from "../hooks/useApi";

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const subscribe = async () => {
      try {
        setLoading(true);
        const response = await api.get("/user/current-user");
        setUser(response.data?.user);
      } catch (error) {
        setError(error?.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    return () => {
      subscribe();
    };
  }, []);

  const authInfo = { error, loading, user, setUser };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
