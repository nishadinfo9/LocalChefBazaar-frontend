import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import useFetch from "../hooks/useFetch";
import Loader from "../utils/Loader";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { data, isLoading, isError, error } = useFetch({
    url: "/user/current-user",
    queryKey: ["current-user"],
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user);
    }
  }, [data?.user]);

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  const authInfo = { error, isError, isLoading, user, setUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
