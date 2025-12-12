import React, { useEffect } from "react";
import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://localchefbazaar-backend-production.up.railway.app/api/v1",
    withCredentials: true,
  });

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    const responseIntercept = api.interceptors.response.use(
      (res) => res,
      async (err) => {
        const originalRequest = err.config;

        if (err.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          const res = await api.post("/user/refresh-token");
          const newToken = res.data.accessToken;

          localStorage.setItem("accessToken", newToken);
          return api(originalRequest);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [api]);

  return api;
};

export default useApi;
