import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useFetch from "../hooks/useFetch";
import Loader from "../utils/Loader";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data, isError, error } = useFetch({
    url: "/user/current-user",
    queryKey: ["current-user"],
  });

  useEffect(() => {
    setLoading(true);
    if (data?.user) {
      setUser(data?.user);
      setLoading(false);
    }
  }, [data?.user]);

  if (loading) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  const authInfo = { error, isError, loading, user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
