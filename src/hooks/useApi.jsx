import React from "react";
import axios from "axios";

const useApi = () => {
  const instance = axios.create({
    //https://localchefbazaar-backend-production.up.railway.app/api/v1
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
  });
  return instance;
};

export default useApi;
