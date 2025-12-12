import React, { useEffect } from "react";
import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://localchefbazaar-backend-production.up.railway.app/api/v1",
  });

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    return () => {
      api.interceptors.request.eject(requestIntercept);
    };
  }, []);

  return api;
};

export default useApi;
