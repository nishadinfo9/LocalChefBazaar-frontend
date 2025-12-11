import React, { useEffect } from "react";
import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://localchefbazaar-backend-production.up.railway.app/api/v1",
    withCredentials: true,
  });

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use((config) => {
      return config;
    });

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (err) => {
        const originalRequest = err.config;

        if (err.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            await api.post("/user/refresh-token");
            return api(originalRequest);
          } catch (refreshError) {
            window.location.href = "/login";
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(err);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return api;
};

export default useApi;
