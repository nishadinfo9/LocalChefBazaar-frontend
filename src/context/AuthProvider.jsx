import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useApi from "../hooks/useApi";

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    let isMounted = true;
    const subscribe = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("accessToken");
        if (!token) {
          if (isMounted) setLoading(false);
          return;
        }

        const response = await api.get("/user/current-user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (isMounted) setUser(response.data?.user);
      } catch (error) {
        if (!isMounted) return;
        if (error.response?.status === 401) {
          setError(null);
          setUser(null);
        } else {
          setError("Something went wrong");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    subscribe();

    return () => {
      isMounted = false;
    };
  }, []);

  const authInfo = { error, loading, user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
